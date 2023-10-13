const menu = document.getElementById("mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", (e) => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

function SendMail(){
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

  document.getElementById("fullName").value = "";
  document.getElementById("email_id").value = "";
  document.getElementById("message").value = "";
}
