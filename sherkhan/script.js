function Send() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var sub = document.getElementById("subject").value;
    
    var body = "name:" + name + "<br/> email:" + email + "<br/> phone:" + phone + "<be/>sub:" + subject;
    console.log(body);
     
      Email.send({
        SecureToken : "b9c365c3-f17f-4e7b-8eae-8c0ae93761b4",
        To : 'officialsherkhan123@gmail.com',
        From : "officialsherkhan123@gmail.com",
        Subject : sub,
        Body : body
        }).then(
      message =>{
        if(message=='OK'){
    
          swal("Thank You!","Your query has been submitted", "success");
        }
        else{
          swal("Something wrong", "Your data is not received", "error");
        }
      }
       );
    
    }