// 导入css
import "swiper/dist/css/swiper.min.css";
import "./css/animate.min.css";
import "./css/index.scss";

// 导入js
import $ from "jquery";
import swiper from "swiper";

// 第一模块
const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}
window.addEventListener("resize", reportWindowSize);
load();
function load() {
  $("body").css("overflow", "hidden");
  setTimeout(() => {
    $(".load-container").hide(500);
    oneSwiper.init();
  }, 1000);
}

var oneSwiper = new swiper(".swiper-one", {
  direction: "vertical",
  init: false,
  initialSlide: 0,
  effect: "slide",
  speed: 500,
  lazy: {
    loadPrevNext: true
  },
  on: {
    init() {
      swiperAnimateCache(this); //隐藏动画元素
      swiperAnimate(this); //初始化完成开始动画
      this.allowSlidePrev = false;
    },
    slideChangeTransitionStart() {},
    slideChangeTransitionEnd: function() {
      swiperAnimate(this);
      if ((this.activeIndex != 0) | 2) this.allowSlidePrev = true;
      else this.allowSlidePrev = false;
    },
    slideChange: function() {}
  }
});

// 第2模块

var twoSwiper = new swiper(".swiper-two", {
  direction: "horizontal",
  effect: "coverflow",
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 70,
    modifier: 0.6,
    slideShadows: false
  },
  loop: true,
  slidesPerView: 4,
  spaceBetween: 10,
  centeredSlides: true,
  slideToClickedSlide: true,
  noSwiping: false,
  lazy: {
    loadPrevNext: true
  },
  on: {
    init() {},
    slideChangeTransitionStart() {},
    slideChangeTransitionEnd: function() {},
    slideChange: function() {
      var slideIndex = (this.activeIndex % 4) + 1;
      var imgPath =
        "url('./images/page5/封面" + slideIndex + ".png') no-repeat";
      $(".page5 .text-container").css({
        background: imgPath,
        "background-size": "100%"
      });
    }
  }
});

$(".sign").on("change", function() {
  this.value = "— " + this.value.replace("— ", "");
});
$(".makepic").on("click", () => {
  var toIndex = (twoSwiper.activeIndex % 4) + 5;
  oneSwiper.slideTo(toIndex);
});

$("#start_btn").on("click", () => {
  oneSwiper.slideNext(0);
  twoSwiper.init();
});

var test = document.querySelector(".text-container");
var pg5 = document.querySelector(".page5");
$("input")
  .on("focus", function() {
    setTimeout(function() {
      test.scrollIntoView(true);
      test.scrollIntoViewIfNeeded(true);
    }, 100);
  })
  .on("blur", function() {
    setTimeout(function() {
      pg5.scrollIntoView(true);
      pg5.scrollIntoViewIfNeeded(true);
    }, 100);
  });

// function changefocus(){
//     var u =  navigator.userAgent, app =  navigator.appVersion;
//     var isAndroid =  u.indexOf('Android') > -1 ||  u.indexOf('Linux') > -1;
//     if(isAndroid){
//       setTimeout(function()  {
//         document.activeElement.scrollIntoViewIfNeeded();
//         document.activeElement.scrollIntoView();
//       }, 500);
//     }
//   }
// 阻止页面被拖动
document.addEventListener(
  "touchmove",
  function(e) {
    e.preventDefault();
  },
  isPassive()
    ? {
        capture: false,
        passive: false
      }
    : false
);
document.body.addEventListener(
  "touchmove",
  function(e) {
    e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
  },
  { passive: false }
); //passive 参数不能省略，用来兼容ios和android
function isPassive() {
  var supportsPassiveOption = false;
  try {
    addEventListener(
      "test",
      null,
      Object.defineProperty({}, "passive", {
        get: function() {
          supportsPassiveOption = true;
        }
      })
    );
  } catch (e) {}
  return supportsPassiveOption;
}
