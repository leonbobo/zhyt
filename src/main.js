// 导入css
import "swiper/dist/css/swiper.min.css";
import "./css/animate.min.css";
import "./css/index.scss";

// 导入js
import $ from "jquery";
import swiper from "swiper";

var mySwiper = new swiper(".swiper-container", {
  direction: "vertical",
  initialSlide: 0,
  // effect: "fade",

  on: {
    init() {
      swiperAnimateCache(this); //隐藏动画元素
      swiperAnimate(this); //初始化完成开始动画
    },
    slideChangeTransitionEnd: function() {
      swiperAnimate(this);
    },
    slideChange: function() {
      $(".gezi").css("left", "30px");
      $(".role3").css("right", "-7rem");
      $(".car2").css("left", "-15rem");
      $(".think2").hide();
      $(".content2").hide();
      $(".mark1").hide();
      $(".mark2").hide();
      $(".mark3").hide();
      $(".think3").hide();
      $(".content3").hide();
      $(".aside3").hide();
      $(".role2-3").css({ top: "25rem", left: "-4rem" });
      switch (this.activeIndex) {
        case 1:
        case 2:
          $(".car2")
            .stop()
            .animate({ left: "0rem" }, 200, () => {
              $(".think2")
                .stop()
                .show(1000, () => {
                  $(".content2")
                    .stop()
                    .show(0, () => {
                      $(".mark1")
                        .stop()
                        .show(100, () => {
                          $(".mark2")
                            .stop()
                            .show(1000, () => {
                              $(".role2-3")
                                .stop()
                                .animate(
                                  { left: "0rem", top: "20rem" },
                                  1500,
                                  () => {
                                    $(".mark3")
                                      .stop()
                                      .show(0);
                                  }
                                );
                            });
                        });
                    });
                });
            });
        case 3:
          $(".role3")
            .stop()
            .animate({ right: "0rem" }, 1000, () => {
              $(".think3")
                .stop()
                .show(100, () => {
                  $(".content3")
                    .stop()
                    .show(1000, () => {
                      $(".aside3")
                        .stop()
                        .show(200);
                    });
                });
            });

        case 4:
          $(".gezi").animate(
            {
              left: "+300px"
            },
            1000
          );
        case 5:
      }
    }
  }
});
