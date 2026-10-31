// VectoFly settings.
var isMobile = /Android|iPhone|iPad|iPod|Mobi/i.test(navigator.userAgent) || (navigator.maxTouchPoints > 1 && Math.min(screen.width, screen.height) < 900);
var Colors = { red:0xf25346, white:0xd8d0d1, brown:0x59332e, brownDark:0x23190f, pink:0xF5986E, yellow:0xf4ce93, blue:0x68c3c0 };

// ---------------------------------------------------------------------------------------------
// GLOBAL LEADERBOARD
// Same-origin /api/scores (Firebase-backed when the host has credentials).
// If it is not reachable the game uses the on-device board only.
// Menu and the in-game strip show the top 50. The full board lives at /leaderboard.
// ---------------------------------------------------------------------------------------------
window.VECTOFLY_CONFIG = {
  API_URL: '',
  FIREBASE_URL: '',
  BOARD_PATH: 'scores',
  SHOW_TOP: 50,
  SITE: 'https://vectofly.com',
  EMAIL: 'contact@vectofly.com'
};
