//your JS code here. If required.
let prom  = new Promise((resolve,reject) =>{
    out = "Hello, world!"
	resolve(out);
},1000)

let div = document.getElementById("output");
div.innerText = prom;
