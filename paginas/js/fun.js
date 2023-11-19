
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
const optionsNavMenu = document.querySelectorAll('.nav_phone_menu li')
const containerX = document.querySelector('.menu_p')

menuIcon.addEventListener('click', function () {
    navMenu.classList.toggle('show');
    menuPhone.style.backgroundColor = 'rgba(243, 249, 251)'
    imgsPhoneMenu.style.width = '25%'

    if(menuIcon.src.includes('List.png')){
        menuIcon.src = '../images/X.png'
    } else{
        menuIcon.src = '../images/List.png'
    }
});

optionsNavMenu.forEach((op) => {
    op.addEventListener('click', function () {
        navMenu.classList.toggle('show');
    })
})

const logoHome = document.querySelectorAll('.principal_logo')
console.log(logoHome)

logoHome.forEach((home) => {
    home.addEventListener('click', () => {
        window.location.href = '../index.html';
    })
})