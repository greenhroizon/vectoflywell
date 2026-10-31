import { useEffect } from "react";

const HTML = `
<div class="game-holder" id="gameHolder">
  <div id="stars"></div>
  <div id="sun"></div>
  <div id="earth"></div>
  <div class="header">
    <h1>VectoFly</h1>
    <h2>endless skies</h2>
    <div class="score" id="score">
      <div class="score__content" id="level">
        <div class="score__label">level</div>
        <div class="score__value score__value--level" id="levelValue">1</div>
        <svg class="level-circle" id="levelCircle" viewBox="0 0 200 200">
          <circle r="80" cx="100" cy="100" fill="none" stroke="#d1b790" stroke-width="24px"></circle>
          <circle id="levelCircleStroke" r="80" cx="100" cy="100" fill="none" stroke="#68c3c0" stroke-width="14px" stroke-dasharray="502"></circle>
        </svg>
      </div>
      <div class="score__content" id="dist">
        <div class="score__label">score</div>
        <div class="score__value score__value--dist" id="distValue">0</div>
      </div>
      <div class="score__content" id="damage">
        <div class="score__label">damage</div>
        <div class="score__value score__value--energy"><div class="energy-bar" id="damageBar" style="right:100%"></div></div>
      </div>
      <div class="score__content" id="fuel">
        <div class="score__label">fuel</div>
        <div class="score__value score__value--energy"><div class="energy-bar" id="fuelBar" style="background-color:#f4a63a"></div></div>
      </div>
    </div>
  </div>
  <div class="world" id="world"></div>
  <div id="glare"></div>
  <div id="vignette"></div>
  <div id="flash"></div>
  <div id="toast"></div>
  <div id="combo"></div>
  <div id="live"><div class="lh">Top 50</div><ol id="liveList"></ol></div>
  <button id="soundBtn" type="button" title="Sound (M)">&#9835;</button>
  <div id="warn" aria-hidden="true">!</div>
  <div id="visitors" title="Pilots who visited and total games played"></div>
  <div id="panel">
    <div class="box">
      <h2 id="pTitle">VectoFly</h2>
      <p id="pSub">Slide anywhere to steer. Blue pills repair, orange cans refuel, teal glow marks the safe gap.</p>
      <input id="nameIn" maxlength="12" placeholder="Pilot name" autocomplete="off" enterkeyhint="done">
      <button id="playBtn" type="button">Loading…</button>
      <div id="diffRow"></div><div id="diffNote"></div>
      <div class="row2"><button id="hangarBtn" type="button">Hangar</button><button id="mapsBtn" type="button">Maps</button></div>
      <div id="wallet"></div>
      <div id="stats"></div>
      <div id="lbTitle">Top 50 in the world</div>
      <ol id="topList"></ol>
      <a id="lbMore" href="/leaderboard">Full world leaderboard</a>
      <div id="lbNote"></div>
      <div class="opts">
        <label><input type="checkbox" id="optMusic" checked> Music</label>
        <label><input type="checkbox" id="optSfx" checked> Sound FX</label>
        <label id="vibLbl"><input type="checkbox" id="optVib" checked> Vibrate</label>
      </div>
      <div class="help">Touch: put a thumb down and slide to climb or dive. Mouse, arrows or WASD work on a keyboard. Space starts, P pauses, M mutes. The first five planes and first four maps are free.</div>
      <div class="legal">
        <a href="/how-to-play">How to play</a> ·
        <a href="/leaderboard">Leaderboard</a> ·
        <a href="/about">About</a> ·
        <a href="/contact">Contact</a> ·
        <a href="/privacy">Privacy</a> ·
        <a href="/terms">Terms</a> ·
        <a href="/cookies">Cookies</a>
      </div>
      <div class="help"><a class="buglink" href="mailto:contact@vectofly.com?subject=VectoFly%20bug%20or%20feedback">Report a bug or send feedback</a></div>
      <div class="credit">Based on "The Aviator" by Karim Maaloul (Codrops)</div>
    </div>
  </div>
  <div id="shop" class="hide"><div class="box"><h2>Hangar</h2><div id="wallet2"></div><div id="shopTabs"></div><div id="grid"></div><button id="backBtn" type="button">Back</button></div></div>
</div>
<div class="seo-content">
  <h1>VectoFly, a free endless 3D plane game</h1>
  <p>Play at https://vectofly.com. Steer with a finger or the mouse, dodge red spikes, collect blue repair pills and orange fuel cans, and chase the world leaderboard. The first five planes and the first four maps are free. Questions and bug reports: contact@vectofly.com.</p>
</div>`;

const SCRIPTS = [
  "/js/config.js?v=8",
  "/js/TweenMax.min.js",
  "/js/three.min.js",
  "/js/world.js?v=8",
  "/js/planes.js?v=8",
  "/js/vectofly.js?v=8",
  "/js/game.js?v=8",
];

export function VectoFlyMount() {
  useEffect(() => {
    document.documentElement.classList.add("vf");
    const vp = document.querySelector('meta[name="viewport"]');
    const prevVp = vp?.getAttribute("content") ?? "";
    vp?.setAttribute(
      "content",
      "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover",
    );
    return () => {
      document.documentElement.classList.remove("vf");
      document.body.classList.remove("playing");
      if (vp && prevVp) vp.setAttribute("content", prevVp);
    };
  }, []);

  return (
    <div id="vf-mount">
      <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: HTML }} />
      {SCRIPTS.map((src) => (
        <script key={src} src={src} defer />
      ))}
    </div>
  );
}
