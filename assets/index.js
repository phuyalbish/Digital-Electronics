//For the Profile Box..........................................
var selectimg = document.getElementById("hidden_profile_character");
var profilecontainer = document.getElementById("profile_container");
var savedacccontainer = document.getElementById("saved_account_container");
var loginn = document.getElementById("login");
var signinn = document.getElementById("signin");
var hiddeneditablecontainer = document.getElementById("hidden_editable_container");
var loginnitem = document.getElementById("login_item");
//..........................****............................

//For Profile Content...................................
var profileimg = document.getElementById("actual_image");
var editimg = document.getElementById("user_image_edit");
var currentimg = document.getElementById("current_img");
var defaultimg = document.getElementById("defaultimage");

var username = document.getElementById("user_name");
var userage = document.getElementById("user_age");
var userbio = document.getElementById("user_bio");


var usernameedit = document.forms["formtoedit"]["user_name_edit"];
var useraddressedit = document.forms["formtoedit"]["user_address_edit"];
var userageedit = document.forms["formtoedit"]["user_age_edit"];
var userpasswordedit = document.forms["formtoedit"]["user_password_edit"];
var userbioedit = document.forms["formtoedit"]["user_bio_edit"];


// THe local storage for values... and Animation during page reload.

function retrive() {
    var i;


    for (i = 1; i <= 5; i++) {
        if (!localStorage.hasOwnProperty('user' + i) || !localStorage["user" + i]) {
            var userdefault = {
                name: "user" + i,
                age: null,
                bio: "",
                password: "",
                address: "#",
                img: defaultimg.src
            };
            window.localStorage.setItem("user" + i, JSON.stringify(userdefault));
            window.localStorage.setItem("currentprofile", "user1");
        }
    }

    scrollFunction();
    var currentprofile1 = localStorage.getItem("currentprofile");
    var usernow1 = JSON.parse(localStorage.getItem(currentprofile1));
    profileimg.src = usernow1.img;
    username.innerHTML = usernow1.name;
    username.href = usernow1.address;
    userage.innerHTML = usernow1.age;
    userbio.innerHTML = usernow1.bio;

}


function bar_clickOn() {
    document.getElementById("bar_nav_item").style.display = "block";
    document.getElementById("menu_icon").style.display = "none";
    document.getElementById("cross_icon").style.display = "block";
    loginnitem.style.display = "none";
    selectimg.style.display = "none";

}

function bar_clickOff() {
    document.getElementById("bar_nav_item").style.display = "none";
    document.getElementById("menu_icon").style.display = "block";
    document.getElementById("cross_icon").style.display = "none";

}




function logInOn() {


    if (username.innerHTML == "") {

        profilecontainer.style.display = "none";
        savedacccontainer.style.display = "block";
    } else {

        savedacccontainer.style.display = "none";
        profilecontainer.style.display = "block";
    }
    selectimg.style.display = "none";
    loginn.style.display = "block";
    signinn.style.display = "block";
    hiddeneditablecontainer.style.display = "none";
    loginnitem.style.display = "block";
    var currentprofile4 = localStorage.getItem("currentprofile");
    var usernow2 = JSON.parse(localStorage.getItem(currentprofile4));
    profileimg.src = usernow2.img;
    username.innerHTML = usernow2.name;
    username.href = usernow2.address;
    userage.innerHTML = usernow2.age;
    userbio.innerHTML = usernow2.bio;

}

function logInOff() {
    loginnitem.style.display = "none";
    hiddeneditablecontainer.style.display = "none";

}

function hiddenlogInOn() {

    if (username.innerHTML == "") {

        profilecontainer.style.display = "none";
        savedacccontainer.style.display = "block";
    } else {

        savedacccontainer.style.display = "none";
        profilecontainer.style.display = "block";
    }
    loginn.style.display = "block";
    signinn.style.display = "block";
    hiddeneditablecontainer.style.display = "none";
    document.getElementById("bar_nav_item").style.display = "none";
    document.getElementById("menu_icon").style.display = "block";
    document.getElementById("cross_icon").style.display = "none";
    loginnitem.style.display = "block";
    var currentprofile5 = localStorage.getItem("currentprofile");
    var usernow3 = JSON.parse(localStorage.getItem(currentprofile5));

    profileimg.src = usernow3.img;
    username.innerHTML = usernow3.name;
    username.href = usernow3.address;
    userage.innerHTML = usernow3.age;
    userbio.innerHTML = usernow3.bio;
}


// Content Ediatblle

function contentEdit() {

    var currentprofile2 = localStorage.getItem("currentprofile");
    var randomedituser = JSON.parse(localStorage.getItem(currentprofile2));
    var editdefaultuser = {
        name: currentprofile2,
        age: null,
        bio: "",
        password: "",
        address: "#",
        img: defaultimg.src
    }


    profilecontainer.style.display = "none";
    hiddeneditablecontainer.style.display = "block";

    if (window.innerWidth < 912) {
        loginn.style.display = "none";
        signinn.style.display = "none";
    } else {
        loginn.style.display = "block";
        signinn.style.display = "block";

    }
    if (randomedituser.img == editdefaultuser.img && randomedituser.name == editdefaultuser.name && randomedituser.age == editdefaultuser.age && randomedituser.bio == editdefaultuser.bio) {
        editimg.src = randomedituser.img;
        usernameedit.value = "";
        useraddressedit.value = "";
        userageedit.value = "";
        userpasswordedit.value = "";
        userbioedit.value = "";
    } else {
        editimg.src = randomedituser.img;
        usernameedit.value = randomedituser.name;
        useraddressedit.value = randomedituser.address;
        userageedit.value = randomedituser.age;
        userpasswordedit.value = randomedituser.password;
        userbioedit.value = randomedituser.bio;
    }

}




// For Character Choosing

function choose_img() {
    selectimg.style.display = "block";
    currentimg.src = editimg.src;
}

function character(select) {
    currentimg.src = select.src;
    editimg.src = select.src;
    profileimg.src = select.src;
    selectimg.style.display = "none";
}


// For saving The edit................
function saveedit() {
    var currentprofile3 = localStorage.getItem("currentprofile");
    var user = {
        name: "",
        age: null,
        bio: "",
        password: "",
        address: "",
        img: ""

    };

    if (usernameedit.value.match(/^[A-Za-z ]+$/)) {

        if (userageedit.value <= 99 && userageedit.value >= 10) {

            if (userbioedit.value !== "") {
                loginn.style.display = "block";
                signinn.style.display = "block";
                hiddeneditablecontainer.style.display = "none";
                profilecontainer.style.display = "block";
                username.href = useraddressedit.value;
                username.innerHTML = usernameedit.value;
                userage.innerHTML = userageedit.value;
                userbio.innerHTML = userbioedit.value;

                user.name = usernameedit.value;
                user.age = userageedit.value;
                user.bio = userbioedit.value;
                user.password = userpasswordedit.value;
                user.address = useraddressedit.value;
                user.img = editimg.src;

                window.localStorage.setItem(currentprofile3, JSON.stringify(user));

            } else {
                alerterr("Invalid Bio.");
            }

        } else {
            alerterr("Invalid Age.");
        }
    } else {
        alerterr("Invalid Name.");
    }

}

function canceledit() {
    loginn.style.display = "block";
    signinn.style.display = "block";
    hiddeneditablecontainer.style.display = "none";
    profilecontainer.style.display = "block";

}



// For sign out

function profile_signount() {
    profilecontainer.style.display = "none";
    savedacccontainer.style.display = "block";
    var j;
    for (j = 1; j <= 5; j++) {
        var savedaccountdata = JSON.parse(localStorage.getItem("user" + j));
        var savedaccountimg = document.getElementById("saved_acc_img" + j);
        var savedaccountname = document.getElementById("saved_acc_name" + j);
        savedaccountimg.src = savedaccountdata.img;
        savedaccountname.innerHTML = savedaccountdata.name;
    }

}


function chooseaccount(child) {
    profilecontainer.style.display = "block";
    savedacccontainer.style.display = "none";

    var parent = child.parentNode.parentNode;
    var child_index = Array.prototype.indexOf.call(parent.children, child.parentNode);
    alertsuc("Account " + child_index + " selected.");
    window.localStorage.setItem("currentprofile", "user" + child_index);


    var userchoose = JSON.parse(localStorage.getItem("user" + child_index));
    profileimg.src = userchoose.img;
    username.innerHTML = userchoose.name;
    username.href = userchoose.address;
    userage.innerHTML = userchoose.age;
    userbio.innerHTML = userchoose.bio;

}



function deleteaccount(deletethis) {
    var deleteparent = deletethis.parentNode.parentNode;
    var delete_index = Array.prototype.indexOf.call(deleteparent.children, deletethis.parentNode);

    var deleteaccountdata = JSON.parse(localStorage.getItem("user" + delete_index));
    var defaultuser = {
        name: "user" + delete_index,
        age: null,
        bio: "",
        password: "",
        address: "#",
        img: defaultimg.src
    }


    if (deleteaccountdata.img == defaultuser.img && deleteaccountdata.name == defaultuser.name && deleteaccountdata.age == defaultuser.age && deleteaccountdata.bio == defaultuser.bio) {
        alerterr("Account " + delete_index + " can't be deleted.");
    } else {
        window.localStorage.setItem("user" + delete_index, JSON.stringify(defaultuser));
        var deleteaccountimg = document.getElementById("saved_acc_img" + delete_index);
        var deleteaccountname = document.getElementById("saved_acc_name" + delete_index);
        deleteaccountimg.src = defaultuser.img;
        deleteaccountname.innerHTML = defaultuser.name;
        alertsuc("Account " + delete_index + " has been deleted.");

    }


}


// For log in..........
function login_button() {
    var loginname = document.getElementById("LogIn_Name");
    var loginpassword = document.getElementById("LogIn_Password");
    var k;
    for (k = 1; k <= 5; k++) {

        var loginmatch = JSON.parse(localStorage.getItem("user" + k));
        if (loginmatch.name == loginname.value && loginmatch.password == loginpassword.value) {
            break;
        }
    }
    if (k <= 5) {
        window.localStorage.setItem("currentprofile", "user" + k);
        var loginfound = JSON.parse(localStorage.getItem("user" + k));
        profileimg.src = loginfound.img;
        username.innerHTML = loginfound.name;
        username.href = loginfound.address;
        userage.innerHTML = loginfound.age;
        userbio.innerHTML = loginfound.bio;

        savedacccontainer.style.display = "none";
        hiddeneditablecontainer.style.display = "none";
        profilecontainer.style.display = "block";
        alertsuc("Log in successful.");
    } else {
        alerterr("Incorrect name or password.");
    }


    loginname.value = "";
    loginpassword.value = "";
}


//For Slider..........


function go1(){
    var sliderinside = document.getElementById("slider_inside");
    sliderinside.style.left = "0%";
}