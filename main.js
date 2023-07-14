function accept () {
    var cookie = document.getElementById("cookieBanner");
    cookie.classList.toggle("invis");
}
function deny () {
    var nocookie = document.getElementById("cookieBanner2");
    nocookie.classList.toggle("vis")
    var cookie = document.getElementById("cookieBanner")
    cookie.classList.toggle("invis")
}
function deny2 () {
    var cookie = document.getElementById("cookieBanner");
    cookie.classList.toggle("invis");
    var cookie2 = document.getElementById("cookieBanner2");
    cookie2.classList.toggle("vis");
    alert('WIESOOOOOOO')
}
function accept2 () {
    var cookie2 = document.getElementById("cookieBanner2");
    cookie2.classList.toggle("vis");
}