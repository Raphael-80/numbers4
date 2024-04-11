const form = document.querySelector('form');

function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "gozirimrapheal@gmail.com",
        Password : "E869FCDAB60BC114DA8BD5A021C13F804C4B",
        To : 'gozirimrapheal@gmail.com',
        From : "gozirimrapheal@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault()

    sendEmail()
})