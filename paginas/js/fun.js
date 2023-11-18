
const menuPhone = document.querySelector('.phone_menu')
const imgsPhoneMenu = document.querySelector('.logo_phone img')
const imgsPhoneMenu2 = document.querySelector('.menu_p img')

document.addEventListener('scroll', () => {
    if(window.scrollY > 600){
        menuPhone.style.backgroundColor = 'rgba(243, 249, 251, 0.7)'
        imgsPhoneMenu.style.width = '18%'
    } else{
        menuPhone.style.backgroundColor = 'rgba(243, 249, 251)'
        imgsPhoneMenu.style.width = '25%'
    }
    
})
menuPhone.addEventListener('mouseover', () => {
    if(window.scrollY > 600){
        menuPhone.style.backgroundColor = 'rgba(243, 249, 251)'
        imgsPhoneMenu.style.width = '25%'
    } 
    
})
menuPhone.addEventListener('mouseout', () => {
    if(window.scrollY > 600){
        menuPhone.style.backgroundColor = 'rgba(243, 249, 251, 0.7)'
        imgsPhoneMenu.style.width = '18%'
    } 
})


const menuIcon = document.querySelector('.menu_icon');
const navMenu = document.querySelector('.nav_phone_menu');
const optionsNavMenu = document.querySelector('.nav_phone_menu li')

menuIcon.addEventListener('click', function () {
    navMenu.classList.toggle('show');
    menuPhone.style.backgroundColor = 'rgba(243, 249, 251)'
    imgsPhoneMenu.style.width = '25%'
});

optionsNavMenu.addEventListener('click', function () {
    navMenu.classList.toggle('show');
})
