!function(e){function n(){e(window).scrollTop()>150?e("header").addClass("menu-fixed"):e("header").removeClass("menu-fixed")}function i(){var e=o.realIndex;t.find(".active_slider").removeClass("active_slider"),t.children().eq(e).addClass("active_slider")}e(document).ready(function(){svg4everybody({}),e("#modal").iziModal({bodyOverflow:!0})}),e(window).on("resize load",function(){e(window).outerWidth()<=576?e(window).on("scroll",n):e(window).off("scroll",n)}),e(".menu_click").on("click",function(){e(".menu_wrap").toggleClass("menu_wrap_active")}),e("#nav-icon3").click(function(){e(this).toggleClass("open"),e(".nav_wrap").fadeToggle(300)});var t=e(".swiper_tabs"),o=new Swiper(".index_slider",{loop:!0,speed:1e3,simulateTouch:!1,autoplay:{delay:5e3,disableOnInteraction:!1},navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prev"}});o.on("slideChange",i),e(".products_wrap .swiper-container").each(function(){new Swiper(e(this),{slidesPerView:4,spaceBetween:0,breakpoints:{992:{slidesPerView:3},767:{slidesPerView:2},520:{slidesPerView:1}},navigation:{nextEl:e(this).parents(".products_wrap").find(".swiper-control-next"),prevEl:e(this).parents(".products_wrap").find(".swiper-control-prev")}})}),e("#nav-tab").tab(),jQuery.each(e("textarea[data-autoresize]"),function(){var e=this.offsetHeight-this.clientHeight,n=function(n){jQuery(n).css("height","auto").css("height",n.scrollHeight+e)};jQuery(this).on("keyup input",function(){n(this)}).removeAttr("data-autoresize")}),e(".table_title").on("click",function(){e(this).next().slideToggle(),e(this).children("svg").toggleClass("rotate_svg")}),e(".cab-menu").on("click",function(){e(".cabinet_main__nav").toggleClass("active_cabinet")}),e("#calendar").data("datepicker"),e(".phone_us").mask("+00 (000) 000-00-00"),e(document).on("click",".trigger",function(n){n.preventDefault(),e("#modal").iziModal("open")}),e(".column__link").on("click",function(n){n.preventDefault(),e(this).parent().find(".column__dropdown").fadeToggle("slow","linear"),e(this).find(".i-chevron-down").toggleClass("rotate-icon")}),e(".counter .counter_btn__next").on("click",function(n){n.preventDefault(),e(this).prev().val(parseInt(e(this).prev().val())+1)}),e(".counter .counter_btn__prev").on("click",function(n){n.preventDefault(),e(this).next().val(parseInt(e(this).next().val())-1)}),e(document).ready(function(){e(".animsition").animsition({inClass:"fade-in-up",outClass:"fade-out-down",inDuration:700,outDuration:800,linkElement:".animsition-link",loading:!0,loadingParentElement:"body",loadingClass:"animsition-loading",loadingInner:"",timeout:!1,timeoutCountdown:5e3,onLoadEvent:!0,browser:["animation-duration","-webkit-animation-duration"],overlay:!1,overlayClass:"animsition-overlay-slide",overlayParentElement:"body",transition:function(e){window.location.href=e}})})}(jQuery);