// JavaScript code in script.js file
function sendMail(event) {
  event.preventDefault(); // Prevent the default form submission

  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value, // Fix the parameter name here
    message: document.getElementById("message").value,
  };

  const serviceID = "service_t00olvi";
  const templateID = "template_yhlxc4p";

  emailjs.send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message has been sent!");
    })
    .catch((err) => console.log(err));
}

// Add event listener to the form submit button
document.getElementById('send').addEventListener('click', sendMail);
