const commodity = document.querySelector('.commodity');
import Swiper from 'swiper/bundle';
const init = () => {
	if (!commodity) {
		return;
	}

	let galleryThumb = new Swiper('.commodity__gallery-thumb .swiper', {
		slidesPerView: 4,
		freeMode: true,
		watchSlidesProgress: true,
	});

	let galleryMain = new Swiper('.commodity__gallery-main .swiper', {
		spaceBetween: 15,
		init: false,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		thumbs: {
			swiper: galleryThumb,
		},
	});

	galleryMain.init();
};

export default {
	init,
};
