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

//? your scripts //
let html = document.querySelector('html')
let themeTogglers = document.querySelectorAll('.theme-toggler')

for (const btn of themeTogglers) {
  btn.addEventListener('click', () => {
    html.classList.toggle('dark')
  })
}