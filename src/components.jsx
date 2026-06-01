/* =========================================
   Shared Components — v3 (Editorial)
   ========================================= */

import React, { useRef, useState, useEffect } from 'react';
import { T, t, LangProvider, useLang, LangToggle } from './i18n';

/* ---------- Reveal ---------- */
function Reveal({ children, as: Tag = "div", delay = 0, clip = false, className = "", style }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setTimeout(() => setShown(true), delay);
          io.disconnect();
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  const cls = (clip ? "reveal-clip" : "reveal") + (shown ? " is-in" : "") + (className ? " " + className : "");
  if (clip) {
    return <Tag ref={ref} className={cls} style={style}><span className="clip-inner">{children}</span></Tag>;
  }
  return <Tag ref={ref} className={cls} style={style}>{children}</Tag>;
}

/* ---------- Arrow ---------- */
function ArrowGlyph({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" style={{ display: "block" }}>
      <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>);

}

/* ---------- Live local clock ---------- */
function LiveClock({ tz = "America/Los_Angeles", label = "SF" }) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000 * 30);
    return () => clearInterval(id);
  }, []);
  const fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: tz, hour12: false });
  return <span className="hero-clock">{label} · {fmt.format(now)}</span>;
}

/* ---------- Navigation ---------- */
function Nav({ route, go }) {
  const items = [
  { id: "work", label_en: "Work", label_zh: "作品" },
  { id: "about", label_en: "About her", label_zh: "关于她" },
  { id: "cv", label_en: "CV", label_zh: "简历" },
  { id: "blog", label_en: "Blog", label_zh: "博客" },
  { id: "contact", label_en: "Contact", label_zh: "联系" }];

  return (
    <nav className="nav">
      <div className="nav-brand" onClick={() => go("home")}>
        <span className="brand-mark">Zeta</span>
        <span className="brand-tag">(Cheng) Zheng</span>
      </div>
      <div className="nav-links">
        {items.map((it) =>
        <a key={it.id}
        className={"nav-link" + (route === it.id ? " is-active" : "")}
        onClick={() => go(it.id)}>
            <T en={it.label_en} zh={it.label_zh} />
          </a>
        )}
      </div>
      <LangToggle />
    </nav>);

}

/* ---------- Placeholder ---------- */
function Placeholder({ label, sub, tone = "steel", grain = false }) {
  const cls = "ph ph-" + tone + (grain ? " ph-grain" : "");
  return (
    <div className={cls}>
      {label &&
      <div className="ph-label">
          <span className="label-l">{label}</span>
          {sub && <span>{sub}</span>}
        </div>
      }
    </div>);

}

/* ---------- CoverImage — real photo, or striped placeholder if src is empty ----------
   Example: <CoverImage src="images/home/hero-zc72.jpg" alt="Zeta portrait" />
*/
function CoverImage({ src, alt = "", label, sub, tone = "steel", grain = false, fit = "cover" }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) return <Placeholder label={label} sub={sub} tone={tone} grain={grain} />;
  return (
    <div className="cover-image">
      <img
        src={src}
        alt={alt || label || ""}
        style={{ objectFit: fit }}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
      />
      {(label || sub) && (
        <div className="cover-image-label">
          {label && <span className="label-l">{label}</span>}
          {sub && <span>{sub}</span>}
        </div>
      )}
    </div>
  );
}

/* ---------- Project card ---------- */
function ProjectCard({ project, index, onClick }) {
  return (
    <div className="project" onClick={onClick}>
      {(index || project.role) &&
      <div className="index-line">
          <span>{index || ""}</span>
          <span className="role-pill">{project.role}</span>
        </div>
      }
      <div className="image">
        <CoverImage
          src={project.image}
          alt={project.title}
          label={project.img}
          sub={project.year}
          tone={project.tone || "steel"}
        />
      </div>
      <div className="meta">
        <div className="name">
          {project.title}
          {project.titleEm && <span className="serif-italic" style={{ color: "var(--ink-mid)", marginLeft: 6 }}>{project.titleEm}</span>}
        </div>
        <div className="role">{project.year}</div>
      </div>
      {project.tags &&
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 4 }}>
          {project.tags.map((t) => <span key={t} className="tag tag-square">{t}</span>)}
        </div>
      }
    </div>);

}

/* ---------- Big CTA ---------- */
function BigCTA({ onContact }) {
  return (
    <section className="section-ink" style={{ padding: "96px 32px 120px" }}>
      <div className="wrap" style={{ padding: 0 }}>
        <Reveal>
          <div className="eyebrow on-dark">
            <T en="Have a demo in mind?" zh="有 想 做 的 事 吗 ？" />
          </div>
        </Reveal>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 32, marginTop: 32 }}>
          <div>
            <Reveal clip>
              <h2 className="display-xl" style={{ color: "var(--paper)" }}>
                <T en="Let's make" zh="一起做" />
              </h2>
            </Reveal>
            <Reveal clip delay={120}>
              <h2 className="display-xl" style={{ color: "var(--paper)" }}>
                <T
                  en={<>something <span className="serif-italic" style={{ color: "var(--steel)" }}>worth</span></>}
                  zh={<>一些<span className="serif-italic" style={{ color: "var(--steel)" }}>值得</span></>} />
                
              </h2>
            </Reveal>
            <Reveal clip delay={240}>
              <h2 className="display-xl" style={{ color: "var(--paper)" }}>
                <T
                  en={<span className="serif-italic" style={{ color: "var(--steel)" }}>looking at.</span>}
                  zh={<span className="serif-italic" style={{ color: "var(--steel)" }}>被看见的事。</span>} />
                
              </h2>
            </Reveal>
          </div>
          <Reveal delay={360}>
            <button className="btn btn-light" onClick={onContact}>
              <T en="Get in touch" zh="联系我" /> <span className="arrow"><ArrowGlyph size={12} /></span>
            </button>
          </Reveal>
        </div>
      </div>
    </section>);

}

/* ---------- Footer ---------- */
function Footer({ go }) {
  return (
    <footer className="footer">

      <div className="footer-cols">
        <div className="footer-col">
          <div className="footer-col-title"><T en="Brief Intro" zh="个 人 简 介" /></div>
          <div className="text" style={{ maxWidth: 420, lineHeight: 1.55, fontSize: 15 }}>
            <T
              en={<>Zeta(Cheng) Zheng — a multidisciplinary designer focusing on <span className="serif-italic">interaction, product, and visual design,</span> and a product manager specializing in <span className="serif-italic">AI products.</span></>}
              zh={<>Zeta(Cheng) Zheng —— 多元设计师，专注于<span className="serif-italic">交互、产品与视觉设计；</span>同时是一名 <span className="serif-italic">AI 产品</span>方向的产品经理。</>} />
            
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-col-title"><T en="Site" zh="站 点" /></div>
          <a onClick={() => go("home")}><T en="Home" zh="首页" /></a>
          <a onClick={() => go("work")}><T en="Work" zh="作品" /></a>
          <a onClick={() => go("about")}><T en="About her" zh="关于她" /></a>
          <a onClick={() => go("cv")}><T en="CV" zh="简历" /></a>
          <a onClick={() => go("blog")}><T en="Blog" zh="博客" /></a>
        </div>
        <div className="footer-col">
          <div className="footer-col-title"><T en="Elsewhere" zh="其 他 平 台" /></div>
          <a href="https://www.linkedin.com/in/zeta-zheng-65b580294" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href="https://www.instagram.com/zetazheng_0702" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
          <a href="https://www.youtube.com/@zetazheng_0702" target="_blank" rel="noopener noreferrer">YouTube ↗</a>
          <a href="https://www.xiaohongshu.com/user/profile/5a06ae22e8ac2b0a7b3537df" target="_blank" rel="noopener noreferrer">小红书 ↗</a>
          <a href="https://music.163.com/#/artist?id=34422300" target="_blank" rel="noopener noreferrer">网易云音乐 ↗</a>
        </div>
        <div className="footer-col">
          <div className="footer-col-title"><T en="Get in touch" zh="联 系" /></div>
          <a href="mailto:chengzheng0702@gmail.com">chengzheng0702@gmail.com ↗</a>
          <a href="mailto:zhengcheng22@163.com">zhengcheng22@163.com ↗</a>
          <div className="text" style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.6, marginTop: 14 }}>
            <T
              en={<>Open to design partnerships<br />and AI product work.</>}
              zh={<>可接受设计合作<br />及 AI 产品工作邀约</>} />
            
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div>© 2026 Zeta(Cheng) Zheng <span style={{ opacity: 0.5 }}>·</span> <T en="Personal Web" zh="个 人 网 站" /></div>
      </div>
    </footer>);

}

export { Reveal, Nav, Footer, Placeholder, CoverImage, ProjectCard, BigCTA, ArrowGlyph, LiveClock };