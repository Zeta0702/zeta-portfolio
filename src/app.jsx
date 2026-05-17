/* =========================================
   App — routing + page transitions
   Supports nested route: #work/<slug>
   ========================================= */

import React, { useState, useEffect } from 'react';
import { useLang } from './i18n';
import { Nav } from './components';
import HomePage from './page-home';
import WorkPage from './page-work';
import { AboutPage, CVPage, BlogPage, ContactPage, BlogPostPage } from './page-rest';
import ProjectPage from './page-project';

const SIMPLE_ROUTES = ["home", "work", "about", "cv", "blog", "contact"];

function parseHash() {
  const h = window.location.hash.replace(/^#/, "");
  if (!h) return { route: "home", slug: null };
  const parts = h.split("/");
  if (parts[0] === "work" && parts[1]) return { route: "project", slug: parts[1] };
  if (parts[0] === "blog" && parts[1]) return { route: "blogpost", slug: parts[1] };
  if (SIMPLE_ROUTES.includes(parts[0])) return { route: parts[0], slug: null };
  return { route: "home", slug: null };
}

function App() {
  const { lang } = useLang();
  const [state, setState] = useState(() => parseHash());
  const [transKey, setTransKey] = useState(0);

  const go = (r) => {
    if (r === state.route && !state.slug) return;
    setState({ route: r, slug: null });
    setTransKey(k => k + 1);
    window.location.hash = r === "home" ? "" : r;
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const goProject = (slug) => {
    setState({ route: "project", slug });
    setTransKey(k => k + 1);
    window.location.hash = "work/" + slug;
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const goBlogPost = (slug) => {
    setState({ route: "blogpost", slug });
    setTransKey(k => k + 1);
    window.location.hash = "blog/" + slug;
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  useEffect(() => {
    const onHash = () => {
      setState(parseHash());
      setTransKey(k => k + 1);
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const navRoute = state.route === "project" ? "work"
                 : state.route === "blogpost" ? "blog"
                 : state.route;

  let pageNode;
  switch (state.route) {
    case "work":     pageNode = <WorkPage    go={go} goProject={goProject} />; break;
    case "about":    pageNode = <AboutPage   go={go} />; break;
    case "cv":       pageNode = <CVPage      go={go} />; break;
    case "blog":     pageNode = <BlogPage    go={go} goBlogPost={goBlogPost} />; break;
    case "contact":  pageNode = <ContactPage go={go} />; break;
    case "project":  pageNode = <ProjectPage slug={state.slug} go={go} goProject={goProject} />; break;
    case "blogpost": pageNode = <BlogPostPage go={go} slug={state.slug} />; break;
    default:         pageNode = <HomePage    go={go} goProject={goProject} />;
  }

  return (
    <>
      <Nav route={navRoute} go={go} />
      <div key={transKey + ":" + lang}>
        {pageNode}
      </div>
    </>
  );
}

export default App;
