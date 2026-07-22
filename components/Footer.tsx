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

export default function Footer() {
  return (
    <footer className="relative bg-ai-950 overflow-hidden">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative max-w-screen-2xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Link href="/" className="flex items-center w-fit">
                <Image
                  src="/logo.png"
                  alt="NOVATYNC"
                  width={160}
                  height={42}
                  className="object-contain brightness-0 invert"
                />
              </Link>
              <span className="hanko" aria-hidden>信</span>
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
                <Link key={link.label} href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">{link.label}</Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-widest text-white/50 mb-4 uppercase">Get in Touch</p>
            <div className="space-y-2">
              <p className="text-sm text-white/70">Japan</p>
              <p className="text-sm text-white/70">フルリモート対応</p>
              <Link href="/contact" className="inline-flex items-center gap-1.5 text-sm text-shu-300 hover:text-shu-200 transition-colors mt-2 group">
                お問い合わせ
                <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
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
