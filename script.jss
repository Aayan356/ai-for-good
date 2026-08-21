// ==========================================
// MOBILE MENU
// ==========================================

var menuButton = document.getElementById("menuButton");
var navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {

    menuButton.onclick = function () {

        if (navLinks.className.indexOf("active") === -1) {

            navLinks.className += " active";

            menuButton.innerHTML = "✕";

        } else {

            navLinks.className =
                navLinks.className.replace(" active", "");

            menuButton.innerHTML = "☰";

        }

    };


    var links = navLinks.getElementsByTagName("a");

    for (var i = 0; i < links.length; i++) {

        links[i].onclick = function () {

            navLinks.className =
                navLinks.className.replace(" active", "");

            menuButton.innerHTML = "☰";

        };

    }

}


// ==========================================
// DARK / LIGHT MODE
// ==========================================

var themeToggle =
    document.getElementById("themeToggle");


var savedTheme =
    localStorage.getItem("aiGoodTheme");


if (savedTheme === "dark") {

    document.body.className += " dark-mode";

    themeToggle.innerHTML = "☀️";

}


if (themeToggle) {

    themeToggle.onclick = function () {

        var isDark =
            document.body.className.indexOf("dark-mode") !== -1;


        if (isDark) {

            document.body.className =
                document.body.className.replace(
                    " dark-mode",
                    ""
                );

            themeToggle.innerHTML = "🌙";

            localStorage.setItem(
                "aiGoodTheme",
                "light"
            );

        } else {

            document.body.className += " dark-mode";

            themeToggle.innerHTML = "☀️";

            localStorage.setItem(
                "aiGoodTheme",
                "dark"
            );

        }

    };

}


// ==========================================
// NAVBAR SHADOW
// ==========================================

window.onscroll = function () {

    var navbar =
        document.querySelector(".navbar");

    if (!navbar) {
        return;
    }


    if (window.scrollY > 20) {

        navbar.style.boxShadow =
            "0 5px 25px rgba(15,23,42,0.08)";

    } else {

        navbar.style.boxShadow = "none";

    }

};