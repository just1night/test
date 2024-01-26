
window.addEventListener("scroll",function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 200);
});
$(document).ready(function() {
    $('.search-form').hide();
    $('.research-form').click(function() {
        $('.search-form').slideToggle(300);
    })
});