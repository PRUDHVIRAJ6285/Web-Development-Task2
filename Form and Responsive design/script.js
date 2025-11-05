const form = document.getElementById("contactForm");
const msgBox = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        msgBox.style.display = "block";
        msgBox.style.background = "red";
        msgBox.style.color = "white";
        msgBox.textContent = "All fields are required!";
        return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        msgBox.style.display = "block";
        msgBox.style.background = "red";
        msgBox.style.color = "white";
        msgBox.textContent = "Enter a valid email!";
        return;
    }

    msgBox.style.display = "block";
    msgBox.style.background = "limegreen";
    msgBox.style.color = "black";
    msgBox.textContent = "Message Sent Successfully ✅";

    form.reset();

    setTimeout(() => {
        msgBox.style.display = "none";
    }, 3000);
});
