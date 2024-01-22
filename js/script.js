/* nav scroll */
const marker = document.querySelector(".marker");

// nav의 marker길이와 위치 설정하는 함수
const setMarker = (e) => {
  marker.style.left = e.offsetLeft + "px";
  marker.style.width = e.offsetWidth + "px";
};
const sections = document.querySelectorAll("section");
const menus = document.querySelectorAll(".nav-menu > li > a");

// 스크롤 위치에따라 해당 menu색깔과 마커가 달라짐

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop =
      window.scrollY + section.getBoundingClientRect().top - 10;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }

    // sec2 스크롤시 텍스트모션
    if (current == "two") {
      document.querySelector(".greeting").classList.add("focus-in-expand");
      document
        .querySelector(".profile__introduction")
        .classList.add("tracking-in-contract");
    }

    menus.forEach((menu) => {
      menu.classList.remove("nav-menu-foused");
      const href = menu.getAttribute("href").substring(1);
      if (href === current) {
        menu.classList.add("nav-menu-foused");
        setMarker(menu);
      }
    });
  });

  // 스크롤 시 내비게이션 컨테이너가 생기는 이벤트
  window.addEventListener("scroll", function () {
    nav.classList.toggle("nav_fixed", window.scrollY > 0);
  });
});

// sec3 swiper 슬라이드
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 20,
  effect: "fade",
  loop: true,
  speed: 800,
  mousewheel: {
    invert: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
