function mail(){

let person={
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
}
emailjs.send("service_lsyz11k", "template_dlzo9ob", person).then(alert("message has been sended "));
if(emailjs){
document.getElementById('name').value=""
 document.getElementById('email').value=""
  document.getElementById('message').value=""
}
}