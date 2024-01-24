<<<<<<< HEAD
//Where all JavaScript codes would be written//

var dt = Date();
document.getElementById('date-time').innerHTML=dt
=======
//Where all JavaScript codes would be written
const d = new Date();
document.getElementById("demo").innerHTML = d.toDateString();


if (new Date().getHours() < 18) {
    document.getElementById("demo2").innerHTML = "Good day!";
  }

 
>>>>>>> c41baf25cc92b2030972234002e2ab8c011cbfc2
