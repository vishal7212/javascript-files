

//reverse a string  in place and and not inplace
var sen="hi i am trying";
var revsen=sen.split(" ").reverse().join(" ");
console.log(revsen);
var revsen2=sen.split("").reverse().join("");
console.log(revsen2);
//remove duplicates from the array and object and find the duplicate values
var num=[1,2,3,4,5,1,2,3,4,5]
var remdup=num.filter((c, index) => {return num.indexOf(c) === index;});
var dup=num.filter((c, index) => {return num.indexOf(c) !== index;});
console.log(remdup);
console.log(dup);
var abj=[{id:1,name:"asuh"},
         {id:2,name:"ash"},
         {id:3,name:"auh"},
         {id:4,name:"asiu"},
          {id:5,name:"asiu"}]

   var unique=abj.reduce((map,obj)=> map.set(obj.name,obj),new Map());
   console.log(unique);  
//sort an array and object
var num1=[23,4,5,6,1,1,2222,3,56,0,1223];
var sorted=num1.sort((a,b)=>a-b);
console.log(sorted);
var abj=[{id:55,name:"sdkfn"},
         {id:2,name:"aksdhsh"},
         {id:3,name:"eofh"},
         {id:4,name:"weiu"},
          {id:5,name:"bsiu"}]
var sortedabj=abj.sort((a,b)=>(a.name > b.name) ? 1 : -1);
console.log(sortedabj);
//find the number of duplicate elements in anarray or object
var ones=[1,0,0,0,1,1,1,,23,1,1,1,232]
var nd=ones.filter((x)=>x===1).length;
console.log(nd);
//hellO worlD
 var str="I am trying for amdocs"
 var newstr=str.toLowerCase().split(" ").map(x=> {
    return x.slice(0,-1) + x.slice(-1).toUpperCase();
}).join(" ");
 
 console.log(newstr);
 
// Write a function closure
function welcome(name)
{
    var greeting="welcome"+ " "+name;
    var message=function()
    {
        console.log(greeting)
    }
    return message;
}
var sayHello=welcome("vishal");
sayHello();

function add1(a)
{
    return function(b){
        return function(c)
        {
            return a+b+c;
        }

    }
}
console.log(add1(2)(3)(4))


//Closures
var x="cookie";
function dessert()
{
    var x="doughnut";
    function print()
    {
        console.log(x);
    };
    print();
};
dessert();

//closures

var x="cookie";

function dessert()
{
    var x="doughnut";
    function print(){
        console.log(x);
    };
    print();
}
dessert();

//callback
function coffemachine(name)
{
    console.log("preparing"+" "+name);
}
 function prepare (callback)
 {
     var name="espresso"
     callback(name);
 }

 prepare(coffemachine);

 //callback 
 function coffename(name)
{
    console.log("preparing"+" "+name);
}
function  prepare (callback)
{
    var name="latte"
    callback(name);
}

prepare(coffename);



var promise= new Promise(function(resolve, reject){
const x='1';
const y='1';
if(x==y)
{
    resolve();
}
else{
    reject();
}
});

promise.then(function (){
    console.log('ok');
}).
catch(function(){
    console.log('error');
});

console.log("begin...")
setTimeout(function(){ 
    console.log("after 2 seconds...")},2000);
    console.log("end...")
//shallow copy


var obj1={name:"vishal1"}

//var obj2={...obj1};
var obj2=Object.assign({},obj1);
obj2.name="kumar";

console.log(obj1);
console.log(obj2);

var ob={name:"cish",
skill:{
    primary:"java"
}}
 var bo1=JSON.parse(JSON.stringify(ob));
 bo1.skill.primary="React";

 console.log(ob);
 console.log(bo1);























  

