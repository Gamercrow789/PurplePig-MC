window.onscroll = function() {
    const header = document.getElementById("myHeader");
    
    if (window.pageYOffset > 50) {
        header.classList.add("header-scrolled");
    } else {
        header.classList.remove("header-scrolled");
    }
};
