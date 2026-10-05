"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/components/PreferencesProvider";

const navLinks = [
  { key: "home", label: "HOME", href: "/#home" },
  { key: "works", label: "WORKS", href: "/#works" },
  { key: "about", label: "ABOUT", href: "/#about" },
  { key: "contact", label: "CONTACT", href: "/#contact" },
] as const;

const contactChannels = [
  {
    name: "Email",
    href: "mailto:contact@labnote.site",
    icon: "/icons/mail.svg",
    chip: "bg-white",
    iconClass: "h-5 w-5 object-contain",
    external: false,
  },
  {
    name: "Chatwork",
    href: "https://www.chatwork.com/koholab",
    icon: "/icons/chatwork.svg",
    chip: "bg-transparent p-0",
    iconClass: "h-10 w-10 rounded-lg object-contain",
    external: true,
  },
  {
    name: "note",
    href: "https://note.com/koholab",
    icon: "/icons/note.svg",
    chip: "bg-white",
    iconClass: "h-5 w-5 object-contain",
    external: true,
  },
  {
    name: "LINE",
    href: "https://line.me/ti/p/XSUZTyrXGh",
    icon: "/icons/line.svg",
    chip: "bg-white",
    iconClass: "h-5 w-5 object-contain",
    external: true,
  },
  {
    name: "YOUTRUST",
    href: "https://youtrust.jp/users/131019f770cc6e4a4f6b825939421b12",
    icon: "/icons/youtrust.png",
    chip: "bg-white",
    iconClass: "h-6 w-6 object-contain",
    external: true,
  },
] as const;

export default function Footer() {
  const { lang, t } = useI18n();
  const showJa = lang === "ja";
  return (
    <footer className="relative bg-footer overflow-hidden space:backdrop-blur-sm">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative mx-auto max-w-screen-2xl px-5 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16">
        <div className="mb-10 grid grid-cols-1 gap-8 md:mb-12 md:grid-cols-3 md:gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center">
              <Link href="/" className="flex items-center w-fit">
                <Image
                  src="/logo.png"
                  alt="NOVATYNC"
                  width={160}
                  height={42}
                  className="h-8 w-auto object-contain brightness-0 invert sm:h-9"
                />
              </Link>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Creating Tomorrow&apos;s Intelligence.<br />AI × Full Stack × Cloud Innovation
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs tracking-widest text-white/50 mb-4 uppercase">Navigation</p>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link key={link.key} href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                  {showJa ? t.nav[link.key] : link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-widest text-white/50 mb-4 uppercase">Get in Touch</p>
            <div className="flex flex-wrap items-center gap-3">
              {contactChannels.map((channel) => (
                <a
                  key={channel.name}
                  href={channel.href}
                  aria-label={channel.name}
                  title={channel.name}
                  {...(channel.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={`flex h-10 w-10 items-center justify-center rounded-lg shadow-sm transition hover:scale-105 ${channel.chip}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={channel.icon}
                    alt={channel.name}
                    className={channel.iconClass}
                    draggable={false}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:pt-8">
          <p className="text-white/45 text-xs">© 2023 NOVATYNC Inc. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms"].map((item) => (
              <a key={item} href="#" className="text-xs text-white/45 hover:text-white/80 transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
