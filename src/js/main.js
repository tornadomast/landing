//слайдер
new Swiper (".swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,    
  });

// модальне вікно

const button = document.getElementById('openContact'),
      navbarBtn = document.querySelector('.navbar__btn'),
      overflow = document.querySelector('.overflow'),
      modal = document.getElementById('consultation'),
      closeBtn = document.querySelector('.modal-consult__close');

button.addEventListener('click', () => {
  modal.classList.add('active');
  overflow.classList.add('active');
  
});
navbarBtn.addEventListener('click', () => {
  modal.classList.add('active');
  overflow.classList.add('active');
  
});
closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
  overflow.classList.remove('active');
  
});


$().ready(function() {

  $('#consultsend').submit(function(e) {
      e.preventDefault();
      if (!$(this).valid()) {
          return;
      }
      $.ajax({
          type: "POST",
          url: "/mailer/smart.php",
          data: $(this).serialize()
      }).done(function(){
          $(this).find("input").val("");
          $('.overflow, #consultation').fadeOut('slow');
          $('#consultsend').trigger('reset');
      });
      return false;
      });
});