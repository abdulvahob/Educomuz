$(document).ready(function () {
  if ($(".header-search__form-search").length) {
    $(".header-search__form-search").keyup(function () {
      if ($(this).val().length > 0) {
        $(".header-search__form-reset").show(0);
      } else {
        $(".header-search__form-reset").hide(0);
      }
    });
  }

  if ($(".header-search__form-search").length) {
    $(".header-search__form-search").on("click", function () {
      $(".header-search__form-toolTop").addClass("show");
    });
  }

  if ($(".header-search__form-toolTop .remove").length) {
    $(".header-search__form-toolTop .remove").on("click", function () {
      $(".header-search__form-toolTop").removeClass("show");
    });
  }

  if ($(".header-search__form-icon").length) {
    $(".header-search__form-icon").click(function () {
      $(".header-search__form-toolCog").addClass("show");
    });
  }

  // let isChecked = false;
  if ($(".header-search__form-toolCog li").length) {
    $(".header-search__form-toolCog li").on("click", function () {
      $(this).toggleClass("checked");

      if ($(this).hasClass("checked")) {
        $(this).find("input[type=checkbox]").attr("checked", "true");
      } else {
        $(this).find("input[type=checkbox]").removeAttr("checked", "false");
      }

      $(this).find(".fa").toggleClass("fa-square-o");
      $(this).find(".fa").toggleClass("fa-check-square-o");
    });
    $(".header-search__form-toolCog .remove").on("click", function () {
      $(".header-search__form-toolCog").removeClass("show");
    });
  }

  if ($(".footer__menu-item").length) {
    $(".footer__menu-item").mouseenter(function () {
      $(this).addClass("hovered");
      $(this).siblings(".footer__menu-item").addClass("siblings");
    });
    $(".footer__menu-item").mouseleave(function () {
      $(this).removeClass("hovered");
      $(this).siblings(".footer__menu-item").removeClass("siblings");
    });
  }

  $(window).scroll(function () {
    if (window.innerHeight < window.pageYOffset) {
      $(".header-bottom").addClass("sticky");
    } else {
      $(".header-bottom").removeClass("sticky");
    }
  });

  if ($(".socials__item").length) {
    $(".socials__item").mousemove(function () {
      $(this).siblings(".socials__item").addClass("dark");
    });

    $(".socials__item").mouseleave(function () {
      $(".socials__item").removeClass("dark");
    });
  }

  if ($(".registration-email-form-title").length) {
    $(".registration-email-form-title").on("click", function () {
      $(".registration-email-form").slideToggle();
    });
  }

  if ($('[data-modal="user-modal"]').length) {
    $('[data-modal="user-modal"]').on("click", function () {
      $(".user-modal").addClass("open");
    });
  }

  if ($(".user-modal-remove").length) {
    $(".user-modal-remove").on("click", function () {
      $(".user-modal").removeClass("open");
    });
  }

  if ($(".tel-number").length) {
    $(".tel-number").inputmask({ mask: "+\\9\\98 (99) 999-99-99" });
  }

  if ($("#countdown").length) {
    let timestamp = $("#timestamp").text();
    
    var countDownDate = new Date(timestamp * 1000).getTime();

    var x = setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;

      // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // $("#days").text(days);
        $("#hour").text(hours);
        $("#minut").text(minutes);
        $("#second").text(seconds);
      
      if (distance < 0) {
        clearInterval(x);
        $("#countdown").html("End time");
      }
    }, 1000);
  }

  if($(".user .user__body-item").length) {
    if($(this).hasClass("active")) {
      $(this).siblings(".user__body-desc").addClass("show");
    }
    
    $(".user .user__body-title").on("click", function(){
      $(this).parents(".user .user__body-item").siblings(".user__body-item").find(".user__body-title").removeClass("active");
      $(this).parents(".user .user__body-item").siblings(".user__body-item").find(".user__body-desc").removeClass("show");
      $(this).addClass("active");
      $(this).siblings(".user__body-desc").addClass("show");
    });
  }
});
