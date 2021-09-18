//---------------------------Elements de DOM------------------------------------------------
const fullNameInput = document.querySelector('#fullName');
const emailInput = document.querySelector('#email');
const password1Input = document.querySelector('#password1');
const password2Input = document.querySelector('#password2');

const fullNameMsg = document.querySelector('#nameField');
const emailMsg = document.querySelector('#emailField');
const password1Msg = document.querySelector('#password1Field');
const password2Msg = document.querySelector('#password2Fieled');

const signUpForm = document.querySelector('form');
const eyeBtns = document.querySelectorAll('.eyeBtn');
const checkBtn = document.querySelector('#check');
//-----------------------------Validation de formlaire d'inscription-----------------------

signUpForm.addEventListener('submit',function(e){
    e.preventDefault();
    let isValidName = validateName(fullNameInput.value);
    let isValidEmail = validateEmail(emailInput.value);
    let isValidPassword1 = validatePassword1(password1Input.value);
    let isValidPassword2 = validatePassword2(password1Input.value,password2Input.value);
    let acceptConditions = validateCondtions(); 
    if(isValidName && isValidEmail && isValidPassword1 && isValidPassword2 && acceptConditions){
        e.target.submit();
    }
});
//-------------------------les fonctions de validation--------------------------------------------
//la fonction qui permet de valider un nom
function validateName(name){
    const regexp = new RegExp(/^[a-zA-Z ]+$/); //expression régulière de Nom complet
    let isValid = false ;
    if(!regexp.test(name)){
        fullNameMsg.innerText = 'Veuillez entrer un nom valide'; //message de validation
    }else{
        fullNameMsg.innerText = ''; 
        isValid = true ;
    }    
    return isValid;
}
//la fonction qui permet de valider un email 
function validateEmail(email) {
    //expression régulière d'email
    const emailRegexp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    let isValid = false;
    if(!emailRegexp.test(email)){
        emailMsg.innerText = 'Veuillez entrer un email valide'; //message de validation
    }else{
        emailMsg.innerText = ''; 
        isValid = true ;
    }    
    return isValid;

} 
//la fonction qui permet de valider le premier mot de passe
function validatePassword1(password){
    //expression régulière de mot de passe
    // const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{4,6}$/;
    let isValid = false;
    if(!(password.length >= 4 && password.length <= 6)){
        password1Msg.classList.add('text-danger') ;
        password1Msg.innerText = 'votre mot de passe doit comporter entre 4 et 6 caractères';
    }else{
        password1Msg.innerText = '' ;
        isValid = true ;
    }
    return isValid;
}
//la fonction ci-dessous permet de valider le deuxiéme mot de passe
function validatePassword2(password1,password2){
    let isValid = false;
    if(password1 != password2){
        password2Msg.innerText = "les deux mots de passe ne correspondent pas";
    }else{  
        password2Msg.innerText = '';
        isValid = true;
    }
    return isValid;
}
/*la fonction ci-dessos permet de vérifier si l'utilisateur a accepté 
les conditions générales ou non */
function validateCondtions(){
    let isValid = false
    if(!checkBtn.checked){
        checkBtn.classList.toggle('warning') ;
    }else{
        isValid = true;
    }
    return isValid;
}
//--------------------afficher et cacher le mot de passe-----------------------------------

eyeBtns[0].addEventListener('click',function(){showHidePassword(this,password1Input)});
eyeBtns[1].addEventListener('click',function(){showHidePassword(this,password2Input)});

function showHidePassword(elem,passwordField){
    if(passwordField.getAttribute('type') == 'password' ){
        elem.children[0].classList.add('fa-eye-slash');
        passwordField.setAttribute('type','text');
    }else{
        elem.children[0].classList.remove('fa-eye-slash');
        passwordField.setAttribute('type','password');
    }
    
}
//-----------------Effets d'animation avec JQuery------------------------------------------------
$(function(){
    $('#container').hide().fadeIn(1500);
    setTimeout(()=>{ $('.line1').css('border-right','none')},3000); 
    $('.userIcon').hover(function(){
        $('.icon').addClass('fas');
    }
        ,function(){
            $('.icon').removeClass('fas')
        });
   
});