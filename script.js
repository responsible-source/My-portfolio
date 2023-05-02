var tabLinks = document.querySelector(".tab-links");
var tabContents = document.querySelector(".tab-contents")
var skills = document.querySelector(".skills");
var experience = document.querySelector(".experience");
var education = document.querySelector(".education");
var skillContent = document.querySelector(".skill-content");
var experienceContent = document.querySelector(".experience-content");
var educationalContent = document.querySelector(".educational-content");
var close = document.querySelector(".fa-xmark");
var bar = document.querySelector(".fa-bars");
var links = document.querySelector(".class-list")

skills.addEventListener("click", (e)=>{
    skillContent.classList.toggle("active-tab");
    e.target.classList.toggle("active-link")
});

experience.addEventListener("click", (e)=>{
    experienceContent.classList.toggle("active-tab");
    e.target.classList.toggle("active-link")
});

education.addEventListener("click",(e)=>{
    educationalContent.classList.toggle("active-tab");
    e.target.classList.toggle("active-link")
}); 

// typing animation script starts

var typed = new Typed(".typing", {
    strings: ["Webdeveloper","Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// typing animation ends

// toggle button script starts

bar.addEventListener("click", ()=>{
    links.classList.toggle("active")
})

close.addEventListener("click", ()=>{
    links.classList.remove("active")
})

// toggle button script ends



  const scriptURL = 'https://script.google.com/macros/s/AKfycbwo1BGz3LY9Ykh_GccruZ_XKyM-8EO0AALmUodEAbfot8s-XC7b7unJ5jm5zkmZEN0T/exec'
  const form = document.forms['submit-to-google-sheet'];
  const msg = document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })








