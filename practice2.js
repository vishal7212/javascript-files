var sen= "i am vishal kumar"
var mod=sen.toLowerCase().split(" ").map((x)=>{return  x.slice(0).toUpperCase()+x.slice(0,-1)}).join(" ");

console.log(mod);

