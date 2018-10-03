 function val(){
    var verifPass = document.getElementById("password").value;
    var verifEmail = document.getElementById("email").value;
    if (verifPass==""&& verifEmail==""){
        alert('Feild Cannot Be Blank');
    }
 }