var typed = new Typed(".text", {
    strings: ["Programming" , "Cybersecurity" , "Web Design"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOff > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
});
document.addEventListener("DOMContentLoaded", function() {
    var hireMeBtn = document.getElementById("hire-me-btn");
    var contactSection = document.getElementById("Contact"); // Note the capital "C" in "Contact"

    hireMeBtn.addEventListener("click", function() {
        // Scroll smoothly to the contact section
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
});

