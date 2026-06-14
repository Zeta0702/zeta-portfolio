/* =========================================
   Project Detail Page — v3.1 · Editorial
   Single reusable component driven by PROJECTS[slug]
   ========================================= */

import React from 'react';
import { useLang, T } from './i18n';
import { Reveal, BigCTA, Footer, ArrowGlyph, Placeholder } from './components';

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

function BrandBand({ wordmark_en, wordmark_zh, sub_en, sub_zh, desc_en, desc_zh, attrs_en, attrs_zh, label_en, label_zh, image }) {
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
              {image ? (
                <img src={image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} loading="lazy" />
              ) : (
                <Placeholder label="LUCI · Brand system" sub="Identity preview" tone="mono" />
              )}
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
        {(section.type === "video" || section.type === "video-split") && (
          <>
            <Reveal><div className={"eyebrow" + (section.bg === "ink" ? " on-dark" : "")}>{label}</div></Reveal>
            {title && (
              <Reveal delay={80}>
                <h2 className="display-md" style={{ marginTop: 20, marginBottom: 24, color: section.bg === "ink" ? "var(--paper)" : "var(--ink)", maxWidth: 900 }}>
                  {title}
                </h2>
              </Reveal>
            )}
          </>
        )}
        {section.type !== "video" && section.type !== "video-split" && (
          <>
            <Reveal><div className={"eyebrow" + (section.bg === "ink" ? " on-dark" : "")}>{label}</div></Reveal>
            {title && (
              <Reveal delay={80}>
                <h2 className="display-md" style={{ marginTop: 20, marginBottom: 24, color: section.bg === "ink" ? "var(--paper)" : "var(--ink)", maxWidth: 900 }}>
                  {title}
                </h2>
              </Reveal>
            )}
          </>
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

        {section.type === "video" && (
          <Reveal delay={120}>
            <VideoEmbed section={section} />
          </Reveal>
        )}

        {section.type === "video-split" && (
          <Reveal delay={120}>
            <VideoSplit section={section} />
          </Reveal>
        )}

        {section.type === "carousel" && (
          <Reveal delay={120}>
            <Carousel slides={section.slides} dark={section.bg === "ink"} />
          </Reveal>
        )}

        {section.type === "pdf-flip" && (
          <Reveal delay={120}>
            <PdfFlip section={section} />
          </Reveal>
        )}

        {section.linkUrl && (
          <Reveal delay={240}>
            <a className={section.bg === "ink" ? "btn btn-light" : "btn btn-dark"}
               href={section.linkUrl} target="_blank" rel="noopener noreferrer"
               style={{ marginTop: 40 }}>
              {pickStr(section.link_en, section.link_zh, lang)} <span className="arrow"><ArrowGlyph size={12} /></span>
            </a>
          </Reveal>
        )}
      </div>
    </section>
  );
}

/* ---------- Video embed (YouTube facade) ---------- */
function VideoSplit({ section }) {
  const { lang } = useLang();
  const heading = pickStr(section.videoTitle_en, section.videoTitle_zh, lang);
  return (
    <div style={{ marginTop: 8 }}>
      <div style={{ maxWidth: 900, aspectRatio: "16 / 9", background: "var(--ink)", overflow: "hidden" }}>
        <video
          controls
          preload="metadata"
          playsInline
          poster={section.poster || undefined}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", background: "#000" }}>
          {section.videoFile && <source src={section.videoFile} type="video/mp4" />}
        </video>
      </div>
      {heading && (
        <div className="mono-cap" style={{ marginTop: 12 }}>{heading}</div>
      )}
      <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink)", maxWidth: 720, marginTop: 28 }}>
        {pickStr(section.body_en, section.body_zh, lang)}
      </p>
    </div>
  );
}

/* ---------- Video embed (YouTube facade) ---------- */
function VideoEmbed({ section }) {
  const { lang } = useLang();
  const [play, setPlay] = React.useState(false);
  const id = section.videoId;
  const thumb = `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
  const heading = pickStr(section.videoTitle_en, section.videoTitle_zh, lang);
  const author = section.videoAuthor || "Zeta Zheng";
  return (
    <div style={{ marginTop: 24 }}>
      <div style={{ position: "relative", maxWidth: 900, aspectRatio: "16 / 9", background: "var(--mist)", overflow: "hidden" }}>
        {play ? (
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
            title={heading || "video"}
            allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }} />
        ) : (
          <button
            onClick={() => setPlay(true)}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", padding: 0, border: "none", cursor: "pointer", background: "transparent" }}
            aria-label="Play video">
            <img src={thumb} alt={heading || "video thumbnail"} loading="lazy"
                 onError={(e) => { e.currentTarget.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`; }}
                 style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            {/* top caption */}
            {heading && (
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, padding: "20px 24px", textAlign: "left",
                background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 100%)", display: "flex", gap: 12, alignItems: "center" }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.9)", flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 14, color: "var(--ink)" }}>Z</div>
                <div>
                  <div style={{ color: "#fff", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, letterSpacing: "-0.01em", lineHeight: 1.2 }}>{heading}</div>
                  <div style={{ color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-display)", fontSize: 13, marginTop: 2 }}>{author}</div>
                </div>
              </div>
            )}
            {/* play button */}
            <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
              width: 68, height: 48, background: "#f00", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: "17px solid #fff", marginLeft: 3 }} />
            </span>
            {/* bottom-right platform pill */}
            <span style={{ position: "absolute", bottom: 18, right: 18, display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(0,0,0,0.45)", color: "rgba(255,255,255,0.9)", padding: "8px 14px", borderRadius: 100,
              fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em" }}>
              {lang === "zh" ? "前往平台观看" : "Watch on"} ▶ YouTube
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

/* ---------- PDF flipbook (Issuu-style) ---------- */
function PdfFlip({ section }) {
  const { lang } = useLang();
  const [doc, setDoc] = React.useState(null);
  const [page, setPage] = React.useState(1);
  const [numPages, setNumPages] = React.useState(0);
  const [ready, setReady] = React.useState(false);
  const canvasRef = React.useRef(null);
  const wrapRef = React.useRef(null);
  const file = section.pdfFile;

  React.useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        if (!window.pdfjsLib) {
          await new Promise((res, rej) => {
            const s = document.createElement("script");
            s.src = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js";
            s.onload = res; s.onerror = rej;
            document.head.appendChild(s);
          });
          window.pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
        }
        const pdf = await window.pdfjsLib.getDocument(file).promise;
        if (cancelled) return;
        setDoc(pdf); setNumPages(pdf.numPages); setReady(true);
      } catch (e) { setReady(false); }
    }
    load();
    return () => { cancelled = true; };
  }, [file]);

  React.useEffect(() => {
    if (!doc) return;
    let cancelled = false;
    doc.getPage(page).then((pg) => {
      if (cancelled) return;
      const canvas = canvasRef.current; if (!canvas) return;
      const vp0 = pg.getViewport({ scale: 1 });
      const targetW = Math.min(wrapRef.current ? wrapRef.current.clientWidth : 900, 1100);
      const dpr = window.devicePixelRatio || 1;
      const scale = (targetW / vp0.width) * dpr * 2;
      const vp = pg.getViewport({ scale });
      canvas.width = Math.floor(vp.width);
      canvas.height = Math.floor(vp.height);
      canvas.style.width = '100%';
      canvas.style.height = 'auto';
      pg.render({ canvasContext: canvas.getContext("2d"), viewport: vp, background: 'white' });
    });
    return () => { cancelled = true; };
  }, [doc, page]);

  const go = (d) => setPage((p) => Math.min(Math.max(1, p + d), numPages || 1));

  return (
    <div style={{ marginTop: 24 }} ref={wrapRef}>
      <div style={{ background: "var(--ink)", padding: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <div className="mono-cap" style={{ color: "rgba(255,255,255,0.5)" }}>
            {ready ? `${String(page).padStart(2,"0")} / ${String(numPages).padStart(2,"0")}` : (lang === "zh" ? "加载中…" : "Loading…")}
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={() => go(-1)} disabled={page <= 1}
              style={{ width: 36, height: 36, border: "1px solid rgba(255,255,255,0.3)", color: "#fff", background: "transparent", cursor: page <= 1 ? "default" : "pointer", opacity: page <= 1 ? 0.35 : 1, fontSize: 16 }}>←</button>
            <button onClick={() => go(1)} disabled={numPages && page >= numPages}
              style={{ width: 36, height: 36, border: "1px solid rgba(255,255,255,0.3)", color: "#fff", background: "transparent", cursor: (numPages && page >= numPages) ? "default" : "pointer", opacity: (numPages && page >= numPages) ? 0.35 : 1, fontSize: 16 }}>→</button>
          </div>
        </div>
        <div style={{ overflow: "hidden" }}>
          {ready ? (
            <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "auto" }} />
          ) : (
            <div style={{ padding: "80px 24px", textAlign: "center" }}>
              <div className="mono-cap" style={{ color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>
                {lang === "zh" ? "PDF 预览" : "PDF preview"}
              </div>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, maxWidth: 420, lineHeight: 1.6, margin: "0 auto" }}>
                {lang === "zh"
                  ? <>把演示文稿命名为 <code style={{ color: "var(--steel)" }}>{file}</code> 放进同目录即可在此翻页预览。</>
                  : <>Drop the deck as <code style={{ color: "var(--steel)" }}>{file}</code> in the same folder to flip through it here.</>}
              </p>
            </div>
          )}
        </div>
      </div>
      {section.pdfDownload && (
        <a className="btn btn-ghost" href={section.pdfDownload} target="_blank" rel="noopener noreferrer" style={{ marginTop: 16 }}>
          🔗 {pickStr("Open full PDF", "打开完整 PDF", lang)}
        </a>
      )}
    </div>
  );
}

/* ---------- Carousel (PPT-sized scroll slider) ---------- */
function Carousel({ slides = [], dark = false }) {
  const { lang } = useLang();
  const ref = React.useRef(null);
  const scrollBy = (dir) => {
    const el = ref.current; if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.7), behavior: "smooth" });
  };
  return (
    <div style={{ marginTop: 16 }}>
      <div ref={ref} className="pd-carousel">
        {slides.map((s, i) => {
          const label = pickStr(s.label_en, s.label_zh, lang);
          const sub = `${String(i + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
          return (
            <div key={i} className="pd-slide">
              {s.image ? (
                <div style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={s.image}
                    alt={label}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.classList.add('ph', `ph-${s.tone || 'mono'}`); }}
                  />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 20px', background: 'linear-gradient(transparent, rgba(0,0,0,0.5))', color: '#fff' }}>
                    <span className="label-l" style={{ color: '#fff' }}>{label}</span>
                    <span style={{ marginLeft: 12, opacity: 0.7, fontFamily: 'var(--font-mono)', fontSize: 12 }}>{sub}</span>
                  </div>
                </div>
              ) : (
                <Placeholder label={label} sub={sub} tone={s.tone || "mono"} />
              )}
            </div>
          );
        })}
      </div>
      <div className="pd-carousel-nav">
        <span className="pd-carousel-hint">
          <T en="Slide / drag to browse →" zh="左右滑动浏览 →" />
        </span>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="pd-carousel-btn" onClick={() => scrollBy(-1)} aria-label="previous">←</button>
          <button className="pd-carousel-btn" onClick={() => scrollBy(1)} aria-label="next">→</button>
        </div>
      </div>
    </div>
  );
}

/* ---------- Main ProjectPage ---------- */
function ProjectPage({ slug, go, goProject }) {
  const { lang } = useLang();
  const p = (window.PROJECTS || {})[slug];

  React.useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [slug]);

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
  const next = p.nextSlug && window.PROJECTS[p.nextSlug];

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

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 64, alignItems: "end" }}>
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
            {p.siteUrl && (
              <Reveal delay={520}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 28 }}>
                  <a className="btn btn-dark" href={p.siteUrl} target="_blank" rel="noopener noreferrer">
                    {pickStr(p.siteLabel_en || "Visit website", p.siteLabel_zh || "访问官网", lang)}
                    <span className="arrow"><ArrowGlyph size={12} /></span>
                  </a>
                  {p.pdfUrl && (
                    <a className="btn btn-ghost" href={p.pdfUrl} target="_blank" rel="noopener noreferrer">
                      🔗 {pickStr("View PDF", "查看 PDF", lang)}
                    </a>
                  )}
                </div>
              </Reveal>
            )}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Reveal delay={200}>
              <div style={{ aspectRatio: "4/3" }}>
                {p.heroImg.src ? (
                  <div className="cover-image">
                    <img src={p.heroImg.src} alt={pickStr(p.heroImg.label_en, p.heroImg.label_zh, lang)} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: p.heroImg.position || 'center' }} loading="lazy" decoding="async" />
                    <div className="cover-image-label">
                      <span className="label-l">{pickStr(p.heroImg.label_en, p.heroImg.label_zh, lang)}</span>
                      <span>{pickStr(p.heroImg.sub_en, p.heroImg.sub_zh, lang)}</span>
                    </div>
                  </div>
                ) : (
                  <Placeholder label={pickStr(p.heroImg.label_en, p.heroImg.label_zh, lang)} sub={pickStr(p.heroImg.sub_en, p.heroImg.sub_zh, lang)} tone={p.heroImg.tone || "mono"} />
                )}
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

window.ProjectPage = ProjectPage;
export default ProjectPage;
