const mybutton = document.getElementById("toTop");
const scrollFunction = () => {
  if (
    document.body.scrollTop > 420 ||
    document.documentElement.scrollTop > 420
  ) {
    mybutton.classList.remove("hidden");
  } else {
    mybutton.classList.add("hidden");
  }
};
const backToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
mybutton.addEventListener("click", backToTop);

window.addEventListener("scroll", scrollFunction);

document.querySelector(".menu-mobile i").addEventListener("click", function () {
  const menu = document.querySelector(".mobile-menu");
  menu.classList.toggle("show");
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});
document.querySelector('.close-menu i').addEventListener('click', function() {
  document.querySelector('.mobile-menu').classList.remove('show');
  setTimeout(function() {
      document.querySelector('.mobile-menu').classList.add('hidden');
  }, 800); 
});

var swiper = new Swiper(".productSwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-product-next",
    prevEl: ".swiper-product-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    520: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

var swiper = new Swiper(".cateSwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-cate-next",
    prevEl: ".swiper-cate-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    520: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 3.75,
      spaceBetween: 30,
    },
  },
});

document.querySelector(".avt").addEventListener("click", function () {
  var dropdown = document.getElementById("dropdown");
  if (dropdown.style.display === "none" || dropdown.style.display === "") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
});


// slidebanner
var swiper = new Swiper(".bannerSwiper", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true, 
  speed: 800,
  loop: true, 
  effect: "slide"
});

