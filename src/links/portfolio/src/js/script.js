
const hamburger = document.querySelector('.promo__hamburger'),
        menu = document.querySelector('.menu'),
        closeBtn = document.querySelector('.menu__close'),
        button1 = document.getElementById('1'),
        button2 = document.getElementById('2'),
        button3 = document.getElementById('3'),
        button4 = document.getElementById('4'),
        button5 = document.getElementById('5'),
        button6 = document.getElementById('6');

        


hamburger.addEventListener('click', () => {
    menu.classList.add('active')
});
closeBtn.addEventListener('click', () => {
    menu.classList.remove('active')
});
button1.addEventListener('click', () => {
    menu.classList.remove('active')
});
button2.addEventListener('click', () => {
    menu.classList.remove('active')
});
button3.addEventListener('click', () => {
    menu.classList.remove('active')
});
button4.addEventListener('click', () => {
    menu.classList.remove('active')
});
button5.addEventListener('click', () => {
    menu.classList.remove('active')
});
button6.addEventListener('click', () => {
    menu.classList.remove('active')
});



const count = document.querySelectorAll('.skills__progressBlock-counter'),
      line = document.querySelectorAll('.skills__progressBlock-line span'); 

      count.forEach((item, i) => { (line[i].style.width = item.innerHTML)
     });

   
     
      
        
        
      
  
      
    
      