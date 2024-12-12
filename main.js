const email = document.getElementById("emailinput");
const error = document.getElementById("emailerror");
const container = document.getElementById("container");

function registeremail() {
  while (error.firstChild) {
    error.removeChild(error.lastChild);
  }
  console.log(email.value);
  if (!validateEmail(email.value)) {
    error.appendChild(document.createTextNode("Valid email required"));
    email.setAttribute("class", "emailinput inputerror");
  } else {
    while (container.firstChild) container.removeChild(container.lastChild);
    const img = document.createElement("img");
    const header = document.createElement("h2");
    const paragraph = document.createElement("p");
    const button = document.createElement("button");
    const textarea = document.createElement("div");

    img.setAttribute("src", "./assets/images/icon-success.svg");
    img.setAttribute("class", "successimg");
    header.setAttribute("class", "title");
    paragraph.setAttribute("class", "text");
    button.setAttribute("class", "submitemail");
    textarea.setAttribute("class", "textarea");

    header.appendChild(document.createTextNode("Thanks for subscribing!"));
    paragraph.appendChild(
      document.createTextNode(`A confirmation email has been sent to `)
    );
    const bold = document.createElement("b");
    bold.appendChild(document.createTextNode(email.value));
    paragraph.appendChild(bold);
    paragraph.appendChild(
      document.createTextNode(
        ". Please open it and click the button inside to confirm your subscription"
      )
    );
    button.appendChild(document.createTextNode("Dismiss message"));
    console.log(button);
    container.appendChild(img);
    textarea.appendChild(header);
    textarea.appendChild(paragraph);
    container.appendChild(textarea);
    container.appendChild(button);
    container.setAttribute("class", "approvedcontainer");
  }
}

function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  console.log(pattern.test(email));
  return pattern.test(email);
}

function removeError() {
  email.setAttribute("class", "emailinput");
}
