const wrapper = document.querySelector('.login');
const btnPopup = document.querySelector('.loginPopup');
const closePopup = document.querySelector('.closebtn');

btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});

closePopup.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});