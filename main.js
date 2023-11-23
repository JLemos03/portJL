window.addEventListener("scroll", function(){
    var header = document.querySelector("header")
    header.classList.toggle("dwon", window.scrollY>0)
})