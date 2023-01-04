

function valid(){

    var fullname=document.getElementById("fname").value
    function isLetter(str) {
        return  /\d/.test(str);
    }

    if (isLetter(fullname)){
        alert("Number present in Full Name")
    }




    var email = document.getElementById("email").value
     function chat(m){
        return  (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(m))
     }

    if(chat(email)==false){
        alert("enter correct email")
        // console.log("")
    }
    




    var panno = document.getElementById("pannum").value
        function p (no){
        return (/([A-Z]){5}([0-9]){4}([A-Z]){1}$/.test(no)) 
    }

    if(p(panno)==false){
        alert("enter valid pan no")
    }


    var loanamount = document.getElementById("amount").value
        function l (loana){
            return((loanamount * (8.5 * 0.01)) / 180).test(loana)
        }

    
    if (loanamount == "") {
        alert("Please Fill up the LoamAmount")
        tut3.innerHTML = "Please Fill up the LoamAmount"
        return false;
    } if (loanamount.length > 10) {

        alert("Maximum 9 digital Numeric")
        tut3.innerHTML = "maximum of 9 digits"
        return false;
    } else {

        interest = (loanamount * (8.5 * 0.01)) / 180;
        total = ((loanamount / 180) + interest);
        Add = Math.trunc(total)
        alert("‘Your Estimated EMI Will Be ’,"+ Add + "₹")
        alert("Thanks For Submit The Form")
        window.open("./Confirmation.html");
    }

   
    
    
    

    
}
    

        

    
      
    
