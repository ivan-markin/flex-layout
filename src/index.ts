function importAll(r) {
    r.keys().forEach(r);
}
importAll(require.context('./images/', true, /\.(jpe?g|png|webp|gif|svg|mp4|ico)$/));
importAll(require.context('./fonts/', true, /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/));
import './scss/style.scss';

import Swiper from 'swiper';
import SwiperCore, { Navigation } from 'swiper/core';

document.addEventListener('DOMContentLoaded', () => {
    const roadmapSlides = Array.from(document.querySelectorAll('.roadmap__slide'));
    const menuButton = document.querySelector('.header__menu-button');
    const menuPopup = document.querySelector('.mobile-menu-block');
    const menuCloseButton = document.querySelector('.mobile-menu-block__close');
    
    SwiperCore.use([Navigation]);
    
    const featuresSwiper = new Swiper('.features-slider', {                                       
        slidesPerView: 'auto',
        centeredSlides: true,
        speed: 500,
        spaceBetween: 20,        
        navigation: {
            nextEl: '.features-slider__next',
            prevEl: '.features-slider__prev'
        },
        breakpoints: {            
            769: {                
                spaceBetween: 30
            }
        }
    })

    const roadmapSwiper = new Swiper('.roadmap__slider', {                                       
        slidesPerView: 'auto',            
        spaceBetween: 12,
        slidesOffsetBefore: 12,
        slidesOffsetAfter: 12,
        navigation: {
            nextEl: '.roadmap__next',
            prevEl: '.roadmap__prev'
        },
        breakpoints: {                                   
            1367: {                
                slidesOffsetBefore: 80,
                slidesOffsetAfter: 80
            },
            769: {                
                slidesOffsetBefore: 40,
                slidesOffsetAfter: 40,
                spaceBetween: 37                
            },
            421: {                
                slidesOffsetBefore: 40
            }
        }
    }) 
    
    function menuHandler() {
        menuPopup?.classList.toggle('active');
    }

    menuButton?.addEventListener('click', menuHandler);
    menuCloseButton?.addEventListener('click', menuHandler);
})
