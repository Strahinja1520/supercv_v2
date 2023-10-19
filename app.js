const menu = document.getElementById("mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", (e) => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

const linkovi = document.querySelectorAll(".navbar__menu a");
console.log(linkovi);

linkovi.forEach((e) => {
  e.addEventListener("click", () => {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
  })
})

function SendMail(){

  const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const emailInput = document.getElementById("email_id");

  if(!reg.test(emailInput.value)){
    emailInput.value = "";
    emailInput.placeholder = "Morate uneti ispravan email*";
    return;
  }

  var params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value
  };

  emailjs.send('service_s4ie1ap', 'template_39ucqeh', params)
  .then(function(response) {
     console.log('SUCCESS!', response.status, response.text);
  }, function(error) {
     console.log('FAILED...', error);
  });

  emailInput.placeholder = "Email*";
  document.getElementById("fullName").value = "";
  document.getElementById("email_id").value = "";
  document.getElementById("message").value = "";
}
