//Where all JavaScript codes would be written
const d = new Date();
document.getElementById("demo").innerHTML = d.toDateString();


if (new Date().getHours() < 18) {
    document.getElementById("demo2").innerHTML = "Good day!";
  }

 
