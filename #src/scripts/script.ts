// fsnavmenu //
import FsNavmenu from './modules/fsNavmenu.js';

new FsNavmenu(
  '#burgerButton',
  '.fullscreen-navmenu',
  '.fs-element'
)
FsNavmenu.fsNavmenuActiveClass = 'active'
FsNavmenu.burgerActiveClass = 'active'

// sliders //
// You can set your sliders in sliders.js. Try Ctrl + P.
//? Remove this strings if you don't need sliders
import * as sliders from './sliders.js';
let s = sliders

// AnimationByScroll //
import Scroll, { AnimationElement, AnimationMediaQuery } from "./modules/animateByScroll.js";

new Scroll(
  false,
  new AnimationElement('.press', 0.8),
  new AnimationElement('.promo', 0.7, 200,
    new AnimationMediaQuery(426, 0.9, 0),
  ),
  new AnimationElement('.advantage', 0.7, 200,
    new AnimationMediaQuery(426, 0.9, 0),
  ),
  new AnimationElement('.advantage_second', 0.7, 600,
    new AnimationMediaQuery(426, 0.9, 0),
  ),
)

//? your scripts //
let html = document.querySelector('html')
let themeTogglers = document.querySelectorAll('.theme-toggler')

for (const btn of themeTogglers) {
  btn.addEventListener('click', () => {
    html.classList.toggle('dark')
  })
}