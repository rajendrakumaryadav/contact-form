window.addEventListener("submit", (event) => {
    event.preventDefault();

    if (validate_name() && validate_email() && validate_subject() && validate_comment()) {

        let xhrRequest = new XMLHttpRequest();
        xhrRequest.open("post", "./mailer.php", true);

        xhrRequest.onreadystatechange = () => {
            if (xhrRequest.readyState === 4 && xhrRequest.status === 200) {
                // alert("Subject : " + xhrRequest.responseText);
                console.log(xhrRequest.response);
                if (xhrRequest.responseText === "1") {
                    alert("Mail is send.")
                } else {
                    alert("Failed to send mail!");
                }

            }
        }
        xhrRequest.send(getData());
    } else {
        alert("Invalid data!");
    }
});

function validate_name() {
    let name = document.getElementById("txtname").value
    let status = false;
    if (name.length >= 4) {
        status = true;
    }
    return status;
}

function validate_email() {
    let email = document.getElementById("emailField").value
    let regex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    // abc-com.com
    let status = false;
    if (regex.test(email)) {
        status = true;
    }
    return status;
}

function validate_subject() {
    let status = false;
    let subject = document.getElementById("txtsubject").value

    if (subject.length > 5) {
        status = true;
    }
    return status;
}

function validate_comment() {
    let status = false;
    let comment = document.getElementById("txtareacomment").value

    if (comment.length > 50 && comment.length < 250) {
        status = true;
    }
    return status;
}


function getData() {
    let data = new FormData();
    // getting the data from form
    let name = document.getElementById("txtname").value
    let email = document.getElementById("emailField").value
    let subject = document.getElementById("txtsubject").value
    let comment = document.getElementById("txtareacomment").value
    // appending the fields with data object
    data.append("name", name);
    data.append("email", email);
    data.append("subject", subject);
    data.append("comment", comment);
    return data;
}