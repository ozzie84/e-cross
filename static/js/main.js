!function(e){function t(){e(window).scrollTop()>150?(e("header").addClass("menu-fixed"),e(".content").css("margin-top","150px")):(e("header").removeClass("menu-fixed"),e(".content").css("margin-top","0"))}function i(){var e=s.realIndex;n.find(".active_slider").removeClass("active_slider"),n.children().eq(e).addClass("active_slider")}e(document).ready(function(){svg4everybody({}),e("#modal").iziModal({bodyOverflow:!0})}),e(window).on("resize load",function(){e(window).outerWidth()<=576?(e(window).on("scroll",t),e(window).on("orientationchange",function(){e("header").removeClass("menu-fixed")})):e(window).off("scroll",t)}),e(".menu_click").on("click",function(){e(".menu_wrap").toggleClass("menu_wrap_active")}),e("#nav-icon3").click(function(){e(this).toggleClass("open"),e(".nav_wrap").fadeToggle(300)});var n=e(".swiper_tabs"),s=new Swiper(".index_slider",{loop:!0,speed:1e3,simulateTouch:!1,autoplay:{delay:5e3,disableOnInteraction:!1},navigation:{nextEl:".swiper-btn-next",prevEl:".swiper-btn-prev"}});s.on("slideChange",i),e(".products_wrap .swiper-container").each(function(){new Swiper(e(this),{slidesPerView:4,spaceBetween:0,breakpoints:{992:{slidesPerView:3},767:{slidesPerView:2},520:{slidesPerView:1}},navigation:{nextEl:e(this).parents(".products_wrap").find(".swiper-control-next"),prevEl:e(this).parents(".products_wrap").find(".swiper-control-prev")}})}),e("#nav-tab").tab(),jQuery.each(e("textarea[data-autoresize]"),function(){var e=this.offsetHeight-this.clientHeight,t=function(t){jQuery(t).css("height","auto").css("height",t.scrollHeight+e)};jQuery(this).on("keyup input",function(){t(this)}).removeAttr("data-autoresize")}),e(".table_title").on("click",function(){e(this).next().slideToggle(),e(this).children("svg").toggleClass("rotate_svg")}),e(".cab-menu").on("click",function(){e(".cabinet_main__nav").toggleClass("active_cabinet")}),e("#calendar").data("datepicker"),e(".phone_us").mask("+00 (000) 000-00-00"),e(document).on("click",".trigger",function(t){t.preventDefault(),e("#modal").iziModal("open")}),e(".column__link").on("click",function(t){t.preventDefault(),e(this).parent().find(".column__dropdown").fadeToggle("slow","linear"),e(this).find(".i-chevron-down").toggleClass("rotate-icon")}),e(".counter .counter_btn__next").on("click",function(t){t.preventDefault(),e(this).prev().val(parseInt(e(this).prev().val())+1)}),e(".counter .counter_btn__prev").on("click",function(t){t.preventDefault(),e(this).next().val(parseInt(e(this).next().val())-1)}),e(document).ready(function(){e(".animsition").animsition({inClass:"fade-in-up",outClass:"fade-out-down",inDuration:700,outDuration:800,linkElement:".animsition-link",loading:!0,loadingParentElement:"body",loadingClass:"animsition-loading",loadingInner:"",timeout:!1,timeoutCountdown:5e3,onLoadEvent:!0,browser:["animation-duration","-webkit-animation-duration"],overlay:!1,overlayClass:"animsition-overlay-slide",overlayParentElement:"body",transition:function(e){window.location.href=e}})})}(jQuery);