export const FadeUp = (delay: number) => {
	return {
		hidden: {
			y: 100,
			opacity: 0,
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				delay: delay,
				duration: 1,

			},
		},
	};
};

export const FadeLeft = (delay: number) => {
	return {
		hidden: {
			x: 100,
			opacity: 0,
		},
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				delay: delay,
			},
		},
	};
};

export const FadeRight = (delay: number) => {
	return {
		hidden: {
			x: -100,
			opacity: 0,
		},
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				duration: 1,
				delay: delay,
			},
		},
	};
};
