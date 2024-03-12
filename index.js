const computer = document.getElementById("computer");
const mobile = document.getElementById("mobile");
const aboutMe = document.querySelectorAll(".aboutMe");
const contactMe = document.querySelectorAll(".contactMe");
const project = document.querySelectorAll(".project h1");


if(aboutMe[0]!= null)
{
  aboutMe[0].style.marginLeft = (document.body.clientWidth - aboutMe[0].clientWidth)/2 +"px";
  aboutMe[0].style.marginRight = (document.body.clientWidth - aboutMe[0].clientWidth)/2 +"px";
}
if(contactMe[0]!= null)
{
  contactMe[0].style.marginLeft = (document.body.clientWidth - contactMe[0].clientWidth)/2 +"px";
  contactMe[0].style.marginRight = (document.body.clientWidth - contactMe[0].clientWidth)/2 +"px";
}
if(project[0]!= null)
{
  project[0].style.marginLeft = (document.body.clientWidth - project[0].clientWidth)/2 +"px";
  project[0].style.marginRight = (document.body.clientWidth - project[0].clientWidth)/2 +"px";
}

if(document.body.clientWidth < 900){
  mobile.style.display = "block";
  computer.style.display = "none";
}
else{
  computer.style.display = "block";
  mobile.style.display = "none";
  document.getElementById("dropdown").classList.remove("dropdown");
  document.getElementById("dropdown").classList.add("dropdownoff");
  document.getElementById("burger").classList.remove("is-active");
}

const observer = new IntersectionObserver((entries) => {
  var sectionWidth = document.body.clientWidth;
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
        entry.target.classList.remove('cardHide');
        entry.target.classList.add('cardShow');
        let currentWidth = entry.target.clientWidth;
        entry.target.style.marginLeft = (sectionWidth - currentWidth)/2 + "px";
    }
    // else{
    //     entry.target.classList.remove('cardShow');
    //     entry.target.classList.add('cardHide');
    // }
  });
});

const hidden = document.querySelectorAll('.cardHide');



hidden.forEach((item) => {
  observer.observe(item);
});

function sendEmail() {
  const email = document.getElementById("email");
  const name = document.getElementById("name");
  const phone = document.getElementById("phone");
  const method = document.getElementById("contactMed");
  const message2 = document.getElementById("message");
  let alert1 = false;
  let message = "";
  if (name.value === "") {
    message += "your name, ";
  }
  if (phone.value === "") {
    message += "your phone number, ";
  }
  else{
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if (!phone.value.match(re)) { 
      alert("Invalid phone number!");
      alert1 = true;
    }
  }
  if (email.value === "") {
    message += "your email, ";
  }
  else{
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.value.match(validRegex)) { 
      alert("Invalid email address!");
      alert1 = true;
    }
  }
  if (method.value === "") {
    message +="your preferred method of contact, ";
  }

  if(message !== "" || alert1){
    if(!alert1)
      alert("Please enter " + message.substring(0, message.length - 2) + " to continue");
    return;
  }
  else{
    var send = {
      name: name.value,
      phone: phone.value,
      email: email.value,
      method: method.value,
      message: message2.value,
    }
    emailjs.send("service_mtd5ps9","template_t7uapsa", send).then((res) => {
      alert("Email sent successfully, I will get back to you as soon as possible. Thank you for reaching out to me.");
      name.value = "";
      phone.value = "";
      email.value = "";
      method.value = "";
      message2.value = "";
    }).catch((err) => {
      alert("An error occured while sending your email, please try again later");
    });
  }
}
const contactForm = document.getElementById("contactForm");
const contactPic = document.getElementById("contact");

window.addEventListener('resize', function() {
  var sectionWidth = document.body.clientWidth;
  hidden.forEach((item) => {
    let currentWidth = item.clientWidth;
    item.style.marginLeft = (sectionWidth - currentWidth)/2 + "px";
  });
  if(contactForm != null)
  {
    console.log((document.body.clientWidth - contactForm.clientWidth)/2);
    contactForm.style.marginTop = (30 + contactPic.clientHeight) +"px";
    contactForm.style.marginLeft = (document.body.clientWidth - 400)/2 +"px";
    contactForm.style.marginRight = (document.body.clientWidth - 400)/2 +"px";
  }
  if(document.body.clientWidth < 900){
    mobile.style.display = "block";
    computer.style.display = "none";
    if(aboutMe[0]!= null)
    {
      aboutMe[0].style.marginLeft = (document.body.clientWidth - aboutMe[0].clientWidth)/2 +"px";
      aboutMe[0].style.marginRight = (document.body.clientWidth - aboutMe[0].clientWidth)/2 +"px";
    }
    if(contactMe[0]!= null)
    {
      contactMe[0].style.marginLeft = (document.body.clientWidth - contactMe[0].clientWidth)/2 +"px";
      contactMe[0].style.marginRight = (document.body.clientWidth - contactMe[0].clientWidth)/2 +"px";
    }
    if(project[0]!= null)
    {
      project[0].style.marginLeft = (document.body.clientWidth - project[0].clientWidth)/2 +"px";
      project[0].style.marginRight = (document.body.clientWidth - project[0].clientWidth)/2 +"px";
    }
  }
  else{
    computer.style.display = "block";
    mobile.style.display = "none";
    document.getElementById("dropdown").classList.remove("dropdown");
    document.getElementById("dropdown").classList.add("dropdownoff");
    document.getElementById("burger").classList.remove("is-active");
  }
    
});

if(contactForm != null)
{
  contactForm.style.marginTop = (30 + contactPic.clientHeight) +"px";
  contactForm.style.marginLeft = (document.body.clientWidth - 400)/2 +"px";
  contactForm.style.marginRight = (document.body.clientWidth - 400)/2 +"px";
}

