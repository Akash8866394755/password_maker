window.onload = function() {
    var password = document.
    getElementById("password");
    var passwordLong = document.
    getElementById("password-long-message");

   password.onclick = function() {
    if(password.value == "")
    passwordLong.style.display = "block";
else {
    passwordLong.style.display = "none";

}
   }
    password.oninput = function() {

        var lower = /[a-z]/g;
        var upper = /[A-Z]/g;
        var digit = /[0-9]/g;
        var symbol = /[/!/@/#/$/%/^/&/*/(/)]/;

        var passwordAlignMessage1 = document.
        getElementById("password-align-message1");
        var passwordAlignMessage2 = document.
        getElementById("password-align-message2");
        var passwordAlignMessage3 = document.
        getElementById("password-align-message3");

        var m1 = document.
        getElementById("m-1");
        var m2 = document.
        getElementById("m-2");
        var m3 = document.
        getElementById("m-3");
        
        if(password.value == "") {
            passwordAlignMessage1.
            style.display = "none";
            m1.style.display = "none";
            passwordLong.style.
            display = "block";

            passwordAlignMessage2.
            style.display = "none";
            m2.style.display = "none";
            passwordLong.style.
            display = "block";

            passwordAlignMessage3.
            style.display = "none";
            m3.style.display = "none";
            passwordLong.style.
            display = "block";
        }
        if(password.value.match(lower) || password.value.match(upper) || password.value.match(symbol) || password.value.match(digit)) {
            m1.style.display = "block";
            passwordAlignMessage1.
            style.display = "block";
            passwordAlignMessage2.
            style.display = "none";
            m2.style.display = "none";
            passwordLong.style.
            display = "none";
        }
        
       if((password.value.match(upper) ||
        password.value.match(digit)) && password.value.match(lower)) {
            m2.style.display = "block";
            passwordAlignMessage1.
            style.display = "none";
            passwordAlignMessage2.
            style.display = "block";
            passwordAlignMessage3.
            style.display = "none";
            m3.style.display = "none";
            passwordLong.style.
            display = "none";
        }
        
         if(password.value.match(symbol) && password.value.match(lower) && password.value.match(upper) && password.value.match(digit)) {
            m3.style.display = "block";
            passwordAlignMessage2.
            style.display = "none";
            passwordAlignMessage3.
            style.display = "block";
            passwordLong.style.
            display = "none";
        }
     
       
    }

    var eyeBtn = document.
    getElementById("eye-btn");
    eyeBtn.onclick = function() {
        var eyeIcon = document.
        getElementById("eye-icon");
        if(password.type == "password") {

            eyeIcon.className = "fa fa-eye-slash";
            eyeIcon.style.color = "#000";
            password.type = "text";
            
        }else {
            eyeIcon.className = "fa fa-eye";
            eyeIcon.style.color = "#ccc";
            password.type = "password";
        }
    }

}

