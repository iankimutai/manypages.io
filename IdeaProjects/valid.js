function validate(){

var email=document.getElementById("emailid");
var password=document.getElementById("pass");
if(password.value.length>=8&&email.value.length>=10){
    alert("login suceess"); 
window.location.replace("messages.html");

return false;

}
else{alert("loginfailed");}






}
function myfunction(){
var form=document.getElementsByClassName("disapear")
form.classList.add("hidden")


}
