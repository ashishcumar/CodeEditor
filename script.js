const inputSecContainer = document.querySelector("#inputSecContainer");
const outputSecContainer = document.querySelector("#outputSecContainer");
const dragDiv = document.querySelector("#dragDiv");
const inputSecBox = document.querySelector(".inputSecBox");
const runbtn = document.querySelector(".run");
const iframe = document.querySelector(".iframe");
const theme = document.querySelector("#themebtn");
const live = document.querySelector("#live");
const nameSpan = document.getElementById("nameSpan");
const themeSpan = document.getElementById("themeSpan");
const fontplus = document.getElementById('fontplus')
const fontminus = document.getElementById('fontminus')


const drag = (e) => {
  e.preventDefault();
  document.selection
    ? document.Selection.empty()
    : window.getSelection().removeAllRanges();
  inputSecContainer.style.width = e.pageX - dragDiv.offsetWidth / 3 + "px";
  inputSecBox.resize();
};

dragDiv.addEventListener("mousedown", () => {
  document.addEventListener("mousemove", drag);
});

dragDiv.addEventListener("mouseup", () => {
  document.removeEventListener("mousemove", drag);
});

runbtn.addEventListener("click", () => {
  const html = inputSecBox.textContent;
  iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
});

document.getElementById("live").onclick = function () {
  if (this.checked) {
    inputSecBox.addEventListener("keyup", () => {
      const html = inputSecBox.textContent;
      iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
    });
  }
};

var count = 0;
theme.addEventListener("click", () => {
  count++;
  console.log(count);
  if (count == 0) {
    inputSecContainer.style.backgroundColor = "";
    inputSecContainer.style.color = "";
    nameSpan.style.backgroundColor = "#c8d8e4";
    nameSpan.style.color = "black";
    themeSpan.style.color = "#c8d8e4";
    dragDiv.style.backgroundColor="black"
  }

  if (count == 1) {
    inputSecContainer.style.backgroundColor = "black";
    inputSecContainer.style.color = "white";
    nameSpan.style.backgroundColor = "black";
    nameSpan.style.color = "white";
    themeSpan.style.color = "#c8d8e4";
    inputSecContainer.style.transition = "color 1s";
    dragDiv.style.border="2px solid white"


  }

  if (count == 2) {
    inputSecContainer.style.backgroundColor = "#52ab98";
    inputSecContainer.style.color = "black";
    nameSpan.style.backgroundColor = "#52ab98";
    nameSpan.style.color = "black";
    themeSpan.style.color = "#52ab98";
    inputSecContainer.style.transition = "color 1s";
    dragDiv.style.backgroundColor="black"
  }

  if (count == 3) {
    inputSecContainer.style.backgroundColor = "#2b6777";
    inputSecContainer.style.color = "white";
    nameSpan.style.backgroundColor = "#2b6777";
    nameSpan.style.color = "white";
    themeSpan.style.color = "#2b6777";
    inputSecContainer.style.transition = "color 1s";
    dragDiv.style.backgroundColor="black"
  }

  if (count == 4) {
    inputSecContainer.style.backgroundColor = "white";
    inputSecContainer.style.color = "black";
    nameSpan.style.backgroundColor = "white";
    nameSpan.style.color = "black";
    themeSpan.style.color = "#c8d8e4";
    inputSecContainer.style.transition = "color 1s";
    dragDiv.style.backgroundColor="black"
    count = -1;
  }
});

fontplus.addEventListener('click',()=>{
    inputSecContainer.style.fontSize= "2rem"; 
})


fontminus.addEventListener('click',()=>{
    inputSecContainer.style.fontSize= "1rem"; 
})