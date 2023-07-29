var arr = [
  "neko",
  "shinobu",
  "megumin",
  "bully",
  "cuddle",
  "cry",
  "hug",
  "awoo",
  "kiss",
  "lick",
  "pat",
  "smug",
  "bonk",
  "yeet",
  "blush",
  "smile",
  "wave",
  "highfive",
  "handhold",
  "nom",
  "bite",
  "glomp",
  "slap",
  "kill",
  "kick",
  "happy",
  "wink",
  "poke",
  "dance",
  "waifu",
  "cringe",
];

// index
// ========== funtion for keybord shortcut ================
// funtion for add user url
// first deletets all the exsisting user url from dom then add all the edited elements .
//==========  funtion to get base url use to get faveicon =======

// ========= fountion to get most used site and add it html ========
// fountion to add new url to myArray and tranversing once again in dom
// fountion to delete all url to myArray and tranversing once again in dom
// theis funtion use to add img to baground if dont get add defoult img
// by default tranverse

var val = "waifu";
const header = document.querySelector(".headcontainer");
var body = document.querySelector(".content");
// const getImg = document.querySelector(".getImg");
const addImg = document.querySelector(".addImg");
const saveBtn = document.querySelector(".saveBtn");
const Myswitch = document.querySelector(".switch");
const Myslider = document.querySelector(".slider");
// const addImg = document.querySelector(".addImg");

// ========== funtion for keybord shortcut ================
function openURLsInNewTabs(urls) {
  urls.forEach(function (url) {
    window.open(url, "_blank");
  });
}
chrome.commands.onCommand.addListener(function (command) {
  if (command === "myShortcut1") {
    // Handle the first shortcut
    var urls = ["https://chat.openai.com", "https://bard.google.com/"];
    openURLsInNewTabs(urls);
  // console.log("First shortcut triggered");
  } else if (command === "myShortcut2") {
    var urls = ["https://www.youtube.com"];
    openURLsInNewTabs(urls);
    // Handle the second shortcut
  // console.log("Second shortcut triggered");
  }
});

//  funtion for add user url
// first deletets all the exsisting user url from dom then add all the edited elements .
const transverseArry = () => {
  const elementsToRemove = document.querySelectorAll(".remove");
  if (!elementsToRemove) {
  } else {
    // Loop through the elements and remove them from the DOM
    for (let i = 0; i < elementsToRemove.length; i++) {
      elementsToRemove[i].remove();
    }
  }

  const existingArray = JSON.parse(localStorage.getItem("myArray"));

  for (let index = 0; index < existingArray.length; index++) {
    const faviconUrl = `https://${existingArray[index]}/favicon.ico`;
    let html = `<div class="iocon_container remove"><a href="https://${existingArray[index]}"><img src="${faviconUrl}" alt="soory"></a></div>`;
    header.innerHTML = header.innerHTML + html;
  }
};

//==========  funtion to get base url use to get faveicon =======

function getBaseUrl(url) {
  var parser = document.createElement("a");
  parser.href = url;
  var protocol = parser.protocol;
  var hostname = parser.hostname;
  var port = parser.port;
  return protocol + "//" + hostname + (port ? ":" + port : "");
}

// ========= fountion to get most used site and add it html =========
function getMostUsedSites() {
  chrome.topSites.get(function (sites) {
    // console.log("Top 5 most visited sites:");
    // console.log(sites);
    for (var i = 0; i < 5; i++) {
      const theurl = sites[i].url;
      var baseUrl = getBaseUrl(theurl);
      // console.log(baseUrl); // Output: "https://www.example.com"
      const faviconUrl = `${baseUrl}/favicon.ico`;
      let html = `<div class="iocon_container"><a href="${
        sites[i].url
      }"><img src="${faviconUrl}" alt="${sites[i].title.slice(
        0,
        10
      )}"></a></div>`;
      header.innerHTML = header.innerHTML + html;
    }
  });
}

//========= fountion to add new url to myArray and tranversing once again in dom===========================

async function addckick() {
  //// console.log("on click in run");
  if (!localStorage.getItem("myArray")) {
    var myArray = [];
    localStorage.setItem("myArray", JSON.stringify(myArray));
    const url = await prompt('Enter a URL: like "google.com" format');
    const existingArray = JSON.parse(localStorage.getItem("myArray"));
    existingArray.push(url);
    localStorage.setItem("myArray", JSON.stringify(existingArray));
    transverseArry();
    //// console.log("if is running");
  } else {
    const url = prompt('Enter a URL: like "google.com" format');
    const existingArray = JSON.parse(localStorage.getItem("myArray"));
    //// console.log("the code is running",existingArray);
    existingArray.push(url);
    localStorage.setItem("myArray", JSON.stringify(existingArray));
    transverseArry();
  }
}

//========= fountion to delete all url to myArray and tranversing once again in dom==============

const deletefun = async () => {
  // console.log("deleten trun");
  myArray = [];
  // console.log(myArray);
  localStorage.setItem("myArray", JSON.stringify(myArray));
  transverseArry();
};

var addUrl = document.querySelector(".btn");
if (addUrl) {
  addUrl.addEventListener("click", addckick);
}
var deleteUrl = document.querySelector(".btn-delete");
if (deleteUrl) {
  deleteUrl.addEventListener("click", deletefun);
}

//=========== by default tranverse ====================
if (!localStorage.getItem("myArray")) {
} else {
  transverseArry();
}

// add on click funtion to switch

if (!localStorage.getItem("myCheckbox")) {
  localStorage.setItem("myCheckbox", "of");
  var ImgArr = ["https://c4.wallpaperflare.com/wallpaper/508/555/786/lofi-cafe-asian-digital-art-artwork-hd-wallpaper-preview.jpg","https://c4.wallpaperflare.com/wallpaper/600/919/630/digital-art-illustration-lofi-hd-wallpaper-preview.jpg","https://c4.wallpaperflare.com/wallpaper/908/34/383/lofi-digital-anthro-hd-wallpaper-preview.jpg"];
  localStorage.setItem("ImgArr", JSON.stringify(ImgArr));
}

// ===== check switch when on and of then run disier funtion ======
const allRun = async () => {
  if (localStorage.getItem("myCheckbox") == "on") {
    Myswitch.classList.add("Active");
    let ImgArr = await JSON.parse(localStorage.getItem("ImgArr"));
  // console.log(ImgArr);
    const randomIndex = Math.floor(Math.random() * ImgArr.length);
    const url = ImgArr[randomIndex];
    const print = `<img class="img"  src=" ${url}" alt="not found">`;
    body.innerHTML = body.innerHTML + print;
  // console.log("every thing is good");
    saveBtn.addEventListener("click", () => saveBtnHandel(url));
    getMostUsedSites();
  } else {
    Myswitch.classList.remove("Active");
    //============== theis funtion use to add img to baground if dont get add defoult img =================
    try {
      let urls = `https://api.waifu.pics/sfw/${val}`;
      fetch(urls)
        .then((responce) => {
          return responce.json();
        })
        .then((data) => {
          // await console.log(data);
          //use quay selector
          // console.log(body);
          const url = data["url"];
          const print = `<img class="img"  src=" ${url}" alt="not found">`;
          body.innerHTML = body.innerHTML + print;
        // console.log("every thing is good");
          saveBtn.addEventListener("click", () => saveBtnHandel(url));
          getMostUsedSites();
        })
        .catch((error) => {
          // Handle the error
          console.error("There was a problem with the fetch request:", error);
          var print = `<img class="img"  src="./bg.jpg" alt="not found">`;
          body.innerHTML = body.innerHTML + print;
        });
    } catch (error) {
    // console.log(error);
    }
  }
};

allRun();

//======== funtion to change toggel status when click ===========
const switchClick = () => {
  let status = localStorage.getItem("myCheckbox");
  alert("Show only saved Image")
// console.log(status);
  if (status == "on") {
    localStorage.setItem("myCheckbox", "of");
  // console.log("local storage added");
    Myswitch.classList.remove("Active");
  } else {
    localStorage.setItem("myCheckbox", "on");
    Myswitch.classList.add("Active");
  }
  // console.log("swith is click");
};

Myswitch.addEventListener("click", switchClick);

//================== click on add Img fountion ===========
const addImgHandel = async () => {
  // console.log("add img click");
  let givenurl = await prompt('Enter a URL of image');
  if (value !== null) {
    // Do something with the value.
  // console.log(`The user entered: ${value}`);
  } else {
    // The user clicked the Cancel button.
  // console.log(`The user canceled the prompt.`);
    let ImgArr = await JSON.parse(localStorage.getItem("ImgArr"));
  // console.log(givenurl);
    ImgArr.push(givenurl);
    localStorage.setItem("ImgArr", JSON.stringify(ImgArr));
  // console.log(ImgArr);
  }
};
addImg.addEventListener("click", addImgHandel);

//========saveBtn click fountion ===========
const saveBtnHandel = async (url) => {
// console.log("save btn clicked");
  let ImgArr = await JSON.parse(localStorage.getItem("ImgArr"));
// console.log(url);
  await ImgArr.push(url);
  await localStorage.setItem("ImgArr", JSON.stringify(ImgArr));
  document.querySelector(".saveBtn").textContent="Saved"
  setTimeout(() => {
    document.querySelector(".saveBtn").textContent="Save"
}, 1500);
// console.log(ImgArr);
};

//=======dbclick on addImg fountion =============
// const bdAddImgHandel = async ()=>{
//  // if the ok button is clicked, result will be true (boolean)
// var result = confirm( "Do you want delete All All link to do this?" );

// if ( result ) {
// // console.log("db click");
//     let ImgArr = [];
//   await localStorage.setItem("ImgArr", JSON.stringify(ImgArr));
// } 
// }
// addImg.addEventListener("dblclick", bdImgHandel);
// addDoubleClickEventListener(addImg,bdAddImgHandel);
