import AnimateByScroll, { AnimationGroup, AnimationMediaQuery } from "./modules/animateByScroll.js"

new AnimateByScroll(
	{ repeatingAnimations: false, activeAnimationClass: 'active' },

	new AnimationGroup({
		selectors: '.advantage, .promo',
		animateStartCoeff: 0.7,
		timeoutBeforeStart: 200,
	}, new AnimationMediaQuery(426, 0.9, 0)),

	new AnimationGroup({
		selectors: '.press-item',
		animateStartCoeff: 0.8,
		timeoutBeforeStart: 500,
	}),
)