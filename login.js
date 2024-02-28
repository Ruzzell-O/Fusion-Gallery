const wrapper = document.querySelector('.login');
const btnPopup = document.querySelector('.loginPopup');
const closePopup = document.querySelector('.closebtn');

const wrapperSignup = document.querySelector('.signupform');
const btnPopupSignup = document.querySelector('.signupPopup');
const closePopupSignup = document.querySelector('.closebtnSignup');

btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});

closePopup.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});

btnPopupSignup.addEventListener('click',()=>{
    wrapperSignup.classList.add('active-popup');
})

closePopupSignup.addEventListener('click',()=>{
    wrapperSignup.classList.remove('active-popup');
})

