/* =========================================
   Project Detail Page — v3.1 · Editorial
   Single reusable component driven by PROJECTS[slug]
   ========================================= */

import React, { useEffect } from 'react';
import { T, t, useLang } from './i18n';
import { Reveal, Placeholder, CoverImage, ArrowGlyph, BigCTA, Footer } from './components';
import { PROJECTS } from './project-data';

function pickArr(en, zh, lang) { return (lang === "zh" && zh) ? zh : en; }
function pickStr(en, zh, lang) { return (lang === "zh" && zh != null) ? zh : en; }

/* ---------- Pieces ---------- */
function RoleList({ items_en, items_zh }) {
  const { lang } = useLang();
  const items = pickArr(items_en, items_zh, lang);
  return (
    <ul className="pd-role-list" style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {items.map((txt, i) => (
        <li key={i} className="pd-role-item">
          <span className="pd-role-num">— 0{i + 1}</span>
          <span className="pd-role-text">{txt}</span>
        </li>
      ))}
    </ul>
  );
}

function CardGrid({ cards, cols = 3 }) {
  const { lang } = useLang();
  return (
    <div className={`pd-card-grid cols-${cols}`}>
      {cards.map((c, i) => (
        <div key={i} className="pd-card">
          <div className="pd-card-num">{pickStr(c.num_en, c.num_zh, lang)}</div>
          <div className="pd-card-title">{pickStr(c.title_en, c.title_zh, lang)}</div>
          <div className="pd-card-body">{pickStr(c.body_en, c.body_zh, lang)}</div>
        </div>
      ))}
    </div>
  );
}

function ScenariosBlock({ items }) {
  const { lang } = useLang();
  return (
    <div className="pd-scenarios">
      {items.map((s, i) => (
        <div key={i} className="pd-scenario">
          <div className="pd-scenario-num">{s.num}</div>
          <div className="pd-scenario-title">{pickStr(s.title_en, s.title_zh, lang)}</div>
          <div className="pd-scenario-body">{pickStr(s.body_en, s.body_zh, lang)}</div>
        </div>
      ))}
    </div>
  );
}

function Timeline({ items }) {
  const { lang } = useLang();
  return (
    <div className="pd-timeline">
      {items.map((it, i) => (
        <div key={i} className="pd-timeline-item">
          <div className="pd-timeline-phase">{pickStr(it.phase_en, it.phase_zh, lang)}</div>
          <div className="pd-timeline-title">{pickStr(it.title_en, it.title_zh, lang)}</div>
          <div className="pd-timeline-body">{pickStr(it.body_en, it.body_zh, lang)}</div>
        </div>
      ))}
    </div>
  );
}

function UserJourney({ stages, note_en, note_zh }) {
  const { lang } = useLang();
  return (
    <>
      <div className="pd-journey">
        {stages.map((st, i) => (
          <div key={i} className="pd-journey-col">
            <span className="pd-journey-stage">{pickStr(st.stage_en, st.stage_zh, lang)}</span>
            {pickArr(st.items_en, st.items_zh, lang).map((it, j) => (
              <div key={`a${j}`} className="pd-journey-item">{it}</div>
            ))}
            {st.addItems_en && pickArr(st.addItems_en, st.addItems_zh, lang).map((it, j) => (
              <div key={`b${j}`} className="pd-journey-item is-add">{it}</div>
            ))}
          </div>
        ))}
      </div>
      {note_en && (
        <p className="mono-cap" style={{ marginTop: 20, color: "var(--blue)" }}>
          {pickStr(note_en, note_zh, lang)}
        </p>
      )}
    </>
  );
}

function ArchiveList({ items }) {
  const { lang } = useLang();
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "rgba(255,255,255,0.16)", border: "1px solid rgba(255,255,255,0.16)" }}>
      {items.map((it, i) => (
        <article key={i} style={{ background: "var(--ink)", padding: "32px 28px", display: "grid", gridTemplateColumns: "80px 1fr", gap: 24, alignItems: "start" }}>
          <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 48, color: "rgba(255,255,255,0.4)", lineHeight: 1 }}>{it.num}</div>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 16, marginBottom: 8, flexWrap: "wrap" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 22, color: "var(--paper)", letterSpacing: "-0.02em", margin: 0 }}>
                {pickStr(it.title_en, it.title_zh, lang)}
              </h3>
              <span className="mono-cap" style={{ color: "rgba(255,255,255,0.5)" }}>{pickStr(it.meta_en, it.meta_zh, lang)}</span>
            </div>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 17, color: "var(--steel)", lineHeight: 1.4, marginBottom: 12, maxWidth: 720 }}>
              {pickStr(it.sub_en, it.sub_zh, lang)}
            </p>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.65, maxWidth: 720, marginBottom: 14 }}>
              {pickStr(it.body_en, it.body_zh, lang)}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {pickArr(it.tags_en, it.tags_zh, lang).map(t => (
                <span key={t} className="tag tag-square" style={{ borderColor: "rgba(255,255,255,0.22)", color: "rgba(255,255,255,0.8)" }}>{t}</span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

/* ---------- Image Grid ---------- */
function ImageGrid({ images, cols = 2 }) {
  const { lang } = useLang();
  const gridCols = cols === 3 ? "repeat(3, 1fr)" : cols === 4 ? "repeat(4, 1fr)" : "repeat(2, 1fr)";
  return (
    <div className="pd-image-grid" style={{ display: "grid", gridTemplateColumns: gridCols, gap: 16, marginTop: 32 }}>
      {images.map((img, i) => (
        <div key={i} style={{ aspectRatio: img.aspectRatio || "4/3" }}>
          <CoverImage
            src={img.src}
            alt={pickStr(img.label_en, img.label_zh, lang)}
            label={pickStr(img.label_en, img.label_zh, lang)}
            sub={pickStr(img.sub_en, img.sub_zh, lang)}
            tone={img.tone || "steel"}
          />
        </div>
      ))}
    </div>
  );
}

/* ---------- Video Embed ---------- */
function VideoEmbed({ videoUrl, caption_en, caption_zh }) {
  const { lang } = useLang();
  const caption = pickStr(caption_en, caption_zh, lang);
  const isIframe = videoUrl.includes("youtube") || videoUrl.includes("vimeo") || videoUrl.includes("embed");

  return (
    <div className="pd-video" style={{ marginTop: 32 }}>
      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", background: "var(--ink)" }}>
        {isIframe ? (
          <iframe
            src={videoUrl}
            title="Video"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video
            src={videoUrl}
            controls
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "contain" }}
          />
        )}
      </div>
      {caption && (
        <div className="mono-cap" style={{ marginTop: 12, color: "var(--ink-mid)" }}>{caption}</div>
      )}
    </div>
  );
}

/* ---------- PDF Viewer ---------- */
function PdfViewer({ pdfUrl, downloadLabel_en, downloadLabel_zh }) {
  const { lang } = useLang();
  const dlLabel = pickStr(downloadLabel_en, downloadLabel_zh, lang) || (lang === "zh" ? "下载 PDF" : "Download PDF");
  const fileName = pdfUrl.split('/').pop();

  return (
    <div className="pd-pdf" style={{ marginTop: 32 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, flexWrap: "wrap", gap: 12 }}>
        <span className="mono-cap" style={{ color: "var(--ink-mid)" }}>{fileName}</span>
        <a
          href={pdfUrl}
          download={fileName}
          className="btn btn-ghost"
          style={{ fontSize: 13, padding: "8px 16px" }}
        >
          {dlLabel} ↓
        </a>
      </div>
      <div style={{ border: "1px solid var(--line)", borderRadius: 4, overflow: "hidden", height: 600, background: "var(--paper)" }}>
        <iframe
          src={pdfUrl}
          title={fileName}
          style={{ width: "100%", height: "100%", border: 0 }}
        />
      </div>
    </div>
  );
}

function BrandBand({ wordmark_en, wordmark_zh, sub_en, sub_zh, desc_en, desc_zh, attrs_en, attrs_zh, label_en, label_zh }) {
  const { lang } = useLang();
  const wm = pickArr(wordmark_en, wordmark_zh, lang);
  return (
    <section className="pd-section-ink">
      <div className="wrap" style={{ padding: 0 }}>
        <Reveal><div className="eyebrow on-dark">{pickStr(label_en, label_zh, lang)}</div></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, marginTop: 48, alignItems: "center" }}>
          <div>
            <Reveal clip>
              <div className="display-xl" style={{ color: "var(--paper)" }}>
                {wm[0]}<br />
                <span className="serif-italic" style={{ color: "var(--steel)" }}>{wm[1]}</span>
              </div>
            </Reveal>
            <div className="mono-cap" style={{ color: "rgba(255,255,255,0.5)", marginTop: 24 }}>
              {pickStr(sub_en, sub_zh, lang)}
            </div>
            <p style={{ marginTop: 24, fontSize: 15, lineHeight: 1.65, color: "rgba(255,255,255,0.65)", maxWidth: 540 }}>
              {pickStr(desc_en, desc_zh, lang)}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 28 }}>
              {pickArr(attrs_en, attrs_zh, lang).map(a => (
                <span key={a} className="tag" style={{ borderColor: "rgba(255,255,255,0.22)", color: "rgba(255,255,255,0.8)" }}>{a}</span>
              ))}
            </div>
          </div>
          <Reveal delay={120}>
            <div style={{ aspectRatio: "1/1" }}>
              <Placeholder label="LUCI · Brand system" sub="Identity preview" tone="mono" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Section dispatcher ---------- */
function ProjectSection({ section, goProject }) {
  const { lang } = useLang();
  const label = pickStr(section.label_en, section.label_zh, lang);
  const title = pickStr(section.title_en, section.title_zh, lang);
  const intro = pickStr(section.intro_en, section.intro_zh, lang);
  const body  = pickStr(section.body_en,  section.body_zh,  lang);

  const sectionClass = section.bg === "ink"  ? "pd-section-ink"
                    : section.bg === "mist" ? "pd-section-mist"
                    : "pd-section";

  /* brand-band has its own dark layout */
  if (section.type === "brand-band") {
    return <BrandBand {...section} />;
  }

  return (
    <section className={sectionClass}>
      <div className="wrap" style={{ padding: 0 }}>
        <Reveal><div className={"eyebrow" + (section.bg === "ink" ? " on-dark" : "")}>{label}</div></Reveal>
        {title && (
          <Reveal delay={80}>
            <h2 className="display-md" style={{ marginTop: 20, marginBottom: 24, color: section.bg === "ink" ? "var(--paper)" : "var(--ink)", maxWidth: 900 }}>
              {title}
            </h2>
          </Reveal>
        )}

        {section.type === "role-list" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, marginTop: 32 }}>
            <Reveal delay={120}>
              {intro && (
                <p style={{ fontSize: 16, lineHeight: 1.65, color: section.bg === "ink" ? "rgba(255,255,255,0.65)" : "var(--ink-mid)", maxWidth: 540 }}>
                  {intro}
                </p>
              )}
              {section.ctaSlug && (
                <button className={section.bg === "ink" ? "btn btn-light" : "btn btn-ghost"} style={{ marginTop: 24 }} onClick={() => goProject(section.ctaSlug)}>
                  {pickStr(section.cta_en, section.cta_zh, lang)} <span className="arrow"><ArrowGlyph size={12} /></span>
                </button>
              )}
            </Reveal>
            <Reveal delay={200}>
              <RoleList items_en={section.items_en} items_zh={section.items_zh} />
            </Reveal>
          </div>
        )}

        {(section.type === "cards-3" || section.type === "cards-4") && (
          <>
            {intro && (
              <Reveal delay={120}>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: section.bg === "ink" ? "rgba(255,255,255,0.6)" : "var(--ink-mid)", maxWidth: 720, marginBottom: 32 }}>
                  {intro}
                </p>
              </Reveal>
            )}
            <Reveal delay={180}>
              <CardGrid cards={section.cards} cols={section.type === "cards-3" ? 3 : 4} />
            </Reveal>
          </>
        )}

        {section.type === "scenarios" && (
          <Reveal delay={120}>
            <ScenariosBlock items={section.items} />
          </Reveal>
        )}

        {section.type === "timeline" && (
          <Reveal delay={120}>
            <div style={{ marginTop: 24 }}>
              <Timeline items={section.items} />
            </div>
          </Reveal>
        )}

        {section.type === "user-journey" && (
          <Reveal delay={120}>
            <UserJourney stages={section.stages} note_en={section.note_en} note_zh={section.note_zh} />
          </Reveal>
        )}

        {section.type === "intro-block" && (
          <Reveal delay={120}>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: section.bg === "ink" ? "rgba(255,255,255,0.7)" : "var(--ink-mid)", maxWidth: 780 }}>
              {body}
            </p>
            {section.quote_en && (
              <div className="pd-quote" style={{ marginTop: 32 }}>
                <div className="pd-quote-label">{lang === "zh" ? "引用" : "Quote"}</div>
                <div className="pd-quote-body">"{pickStr(section.quote_en, section.quote_zh, lang)}"</div>
              </div>
            )}
          </Reveal>
        )}

        {section.type === "archive-list" && (
          <Reveal delay={120}>
            <div style={{ marginTop: 24 }}>
              <ArchiveList items={section.items} />
            </div>
          </Reveal>
        )}

        {section.type === "image-grid" && (
          <Reveal delay={120}>
            <ImageGrid images={section.images} cols={section.cols || 2} />
          </Reveal>
        )}

        {section.type === "video" && (
          <Reveal delay={120}>
            <VideoEmbed videoUrl={section.videoUrl} caption_en={section.caption_en} caption_zh={section.caption_zh} />
          </Reveal>
        )}

        {section.type === "pdf" && (
          <Reveal delay={120}>
            <PdfViewer pdfUrl={section.pdfUrl} downloadLabel_en={section.downloadLabel_en} downloadLabel_zh={section.downloadLabel_zh} />
          </Reveal>
        )}
      </div>
    </section>
  );
}

/* ---------- Main ProjectPage ---------- */
function ProjectPage({ slug, go, goProject }) {
  const { lang } = useLang();
  const p = PROJECTS[slug];

  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [slug]);

  if (!p) {
    return (
      <main className="page-root">
        <section style={{ padding: "120px 32px", textAlign: "center" }}>
          <div className="eyebrow" style={{ justifyContent: "center", marginBottom: 24 }}>
            <T en="Project not found" zh="项目未找到" />
          </div>
          <button className="btn btn-ghost" onClick={() => go("work")}>
            <T en="← All Work" zh="← 全部作品" />
          </button>
        </section>
        <Footer go={go} />
      </main>
    );
  }

  const title = pickArr(p.title_en, p.title_zh, lang);
  const next = p.nextSlug && PROJECTS[p.nextSlug];

  return (
    <main className="page-root" data-screen-label={`Work · ${p.slug}`}>

      {/* ===== HERO ===== */}
      <section style={{ padding: "48px 32px 64px" }}>
        <Reveal>
          <div className="edge-row" style={{ borderTop: "none", marginBottom: 48 }}>
            <span>
              <a onClick={() => go("home")} style={{ cursor: "pointer" }}><T en="Home" zh="首页" /></a>
              <span style={{ margin: "0 8px", color: "var(--ink-faint)" }}>/</span>
              <a onClick={() => go("work")} style={{ cursor: "pointer" }}><T en="Work" zh="作品" /></a>
              <span style={{ margin: "0 8px", color: "var(--ink-faint)" }}>/</span>
              <span style={{ color: "var(--ink)" }}>{title.join("")}</span>
            </span>
            <span>{p.era}</span>
            <span>{p.index} / 06</span>
            <span style={{ color: "var(--ink)", cursor: "pointer" }} onClick={() => go("work")}>
              <T en="← All work" zh="← 全部作品" />
            </span>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 80, alignItems: "end" }}>
          <div>
            <Reveal>
              <div className="mono-cap" style={{ marginBottom: 28 }}>
                {pickStr(p.eyebrow_en, p.eyebrow_zh, lang)}
              </div>
            </Reveal>
            {p.parent_en && (
              <Reveal delay={60}>
                <div className="mono-cap" style={{ marginBottom: 16, color: "var(--blue)", cursor: "pointer" }} onClick={() => p.parentSlug && goProject(p.parentSlug)}>
                  {pickStr(p.parent_en, p.parent_zh, lang)}
                </div>
              </Reveal>
            )}
            <Reveal clip>
              <h1 className="display-xxl" style={{ fontSize: "clamp(64px, 11vw, 180px)" }}>{title[0]}</h1>
            </Reveal>
            {title[1] && (
              <Reveal clip delay={140}>
                <h1 className="display-xxl" style={{ fontSize: "clamp(64px, 11vw, 180px)" }}>
                  <span className="serif-italic">{title[1]}</span>
                </h1>
              </Reveal>
            )}
            <Reveal delay={260}>
              <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(20px, 2.2vw, 30px)", color: "var(--ink-mid)", marginTop: 24, maxWidth: 680, lineHeight: 1.35, paddingLeft: 24, borderLeft: "2px solid var(--blue)" }}>
                {pickStr(p.tagline_en, p.tagline_zh, lang)}
              </div>
            </Reveal>
            <Reveal delay={360}>
              <p className="lede" style={{ marginTop: 28, maxWidth: 620, fontSize: 17 }}>
                {pickStr(p.desc_en, p.desc_zh, lang)}
              </p>
            </Reveal>
            <Reveal delay={440}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 28 }}>
                {pickArr(p.tags_en, p.tags_zh, lang).map(t => (
                  <span key={t} className="tag tag-square">{t}</span>
                ))}
              </div>
            </Reveal>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Reveal delay={200}>
              <div style={{ aspectRatio: "4/5" }}>
                <CoverImage
                  src={p.heroImg.src}
                  alt={pickStr(p.heroImg.label_en, p.heroImg.label_zh, lang)}
                  label={pickStr(p.heroImg.label_en, p.heroImg.label_zh, lang)}
                  sub={pickStr(p.heroImg.sub_en, p.heroImg.sub_zh, lang)}
                  tone={p.heroImg.tone || "mono"}
                />
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="pd-meta-grid">
                {p.meta.map((m, i) => (
                  <div key={i}>
                    <div className="pd-meta-label">{pickStr(m.label_en, m.label_zh, lang)}</div>
                    <div className="pd-meta-value" style={{ whiteSpace: "pre-line" }}>
                      {pickStr(m.value_en, m.value_zh, lang)}
                    </div>
                  </div>
                ))}
              </div>
              {p.nda && (
                <div className="pd-nda">
                  <span className="pd-nda-icon">⊘</span>
                  <span className="pd-nda-text">
                    <T
                      en={<>Process details, internal UI, and proprietary systems are under <span className="serif-italic">NDA.</span> This page shows public brand outcomes and impact results.</>}
                      zh={<>过程细节、内部 UI 与专有系统受 <span className="serif-italic">NDA</span> 保护。本页仅展示公开的品牌成果与影响数据。</>}
                    />
                  </span>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== SECTIONS ===== */}
      {p.sections.map((s, i) => (
        <ProjectSection key={i} section={s} goProject={goProject} />
      ))}

      {/* ===== STATS ===== */}
      <section className="pd-section-tight">
        <div className="wrap" style={{ padding: 0 }}>
          <Reveal>
            <div className="eyebrow" style={{ marginBottom: 24 }}>
              <T en="Impact" zh="影响" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="pd-stats">
              {p.stats.map((s, i) => (
                <div key={i} className="pd-stat">
                  <div className="pd-stat-num">{pickStr(s.num_en, s.num_zh, lang) || s.num}</div>
                  <div className="pd-stat-label" style={{ whiteSpace: "pre-line" }}>
                    {pickStr(s.label_en, s.label_zh, lang)}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== NEXT PROJECT ===== */}
      {next && (
        <section style={{ padding: "120px 32px", borderTop: "1px solid var(--ink)" }}>
          <div className="wrap" style={{ padding: 0 }}>
            <Reveal>
              <div className="mono-cap" style={{ marginBottom: 24, color: "var(--blue)" }}>
                <T en="↘ Next project" zh="↘ 下一个项目" />
              </div>
            </Reveal>
            <div onClick={() => goProject(next.slug)} style={{ cursor: "pointer", display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 64, alignItems: "end" }}>
              <Reveal clip>
                <h2 className="display-xl">
                  {pickArr(next.title_en, next.title_zh, lang)[0]}
                  {pickArr(next.title_en, next.title_zh, lang)[1] && (
                    <span className="serif-italic" style={{ color: "var(--ink-mid)" }}> {pickArr(next.title_en, next.title_zh, lang)[1]}</span>
                  )}
                  <span style={{ color: "var(--blue)" }}> →</span>
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <div>
                  <div className="mono-cap" style={{ marginBottom: 12 }}>{next.era}</div>
                  <p style={{ fontSize: 16, lineHeight: 1.55, color: "var(--ink-mid)", maxWidth: 420 }}>
                    {pickStr(next.tagline_en, next.tagline_zh, lang)}
                  </p>
                  <button className="btn btn-ghost" style={{ marginTop: 24 }} onClick={(e) => { e.stopPropagation(); goProject(next.slug); }}>
                    <T en="View project" zh="查看项目" /> <span className="arrow"><ArrowGlyph size={12} /></span>
                  </button>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      <BigCTA onContact={() => go("contact")} />
      <Footer go={go} />
    </main>
  );
}

export default ProjectPage;
