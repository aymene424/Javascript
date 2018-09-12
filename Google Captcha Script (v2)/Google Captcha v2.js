// INSERT THE SCRIPT INTO YOUR PHP OR ASPX OR ... FILE

<script src="https://www.google.com/recaptcha/api.js"></script>

// INSERT THIS HTML INTO YOUR CODE AFTER YOU LOGIN INTO GOOGLE CAPTCHA AND YOU GET YOUR KEY

<div class="g-recaptcha" data-sitekey="xxxxxxxxxxxxxxYourkeyxxxxxxxxxxx"></div>

// CHECK ON YOUR JAVASCRIPT IF GCAPTCHA IS VALIDE

if (grecaptcha.getResponse().toString().length > 0) {  
    // Do something
}

/*   IF YOUR ARE APPEND OR LOADING YOUR CAPTCHA ON YOUR HTML AFTER LOADING PAGE
     
     YOU SHOULD REMOVE AND APPEND AGAIN YOUR CAPTCHA HTML OR
     
     YOU SHOULD RELOADING THE GOOGLE CAPTCHA SCRIPT WITH JAVASCRIPT..
     
*/

