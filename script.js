let signUpBtn = document.querySelector('.signUpBtn');
let signInBtn = document.querySelector('.signInBtn');
let nameField = document.querySelector('.namefield');
let Title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let text = document.querySelector('.text');

signInBtn.addEventListener('click',()=>{
    nameField.style.maxHeight = '0';
    Title.innerHTML = 'Sign In';
    text.innerHTML = 'Lost Password';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.style.transform = 'translateX(35px)';
});

signUpBtn.addEventListener('click',()=>{
    nameField.style.maxHeight = '60px';
    Title.innerHTML = 'Sign Up';
    text.innerHTML = 'Password Suggestion ';
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    underline.style.transform = 'translateX(0)';
});