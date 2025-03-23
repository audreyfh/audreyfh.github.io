const submitForm = (e) => {
    console.log("submitted");
    e.preventDefault();
    document.getElementById("contact-h3").classList.add("form-hide");
    document.getElementById("contact-me").classList.add("form-hide");

    const form = document.getElementById("contact-me");
    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const message = form.elements["message"].value;
};

document.getElementById("contact-me").onsubmit = submitForm;