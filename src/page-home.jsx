/* =========================================
   Home Page — v3.1 (Editorial · Bilingual)
   Content sourced from PDFs (Home&Work, About her, Blog)
   ========================================= */

import React from 'react';
import { T, t } from './i18n';
import { Reveal, CoverImage, ArrowGlyph, BigCTA, Footer } from './components';

function HomePage({ go }) {
  return (
    <main className="page-root" data-screen-label="Home">

      {/* ===== HERO ===== */}
      <section style={{ padding: "48px 32px 64px", minHeight: "calc(100vh - 64px)", display: "flex", flexDirection: "column" }}>

        {/* Top index strip */}
        <Reveal>
          <div className="edge-row" style={{ borderTop: "none", borderBottom: "1px solid var(--line)", marginBottom: 56 }}>
            <span><T en="Index · 001 — Home" zh="索引 · 001 — 首 页" /></span>
            <span><T en="Edition 2026.01" zh="2026.01 版" /></span>
            <span>San Francisco / Shanghai / Glasgow</span>
            <span style={{ color: "var(--ink)" }}><T en="Open for work ↘" zh="开 放 工 作 邀 约 ↘" /></span>
          </div>
        </Reveal>

        {/* Headline + side block */}
        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 56, alignItems: "center", padding: "32px 0" }}>
          <div>
            <Reveal>
              <div className="tracked" style={{ marginBottom: 28 }}>
                <T en="Consider creative methods such as" zh="尝  试  一  种  创  作  方  式  ——" />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(20px, 2vw, 28px)", color: "var(--ink-mid)", marginBottom: 32, letterSpacing: "-0.005em" }}>
                <T
                  en={<>'design <span style={{ color: "var(--ink)" }}>as</span> performance'</>}
                  zh={<>「设计<span style={{ color: "var(--ink)" }}>即</span>表演」</>} />
                
              </div>
            </Reveal>

            <Reveal clip>
              <h1 className="display-xxl">
                <T en="Hiya," zh="嗨呀，" />
              </h1>
            </Reveal>
            <Reveal clip delay={140}>
              <h1 className="display-xxl">
                <T
                  en={<>this is <span className="serif-italic" style={{ fontFamily: "Caveat" }}>Zeta.</span></>}
                  zh={<>我是 <span className="serif-italic">Zeta。</span></>} />
                
              </h1>
            </Reveal>
          </div>

          {/* Brand block — ZETA · ZC72 */}
          <Reveal delay={280}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ aspectRatio: "4 / 5" }}>
                <CoverImage
                  src="images/home/hero-zc72.jpg"
                  alt="Zeta · ZC72"
                  label="ZETA · ZC72"
                  sub={t("Personal brand", "个人品牌")}
                  tone="mono"
                />
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <div style={{ flex: 1, height: 28, background: "#543633" }} title="#543633" />
                <div style={{ flex: 1, height: 28, background: "var(--steel)" }} title="#85B3E4" />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom row */}
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr auto", gap: 48, alignItems: "end", paddingTop: 32, borderTop: "1px solid var(--line)" }}>
          <Reveal delay={500}>
            <p className="lede" style={{ fontSize: 18, maxWidth: 620, color: "var(--ink)" }}>
              <T
                en={<>She is a multidisciplinary designer focusing on <span className="serif-italic" style={{ color: "rgb(133, 179, 228)" }}>interaction, product, and visual design,</span> and a product manager specializing in <span className="serif-italic" style={{ color: "rgb(133, 179, 228)" }}>AI products</span> — blending innovation, UX and technology.</>}
                zh={<>一位多元设计师，专注于<span className="serif-italic">交互、产品与视觉设计；</span>也是一名 <span className="serif-italic">AI 产品</span>方向的产品经理 —— 致力于将创新、用户体验与技术融为一体。</>} />
              
            </p>
          </Reveal>
          <Reveal delay={620}>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <button className="btn btn-dark" onClick={() => go("about")}>
                <T en="About her" zh="关于她" /> <span className="arrow"><ArrowGlyph size={12} /></span>
              </button>
              <button className="btn btn-link" onClick={() => go("work")}>
                <T en="Selected work" zh="作品集" /> <span className="arrow"><ArrowGlyph size={11} /></span>
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== SELECTED WORK · era teasers ===== */}
      <section style={{ padding: "0 32px 32px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 48, flexWrap: "wrap", gap: 24, paddingTop: 96, color: "rgb(0, 0, 0)" }}>
          <Reveal>
            <div>
              <div className="eyebrow" style={{ marginBottom: 24 }}><T en="02 — Work" zh="02 — 作品" /></div>
              <h2 className="display-md">
                <T
                  en={<>From <span className="serif-italic">Industrial Design</span><br />to <span className="serif-italic">Interaction Design,</span><br />now working on <span className="serif-italic" style={{ color: "rgb(133, 179, 228)" }}>AI products.</span></>}
                  zh={<>从<span className="serif-italic">工业设计 </span><br />到<span className="serif-italic">交互设计，</span><br />现在专注于 <span className="serif-italic">AI 产品。</span></>} />
                
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <button className="btn btn-ghost" onClick={() => go("work")}>
              <T en="All work" zh="全部作品" /> <span className="arrow"><ArrowGlyph size={12} /></span>
            </button>
          </Reveal>
        </div>

        {/* 3 era cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {[
          {
            era: "25 — now", slug: "luci-ai", href: "/work-memories-ai.html",
            title_en: "Building AI Product",
            title_zh: "构建 AI 产品",
            count_en: "3 projects",
            count_zh: "3 个项目",
            projects: ["LUCI AI", "memories.ai", "Mincho AI · Beta"],
            tone: "mono"
          },
          {
            era: "23 — 24", slug: "emosync", href: "/work-emosync.html",
            title_en: "Studying Interaction",
            title_zh: "学习交互设计",
            count_en: "2 projects",
            count_zh: "2 个项目",
            projects: ["EmoSync", "Nature Times"],
            tone: "mono-blue"
          },
          {
            era: "21 — 23", slug: "archive-21-23", href: "/work-archive-21-23.html",
            title_en: "Shaping Portfolio",
            title_zh: "塑造作品集",
            count_en: "5 projects · PDF",
            count_zh: "5 个项目 · PDF",
            projects: ["Self-initiated practice"],
            tone: "mono-mist"
          }].
          map((e, i) =>
          <Reveal key={e.era} delay={i * 100}>
              <article onClick={() => window.location.href = e.href} style={{ cursor: "pointer", display: "flex", flexDirection: "column" }}>
                <div style={{ aspectRatio: "4 / 5", position: "relative" }}>
                  <CoverImage src={`images/home/era-${e.slug}.png`} label={e.era} sub={t(e.title_en, e.title_zh)} tone={e.tone} />
                </div>
                <div style={{ padding: "20px 4px 0" }}>
                  <div className="mono-cap" style={{ marginBottom: 8, display: "flex", justifyContent: "space-between" }}>
                    <span>{e.era}</span>
                    <span><T en={e.count_en} zh={e.count_zh} /></span>
                  </div>
                  <div className="display-sm" style={{ marginBottom: 10, fontSize: 22 }}>
                    <T en={e.title_en} zh={e.title_zh} />
                  </div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-mid)", letterSpacing: "0.06em" }}>
                    {e.projects.join(" · ")}
                  </div>
                </div>
              </article>
            </Reveal>
          )}
        </div>
      </section>

      {/* ===== IDENTITY · "I Have the Taste and Agency." ===== */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: 24 }}>
              <T en="03 — Product Thinking · Why is Zeta?" zh="03 — 产品思维 · 为什么是 Zeta？" />
            </div>
          </Reveal>

          <div style={{ marginBottom: 56 }}>
            <Reveal clip>
              <h2 className="display-xl">
                <T en="I Have the" zh="我兼具" />
              </h2>
            </Reveal>
            <Reveal clip delay={120}>
              <h2 className="display-xl">
                <T
                  en={<><span className="serif-italic">Taste</span> and</>}
                  zh={<><span className="serif-italic">审美</span>，</>} />
                
              </h2>
            </Reveal>
            <Reveal clip delay={240}>
              <h2 className="display-xl">
                <T
                  en={<><span className="serif-italic">Agency.</span></>}
                  zh={<>亦有<span className="serif-italic">主动。</span></>} />
                
              </h2>
            </Reveal>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
            <Reveal delay={300}>
              <p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--ink)", maxWidth: 540 }}>
                <T
                  en={<>A multidisciplinary designer and intuitive artist with a strong foundation in
                  <span className="serif-italic"> Interaction, Product, and Visual Design,</span> complemented by hands-on experience in
                  embodied interaction through HCI and digital arts. Passionate about crafting tasteful, meaningful,
                  and human-centered products that thoughtfully integrate design, psychology, and technology.</>}
                  zh={<>一位多元设计师与直觉型艺术家，在<span className="serif-italic">交互设计、产品设计和视觉设计</span>方面有扎实基础，
                  并通过 HCI 与数字艺术积累了具身交互的实操经验。热衷于打造有品味、有意义、以人为本的产品，
                  将设计、心理学与技术周到地结合在一起。</>} />
                
              </p>
            </Reveal>
            <Reveal delay={400}>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--ink-mid)", maxWidth: 520 }}>
                <T
                  en={<>It all begins with <span className="serif-italic">an idea.</span> The first step in my journey toward becoming a product manager is exploring how to apply <span className="serif-italic">Product Thinking</span> to structure my reflections on <span className="serif-italic">"Who am I?"</span> and <span className="serif-italic">"How do I create personal value?"</span> I am eager to grow into a product role within the AI industry, where I can leverage my unique blend of design, product thinking, user research, and strong communication skills to drive innovative solutions forward.</>}
                  zh={<>一切始于<span className="serif-italic">一个想法。</span>我成为产品经理路上的第一步，是探索如何用<span className="serif-italic">产品思维</span>结构化地回答：<span className="serif-italic">「我是谁？」</span>以及<span className="serif-italic">「我如何创造属于自己的价值？」</span> 我渴望在 AI 行业中成长为产品角色，运用设计、产品思维、用户研究与沟通能力，推动有创新性的解决方案落地。</>} />
                
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== HERO IMAGERY · photography strip ===== */}
      <section style={{ padding: "0 32px 32px" }}>
        <Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr", gap: 12, height: "56vh", minHeight: 420 }}>
            <div><CoverImage src="images/home/photo-portrait.jpg" label={t("Portrait · ZC72", "ZC72 · 肖像")} sub="01 / 04" tone="mono" /></div>
            <div><CoverImage src="images/home/photo-still.jpg" label={t("Photography · still", "摄影 · 静物")} sub="02 / 04" tone="mono-blue" /></div>
            <div><CoverImage src="images/home/photo-performance.jpg" label={t("Performance · stage", "表演 · 舞台")} sub="03 / 04" tone="steel" /></div>
            <div><CoverImage src="images/home/photo-lab.jpg" label={t("Lab · Creativity", "实验 · 创造")} sub="04 / 04" tone="mono-mist" /></div>
          </div>
        </Reveal>
        <Reveal>
          <div className="mono-cap" style={{ display: "flex", justifyContent: "space-between", paddingTop: 16, color: "var(--ink-mid)" }}>
            <span><T en="↳ Drop in your photos & photography work" zh="↳ 此处放入个人照片与摄影作品" /></span>
            <span>04 / 04</span>
          </div>
        </Reveal>
      </section>

      {/* ===== PERFORMER BAND (Dark) ===== */}
      <section className="section-ink" style={{ padding: "120px 32px" }}>
        <div className="wrap" style={{ padding: 0 }}>
          <Reveal>
            <div className="eyebrow on-dark" style={{ marginBottom: 48 }}>
              <T en="04 — What I Do For Fun" zh="04 — 我 喜 欢 的 事" />
            </div>
          </Reveal>
          <Reveal clip>
            <h2 className="display-lg" style={{ color: "var(--paper)" }}>
              <span className="serif-italic" style={{ color: "var(--steel)" }}>"</span>
              <T
                en={<>I see myself as a <span className="serif-italic" style={{ color: "var(--steel)" }}>performer</span> —</>}
                zh={<>我把自己看作一位<span className="serif-italic" style={{ color: "var(--steel)" }}>表演者</span> ——</>} />
              
            </h2>
          </Reveal>
          <Reveal clip delay={120}>
            <h2 className="display-lg" style={{ color: "var(--paper)" }}>
              <T
                en={<>I sing, dance, do photography,</>}
                zh={<>我唱歌、跳舞、做摄影、</>} />
              
            </h2>
          </Reveal>
          <Reveal clip delay={240}>
            <h2 className="display-lg" style={{ color: "var(--paper)" }}>
              <T
                en={<>and make music.</>}
                zh={<>也做音乐。</>} />
              
              <span className="serif-italic" style={{ color: "var(--steel)" }}>"</span>
            </h2>
          </Reveal>

          <Reveal delay={400}>
            <p style={{ marginTop: 48, fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,0.72)", maxWidth: 640 }}>
              <T
                en={<>Beyond design, I use social media as a space to build my personal identity as a creator — sharing my work, thoughts, and ongoing exploration of <span className="serif-italic" style={{ color: "var(--steel)" }}>aesthetics, emotion, and self-expression.</span></>}
                zh={<>设计之外，我把社交媒体当作建立个人身份的空间 —— 分享作品、想法，以及在<span className="serif-italic" style={{ color: "var(--steel)" }}>美学、情感与自我表达</span>上的持续探索。</>} />
              
            </p>
          </Reveal>

          {/* Social cards */}
          <div style={{ marginTop: 64, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[
            { name: "网易云音乐", handle_en: "Music · covers", handle_zh: "翻唱", img_en: "Sing / Music", img_zh: "唱歌 / 音乐", imgSrc: "images/home/social-music.jpg", tone: "mono", link: t("Go to NetEase Music ↗", "跳转网易云 ↗"), url: "https://music.163.com/#/artist?id=34422300" },
            { name: "YouTube", handle_en: "Channel · @zetazheng_0702", handle_zh: "频道 · @zetazheng_0702", img_en: "Performance video", img_zh: "表演视频", imgSrc: "images/home/social-youtube.jpg", tone: "mono-blue", link: t("Go to YouTube ↗", "跳转 YouTube ↗"), url: "https://www.youtube.com/@zetazheng_0702" },
            { name: "小红书", handle_en: "@郑泽塔 · more expression", handle_zh: "@郑泽塔 · 更多自我表达", img_en: "Daily expression", img_zh: "日常表达", imgSrc: "images/home/social-xhs.jpg", tone: "mono-mist", link: t("Go to xiaohongshu ↗", "跳转小红书 ↗"), url: "https://www.xiaohongshu.com/user/profile/5a06ae22e8ac2b0a7b3537df" }].
            map((s, i) =>
            <Reveal key={s.name} delay={i * 90}>
              <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <div className="social-card" style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.25)", color: "var(--paper)", opacity: "1", borderStyle: "none" }}>
                  <div className="sc-image" style={{ borderColor: "rgba(255,255,255,0.25)" }}>
                    <CoverImage src={s.imgSrc} label={t(s.img_en, s.img_zh)} tone={s.tone} />
                  </div>
                  <div className="sc-meta" style={{ flexDirection: "column", alignItems: "stretch", gap: 6, opacity: "1", borderTop: "1px rgba(255, 255, 255, 0.25)", borderRightStyle: "none", borderBottomStyle: "none", borderLeftStyle: "none" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
                      <div className="sc-name" style={{ color: "var(--paper)" }}>{s.name}</div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--steel)" }}>0{i + 1}</div>
                    </div>
                    <div className="sc-handle" style={{ color: "rgba(255,255,255,0.6)" }}>
                      <T en={s.handle_en} zh={s.handle_zh} />
                    </div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em", color: "var(--steel)", marginTop: 8, textTransform: "uppercase" }}>{s.link}</div>
                  </div>
                </div>
              </a>
            </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* ===== LEARNING BY CREATING / Blog teaser ===== */}
      <section className="section">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 80, alignItems: "center" }}>
            <Reveal>
              <div>
                <div className="eyebrow" style={{ marginBottom: 32 }}>
                  <T en="05 — Blog" zh="05 — 博客" />
                </div>
                <h2 className="display-lg">
                  <T
                    en={<><span className="serif-italic">Learning</span> By <span className="serif-italic">Creating.</span></>}
                    zh={<>在<span className="serif-italic">创造</span>中<span className="serif-italic">学习。</span></>} />
                  
                </h2>
                <div style={{ marginTop: 32, fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(20px, 2vw, 26px)", color: "var(--ink-mid)", maxWidth: 460, lineHeight: 1.35, paddingLeft: 24, borderLeft: "2px solid var(--blue)" }}>
                  <T
                    en={<>"I don't just <span style={{ color: "var(--ink)" }}>feel</span> life, I <span style={{ color: "var(--ink)" }}>express</span> it."</>}
                    zh={<>「我不只是<span style={{ color: "var(--ink)" }}>感受</span>生活，我<span style={{ color: "var(--ink)" }}>表达</span>它。」</>} />
                  
                </div>
                <p style={{ marginTop: 32, fontSize: 16, color: "var(--ink-mid)", lineHeight: 1.55, maxWidth: 480 }}>
                  <T
                    en={<>Featured essay: <span className="serif-italic">From the Spotlight to the Highlands — 20 Years of Becoming.</span> Slow writing on design, AI, performance and the long quiet projects.</>}
                    zh={<>精选文章：<span className="serif-italic">《From the Spotlight to the Highlands — 20 Years of Becoming》</span>。关于设计、AI、表演，以及那些缓慢而安静的项目。</>} />
                  
                </p>
                <div style={{ marginTop: 32 }}>
                  <button className="btn btn-ghost" onClick={() => go("blog")}>
                    <T en="Go to Blog" zh="进入博客" /> <span className="arrow"><ArrowGlyph size={12} /></span>
                  </button>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div onClick={() => go("blog")} style={{ cursor: "pointer" }}>
                <div style={{ aspectRatio: "4 / 5", position: "relative", overflow: "hidden" }}>
                  <CoverImage src="images/home/blog-featured.jpg" label={t("Featured · 01", "精选 · 01")} sub={t("2004 ———— 2024", "2004 ———— 2024")} tone="mono" />
                </div>
                <div style={{ marginTop: 16, fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 22, letterSpacing: "-0.02em", lineHeight: 1.15 }}>
                  From the Spotlight<br />
                  to the <span className="serif-italic" style={{ color: "var(--ink-mid)" }}>Highlands:</span>
                  <br />
                  <span className="serif-italic" style={{ color: "var(--ink-mid)" }}>20 Years of Becoming.</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== MARQUEE ===== */}
      <div className="marquee">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, k) =>
          <React.Fragment key={k}>
              <span><T en="Product Design (UX)" zh="产品设计 (UX)" /></span>
              <span className="sep">●</span>
              <span><T en={<>AI <span className="em">PM</span></>} zh={<>AI <span className="em">产品经理</span></>} /></span>
              <span className="sep">●</span>
              <span><T en="Brand Design" zh="品牌设计" /></span>
              <span className="sep">●</span>
              <span><T en={<>Creative <span className="em">Direction</span></>} zh={<>创意<span className="em">指导</span></>} /></span>
              <span className="sep">●</span>
              <span><T en="Web / App Design" zh="网页 / 应用设计" /></span>
              <span className="sep">●</span>
              <span><T en={<>Design <span className="em">as Performance</span></>} zh={<>设计<span className="em">即表演</span></>} /></span>
              <span className="sep">●</span>
            </React.Fragment>
          )}
        </div>
      </div>

      <BigCTA onContact={() => go("contact")} />
      <Footer go={go} />
    </main>);

}

export default HomePage;