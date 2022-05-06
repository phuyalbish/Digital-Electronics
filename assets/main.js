
var gototop = document.getElementById("gototop");
var heading = document.getElementById("headings");
var headinglogo = document.getElementById("heading_logo");
var headingsearch = document.getElementById("heading_search");
var headingtitle = document.getElementById('heading_title');



//For Animated custome made alert box................
const customeanimationerr = document.querySelector('div.customeanimationerr');
let iterationCounterr = 0;
const customeanimationsuc = document.querySelector('div.customeanimationsuc');
let iterationCountsuc = 0;
//.................................................



var userpasswordeditvisibel = document.forms["formtoedit"]["user_password_edit"];

var loginnpasswordvisible = document.getElementById("LogIn_Password");


// The password visibility;;
function visiblepassword(vic) {
  if (userpasswordeditvisibel.type === "password") {
      userpasswordeditvisibel.type = "text";
      vic.src = "images/icons/eye-slash-regular.svg"
    } else {
      userpasswordeditvisibel.type = "password";
      vic.src =  "images/icons/eye-regular.svg";
    }
}
function visiblepassword2(vic2) {
    if (loginnpasswordvisible.type === "password") {
      loginnpasswordvisible.type = "text";
        vic2.src = "images/icons/eye-slash-regular.svg"
      } else {
          loginnpasswordvisible.type = "password";
        vic2.src =  "images/icons/eye-regular.svg";
      }
  }



// The custome scroll function.........
function scrollFunction() {
  if (document.documentElement.scrollTop > 25 || document.body.scrollTop > 25) {
      gototop.style.display = "block";
  } else {
      gototop.style.display = "none";
  }
  if (document.documentElement.scrollTop > 45 || document.body.scrollTop > 45) {
      headinglogo.style.width = "50px";
      heading.style.background = "linear-gradient(to left, rgba(255,255,255, 0.96), rgba(84, 170, 250, 0.96))";
      heading.style.boxShadow = "0px 7px 10px rgba(0, 0, 0, 0.63)";
      headingsearch.style.border = "none";
      headingtitle.style.color = "white";
  } else {
      headinglogo.style.width = "80px";
      heading.style.background = "transparent";
      headingsearch.style.border = "2px solid rgb(3, 122, 233)";
      headingtitle.style.color = " rgba(24, 24, 24, 0.911)";
      heading.style.boxShadow = "none";
  }

}

// Windows while scroll works as top function........
window.onscroll = function () {
  scrollFunction();
};




// Custome Alert Pop Up...

// For error .....

customeanimationerr.addEventListener('animationiteration', () => {
  iterationCounterr++;
});

customeanimationerr.addEventListener('animationend', () => {
    customeanimationerr.classList.remove('customeactiveerr');
});
var alerterr = function(msgerr){
    customeanimationerr.classList.toggle('customeactiveerr');
iterationCounterr = 0;
let customeactiveerr = customeanimationerr.classList.contains('customeactiveerr');
document.getElementById("alertmsgerr").innerHTML = msgerr;
}

//For Success...
customeanimationsuc.addEventListener('animationiteration', () => {
    iterationCountsuc++;
  });
  
  customeanimationsuc.addEventListener('animationend', () => {
      customeanimationsuc.classList.remove('customeactivesuc');
  });
  var alertsuc = function(msgsuc){
      customeanimationsuc.classList.toggle('customeactivesuc');
  iterationCountsuc = 0;
  let customeactivesuc = customeanimationsuc.classList.contains('customeactivesuc');
  document.getElementById("alertmsgsuc").innerHTML = msgsuc;
  }

// For Go to top button

function scrollnow() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
