function check(form) {
  if(form.userid.value == "dew" && form.pswrd.value == "123"){
    window.open('www.google.com');
  } else {
    alert("The username and password you entered do not match");
  }
}
