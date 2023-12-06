//contact
function validate(){
    var username=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var phone=document.getElementById('phone').value;
    var message=document.getElementById('message').value;
if (username!='' && email!=''){
    alert('Thank you for your feedback');
}
}