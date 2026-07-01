"use client";

import { useEffect, useRef, useState } from "react";
import { getSiteName } from "@/lib/portfolio/utils";
import type { PortfolioCategory, PortfolioData, PortfolioSite } from "@/lib/portfolio/types";

const ADMIN_KEY_STORAGE = "hirai-admin-key";

function getAdminHeaders() {
  const key = sessionStorage.getItem(ADMIN_KEY_STORAGE);
  return {
    "Content-Type": "application/json",
    "x-admin-key": key ?? "",
  };
}

type SiteFormState = {
  url: string;
  image_url: string;
  category_id: string;
  sort_order: number;
};

type CategoryFormState = {
  id: string;
  label: string;
  stacks: string;
  group_type: "skill" | "other";
  sort_order: number;
};

export default function HiraiAdmin() {
  const [adminKey, setAdminKey] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [portfolio, setPortfolio] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [categoryForm, setCategoryForm] = useState<CategoryFormState>({
    id: "",
    label: "",
    stacks: "",
    group_type: "skill",
    sort_order: 0,
  });
  const [siteForm, setSiteForm] = useState<SiteFormState>({
    url: "",
    image_url: "",
    category_id: "",
    sort_order: 0,
  });
  const [editingCategoryId, setEditingCategoryId] = useState<string | null>(null);
  const [editingSiteId, setEditingSiteId] = useState<string | null>(null);
  const [needsSetup, setNeedsSetup] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSetupSchema = async () => {
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("/api/admin/setup-schema", {
        method: "POST",
        headers: getAdminHeaders(),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error ?? "Schema setup failed");
      setNeedsSetup(false);
      setMessage("Database schema created. You can now seed portfolio data.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Schema setup failed");
    } finally {
      setLoading(false);
    }
  };

  const loadPortfolio = async () => {
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("/api/portfolio");
      const data = await response.json();
      if (!response.ok) throw new Error(data.error ?? "Failed to load portfolio");
      setPortfolio(data);
      if (!siteForm.category_id && data.categories[0]) {
        setSiteForm((current) => ({ ...current, category_id: data.categories[0].id }));
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to load portfolio";
      setMessage(message);
      if (message.includes("portfolio_categories") || message.includes("schema cache")) {
        setNeedsSetup(true);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const savedKey = sessionStorage.getItem(ADMIN_KEY_STORAGE);
    if (savedKey) {
      setAdminKey(savedKey);
      setAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (authenticated) void loadPortfolio();
  }, [authenticated]);

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    sessionStorage.setItem(ADMIN_KEY_STORAGE, adminKey.trim());
    setAuthenticated(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem(ADMIN_KEY_STORAGE);
    setAuthenticated(false);
    setAdminKey("");
    setPortfolio(null);
  };

  const handleSeed = async () => {
    if (!confirm("Seed database with all default portfolio sites?")) return;
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("/api/admin/seed", {
        method: "POST",
        headers: getAdminHeaders(),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error ?? "Seed failed");
      setPortfolio(data.data);
      setMessage("Database seeded successfully.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Seed failed");
    } finally {
      setLoading(false);
    }
  };

  const resetCategoryForm = () => {
    setEditingCategoryId(null);
    setCategoryForm({
      id: "",
      label: "",
      stacks: "",
      group_type: "skill",
      sort_order: portfolio?.categories.length ?? 0,
    });
  };

  const resetSiteForm = () => {
    setEditingSiteId(null);
    setSiteForm({
      url: "",
      image_url: "",
      category_id: portfolio?.categories[0]?.id ?? "",
      sort_order: 0,
    });
  };

  const saveCategory = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    const payload = {
      id: categoryForm.id.trim(),
      label: categoryForm.label.trim(),
      stacks: categoryForm.stacks.split(",").map((item) => item.trim()).filter(Boolean),
      group_type: categoryForm.group_type,
      sort_order: Number(categoryForm.sort_order),
    };

    try {
      const response = await fetch(
        editingCategoryId ? `/api/admin/categories/${editingCategoryId}` : "/api/admin/categories",
        {
          method: editingCategoryId ? "PUT" : "POST",
          headers: getAdminHeaders(),
          body: JSON.stringify(payload),
        }
      );
      const data = await response.json();
      if (!response.ok) throw new Error(data.error ?? "Failed to save category");
      resetCategoryForm();
      await loadPortfolio();
      setMessage(editingCategoryId ? "Category updated." : "Category created.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Failed to save category");
    } finally {
      setLoading(false);
    }
  };

  const saveSite = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    const payload = {
      url: siteForm.url.trim(),
      category_id: siteForm.category_id,
      image_url: siteForm.image_url.trim() || null,
      sort_order: Number(siteForm.sort_order),
    };

    try {
      const response = await fetch(
        editingSiteId ? `/api/admin/sites/${editingSiteId}` : "/api/admin/sites",
        {
          method: editingSiteId ? "PUT" : "POST",
          headers: getAdminHeaders(),
          body: JSON.stringify(payload),
        }
      );
      const data = await response.json();
      if (!response.ok) throw new Error(data.error ?? "Failed to save site");
      resetSiteForm();
      await loadPortfolio();
      setMessage(editingSiteId ? "Site updated." : "Site created.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Failed to save site");
    } finally {
      setLoading(false);
    }
  };

  const uploadImage = async (file: File) => {
    setLoading(true);
    setMessage("");
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await fetch("/api/admin/upload", {
        method: "POST",
        headers: { "x-admin-key": sessionStorage.getItem(ADMIN_KEY_STORAGE) ?? "" },
        body: formData,
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error ?? "Upload failed");
      setSiteForm((current) => ({ ...current, image_url: data.url }));
      setMessage("Image uploaded.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  const editCategory = (category: PortfolioCategory) => {
    setEditingCategoryId(category.id);
    setCategoryForm({
      id: category.id,
      label: category.label,
      stacks: category.stacks.join(", "),
      group_type: category.group_type,
      sort_order: category.sort_order,
    });
  };

  const editSite = (site: PortfolioSite, categoryId: string) => {
    setEditingSiteId(site.id);
    setSiteForm({
      url: site.url,
      image_url: site.image_url ?? "",
      category_id: categoryId,
      sort_order: site.sort_order,
    });
  };

  const removeCategory = async (id: string) => {
    if (!confirm("Delete this category and all its sites?")) return;
    setLoading(true);
    try {
      const response = await fetch(`/api/admin/categories/${id}`, {
        method: "DELETE",
        headers: getAdminHeaders(),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error ?? "Delete failed");
      await loadPortfolio();
      setMessage("Category deleted.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Delete failed");
    } finally {
      setLoading(false);
    }
  };

  const removeSite = async (id: string) => {
    if (!confirm("Delete this site?")) return;
    setLoading(true);
    try {
      const response = await fetch(`/api/admin/sites/${id}`, {
        method: "DELETE",
        headers: getAdminHeaders(),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error ?? "Delete failed");
      await loadPortfolio();
      setMessage("Site deleted.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Delete failed");
    } finally {
      setLoading(false);
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
        <form onSubmit={handleLogin} className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-sky-300">Hirai Admin</p>
          <h1 className="mt-3 text-3xl font-bold">Portfolio Control</h1>
          <p className="mt-2 text-sm text-white/60">Enter the admin key to manage portfolio data.</p>
          <input
            type="password"
            value={adminKey}
            onChange={(event) => setAdminKey(event.target.value)}
            placeholder="Admin key"
            className="mt-6 w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-sky-400"
          />
          <button
            type="submit"
            className="mt-4 w-full rounded-xl bg-sky-500 px-4 py-3 font-medium text-white hover:bg-sky-400"
          >
            Enter Admin
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-sky-500">Hirai Admin</p>
            <h1 className="text-2xl font-bold">Portfolio Manager</h1>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => void loadPortfolio()}
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm hover:bg-slate-100"
            >
              Refresh
            </button>
            <button
              type="button"
              onClick={() => void handleSeed()}
              className="rounded-xl border border-yellow-300 bg-yellow-100 px-4 py-2 text-sm hover:bg-yellow-200"
            >
              Seed Database
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-8 space-y-8">
        {message && (
          <div className="rounded-2xl border border-sky-200 bg-sky-50 px-4 py-3 text-sm text-sky-800">
            {message}
          </div>
        )}

        {needsSetup && (
          <div className="rounded-2xl border border-amber-300 bg-amber-50 px-4 py-4 text-sm text-amber-900">
            <p className="font-semibold">Database tables are not set up yet.</p>
            <p className="mt-2">
              If <code className="rounded bg-amber-100 px-1">SUPABASE_DB_URL</code> is configured on
              the server, click below. Otherwise run <code className="rounded bg-amber-100 px-1">supabase/schema.sql</code>{" "}
              in the Supabase SQL Editor, then seed.
            </p>
            <button
              type="button"
              onClick={() => void handleSetupSchema()}
              className="mt-3 rounded-xl bg-amber-500 px-4 py-2 text-sm font-medium text-white hover:bg-amber-400"
            >
              Create Tables
            </button>
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-2">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold">
              {editingCategoryId ? "Edit Skill / Category" : "Add Skill / Category"}
            </h2>
            <form onSubmit={saveCategory} className="mt-4 space-y-4">
              <input
                value={categoryForm.id}
                onChange={(event) => setCategoryForm({ ...categoryForm, id: event.target.value })}
                placeholder="ID (slug, e.g. next)"
                disabled={!!editingCategoryId}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 disabled:bg-slate-100"
              />
              <input
                value={categoryForm.label}
                onChange={(event) => setCategoryForm({ ...categoryForm, label: event.target.value })}
                placeholder="Label (e.g. Next.js)"
                className="w-full rounded-xl border border-slate-200 px-4 py-3"
              />
              <input
                value={categoryForm.stacks}
                onChange={(event) => setCategoryForm({ ...categoryForm, stacks: event.target.value })}
                placeholder="Stacks (comma separated)"
                className="w-full rounded-xl border border-slate-200 px-4 py-3"
              />
              <div className="flex gap-3">
                <select
                  value={categoryForm.group_type}
                  onChange={(event) =>
                    setCategoryForm({
                      ...categoryForm,
                      group_type: event.target.value as "skill" | "other",
                    })
                  }
                  className="flex-1 rounded-xl border border-slate-200 px-4 py-3"
                >
                  <option value="skill">Skill tab</option>
                  <option value="other">Other tab</option>
                </select>
                <input
                  type="number"
                  value={categoryForm.sort_order}
                  onChange={(event) =>
                    setCategoryForm({ ...categoryForm, sort_order: Number(event.target.value) })
                  }
                  className="w-28 rounded-xl border border-slate-200 px-4 py-3"
                />
              </div>
              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-xl bg-sky-600 px-4 py-3 text-sm font-medium text-white hover:bg-sky-500"
                >
                  {editingCategoryId ? "Update Category" : "Create Category"}
                </button>
                {editingCategoryId && (
                  <button
                    type="button"
                    onClick={resetCategoryForm}
                    className="rounded-xl border border-slate-200 px-4 py-3 text-sm"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold">{editingSiteId ? "Edit Site" : "Add Site URL"}</h2>
            <form onSubmit={saveSite} className="mt-4 space-y-4">
              <input
                value={siteForm.url}
                onChange={(event) => setSiteForm({ ...siteForm, url: event.target.value })}
                placeholder="https://example.com/"
                className="w-full rounded-xl border border-slate-200 px-4 py-3"
              />
              <select
                value={siteForm.category_id}
                onChange={(event) => setSiteForm({ ...siteForm, category_id: event.target.value })}
                className="w-full rounded-xl border border-slate-200 px-4 py-3"
              >
                {portfolio?.categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.label}
                  </option>
                ))}
              </select>
              <input
                value={siteForm.image_url}
                onChange={(event) => setSiteForm({ ...siteForm, image_url: event.target.value })}
                placeholder="Image URL (optional)"
                className="w-full rounded-xl border border-slate-200 px-4 py-3"
              />
              <div className="flex items-center gap-3">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(event) => {
                    const file = event.target.files?.[0];
                    if (file) void uploadImage(file);
                  }}
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm hover:bg-slate-50"
                >
                  Upload Image
                </button>
                {siteForm.image_url && (
                  <img
                    src={siteForm.image_url}
                    alt="Preview"
                    className="h-14 w-24 rounded-lg object-cover border border-slate-200"
                  />
                )}
              </div>
              <input
                type="number"
                value={siteForm.sort_order}
                onChange={(event) =>
                  setSiteForm({ ...siteForm, sort_order: Number(event.target.value) })
                }
                className="w-full rounded-xl border border-slate-200 px-4 py-3"
              />
              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-xl bg-sky-600 px-4 py-3 text-sm font-medium text-white hover:bg-sky-500"
                >
                  {editingSiteId ? "Update Site" : "Create Site"}
                </button>
                {editingSiteId && (
                  <button
                    type="button"
                    onClick={resetSiteForm}
                    className="rounded-xl border border-slate-200 px-4 py-3 text-sm"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </section>
        </div>

        <section className="space-y-6">
          <h2 className="text-xl font-bold">All Portfolio Data</h2>
          {loading && !portfolio && <p className="text-slate-500">Loading...</p>}
          {portfolio?.categories.map((category) => (
            <div key={category.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-yellow-600">
                    {category.group_type === "other" ? "Other" : "Skill"}
                  </p>
                  <h3 className="text-2xl font-bold">{category.label}</h3>
                  <p className="mt-1 text-sm text-slate-500">ID: {category.id}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {category.stacks.map((stack) => (
                      <span
                        key={stack}
                        className="rounded-full bg-yellow-100 px-2.5 py-1 text-xs text-slate-700"
                      >
                        {stack}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => editCategory(category)}
                    className="rounded-xl border border-slate-200 px-4 py-2 text-sm hover:bg-slate-50"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => void removeCategory(category.id)}
                    className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-2 text-sm text-rose-700 hover:bg-rose-100"
                  >
                    Delete
                  </button>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {category.sites.map((site) => (
                  <div key={site.id} className="rounded-2xl border border-slate-200 p-4">
                    <div className="h-28 overflow-hidden rounded-xl bg-slate-100">
                      {site.image_url ? (
                        <img
                          src={site.image_url}
                          alt={getSiteName(site.url)}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-xs text-slate-400">
                          Auto preview
                        </div>
                      )}
                    </div>
                    <p className="mt-3 font-semibold break-all">{getSiteName(site.url)}</p>
                    <p className="mt-1 text-xs text-slate-500 break-all">{site.url}</p>
                    <div className="mt-3 flex gap-2">
                      <button
                        type="button"
                        onClick={() => editSite(site, category.id)}
                        className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs hover:bg-slate-50"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => void removeSite(site.id)}
                        className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-1.5 text-xs text-rose-700"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
