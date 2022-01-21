// import '~/app/libs/mmenu/dist/mmenu.js'
import { Swiper, Parallax, Controller, Pagination, Scrollbar, Navigation, Autoplay } from 'swiper'
Swiper.use([ Parallax, Controller, Pagination, Scrollbar, Navigation, Autoplay ])
document.addEventListener('DOMContentLoaded', () => {

	const swiper = new Swiper(".sliderRated", {
		slidesPerView: 3,
		spaceBetween: 20,
		breakpoints: {
			1240: {
			  slidesPerView: 3    
			},
			768: {
			  slidesPerView: 2   
			},
			320: {
			  slidesPerView: 1
			}
		},
		pagination: {
		  el: ".swiper-pagination",
		  clickable: true,
		},
		navigation: {
		  nextEl: ".swiper-button-next",
		  prevEl: ".swiper-button-prev",
	  },
	  });

})
