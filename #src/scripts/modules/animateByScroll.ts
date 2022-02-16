import { isNullOrWhiteSpaces } from "./general.js";


export default class AnimateByScroll {
  private static isScrolling: boolean = true
  private static repeatingAnimations: boolean
  private static elements: AnimationElement[]

  constructor(repeatingAnimations: boolean = false, ...elements: AnimationElement[]) {
    AnimateByScroll.repeatingAnimations = repeatingAnimations
    AnimateByScroll.elements = elements

    this.checkAndToggleAnimationForElements()
    for (const element of AnimateByScroll.elements) {
      element.setMediaProperties()
    }

    window.addEventListener('scroll', () => {
      this.checkAndToggleAnimationForElements()
    }, false)
    window.addEventListener('resize', () => {
      for (const element of AnimateByScroll.elements) {
        element.setMediaProperties()
      }
    }, false)
  }

  private checkAndToggleAnimationForElements() {
    if (AnimateByScroll.isScrolling) {

      window.requestAnimationFrame(() => {
        for (const animateElement of AnimateByScroll.elements) {

          if (this.isPartiallyVisible(animateElement)) {
            setTimeout(() => {
              animateElement.htmlElement.classList.add('active')
            }, animateElement.timeoutBeforeStart);
          }
          else if (AnimateByScroll.repeatingAnimations) {
            animateElement.htmlElement.classList.remove('active')
          }
          AnimateByScroll.isScrolling = false
        }
      })
    }

    AnimateByScroll.isScrolling = true
  }
  private isPartiallyVisible(animElement: AnimationElement) {
    /* thanks for this function: 
      en: https://www.kirupa.com/animations/creating_scroll_activated_animations.htm
      ru: http://webupblog.ru/animatsiya-pri-prokrutke-stranitsy-na-javascript-i-css/
    */

    var elementBoundary = animElement.htmlElement.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;
    let heightWithCoeff = height * animElement.animStartCoeff

    return ((top + heightWithCoeff >= 0) && (heightWithCoeff + window.innerHeight >= bottom));
  }
}

export class AnimationElement {
  public htmlElement: HTMLElement
  public animStartCoeff: number
  public timeoutBeforeStart: number
  public mediaQueries: AnimationMediaQuery[]
  private defAnimStartCoeff: number
  private defTimeoutBeforeStart: number

  constructor(selector: string, animateStartCoeff: number = 1, timeoutBeforeStart: number = 0,
    ...mediaQueries: AnimationMediaQuery[]) {
    if (isNullOrWhiteSpaces(selector)) {
      if (animateStartCoeff <= 0 || animateStartCoeff > 1) {
        throw new RangeError('animateStartCoeff < 0 or > 1')
      }
      throw new RangeError('Selector is null of white spaces!')
    }
    
    this.timeoutBeforeStart = timeoutBeforeStart
    this.htmlElement = document.querySelector(selector)
    this.animStartCoeff = animateStartCoeff

    this.defTimeoutBeforeStart = timeoutBeforeStart
    this.defAnimStartCoeff = animateStartCoeff
    this.mediaQueries = mediaQueries
  }

  setMediaProperties(){
    for (let media of this.mediaQueries) {
      if (window.innerWidth <= media.activeWitdh) {
        this.animStartCoeff = media.animateStartCoeff 
        this.timeoutBeforeStart = media.timeoutBeforeStart
      } else {
        this.animStartCoeff = this.defAnimStartCoeff
        this.timeoutBeforeStart = this.defTimeoutBeforeStart
      }
    }
  }
}
export class AnimationMediaQuery {
  public activeWitdh: number
  public animateStartCoeff: number
  public timeoutBeforeStart: number

  constructor(activeWitdh: number, animateStartCoeff: number, timeoutBeforeStart: number) {
    if (animateStartCoeff <= 0 || animateStartCoeff > 1) {
      throw new RangeError('animateStartCoeff < 0 or > 1')
    }

    this.activeWitdh = activeWitdh
    this.animateStartCoeff = animateStartCoeff
    this.timeoutBeforeStart = timeoutBeforeStart
  }
}