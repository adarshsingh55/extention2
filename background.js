var arr = [  'neko' , 'shinobu' , 'megumin' , 'bully' , 'cuddle' , 'cry' , 'hug' , 'awoo' , 'kiss' , 'lick' , 'pat' , 'smug' , 'bonk' , 'yeet' , 'blush' , 'smile' , 'wave' , 'highfive' , 'handhold' , 'nom' , 'bite' , 'glomp' , 'slap' , 'kill' , 'kick' , 'happy' , 'wink' , 'poke' , 'dance' , 'waifu','cringe']
var val='waifu'
const header =document.querySelector(".headcontainer");


const transverseArry=()=>{
  const elementsToRemove = document.querySelectorAll('.remove');
if (!elementsToRemove) {
  
}else{
  
  // Loop through the elements and remove them from the DOM
  for (let i = 0; i < elementsToRemove.length; i++) {
    elementsToRemove[i].remove();
  }
}
  const existingArray = JSON.parse(localStorage.getItem('myArray'));
  for (let index = 0; index < existingArray.length; index++) {
    const faviconUrl = `https://${existingArray[index]}/favicon.ico`;
    let html=`<div class="iocon_container remove"><a href="https://${existingArray[index]}"><img src="${faviconUrl}" alt="soory"></a></div>`
    header.innerHTML=header.innerHTML+html;
  }
}


async function addckick(){
 console.log("on click in run");
 if (!localStorage.getItem('myArray')) {
   var myArray=[];
    localStorage.setItem('myArray', JSON.stringify(myArray));
   const url =await prompt('Enter a URL: like "google.com" format');
   const existingArray = JSON.parse(localStorage.getItem('myArray'));
   existingArray.push(url);
   localStorage.setItem('myArray', JSON.stringify(existingArray));
   transverseArry();
   console.log("if is running");
 }else {
     const url =  prompt('Enter a URL: like "google.com" format');;
 const existingArray = JSON.parse(localStorage.getItem('myArray'));
 console.log("the code is running",existingArray);
 existingArray.push(url);
 localStorage.setItem('myArray', JSON.stringify(existingArray));
 transverseArry();
 }

}


const deletefun=async()=>{
  console.log("deleten trun");
  myArray=[];
  console.log(myArray);
  localStorage.setItem('myArray', JSON.stringify(myArray));
  transverseArry();
}
document.querySelector(".btn").addEventListener("click",addckick);
document.querySelector(".btn").addEventListener("dbclick",addckick);
document.querySelector(".btn-delete").addEventListener("click",deletefun);
let arlength = arr.length;
let url =`https://api.waifu.pics/sfw/${val}`;
fetch(url).then(async (responce)=>{
  return responce.json()
}).then(async (data)=>{
  var body=document.querySelector(".content")//use quay selector
  console.log(body);
console.log(data);
let url =  data['url'];
// let url =  "https://i.waifu.pics/ryft10A.jpg"
// body.style.backgroundColor = 'yellow';
// body.style.backgroundImage=url;
var print = `<img class="img"  src=" ${url}" alt="not found">`
// console.log(typeof print ,print)
// let to =JSON.stringify.print
// console.log(print)
console.log("every thing is good")
body.innerHTML = body.innerHTML + print;
})




if (!localStorage.getItem('myArray')) {
  
} else {
transverseArry()  
  
  console.log("loop end now");
}


