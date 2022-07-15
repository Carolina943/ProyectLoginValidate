function  validate(){
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if(username === "Patricia" && password === "admin"){
    alert("Login Successfuly!")
}else{
  alert("Login failed!")
 }
}
