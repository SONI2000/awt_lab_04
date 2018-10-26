
// display hello
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World"
}



// hide and visible
function hide() {
    var x = document.getElementById("data");
    if (x.style.display === "none") {
        x.style.display = "block";
    }else
        x.style.display = "none";      
}
  function visible() {
        var x = document.getElementById("data ").innerHTML="You are nice Professor";
        if (x.style.display === "none") {
            x.style.display = "block";
        } 
        else
        x.style.display = "block";
    }



    // condition for prime
   function Prime(){
        var n = document.getElementById("prime");
            count=0;
            for(var i=2; i<=n/2; i++ )
            {
                if(n%i==0){
                    count++;
                }
            }
            if(count>0)
                console.log('no is prime')
                else
                 console.log('no not is prime')
                  
            
    }




    //condition for full name and age

    function name_age(){
        var age= document.getElementById("age");
        var fullname = document.getElementById("name");
        if (age<0 || age=="")
          console.log('enter the correct age')
          
          Char[] name=fullname.toCharArray()
          for(var i=0; i<fullname.length(); i++){

            if(fullname=="" || isLowerCase(name[i])==false)  {
                console.log('enter the fullname in lower case')
            }
          }
        


    }
