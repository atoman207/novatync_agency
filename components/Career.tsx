"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

function devicon(path: string) {
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`;
}

function simpleIcon(slug: string, hex?: string) {
  return `https://cdn.simpleicons.org/${slug}${hex ? `/${hex}` : ""}`;
}

/** OpenAI's mark ships colorless from third-party CDNs, so it's inlined here. */
function OpenAIMark() {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="#74AA9C" style={{ display: "block" }}>
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  );
}

type Skill = { name: string; src?: string; isOpenAI?: boolean };

const positions: {
  role: string;
  type: string;
  bg: string;
  skills: Skill[];
  desc: string;
  badgeText: string;
  dot: string;
  border: string;
  hover: string;
}[] = [
  {
    role: "Frontend Engineer",
    type: "正社員 / 業務委託",
    bg: "/career/frontend-bg.jpg",
    skills: [
      { name: "React", src: devicon("react/react-original.svg") },
      { name: "Next.js", src: simpleIcon("nextdotjs", "FFFFFF") },
      { name: "TypeScript", src: devicon("typescript/typescript-original.svg") },
      { name: "Tailwind CSS", src: devicon("tailwindcss/tailwindcss-original.svg") },
      { name: "JavaScript", src: devicon("javascript/javascript-original.svg") },
      { name: "Vite", src: devicon("vitejs/vitejs-original.svg") },
    ],
    desc: "世界基準のUIを構築するフロントエンドエンジニアを募集しています。",
    badgeText: "text-shu-300",
    dot: "bg-shu-400",
    border: "border-shu-900/60", hover: "hover:border-shu-400",
  },
  {
    role: "Backend Engineer",
    type: "正社員 / 業務委託",
    bg: "/career/backend-bg.jpg",
    skills: [
      { name: "Python", src: devicon("python/python-original.svg") },
      { name: "FastAPI", src: devicon("fastapi/fastapi-original.svg") },
      { name: "Node.js", src: devicon("nodejs/nodejs-original.svg") },
      { name: "PostgreSQL", src: devicon("postgresql/postgresql-original.svg") },
      { name: "Redis", src: devicon("redis/redis-original.svg") },
      { name: "Docker", src: devicon("docker/docker-original.svg") },
    ],
    desc: "スケーラブルなバックエンドシステムを設計・開発するエンジニアを募集しています。",
    badgeText: "text-emerald-300",
    dot: "bg-emerald-400",
    border: "border-emerald-900/60", hover: "hover:border-emerald-400",
  },
  {
    role: "AI Engineer",
    type: "正社員 / 業務委託",
    bg: "/career/ai-bg.jpg",
    skills: [
      { name: "OpenAI", isOpenAI: true },
      { name: "Python", src: devicon("python/python-original.svg") },
      { name: "LangChain", src: simpleIcon("langchain") },
      { name: "Claude", src: simpleIcon("anthropic", "D4A27F") },
      { name: "Gemini", src: simpleIcon("googlegemini", "8E75F0") },
      { name: "Hugging Face", src: simpleIcon("huggingface", "FFD21E") },
    ],
    desc: "生成AIを事業へ統合するAIエンジニアを募集しています。",
    badgeText: "text-gold-300",
    dot: "bg-gold-400",
    border: "border-gold-900/60", hover: "hover:border-gold-400",
  },
  {
    role: "Cloud Engineer",
    type: "正社員 / 業務委託",
    bg: "/career/cloud-bg.jpg",
    skills: [
      { name: "AWS", src: devicon("amazonwebservices/amazonwebservices-original-wordmark.svg") },
      { name: "Azure", src: devicon("azure/azure-original.svg") },
      { name: "Terraform", src: devicon("terraform/terraform-original.svg") },
      { name: "Kubernetes", src: devicon("kubernetes/kubernetes-plain.svg") },
      { name: "Docker", src: devicon("docker/docker-original.svg") },
      { name: "GitHub Actions", src: simpleIcon("githubactions", "2088FF") },
    ],
    desc: "クラウドインフラの設計・運用を担当するエンジニアを募集しています。",
    badgeText: "text-ai-200",
    dot: "bg-ai-400",
    border: "border-ai-900/60", hover: "hover:border-ai-400",
  },
  {
    role: "UI/UX Designer",
    type: "業務委託",
    bg: "/career/design-bg.jpg",
    skills: [
      { name: "Figma", src: devicon("figma/figma-original.svg") },
      { name: "Adobe XD", src: devicon("xd/xd-plain.svg") },
      { name: "Illustrator", src: devicon("illustrator/illustrator-plain.svg") },
      { name: "Photoshop", src: devicon("photoshop/photoshop-plain.svg") },
      { name: "Sketch", src: devicon("sketch/sketch-original.svg") },
    ],
    desc: "世界水準のユーザー体験をデザインするUIデザイナーを募集しています。",
    badgeText: "text-pink-300",
    dot: "bg-pink-400",
    border: "border-pink-900/60", hover: "hover:border-pink-400",
  },
];

export default function Career() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="career" className="section-padding relative bg-white">
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-xs tracking-[0.3em] text-shu-600 mb-4 uppercase">Career</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="text-3xl md:text-5xl font-bold mb-4">
            Join Us.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} className="text-stone-500 text-sm md:text-base">
            未来を一緒につくる仲間を募集しています。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {positions.map((pos, i) => (
            <motion.div
              key={pos.role}
              initial={{ opacity: 0, y: 36 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.07 }}
              className={`group relative overflow-hidden rounded-2xl border ${pos.border} ${pos.hover} shadow-sm hover:shadow-xl transition-all duration-300 cursor-default`}
            >
              <div className="absolute inset-0">
                <Image
                  src={pos.bg}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-ai-950/80 via-ai-950/70 to-ai-950/90" />
              </div>

              <div className="relative z-10 p-6">
                <div className={`inline-flex items-center gap-2 mb-4 text-xs px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm ${pos.badgeText}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${pos.dot}`} />
                  {pos.type}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{pos.role}</h3>
                <p className="text-white/75 text-sm leading-relaxed mb-4">{pos.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {pos.skills.map((sk) => (
                    <span
                      key={sk.name}
                      title={sk.name}
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 shadow-sm transition-transform hover:scale-110"
                    >
                      {sk.isOpenAI ? (
                        <OpenAIMark />
                      ) : (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={sk.src} alt={sk.name} className="h-5 w-5 object-contain" />
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-shu-700 px-8 py-4 text-sm font-semibold text-white shadow-md transition-colors hover:bg-shu-800"
          >
            応募・お問い合わせ
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
