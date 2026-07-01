"use client";

import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "HOME",       href: "/"           },
  { label: "SERVICE",    href: "/service"    },
  { label: "WORKS",      href: "/works"      },
  { label: "TECHNOLOGY", href: "/technology" },
  { label: "ABOUT",      href: "/about"      },
  { label: "CAREER",     href: "/career"     },
  { label: "CONTACT",    href: "/contact"    },
];

const socials = [
  {
    label: "X (Twitter)",
    href: "#",
    icon: (<svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 5.923L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" /></svg>),
  },
  {
    label: "GitHub",
    href: "#",
    icon: (<svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (<svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>),
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0f172a] overflow-hidden">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent" />

      <div className="relative max-w-screen-2xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center mb-4 w-fit">
              <Image
                src="/logo.png"
                alt="NOVATYNC"
                width={160}
                height={42}
                className="object-contain h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/30 text-sm leading-relaxed mb-6">
              Creating Tomorrow&apos;s Intelligence.<br />AI × Full Stack × Cloud Innovation
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-white/35 hover:text-white hover:bg-white/10 transition-all duration-200">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs tracking-widest text-white/25 mb-4 uppercase">Navigation</p>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href} className="text-sm text-white/35 hover:text-white transition-colors">{link.label}</Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-widest text-white/25 mb-4 uppercase">Get in Touch</p>
            <div className="space-y-2">
              <p className="text-sm text-white/35">Japan</p>
              <p className="text-sm text-white/35">フルリモート対応</p>
              <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm text-sky-400 hover:text-sky-300 transition-colors mt-2 group">
                お問い合わせ
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">© 2026 NOVATYNC Inc. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms"].map((item) => (
              <a key={item} href="#" className="text-xs text-white/20 hover:text-white/50 transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
