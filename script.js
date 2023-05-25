//your JS code here. If required.
let prom  = new Promise((resolve) =>{
   let out = "Hello, world!"
	resolve(out);
},1000)

prom.then((x) =>{
let div = document.getElementById("output");
div.innerText = x;
	
})
