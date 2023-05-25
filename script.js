//your JS code here. If required.
let prom  = new Promise((resolve,reject) =>{
    console.log("Hello, world!")
	
},1000)

let div = document.getElementById("output");
div.innerText = prom;
