// 导入css
import "swiper/dist/css/swiper.min.css";
import "./css/animate.min.css";
import "./css/index.scss";

// 导入js
import $ from "jquery";
import swiper from "swiper";

// load画面
load()
function load(){
  setTimeout(()=>{
    oneSwiper.init()
    $('.load-container').hide()
    oneSwiper.slideTo(0)
  },1000)
}
// 第一模块

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
    slideChange: function() {
      if (this.activeIndex == 3) twoSwiper.init();
    }
  }
});

// 第2模块

var twoSwiper = new swiper(".swiper-two", {
  direction: "horizontal",
  effect: "coverflow",
  init: false,
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
      var imgPath = `url('./images/page5/封面${slideIndex}.png') no-repeat`;
      $(".page5 .text-container").css({
        background: imgPath,
        "background-size": "100%"
      });
    }
  }
});

$(".makepic").on("click", () => {
  if(!$(".sign input").val()) {
    $('.toast').fadeIn().fadeOut()
    return
  }
  drawImageToPage($(".page6"));
});

function drawImageToPage(page) {
  var toIndex = twoSwiper.activeIndex % 4 + 1;
  var c = document.createElement("canvas");
  var ctx = c.getContext("2d");
  var img = new Image();
  img.crossOrigin = "Anonymous"; //解决跨域
  img.src = `./images/bg${toIndex}.jpg`;
  oneSwiper.slideNext(0);
  img.onload = function() {
    c.width = img.width;
    c.height = img.height;
    var fsize = c.width / 30;
    var textContent = [];
    $('input[class^="text-line"]').each(function(i) {
      textContent.push($(this).val());
    });
    ctx.rect(0, 0, c.width, c.height);
    ctx.drawImage(img, 0, 0, c.width, c.height);
    ctx.fillStyle = toIndex % 2 ? "#eee" : "#000";
    var textX = c.width / 5;
    var textY = c.height * (5 / 9);
    for (var l = 0; l < textContent.length; l++) {
      ctx.textAlign = "left";
      ctx.font = `${fsize + "px"} sans-serif`;
      if (!l) {
        ctx.font = `${fsize + 10 + "px"} sans-serif`;
        ctx.fillText(textContent[l], textX + 50, textY + l * 70);
      } else if (l == textContent.length-1) {
        ctx.textAlign = "right";
        ctx.fillText("—" + textContent[l], c.width-textX, textY + l * 70);
      } else {
        ctx.fillText(textContent[l], textX, textY + l * 70);
      }
    }
    var cimg = document.createElement("img");
    cimg.src = c.toDataURL("image/jpeg", 0.8);
    cimg.style.width = "100%";
    // cimg.style.zIndex = 66;
    page.append(cimg);
    $(".loadCon").hide()
    $(".save").show()
  };
}

$("#start_btn").on("click", () => {
  oneSwiper.slideNext(0);
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
