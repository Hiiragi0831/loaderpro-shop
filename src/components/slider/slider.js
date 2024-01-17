import Swiper from 'swiper';

const init = () => {
	if (document.querySelector('.slider--main')) {
		// eslint-disable-next-line
		const mainSlider = new Swiper('.slider--main .swiper', {
			slidesPerView: 'auto',
			centeredSlides: true,
		});
	}
};

export default {
	init,
};
