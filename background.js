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
function getBaseUrl(url) {
  var parser = document.createElement('a');
  parser.href = url;
  var protocol = parser.protocol;
  var hostname = parser.hostname;
  var port = parser.port;
  return protocol + '//' + hostname + (port ? ':' + port : '');
}

function getMostUsedSites() {
  chrome.topSites.get(function(sites) {
    // console.log("Top 5 most visited sites:");
    // console.log(sites);
    for (var i = 0; i < 5; i++) {
      const theurl=sites[i].url;
      var baseUrl = getBaseUrl(theurl);
      // console.log(baseUrl); // Output: "https://www.example.com"
      const faviconUrl = `${baseUrl}/favicon.ico`;
      let html=`<div class="iocon_container"><a href="${sites[i].url}"><img src="${faviconUrl}" alt="${sites[i].title.slice(0,10)}"></a></div>`
      header.innerHTML=header.innerHTML+html;
    }
  });
}

getMostUsedSites();

async function addckick(){
//  console.log("on click in run");
 if (!localStorage.getItem('myArray')) {
   var myArray=[];
    localStorage.setItem('myArray', JSON.stringify(myArray));
   const url =await prompt('Enter a URL: like "google.com" format');
   const existingArray = JSON.parse(localStorage.getItem('myArray'));
   existingArray.push(url);
   localStorage.setItem('myArray', JSON.stringify(existingArray));
   transverseArry();
  //  console.log("if is running");
 }else {
     const url =  prompt('Enter a URL: like "google.com" format');;
 const existingArray = JSON.parse(localStorage.getItem('myArray'));
//  console.log("the code is running",existingArray);
 existingArray.push(url);
 localStorage.setItem('myArray', JSON.stringify(existingArray));
 transverseArry();
 }

}


const deletefun=async()=>{
  // console.log("deleten trun");
  myArray=[];
  // console.log(myArray);
  localStorage.setItem('myArray', JSON.stringify(myArray));
  transverseArry();
}


var el=document.querySelector(".btn")
if(el){
  el.addEventListener("click",addckick);
}
var dle=document.querySelector(".btn-delete")
if(dle){
dle.addEventListener("click",deletefun);
}
let arlength = arr.length;
let url =`https://api.waifu.pics/sfw/${val}`;
fetch(url).then(async (responce)=>{
  return responce.json()
}).then(async (data)=>{
  var body=document.querySelector(".content")//use quay selector
  // console.log(body);
// console.log(data);
let url =  data['url'];
// let url =  "https://i.waifu.pics/ryft10A.jpg"
// body.style.backgroundColor = 'yellow';
// body.style.backgroundImage=url;
var print = `<img class="img"  src=" ${url}" alt="not found">`
// console.log(typeof print ,print)
// let to =JSON.stringify.print
// console.log(print)
// console.log("every thing is good")
body.innerHTML = body.innerHTML + print;
})




if (!localStorage.getItem('myArray')) {
  
} else {
transverseArry()  
  
  // console.log("loop end now");
}




