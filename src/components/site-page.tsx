import type { ReactNode } from "react";

const LINKS = [
  ["/", "Play"],
  ["/how-to-play", "How to play"],
  ["/leaderboard", "Leaderboard"],
  ["/about", "About"],
  ["/contact", "Contact"],
  ["/privacy", "Privacy"],
  ["/terms", "Terms"],
  ["/cookies", "Cookies"],
  ["/disclaimer", "Disclaimer"],
  ["/dmca", "Copyright"],
];

export function SitePage({
  kicker,
  title,
  lede,
  children,
}: {
  kicker: string;
  title: string;
  lede?: string;
  children: ReactNode;
}) {
  return (
    <div className="site">
      <header className="site-top">
        <a className="brand" href="/">
          VectoFly
        </a>
        <nav className="site-nav" aria-label="Site">
          <a href="/">Play</a>
          <a href="/how-to-play">How to play</a>
          <a href="/leaderboard">Leaderboard</a>
          <a href="/about">About</a>
          <a href="/contact">Bugs & feedback</a>
        </nav>
      </header>
      <main>
        <p className="kicker">{kicker}</p>
        <h1>{title}</h1>
        {lede ? <p className="lede">{lede}</p> : null}
        {children}
      </main>
      <footer>
        <nav aria-label="Footer">
          {LINKS.map(([href, label]) => (
            <span key={href}>
              <a href={href}>{label}</a>
              {" · "}
            </span>
          ))}
          <a href="mailto:contact@vectofly.com">contact@vectofly.com</a>
        </nav>
        <p>© {new Date().getFullYear()} VectoFly · vectofly.com · Free to play, no download.</p>
      </footer>
    </div>
  );
}
