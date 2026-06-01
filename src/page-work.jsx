/* =========================================
   Work Page — v3.1 (Bilingual)
   ========================================= */

import React, { useState } from 'react';
import { T, t } from './i18n';
import { Reveal, CoverImage, BigCTA, Footer, ProjectCard } from './components';

const ERAS = [
  {
    years: "25 — now",
    yearsBig: ["25", "now"],
    title_en: "Building AI product",
    title_zh: "构建 AI 产品",
    blurb_en: "Currently designing 0→1 AI products. Working across hardware-meets-app ecosystems and the brand systems that hold them together.",
    blurb_zh: "正在做 0→1 的 AI 产品。横跨硬件与应用生态，以及把它们串起来的品牌系统。",
    tags: ["AI PM", "Product Design (UX)", "Web/App Design", "Creative Direction", "Brand Design"],
    count_en: "3 projects",
    count_zh: "3 个项目",
    projects: [
      { slug: "luci-ai",     title: "LUCI AI",        year: "25 — now",       role_en: "AI PM",                 role_zh: "AI 产品经理",     img_en: "Personal Memory Companion",    img_zh: "个人记忆伴侣",   tone: "steel",     tags: ["Hardware × App", "Branding"], image: "images/work/luci-ai.jpg" },
      { slug: "memories-ai", title: "memories.ai",    year: "25.05 — 25.11",  role_en: "PM & Creative Director", role_zh: "产品经理 & 创意总监", img_en: "Large Visual-Memory Model · LVMM", img_zh: "大型视觉记忆模型 · LVMM", tone: "mono",      tags: ["LVMM", "Video Agents", "CIS"] },
      { slug: "mincho-ai",   title: "Mincho",         titleEm: "AI · Beta",   year: "25.01 — 25.04",            role_en: "AI PM & UX",            role_zh: "AI 产品经理 & 体验设计", img_en: "Conversational mental healing", img_zh: "对话式心理疗愈", tone: "blue",      tags: ["Mini-Program", "Prompt UX"] },
    ],
  },
  {
    years: "23 — 24",
    yearsBig: ["23", "24"],
    title_en: "Studying Interaction",
    title_zh: "学习交互设计",
    blurb_en: "MDes Interaction Design at Glasgow School of Art (University of Glasgow). Speculative, tactile, slow — the highland air made me deliberate.",
    blurb_zh: "在格拉斯哥艺术学院（隶属格拉斯哥大学）攻读交互设计 MDes。思辨、可触、缓慢 —— 高地的空气教我从容。",
    tags: ["Interaction Design", "Research Theory", "Experience Design", "Human-Centred Design", "Prototyping & Making"],
    count_en: "2 projects",
    count_zh: "2 个项目",
    projects: [
      { slug: "emosync",      title: "EmoSync",      year: "2024", role_en: "MDes Final",   role_zh: "MDes 毕业作品",  img_en: "Embodied interaction · wearable", img_zh: "具身交互 · 可穿戴",     tone: "mono-blue",  tags: ["Wearable", "HCI"] },
      { slug: "nature-times", title: "Nature Times", year: "2024", role_en: "Speculative",  role_zh: "思辨设计",      img_en: "Citizen science newspaper",        img_zh: "公民科学报纸",          tone: "mono-mist",  tags: ["Editorial", "N4H"] },
    ],
  },
  {
    years: "21 — 23",
    yearsBig: ["21", "23"],
    title_en: "Shaping Portfolio",
    title_zh: "塑造作品集",
    blurb_en: "A series of self-initiated projects developed during my transition into design practice. Presented in PDF format — a process of exploration and transformation before AI reshaped creative practice.",
    blurb_zh: "一系列自发探索的项目，记录我向设计实践过渡的阶段。以 PDF 形式呈现 —— 在 AI 重塑创作之前的一段探索与转变。",
    tags: ["Industrial Design", "Speculative Design", "Interactive Media", "Storytelling design"],
    count_en: "5 projects",
    count_zh: "5 个项目",
    archive: true,
    archiveSlug: "archive-21-23",
  },
];

function WorkPage({ go }) {
  const [filter, setFilter] = useState("All");
  const allTags = ["All", "AI PM", "UX", "Brand", "Interaction", "Industrial"];

  return (
    <main className="page-root" data-screen-label="Work">

      {/* HEADER */}
      <section style={{ padding: "64px 32px 80px" }}>
        <Reveal>
          <div className="edge-row" style={{ borderTop: "none", marginBottom: 56 }}>
            <span><T en="Index · 002 — Work / Selected" zh="索引 · 002 — 作品 / 精选" /></span>
            <span><T en="10 projects · 3 eras" zh="10 个项目 · 3 个阶段" /></span>
            <span><T en="2021 → present" zh="2021 → 至今" /></span>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 80, alignItems: "end" }}>
          <div>
            <Reveal>
              <div className="mono-cap" style={{ marginBottom: 24 }}>
                <T en="Work — a living portfolio" zh="Work — 持续生长的作品集" />
              </div>
            </Reveal>
            <Reveal clip>
              <h1 className="display-xxl"><T en="Work." zh="作品。" /></h1>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="lede" style={{ maxWidth: 480, fontSize: 18 }}>
              <T
                en={<>From <span className="serif-italic">Industrial Design</span> to <span className="serif-italic">Interaction Design,</span> now working on <span className="serif-italic">AI products.</span></>}
                zh={<>从<span className="serif-italic">工业设计</span>到<span className="serif-italic">交互设计，</span>现在专注于 <span className="serif-italic">AI 产品。</span></>}
              />
              <br /><br />
              <span style={{ color: "var(--ink-faint)", fontSize: 14, fontFamily: "var(--font-mono)", letterSpacing: "0.08em" }}>
                <T en="↳ Ordered as eras, not entries." zh="↳ 按阶段排列，不按条目。" />
              </span>
            </p>
          </Reveal>
        </div>

        {/* Filter row */}
        <Reveal delay={320}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 96, paddingTop: 24, borderTop: "1px solid var(--line)", gap: 24, flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {allTags.map(t => (
                <button key={t}
                        className={"tag" + (filter === t ? " tag-filled" : "")}
                        style={{ cursor: "pointer" }}
                        onClick={() => setFilter(t)}>
                  {t}
                </button>
              ))}
            </div>
            <div className="mono-cap" style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
              <span><T en="Search keywords" zh="搜索关键词" /></span>
              <input className="input-field" placeholder={t("e.g. agent, brand, wearable", "如：智能体、品牌、可穿戴")} style={{ width: 240, fontSize: 13, padding: "8px 0", borderBottomWidth: 1 }} />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ERAS */}
      {ERAS.map((era, eIdx) => (
        <section key={era.years} style={{ padding: "96px 32px", borderTop: "1px solid var(--ink)", background: eIdx % 2 === 1 ? "var(--mist)" : "var(--paper)" }}>
          <div className="grid-12" style={{ alignItems: "start", gap: 32 }}>

            {/* Left column: big year + meta */}
            <div style={{ gridColumn: "1 / span 4", position: "sticky", top: 96 }}>
              <Reveal clip>
                <div className="era-marker">
                  {era.yearsBig[0]}<span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--ink-mid)", letterSpacing: 0 }}>—</span>
                </div>
              </Reveal>
              <Reveal clip delay={120}>
                <div className="era-marker">
                  <span className="serif-italic" style={{ color: "var(--ink-mid)" }}>
                    {era.yearsBig[1] === "now" ? t("now", "至今") : era.yearsBig[1]}
                  </span>
                </div>
              </Reveal>
              <Reveal delay={240}>
                <div style={{ marginTop: 28 }}>
                  <div className="mono-cap" style={{ marginBottom: 8 }}>
                    <T en={era.count_en} zh={era.count_zh} />
                  </div>
                  <h2 className="display-sm" style={{ marginBottom: 18 }}>
                    <T en={era.title_en} zh={era.title_zh} />
                  </h2>
                  <p style={{ fontSize: 15, color: "var(--ink-mid)", lineHeight: 1.55, maxWidth: 380, marginBottom: 24 }}>
                    <T en={era.blurb_en} zh={era.blurb_zh} />
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {era.tags.map(t => <span key={t} className="tag tag-square">{t}</span>)}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: project grid OR archive block */}
            <div style={{ gridColumn: "6 / -1" }}>
              {era.archive ? (
                <Reveal>
                  <div style={{ background: "var(--ink)", color: "var(--paper)", padding: "56px 48px", border: "1px solid var(--ink)" }}>
                    <div className="mono-cap" style={{ color: "rgba(255,255,255,0.5)", marginBottom: 32 }}>
                      <T en="Archive · 21 — 23" zh="存档 · 21 — 23" />
                    </div>
                    <h3 className="display-md" style={{ color: "var(--paper)", marginBottom: 32 }}>
                      <T
                        en={<><span className="serif-italic" style={{ color: "var(--steel)" }}>Self-initiated</span> projects, before AI reshaped practice.</>}
                        zh={<>AI 重塑创作之前的 <span className="serif-italic" style={{ color: "var(--steel)" }}>自发</span> 探索。</>}
                      />
                    </h3>
                    <p style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", lineHeight: 1.55, maxWidth: 540, marginBottom: 40 }}>
                      <T
                        en={era.blurb_en}
                        zh={era.blurb_zh}
                      />
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
                      <button className="btn btn-light" onClick={() => window.location.href = `/work-${era.archiveSlug}.html`}>
                        <T en="View archive →" zh="查看存档 →" />
                      </button>
                    </div>

                    {/* Mini archive list */}
                    <div style={{ marginTop: 56, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.2)", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }}>
                      {[
                        { num: "P01", title_en: "Soft Object Series",      title_zh: "柔性物件系列",   year: "2023" },
                        { num: "P02", title_en: "Domestic Rituals",        title_zh: "家庭日常仪式",   year: "2022" },
                        { num: "P03", title_en: "Material Diary",          title_zh: "材料日记",      year: "2022" },
                        { num: "P04", title_en: "Speculative Vessels",     title_zh: "思辨容器",      year: "2021" },
                        { num: "P05", title_en: "Storytelling Furniture",  title_zh: "叙事家具",      year: "2021" },
                      ].map(p => (
                        <div key={p.num} style={{ display: "flex", justifyContent: "space-between", padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,0.12)", fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)" }}>
                          <span><span style={{ color: "rgba(255,255,255,0.4)" }}>{p.num} —</span> <T en={p.title_en} zh={p.title_zh} /></span>
                          <span style={{ color: "rgba(255,255,255,0.45)" }}>{p.year}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ) : (
                <div style={{ display: "grid", gridTemplateColumns: era.projects.length === 3 ? "repeat(3, 1fr)" : "repeat(2, 1fr)", gap: 24 }}>
                  {era.projects.map((p, i) => {
                    const card = {
                      title: p.title, titleEm: p.titleEm, year: p.year,
                      role: t(p.role_en, p.role_zh), img: t(p.img_en, p.img_zh),
                      tone: p.tone, tags: p.tags, image: p.image,
                    };
                    const onClick = () => window.location.href = `/work-${p.slug}.html`;
                    return (
                      <Reveal key={p.title} delay={i * 100}>
                        <ProjectCard project={card} index={`0${i + 1}`} onClick={onClick} />
                      </Reveal>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      <BigCTA onContact={() => go("contact")} />
      <Footer go={go} />
    </main>
  );
}

export default WorkPage;
