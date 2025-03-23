const showEmail = async (e) => {
    e.preventDefault();

    document.getElementById("contact-h3").classList.add("form-hide");
    document.getElementById("contact-me").classList.add("form-hide");
    
    const result = document.getElementById("result");
    let response = await getEmailResult();
    if(response.status == 200){
        result.innerHTML = "Message sent! I will respond via email :)";
    } else {
        result.innerHTML = "Message not sent :(";
    }
};

const getEmailResult = async (e) => {
    const form = document.getElementById("contact-me");
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const result = document.getElementById("result");
    result.innerHTML = "Please wait. . .";

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application,json",
            },
            body: json,
        });
        return response;
    } catch (error){
        console.log(error);
        result.innerHTML = "Oops! Your email couldn't be sent.";
    }
};

document.getElementById("contact-me").onsubmit = showEmail;