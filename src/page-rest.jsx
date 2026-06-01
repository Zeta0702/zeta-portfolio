/* =========================================
   About / CV / Blog / Contact — v3.1 (Bilingual)
   ========================================= */

import React, { useEffect } from 'react';
import { T, t, useLang } from './i18n';
import { Reveal, CoverImage, Placeholder, ArrowGlyph, BigCTA, Footer } from './components';

/* ============== ABOUT ============== */
const CHAPTERS = [
  {
    num: "01",
    label_en: "Kindergarten",
    label_zh: "幼儿园",
    title_en: "A Big Dream on a Small Stage",
    title_zh: "小舞台上的大梦想",
    body_en: [
      "My earliest memories are bathed in the glow of the spotlight. Even then, my love for performing was irrepressible. I was always the child at the very front of the stage, eager to shine.",
      "My world was a playground of climbing walls and the warm, encouraging smile of my piano teacher. Back then, life was simple: I pursued what I loved with a fierce, childlike confidence, unburdened by hesitation or fear.",
    ],
    body_zh: [
      "我最早的记忆都浸在聚光灯的暖光里。那时候，我对表演的爱无法压抑 —— 总是冲到舞台最前面、渴望发光。",
      "我的世界是攀爬架，是钢琴老师温暖鼓励的笑容。生活那时候很简单：我用一种孩子气的、强烈的自信追逐自己所爱，不被犹豫和恐惧束缚。",
    ],
  },
  {
    num: "02",
    label_en: "Primary School",
    label_zh: "小学",
    title_en: "Between the Stage and the Blackboard",
    title_zh: "在舞台和黑板之间",
    body_en: [
      "The next six years were a whirlwind of creativity. I joined the school dance team, enduring frequent allergic reactions to heavy stage makeup just for the thrill of the performance.",
      "When I wasn't dancing, I was the \"propaganda committee member\" — a role I held for four years, honing my skills in calligraphy and sketching on class blackboards. Those years taught me that hard work and responsibility are the foundations of standing in the light.",
    ],
    body_zh: [
      "接下来的六年是一阵创造力的旋风。我加入了学校舞蹈队，为了表演的快感，忍受着浓妆带来的频繁过敏。",
      "不跳舞的时候，我是「宣传委员」—— 在班级黑板上写写画画，这个身份持续了四年。那些年让我明白：努力和责任，是站到光里之前的根基。",
    ],
  },
  {
    num: "03",
    label_en: "Middle School",
    label_zh: "初中",
    title_en: "Finding a Voice Amidst the Noise",
    title_zh: "在喧嚣中找到自己的声音",
    body_en: [
      "In middle school, I traded my dancing shoes for a microphone. I discovered my voice, winning a spot as one of the school's \"Top Ten Singers\" and joining the choir. Professionals even suggested I had the potential for conservatory training.",
      "However, being the daughter of a strict, prominent teacher was a double-edged sword. This period was my first encounter with the \"shadow\" side of growing up — learning to navigate sensitivity, loneliness, and the quiet strength of resilience.",
    ],
    body_zh: [
      "初中我把舞鞋换成了麦克风。我发现了自己的声音，入选学校「十大歌手」，加入合唱团；甚至有专业人士建议我去音乐学院。",
      "但是，做一位严厉而出名的老师的女儿，是把双刃剑。那是我第一次接触到成长的「阴影面」—— 学着与敏感、孤独相处，也学着如何安静地坚韧。",
    ],
  },
  {
    num: "04",
    label_en: "High School",
    label_zh: "高中",
    title_en: "The Quiet Rebellion",
    title_zh: "安静的反叛",
    body_en: [
      "High school felt like a beautiful bird trapped in a rigid cage. Despite being in the top class in town, the exam-centric system clashed with my unconventional way of thinking. Artistic activities were banned, and my wide-ranging interests felt stifled.",
      "My only outlet was the late-night ride home on my e-bike — a small, solitary act of rebellion against the monotony. Those three years were dull and suffocating, yet they taught me the vital art of patience.",
    ],
    body_zh: [
      "高中像一只关在僵硬笼子里的美丽的鸟。我虽在镇上最好的班，但应试教育与我跳脱的思维方式格格不入；艺术活动被禁止，宽阔的兴趣被压抑。",
      "我唯一的出口是深夜骑电动车回家的路 —— 一种安静、孤独的反叛。那三年沉闷而压抑，却教会了我一种至关重要的能力：耐心。",
    ],
  },
  {
    num: "05",
    label_en: "University",
    label_zh: "大学",
    title_en: "A Stage of Boundless Possibilities",
    title_zh: "一座无边界的舞台",
    body_en: [
      "University was the turning point where freedom finally met opportunity. Though I wasn't an arts major, I built my own stage. I immersed myself in the student art troupe — hosting events, dancing jazz, conducting choirs, and documenting campus life through my lens.",
      "I thrived in visual design and modelling, becoming a \"jack-of-all-trades.\" Looking back, the vibrant memories of those busy years far outweighed the exhaustion of the \"unpaid labour\" I so enthusiastically embraced.",
    ],
    body_zh: [
      "大学是自由终于遇到机会的转折点。我不是艺术专业，但我搭建了自己的舞台 —— 沉浸在学生艺术团里：主持活动、跳爵士、指挥合唱团、用镜头记录校园。",
      "我在视觉设计与模特中游刃有余，成了「样样懂一点」的人。回头看，那些忙碌岁月里鲜活的记忆，远远盖过了我热情拥抱过的「无偿劳动」的疲惫。",
    ],
  },
  {
    num: "06",
    label_en: "The Gap Year",
    label_zh: "间隔年",
    title_en: "The Bridge to Self-Discovery",
    title_zh: "通往自我的桥梁",
    body_en: [
      "After graduation, I took a two-year gap year in Hangzhou — a transformative pause that bridged my academic past and professional future. In a small rented apartment, I dove into portfolio prep and revisited my English skills.",
      "I pushed my technical boundaries, exploring VR, Kinect, motion tracking, and experimental design. This chapter wasn't just about professional growth; it was about understanding the boundless depth of my own capabilities.",
    ],
    body_zh: [
      "毕业后，我在杭州过了两年的间隔年 —— 那是连接学术过去与职业未来的一段转化期。在一间小小的合租屋里，我准备作品集、重新捡起英语。",
      "我把技术的边界往外推：VR、Kinect、动作捕捉、实验性设计。这一段不只是关于职业成长，更是关于理解自己能力的深度。",
    ],
  },
  {
    num: "07",
    label_en: "Graduate School",
    label_zh: "研究生",
    title_en: "From the Highlands to the World",
    title_zh: "从高地走向世界",
    body_en: [
      "Pursuing my Master's at GSA in Scotland was an odyssey. It began with the sting of a rejection from Edinburgh and the isolation of the misty Highlands. But slowly, I found my footing.",
      "Collaborating with international peers and travelling across Europe expanded my horizons in ways I never imagined. My confidence grew alongside my language skills. Graduation wasn't just an academic milestone — it was a testament to my survival and my evolution.",
    ],
    body_zh: [
      "在苏格兰 GSA 读硕士是一段长长的旅程。它始于爱丁堡拒信的刺痛，与高地大雾里的孤独。然而我慢慢找到了自己的立足点。",
      "和国际同学合作、在欧洲各处旅行，让我的视野扩展到无法想象的程度。我的自信和语言能力一起生长。毕业不只是学业的里程碑 —— 它是我活下来、并蜕变的证明。",
    ],
  },
];

function AboutPage({ go, goBlogPost }) {
  return (
    <main className="page-root" data-screen-label="About">

      {/* HERO — split portrait + headline */}
      <section style={{ padding: "64px 32px 32px" }}>
        <Reveal>
          <div className="edge-row" style={{ borderTop: "none", marginBottom: 56 }}>
            <span><T en="Index · 003 — About her" zh="索引 · 003 — 关于她" /></span>
            <span><T en="A 20-year arc" zh="二十年的弧线" /></span>
            <span>2004 ⟶ 2024</span>
          </div>
        </Reveal>

        <Reveal>
          <div className="mono-cap" style={{ marginBottom: 24 }}>
            <T en="About her · ZETA · ZC72" zh="关于她 · ZETA · ZC72" />
          </div>
        </Reveal>

        <div style={{ marginBottom: 56 }}>
          <Reveal clip>
            <h1 className="display-xxl">
              <T en="I Have the" zh="我兼具" />
            </h1>
          </Reveal>
          <Reveal clip delay={120}>
            <h1 className="display-xxl">
              <T
                en={<><span className="serif-italic">Taste</span> and</>}
                zh={<><span className="serif-italic">审美，</span></>}
              />
            </h1>
          </Reveal>
          <Reveal clip delay={240}>
            <h1 className="display-xxl">
              <T
                en={<><span className="serif-italic">Agency.</span></>}
                zh={<>亦有<span className="serif-italic">主动。</span></>}
              />
            </h1>
          </Reveal>
        </div>

        <Reveal delay={400}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 32 }}>
            <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(20px, 2.2vw, 28px)", color: "var(--ink-mid)", paddingLeft: 24, borderLeft: "2px solid var(--blue)", flex: 1, minWidth: 260 }}>
              <T en="Product Thinking: Why is Zeta ?" zh="产品思维：为什么是 Zeta ？" />
            </div>
            <button className="btn-link" onClick={() => goBlogPost && goBlogPost("from-spotlight-to-highlands")}>
              <T en="Know her story" zh="了解她的故事" /> <span className="arrow"><ArrowGlyph size={11} /></span>
            </button>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, marginBottom: 64 }}>
          <Reveal delay={420}>
            <p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--ink)", maxWidth: 560 }}>
              <T
                en={<>A multidisciplinary designer and intuitive artist with a strong foundation in <span className="serif-italic">Interaction, Product, and Visual Design,</span> complemented by hands-on experience in embodied interaction through HCI and digital arts. I am passionate about crafting <span className="serif-italic">tasteful, meaningful, and human-centered</span> products that thoughtfully integrate design, psychology, and technology.</>}
                zh={<>一位多元设计师与直觉型艺术家，在<span className="serif-italic">交互设计、产品设计与视觉设计</span>方面有扎实基础，并通过 HCI 与数字艺术积累了具身交互的实操经验。我热衷于打造<span className="serif-italic">有品味、有意义、以人为本</span>的产品，将设计、心理学与技术周到地结合在一起。</>}
              />
            </p>
          </Reveal>
          <Reveal delay={520}>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--ink-mid)", maxWidth: 560 }}>
              <T
                en={<>It all begins with <span className="serif-italic">an idea.</span> The first step in my journey toward becoming a product manager is exploring how to apply <span className="serif-italic">Product Thinking</span> to structure my reflections on <span className="serif-italic">"Who am I?"</span> and <span className="serif-italic">"How do I create personal value?"</span> I believe I could bring more than design expertise. I am eager to grow into a product role within the AI industry, where I can leverage my unique blend of design, product thinking, user research, and strong communication skills to drive innovative solutions forward.</>}
                zh={<>一切始于<span className="serif-italic">一个想法。</span>我成为产品经理路上的第一步，是探索如何用<span className="serif-italic">产品思维</span>结构化地回答：<span className="serif-italic">「我是谁？」</span>以及<span className="serif-italic">「我如何创造属于自己的价值？」</span>我相信自己能带来的不止设计的专业能力。我渴望在 AI 行业里成长为产品角色，运用设计、产品思维、用户研究和沟通能力，推动有创新性的解决方案落地。</>}
              />
            </p>
          </Reveal>
        </div>
      </section>

      {/* PHOTO STRIP — 4 images */}
      <section style={{ padding: "0 32px 96px" }}>
        <Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr", gap: 12, height: "56vh", minHeight: 420 }}>
            <div><Placeholder label={t("Portrait · Zeta", "肖像 · Zeta")} sub="01 / 04" tone="mono" /></div>
            <div><Placeholder label={t("Photography · still", "摄影 · 静物")} sub="02 / 04" tone="mono-blue" /></div>
            <div><Placeholder label={t("Performance · stage", "表演 · 舞台")} sub="03 / 04" tone="steel" /></div>
            <div><Placeholder label={t("Lab · Creativity", "实验 · 创造")} sub="04 / 04" tone="mono-mist" /></div>
          </div>
        </Reveal>
      </section>

      {/* PERFORMER BAND (Dark) — What I Do For Fun */}
      <section className="section-ink" style={{ padding: "120px 32px" }}>
        <div className="wrap" style={{ padding: 0 }}>
          <Reveal>
            <div className="eyebrow on-dark" style={{ marginBottom: 48 }}>
              <T en="What I Do For Fun" zh="我 喜 欢 的 事" />
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
              <T en={<>I sing, dance, do photography,</>} zh={<>我唱歌、跳舞、做摄影、</>} />
            </h2>
          </Reveal>
          <Reveal clip delay={240}>
            <h2 className="display-lg" style={{ color: "var(--paper)" }}>
              <T en={<>and make music.</>} zh={<>也做音乐。</>} />
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
              { name: "网易云音乐", handle_en: "Music · covers", handle_zh: "翻唱", img_en: "Sing / Music", img_zh: "唱歌 / 音乐", tone: "mono", link: t("Go to NetEase Music ↗", "跳转网易云 ↗"), url: "https://music.163.com/#/artist?id=34422300" },
              { name: "YouTube", handle_en: "Channel · @zetazheng_0702", handle_zh: "频道 · @zetazheng_0702", img_en: "Performance video", img_zh: "表演视频", tone: "mono-blue", link: t("Go to YouTube ↗", "跳转 YouTube ↗"), url: "https://www.youtube.com/@zetazheng_0702" },
              { name: "小红书", handle_en: "@郑泽塔 · more expression", handle_zh: "@郑泽塔 · 更多自我表达", img_en: "Daily expression", img_zh: "日常表达", tone: "mono-mist", link: t("Go to xiaohongshu ↗", "跳转小红书 ↗"), url: "https://www.xiaohongshu.com/user/profile/5a06ae22e8ac2b0a7b3537df" }
            ].map((s, i) =>
              <Reveal key={s.name} delay={i * 90}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                  <div className="social-card" style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.25)", color: "var(--paper)", borderStyle: "none" }}>
                    <div className="sc-image" style={{ borderColor: "rgba(255,255,255,0.25)" }}>
                      <Placeholder label={t(s.img_en, s.img_zh)} tone={s.tone} />
                    </div>
                    <div className="sc-meta" style={{ flexDirection: "column", alignItems: "stretch", gap: 6, borderStyle: "none" }}>
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

      <BigCTA onContact={() => go("contact")} />
      <Footer go={go} />
    </main>
  );
}

/* ============== CV ============== */
const EDUCATION = [
  {
    school_en: "Glasgow School of Art",
    school_zh: "格拉斯哥艺术学院",
    degree_en: "MDes in Interaction Design",
    degree_zh: "交互设计 MDes",
    place_en: "Awarding Institution · University of Glasgow, Scotland, UK",
    place_zh: "学位授予 · 英国苏格兰 格拉斯哥大学",
    time: "23.09 — 24.11",
    bullets_en: ["Participated in the 2024 GSA Winter School program."],
    bullets_zh: ["参与 2024 GSA 冬季学校项目。"],
  },
  {
    school_en: "Hangzhou Normal University",
    school_zh: "杭州师范大学",
    degree_en: "BEng in Industrial Design",
    degree_zh: "工业设计 工学学士",
    place_en: "Hangzhou, China",
    place_zh: "中国 杭州",
    time: "17.09 — 21.06",
    bullets_en: [
      "GPA: 86 / 100. Outstanding Graduate.",
      "Head of the Planning and Management Department, University Student Center.",
      "Deputy Head of the Faculty Student Union Art Troupe & Choir Leader.",
    ],
    bullets_zh: [
      "GPA: 86 / 100。优秀毕业生。",
      "大学生中心 策划与管理部部长。",
      "学院学生会艺术团 副团长 & 合唱团团长。",
    ],
  },
];

const EXPERIENCE = [
  {
    company: "DemoDesign.Studio",
    role_en: "Product Manager (Part-time)",
    role_zh: "产品经理（兼职）",
    place_en: "Design-science solutions for Brand, Web, Motion, and AI · Shanghai, China",
    place_zh: "为品牌、网页、动效与 AI 提供设计科学解决方案 · 中国上海",
    time: "25.12 — now",
    bullets_en: [
      "Combining design and AI to shape intelligent web and product experiences.",
      "Spearheading the 0–1 end-to-end planning and development of VocaTech, an AI-driven language learning product.",
    ],
    bullets_zh: [
      "结合设计与 AI，塑造智能化的网页与产品体验。",
      "主导 VocaTech 的 0–1 全流程策划与开发 —— 一款 AI 驱动的语言学习产品。",
    ],
  },
  {
    company: "memories.ai",
    role_en: "Product Manager and Creative Designer (Full-time)",
    role_zh: "产品经理 & 创意设计师（全职）",
    place_en: "Introducing the World's first Large Visual-Memory Model · San Francisco Bay Area, US",
    place_zh: "推出全球首个大型视觉记忆模型 · 美国 旧金山湾区",
    time: "25.05 — 25.11",
    section_en: "Product Line 1 · LVMM (Large Visual-Memory Model)",
    section_zh: "产品线 1 · LVMM（大型视觉记忆模型）",
    bullets_en: [
      "0–1 Spearheaded the branding and CIS system to establish a cohesive global visual identity.",
      "0–1 Led the IA and co-designed the official website, transforming complex narratives into high-fidelity UI.",
      "Architected and 0–1 developed AI Video Agents (Video Editor / Marketer), optimizing UX for prosumers.",
      "Directed and designed the product launch video — achieving 2M+ views through expert creative direction.",
    ],
    bullets_zh: [
      "0–1 主导品牌与 CIS 系统建设，建立统一的全球视觉识别。",
      "0–1 负责信息架构、合作设计官网，将复杂叙事转化为高保真 UI。",
      "0–1 架构并开发 AI Video Agents（视频编辑 / 营销），为进阶用户优化体验。",
      "执导并设计产品发布视频 —— 凭借专业的创意指导达成 200 万+ 播放。",
    ],
    section2_en: "Product Line 2 · LUCI AI (Hardware & App Ecosystem)",
    section2_zh: "产品线 2 · LUCI AI（硬件与应用生态）",
    bullets2_en: [
      "Defined LUCI AI's market positioning and 0–1 developed the \"Highlights\" core feature for the App.",
      "Headed the US & EU Beta Interview Program, delivering data-driven insights for the 0–1 product launch.",
      "Defined core user scenarios (Daily Recap / To-do) to bridge hardware capability with AI memory models.",
      "Strategically refined the LUCI AI branding to align with its \"Personal Memory Companion\" identity.",
    ],
    bullets2_zh: [
      "定义 LUCI AI 的市场定位，并 0–1 开发 App 核心功能「Highlights」。",
      "主导美 & 欧 Beta 用户访谈项目，为 0–1 产品发布提供数据驱动的洞察。",
      "定义核心用户场景（每日回顾 / 待办），打通硬件能力与 AI 记忆模型。",
      "战略性优化 LUCI AI 品牌，使其与「个人记忆伴侣」的定位对齐。",
    ],
  },
  {
    company: "Mincho AI",
    role_en: "AI Product Manager & UX Designer (Contract)",
    role_zh: "AI 产品经理 & UX 设计师（合约）",
    place_en: "AI Startup · Conversational Product (To C) for Mental Healing · Shanghai, China",
    place_zh: "AI 创业项目 · 心理疗愈对话式 To C 产品 · 中国上海",
    time: "25.01 — 25.04",
    bullets_en: [
      "Led feature architecture and 0-1 development of Mincho AI beta mini-program.",
      "Designed and optimized UX to improve user retention.",
      "Tested 500+ AI agents, fine-tuned prompts — boosting accuracy by 13%.",
      "Built Mincho AI's branding and market strategy.",
    ],
    bullets_zh: [
      "主导功能架构与 Mincho AI Beta 小程序的 0-1 开发。",
      "设计并优化用户体验，提升留存。",
      "测试 500+ AI Agent，微调提示词 —— 准确率提升 13%。",
      "搭建 Mincho AI 的品牌与市场策略。",
    ],
  },
  {
    company: "Nature For Health (N4H)",
    role_en: "Experience Designer · Citizen Science Project",
    role_zh: "体验设计师 · 公民科学项目",
    place_en: "Collaboration With Nature For Health Organization · Scotland",
    place_zh: "与 Nature For Health 机构合作 · 苏格兰",
    time: "24.02 — 24.05",
    bullets_en: [
      "Connected the nature organization with the local high school, sparking student interest in seasonal species data collection and nature therapy — while contributing to phenology research.",
    ],
    bullets_zh: [
      "连接自然机构与当地高中，激发学生对季节物种采集与自然疗法的兴趣 —— 同时为物候学研究贡献数据。",
    ],
  },
  {
    company: "Alipay",
    role_en: "User Researcher & GTM (Intern)",
    role_zh: "用户研究 & GTM（实习）",
    place_en: "Leading Mobile Payment Platform · Hangzhou, China",
    place_zh: "国内领先的移动支付平台 · 中国杭州",
    time: "19.09 — 19.12",
    bullets_en: [
      "Optimized merchant ordering systems by analyzing user payment behaviours.",
      "Boosted adoption of Alipay QR code ordering, increasing merchant transaction efficiency by 35%.",
    ],
    bullets_zh: [
      "通过分析用户支付行为，优化商户点单系统。",
      "推动支付宝二维码点单的覆盖，使商户交易效率提升 35%。",
    ],
  },
  {
    company: "Balabala",
    role_en: "Visual Designer (Intern)",
    role_zh: "视觉设计师（实习）",
    place_en: "Top Children's Clothing Brand · owned by Semir Group · Shanghai, China",
    place_zh: "国内头部童装品牌 · 森马集团旗下 · 中国上海",
    time: "20.09 — 21.02",
    bullets_en: [
      "Worked with designers and the brand operations team to develop the Balabala VI visual system and UI icon library.",
      "Conducted research on the children's apparel industry and user preferences — optimizing product pages and improving conversion rates by 5%.",
    ],
    bullets_zh: [
      "与设计师和品牌运营团队合作，搭建 Balabala VI 视觉系统与 UI 图标库。",
      "针对童装行业与用户偏好开展研究 —— 优化商品页，转化率提升 5%。",
    ],
  },
  {
    company: "Bud Smart",
    role_en: "Associate Product Manager (Intern)",
    role_zh: "助理产品经理（实习）",
    place_en: "University Support For SME Incubation Program · Ningbo, China",
    place_zh: "大学支持的中小企业孵化项目 · 中国宁波",
    time: "20.07 — 20.09",
    bullets_en: [
      "Collaborated with engineers to select suppliers and oversee sample testing — managed supply chain processes, including order placement and supplier coordination.",
      "Improved product quality by analyzing user feedback and replacing suppliers, reducing return rate by 7%.",
    ],
    bullets_zh: [
      "与工程师合作筛选供应商、跟进样品测试 —— 管理供应链流程，包括下单与供应商对接。",
      "通过分析用户反馈、更换供应商提升产品质量，退货率降低 7%。",
    ],
  },
  {
    company: "DT Design",
    role_en: "Product Manager (Intern)",
    role_zh: "产品经理（实习）",
    place_en: "Well-known Industrial Design Company · Collaborated with Xiaomi · Ningbo, China",
    place_zh: "知名工业设计公司 · 曾与小米合作 · 中国宁波",
    time: "19.07 — 19.09",
    bullets_en: [
      "Assisted in product design for home appliances, including 3D modelling and rendering.",
      "Contributed to brand marketing materials and supported the development of a new sub-brand.",
    ],
    bullets_zh: [
      "协助家电产品设计，包括 3D 建模与渲染。",
      "参与品牌营销物料制作，并支持新子品牌的发展。",
    ],
  },
];

function CVPage({ go }) {
  return (
    <main className="page-root" data-screen-label="CV">

      {/* HEADER */}
      <section style={{ padding: "64px 32px 80px" }}>
        <Reveal>
          <div className="edge-row" style={{ borderTop: "none", marginBottom: 56 }}>
            <span><T en="Index · 004 — Curriculum Vitae" zh="索引 · 004 — 简历" /></span>
            <span><T en="Last updated · Nov 2025" zh="最后更新 · 2025.11" /></span>
            <span><T en="Available on request" zh="可应需提供" /></span>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "end" }}>
          <div>
            <Reveal><div className="mono-cap" style={{ marginBottom: 24 }}>
              <T en="CV — A printable index" zh="简历 — 可打印的索引" />
            </div></Reveal>
            <Reveal clip>
              <h1 className="display-xxl"><T en="CV." zh="简历。" /></h1>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div>
              <p className="lede" style={{ marginBottom: 28 }}>
                <T
                  en="Education and experience, ordered chronologically. Always one revision behind real life."
                  zh="教育与工作经历，按时间倒序。永远比真实的生活慢一步。"
                />
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button className="btn btn-dark">↓ <T en="CV.pdf" zh="CV.pdf" /></button>
                <a href="https://www.linkedin.com/in/zeta-zheng-65b580294" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">LinkedIn ↗</a>
                <button className="btn btn-ghost">hello@zetazheng.com</button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EDUCATION */}
      <section style={{ padding: "96px 32px", borderTop: "1px solid var(--ink)" }}>
        <div className="grid-12">
          <div style={{ gridColumn: "1 / span 4", position: "sticky", top: 96, alignSelf: "start" }}>
            <Reveal><div className="eyebrow">01</div></Reveal>
            <Reveal delay={80}>
              <h2 className="display-md" style={{ marginTop: 16 }}>
                <span className="serif-italic"><T en="Education." zh="教育。" /></span>
              </h2>
            </Reveal>
          </div>
          <div style={{ gridColumn: "6 / -1" }}>
            {EDUCATION.map((e, i) => (
              <Reveal key={e.school_en} delay={i * 60}>
                <div className="rail-entry">
                  <div className="rail-year">{e.time}</div>
                  <div>
                    <div className="rail-title"><T en={e.school_en} zh={e.school_zh} /></div>
                    <div className="rail-subtitle">
                      <span className="serif-italic"><T en={e.degree_en} zh={e.degree_zh} /></span> · <T en={e.place_en} zh={e.place_zh} />
                    </div>
                    <ul className="rail-bullets">
                      {t(e.bullets_en, e.bullets_zh).map(b => <li key={b}>{b}</li>)}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WORK EXPERIENCE */}
      <section style={{ padding: "96px 32px", background: "var(--mist)", borderTop: "1px solid var(--ink)" }}>
        <div className="grid-12">
          <div style={{ gridColumn: "1 / span 4", position: "sticky", top: 96, alignSelf: "start" }}>
            <Reveal><div className="eyebrow">02</div></Reveal>
            <Reveal delay={80}>
              <h2 className="display-md" style={{ marginTop: 16 }}>
                <span className="serif-italic"><T en="Work Experience." zh="工作经历。" /></span>
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p style={{ marginTop: 24, fontSize: 15, color: "var(--ink-mid)", lineHeight: 1.55, maxWidth: 320 }}>
                <T
                  en="Most recent first. Industrial design → user research → AI product management."
                  zh="按时间倒序。工业设计 → 用户研究 → AI 产品管理。"
                />
              </p>
            </Reveal>
          </div>
          <div style={{ gridColumn: "6 / -1" }}>
            {EXPERIENCE.map((e, i) => (
              <Reveal key={e.company + e.time} delay={i * 40}>
                <div className="rail-entry">
                  <div className="rail-year">{e.time}</div>
                  <div>
                    <div className="rail-title">{e.company}</div>
                    <div className="rail-subtitle">
                      <span className="serif-italic"><T en={e.role_en} zh={e.role_zh} /></span> · <T en={e.place_en} zh={e.place_zh} />
                    </div>
                    {e.section_en && (
                      <div className="mono-cap" style={{ marginBottom: 10, marginTop: 4, color: "var(--ink)" }}>
                        <T en={e.section_en} zh={e.section_zh} />
                      </div>
                    )}
                    <ul className="rail-bullets">
                      {t(e.bullets_en, e.bullets_zh).map(b => <li key={b}>{b}</li>)}
                    </ul>
                    {e.section2_en && (
                      <>
                        <div className="mono-cap" style={{ marginBottom: 10, marginTop: 20, color: "var(--ink)" }}>
                          <T en={e.section2_en} zh={e.section2_zh} />
                        </div>
                        <ul className="rail-bullets">
                          {t(e.bullets2_en, e.bullets2_zh).map(b => <li key={b}>{b}</li>)}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BigCTA onContact={() => go("contact")} />
      <Footer go={go} />
    </main>
  );
}

/* ============== BLOG ============== */
const BLOG_FULL = [
  {
    num: "01",
    title_en: "From the Spotlight to the Highlands",
    title_zh: "从聚光灯到高地",
    subtitle_en: "20 Years of Becoming",
    subtitle_zh: "二十年的成为",
    excerpt_en: "Flipping through old, faded photos, I find myself tracing the contours of time. Life is an ongoing expedition, and as I look back, I can't help but ask: What are we truly seeking?",
    excerpt_zh: "翻看那些褪色的旧照片，我发现自己在描摹时间的轮廓。生活是一场持续的远征 —— 回头望去，我忍不住要问：我们究竟在寻找什么？",
    date: "2024.12",
    time_en: "8 min",
    time_zh: "8 分钟",
    tone: "mono",
    featured: true,
  },
];

function BlogPage({ go, goBlogPost }) {
  const featured = BLOG_FULL[0];
  const openFeatured = () => goBlogPost && goBlogPost("from-spotlight-to-highlands");
  return (
    <main className="page-root" data-screen-label="Blog">

      {/* HEADER */}
      <section style={{ padding: "64px 32px 64px" }}>
        <Reveal>
          <div className="edge-row" style={{ borderTop: "none", marginBottom: 56 }}>
            <span><T en="Index · 005 — Blog / Journal" zh="索引 · 005 — 博 客" /></span>
            <span><T en="1 essay · more coming" zh="1 篇文章 · 更 多 即 将 上 线" /></span>
            <span><T en="Slow writing, recording memory" zh="缓 慢 的 写 作 · 记 录 记 忆" /></span>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 80, alignItems: "end" }}>
          <div>
            <Reveal><div className="tracked" style={{ marginBottom: 28 }}>
              <T en="Blog — Learning By Creating" zh="B L O G — 在  创  造  中  学  习" />
            </div></Reveal>
            <Reveal clip>
              <h1 className="display-xxl"><T en="Blog." zh="博客。" /></h1>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div className="lede-lg">
              <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", paddingLeft: 24, borderLeft: "2px solid var(--blue)", marginBottom: 24 }}>
                <T
                  en={<>"I don't just <span style={{ color: "var(--ink)" }}>feel</span> life, I <span style={{ color: "var(--ink)" }}>express</span> it."</>}
                  zh={<>「我不只是<span style={{ color: "var(--ink)" }}>感受</span>生活，我<span style={{ color: "var(--ink)" }}>表达</span>它。」</>}
                />
              </div>
              <p style={{ fontSize: 16, color: "var(--ink-mid)", lineHeight: 1.55 }}>
                <T
                  en="Slow essays on design, AI, and self-growth — keep thinking, keep expressing."
                  zh="关于设计、AI 与自我成长的缓慢写作 —— 持续思考，持续表达。"
                />
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURED — full-width editorial */}
      <section style={{ padding: "32px 32px 96px" }}>
        <Reveal>
          <article onClick={openFeatured} style={{ cursor: "pointer", overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "60vh", gap: 48 }}>
              <div style={{ padding: "8px 0 8px 8px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 32 }}>
                <div className="edge-row" style={{ borderTop: "none", padding: 0 }}>
                  <span><T en="Featured · 01" zh="精 选 · 0 1" /></span>
                  <span>{featured.date} · <T en={featured.time_en} zh={featured.time_zh} /></span>
                </div>

                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: 14, letterSpacing: "0.06em", marginBottom: 32, paddingBottom: 16, borderBottom: "1px solid var(--ink)" }}>
                    <span>2004</span>
                    <span style={{ flex: 1, textAlign: "center", color: "var(--ink-faint)" }}>————————————————————</span>
                    <span>2024</span>
                  </div>
                  <h2 className="display-lg" style={{ marginBottom: 24 }}>
                    <T
                      en={<>From the <span className="serif-italic">Spotlight</span><br />to the <span className="serif-italic">Highlands:</span></>}
                      zh={<>从<span className="serif-italic">聚光灯</span><br />到<span className="serif-italic">高地：</span></>}
                    />
                  </h2>
                  <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 22, color: "var(--ink-mid)", lineHeight: 1.35 }}>
                    <T en={featured.subtitle_en} zh={featured.subtitle_zh} />.
                  </p>
                </div>

                <div>
                  <p style={{ fontSize: 16, lineHeight: 1.55, color: "var(--ink-mid)", marginBottom: 24, maxWidth: 460 }}>
                    <T en={featured.excerpt_en} zh={featured.excerpt_zh} />
                  </p>
                  <button className="btn btn-dark" onClick={openFeatured}>
                    <T en="Read essay" zh="阅读全文" /> <span className="arrow"><ArrowGlyph size={12} /></span>
                  </button>
                </div>
              </div>
              <div style={{ position: "relative" }}>
                <Placeholder label={t("Cover · 20 years", "封面 · 二十年")} sub={t("Two portraits, one arc", "两张肖像，一段弧线")} tone="mono" />
              </div>
            </div>
          </article>
        </Reveal>
      </section>

      {/* MORE COMING */}
      <section style={{ padding: "0 32px 120px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
          <Reveal><h2 className="display-md"><span className="serif-italic"><T en="More, soon." zh="更多文章，敬请期待。" /></span></h2></Reveal>
          <Reveal delay={100}>
            <div className="tracked-sm">↳ <T en="Tag · Life / Design / AI / Photography" zh="标 签 · 生 活 / 设 计 / A I / 摄 影" /></div>
          </Reveal>
        </div>
        <Reveal>
          <div style={{ padding: "56px 32px", border: "1px solid var(--line)", textAlign: "center" }}>
            <div className="tracked-sm" style={{ marginBottom: 16 }}>○ <T en="Drafts in progress" zh="正  在  写  作  中" /></div>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(18px, 2vw, 24px)", color: "var(--ink-mid)", maxWidth: 600, margin: "0 auto", lineHeight: 1.45 }}>
              <T
                en={<>"On taste before output", "Designing AI agents with agency", "Slow mornings in a fast office"…</>}
                zh={<>《先有审美，再有产出》、《设计带有主动性的 AI Agent》、《在快节奏的办公室里过缓慢的早晨》……</>}
              />
            </p>
          </div>
        </Reveal>
      </section>

      <BigCTA onContact={() => go("contact")} />
      <Footer go={go} />
    </main>
  );
}

/* ============== BLOG POST DETAIL ============== */
function BlogPostPage({ go }) {
  const { lang } = useLang();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, []);
  return (
    <main className="page-root" data-screen-label="Blog · Post">

      {/* HEADER */}
      <section style={{ padding: "48px 32px 32px" }}>
        <Reveal>
          <div className="edge-row" style={{ borderTop: "none", marginBottom: 48 }}>
            <span>
              <a onClick={() => go("home")} style={{ cursor: "pointer" }}><T en="Home" zh="首页" /></a>
              <span style={{ margin: "0 8px", color: "var(--ink-faint)" }}>/</span>
              <a onClick={() => go("blog")} style={{ cursor: "pointer" }}><T en="Blog" zh="博客" /></a>
              <span style={{ margin: "0 8px", color: "var(--ink-faint)" }}>/</span>
              <span style={{ color: "var(--ink)" }}><T en="From the Spotlight to the Highlands" zh="从聚光灯到高地" /></span>
            </span>
            <span>2024.12 · <T en="8 min" zh="8 分钟" /></span>
            <span style={{ color: "var(--ink)", cursor: "pointer" }} onClick={() => go("blog")}>
              <T en="← All essays" zh="← 全部文章" />
            </span>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 80, alignItems: "end" }}>
          <div>
            <Reveal><div className="tracked" style={{ marginBottom: 24 }}>
              <T en="Featured · 01" zh="精 选 · 0 1" />
            </div></Reveal>
            <Reveal clip>
              <h1 className="display-xxl" style={{ fontSize: "clamp(56px, 9vw, 132px)" }}>
                <T en="From the" zh="从" />
              </h1>
            </Reveal>
            <Reveal clip delay={140}>
              <h1 className="display-xxl" style={{ fontSize: "clamp(56px, 9vw, 132px)" }}>
                <T
                  en={<><span className="serif-italic">Spotlight</span></>}
                  zh={<><span className="serif-italic">聚光灯</span></>}
                />
              </h1>
            </Reveal>
            <Reveal clip delay={260}>
              <h1 className="display-xxl" style={{ fontSize: "clamp(56px, 9vw, 132px)" }}>
                <T
                  en={<>to the <span className="serif-italic">Highlands.</span></>}
                  zh={<>到<span className="serif-italic">高地。</span></>}
                />
              </h1>
            </Reveal>
            <Reveal delay={420}>
              <div style={{ marginTop: 28, fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(22px, 2.4vw, 32px)", color: "var(--ink-mid)", letterSpacing: "-0.005em", paddingLeft: 24, borderLeft: "2px solid var(--blue)" }}>
                <T en="20 Years of Becoming." zh="二十年的成为。" />
              </div>
            </Reveal>
          </div>

          <Reveal delay={300}>
            <div style={{ aspectRatio: "4/5" }}>
              <Placeholder label={t("Cover · 2 portraits", "封面 · 两张肖像")} sub={t("2004 ———— 2024", "2004 ———— 2024")} tone="mono" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROLOGUE */}
      <section style={{ padding: "96px 32px 64px" }}>
        <div className="wrap" style={{ padding: 0 }}>
          <Reveal>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(24px, 2.6vw, 36px)", lineHeight: 1.4, color: "var(--ink)", maxWidth: 920, margin: "0 auto", textAlign: "center" }}>
              <T
                en={<>"Flipping through old, faded photos, I find myself tracing the contours of time. Life is an ongoing expedition, and as I look back, I can't help but ask: <span style={{ color: "var(--blue)" }}>What are we truly seeking?</span>"</>}
                zh={<>「翻看那些褪色的旧照片，我发现自己在描摹时间的轮廓。生活是一场持续的远征 —— 回头望去，我忍不住要问：<span style={{ color: "var(--blue)" }}>我们究竟在寻找什么？</span>」</>}
              />
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p style={{ marginTop: 48, fontSize: 17, lineHeight: 1.75, color: "var(--ink-mid)", maxWidth: 720, margin: "48px auto 0" }}>
              <T
                en="While a definitive answer remains just beyond the horizon, the past 25 years — from my first day of kindergarten to the completion of my Master's — have been a vibrant tapestry woven with threads of passion, resilience, and self-discovery. Each chapter has added its own unique stroke to the canvas of my life."
                zh="一个确定的答案仍在地平线之外，但过去的二十五年 —— 从我幼儿园第一天到完成硕士学位 —— 是一幅由热情、韧性与自我探索交织而成的鲜艳织锦。每一章都为我生命的画布添上独有的笔触。"
              />
            </p>
          </Reveal>
        </div>
      </section>

      {/* CHAPTERS */}
      <section style={{ padding: "96px 32px", background: "var(--mist)", borderTop: "1px solid var(--ink)", borderBottom: "1px solid var(--ink)" }}>
        <div className="grid-12">
          <div style={{ gridColumn: "1 / span 4", position: "sticky", top: 96, alignSelf: "start" }}>
            <Reveal><div className="eyebrow" style={{ marginBottom: 24 }}>
              <T en="Chapters · 07" zh="章 节 · 0 7" />
            </div></Reveal>
            <Reveal delay={120}>
              <h2 className="display-md">
                <T
                  en={<>A life,<br /><span className="serif-italic">in chapters.</span></>}
                  zh={<>一生，<br /><span className="serif-italic">分作章节。</span></>}
                />
              </h2>
            </Reveal>
            <Reveal delay={260}>
              <ul style={{ listStyle: "none", marginTop: 40, display: "flex", flexDirection: "column", gap: 14 }}>
                {CHAPTERS.map((c) => (
                  <li key={c.num} style={{ display: "flex", gap: 16, alignItems: "baseline", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    <span style={{ color: "var(--ink-faint)", minWidth: 28 }}>{c.num}</span>
                    <span style={{ color: "var(--ink-mid)" }}><T en={c.label_en} zh={c.label_zh} /></span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div style={{ gridColumn: "6 / -1" }}>
            {CHAPTERS.map((c, i) => (
              <Reveal key={c.num} delay={i * 30}>
                <article style={{ padding: "44px 0", borderTop: "1px solid var(--ink)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 20, gap: 24, flexWrap: "wrap" }}>
                    <div className="mono-cap">{c.num} · <T en={c.label_en} zh={c.label_zh} /></div>
                  </div>
                  <h3 className="display-md" style={{ marginBottom: 24, fontSize: "clamp(28px, 3.4vw, 48px)" }}>
                    <span className="serif-italic"><T en={c.title_en} zh={c.title_zh} /></span>
                  </h3>
                  {(t(c.body_en, c.body_zh)).map((p, pi) => (
                    <p key={pi} style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-mid)", maxWidth: 680, marginBottom: 16 }}>{p}</p>
                  ))}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EPILOGUE */}
      <section className="section-ink" style={{ padding: "120px 32px" }}>
        <div className="wrap" style={{ padding: 0 }}>
          <Reveal><div className="eyebrow on-dark">
            <T en="Epilogue · A future yet to be written" zh="尾声 · 一个尚未书写的未来" />
          </div></Reveal>
          <div style={{ marginTop: 48 }}>
            <Reveal clip delay={140}>
              <h2 className="display-xl" style={{ color: "var(--paper)" }}>
                <T
                  en={<>I am grateful for every <span className="serif-italic" style={{ color: "var(--steel)" }}>spark</span></>}
                  zh={<>我感激每一次<span className="serif-italic" style={{ color: "var(--steel)" }}>闪光</span></>}
                />
              </h2>
            </Reveal>
            <Reveal clip delay={280}>
              <h2 className="display-xl" style={{ color: "var(--paper)" }}>
                <T
                  en={<>and every grueling <span className="serif-italic" style={{ color: "var(--steel)" }}>challenge.</span></>}
                  zh={<>与每一场艰难的<span className="serif-italic" style={{ color: "var(--steel)" }}>挑战。</span></>}
                />
              </h2>
            </Reveal>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, marginTop: 72, alignItems: "end" }}>
            <Reveal delay={400}>
              <p style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", maxWidth: 520, lineHeight: 1.6 }}>
                <T
                  en={<>Armed with unwavering hope and a clear sense of who I am, I am ready to embrace the unknown and create a future that is uniquely mine. <span className="serif-italic" style={{ color: "var(--steel)" }}>"Bitterness first, sweetness later."</span></>}
                  zh={<>带着不动摇的希望和清晰的自我，我准备好拥抱未知，去创造一个独属于我的未来。<span className="serif-italic" style={{ color: "var(--steel)" }}>「先苦后甜。」</span></>}
                />
              </p>
            </Reveal>
            <Reveal delay={500}>
              <div style={{ display: "flex", gap: 12, justifySelf: "end", flexWrap: "wrap" }}>
                <button className="btn btn-light" onClick={() => go("work")}>
                  <T en="View the work" zh="查看作品" /> <span className="arrow"><ArrowGlyph size={12} /></span>
                </button>
                <button className="btn-link" style={{ color: "var(--paper)", borderColor: "var(--paper)" }} onClick={() => go("blog")}>
                  <T en="← All essays" zh="← 全部文章" />
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer go={go} />
    </main>
  );
}

/* ============== CONTACT ============== */
function ContactPage({ go }) {
  const items = [
    { label_en: "Email",      label_zh: "邮 箱",       value: "chengzheng0702@gmail.com ↗", href: "mailto:chengzheng0702@gmail.com" },
    { label_en: "Email",      label_zh: "邮 箱",       value: "zhengcheng22@163.com ↗", href: "mailto:zhengcheng22@163.com" },
    { label_en: "LinkedIn",   label_zh: "领 英",       value: "@Zeta(Cheng) Zheng ↗", href: "https://www.linkedin.com/in/zeta-zheng-65b580294" },
    { label_en: "YouTube",    label_zh: "Y o u T u b e", value: "@zetazheng_0702 ↗", href: "https://www.youtube.com/@zetazheng_0702" },
    { label_en: "Instagram",  label_zh: "I n s",        value: "@zetazheng_0702 ↗", href: "https://www.instagram.com/zetazheng_0702" },
    { label_en: "小红书",      label_zh: "小 红 书",     value: "郑泽塔 ↗", href: "https://www.xiaohongshu.com/user/profile/5a06ae22e8ac2b0a7b3537df" },
  ];
  return (
    <main className="page-root" data-screen-label="Contact">
      <section style={{ padding: "64px 32px 32px", minHeight: "calc(100vh - 64px)" }}>
        <Reveal>
          <div className="edge-row" style={{ borderTop: "none", marginBottom: 56 }}>
            <span><T en="Index · 006 — Contact" zh="索引 · 006 — 联系" /></span>
            <span><T en="Open to conversations" zh="欢迎交谈" /></span>
            <span><T en="Reply within ~3 days" zh="约 3 天内回复" /></span>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 80, alignItems: "start" }}>
          <div>
            <Reveal><div className="tracked" style={{ marginBottom: 28 }}>
              <T en="Contact · Say Hiya" zh="联系 · 打个招呼" />
            </div></Reveal>
            <Reveal clip><h1 className="display-xxl"><T en="Say" zh="打个" /></h1></Reveal>
            <Reveal clip delay={140}>
              <h1 className="display-xxl">
                <T
                  en={<span className="serif-italic">hiya.</span>}
                  zh={<span className="serif-italic">招呼。</span>}
                />
              </h1>
            </Reveal>

            <Reveal delay={300}>
              <p className="lede-lg" style={{ marginTop: 48 }}>
                <T
                  en="Open to design partnerships, AI product work, talks, and slow, generous conversations. I reply within a few days — usually with a question back."
                  zh="欢迎设计合作、AI 产品工作、演讲与缓慢而慷慨的交谈。我会在几天内回复 —— 通常会再问一个问题。"
                />
              </p>
            </Reveal>

            <Reveal delay={400}>
              <div style={{ marginTop: 64, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 0, borderTop: "1px solid var(--ink)", borderLeft: "1px solid var(--ink)" }}>
                {items.map((r, i) => {
                  const isMail = r.href.startsWith("mailto:");
                  const linkProps = isMail
                    ? { href: r.href }
                    : { href: r.href, target: "_blank", rel: "noopener noreferrer" };
                  return (
                    <a key={i} {...linkProps} style={{
                      padding: "24px 28px",
                      borderRight: "1px solid var(--ink)",
                      borderBottom: "1px solid var(--ink)",
                      cursor: "pointer",
                      transition: "background 200ms",
                      textDecoration: "none",
                      color: "inherit",
                    }} onMouseEnter={e => e.currentTarget.style.background = "var(--mist)"}
                       onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                      <div className="tracked-sm" style={{ marginBottom: 10 }}>
                        <T en={r.label_en} zh={r.label_zh} />
                      </div>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 500, letterSpacing: "-0.01em" }}>
                        {r.value}
                      </div>
                    </a>
                  );
                })}
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      <BigCTA onContact={() => go("contact")} />
      <Footer go={go} />
    </main>
  );
}

export { AboutPage, CVPage, BlogPage, BlogPostPage, ContactPage };
