// Подключение Burger Menu //

// function burgerMenu() {
//   let burger = document.querySelector(".burger");

//   burger.addEventListener('click', function () {
//       burger.classList.toggle("burger_active");
//   })

// }

// burgerMenu();

function burgerMenu() {
  let burger_icon = document.querySelector(".burger_icon");
  let burger_menu = document.getElementById("burger_menu");
  let close_icon = document.getElementById("close_icon");

  burger_icon.addEventListener('click', function() {
      burger_menu.classList.toggle("burger_menu_active");
  })
  close_icon.addEventListener('click', function() {
      burger_menu.classList.toggle("burger_menu_active");
  })

}
burgerMenu()

// Подключение Swiper //
const swiper = new Swiper('.swiper', {

  // Optional parameters
  direction: 'horizontal',
  effect: 'slide',
  speed: 300,
  autoplay: true,
  loop: true,

  // Navigation buttons
  navigation: {
    prevEl: '.swiper__btn-prev',
    nextEl: '.swiper__btn-next',
  },

});




