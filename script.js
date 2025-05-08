// # W5-D2-Lab1

//     Define a variable of type String and do the following:

//     A button that changes the displayed text

//     A button that increases the font size

//     A button that decreases the font size

//     A button that changes the font color

//     A button that changes the background color of the text

//     A button that shows an image, and when clicked again, the image changes.

const altText = "🎉 You clicked the Change Text button!";

// State variables
let textToggled = false;
let fontSize = 16;
const colors = ["red", "blue", "green", "purple", "orange"];
const bgColors = ["yellow", "lightgray", "lightblue", "lightgreen", "pink"];
let colorIdx = 0;
let bgColorIdx = 0;
const images = ["./img.jpg"];
let imageIdx = 0;

const msgEl = document.getElementById("message");
const imgEl = document.getElementById("toggleImage");

// Button handlers
document.getElementById("changeTextBtn").onclick = () => {
  if (!textToggled) {
    msgEl.textContent = altText;
  } else {
    msgEl.innerHTML = "This is the <strong>initial</strong> text.";
  }
  textToggled = !textToggled;
};

document.getElementById("increaseFontBtn").onclick = () => {
  fontSize += 2;
  msgEl.style.fontSize = fontSize + "px";
};

document.getElementById("decreaseFontBtn").onclick = () => {
  fontSize = Math.max(8, fontSize - 2);
  msgEl.style.fontSize = fontSize + "px";
};

document.getElementById("changeColorBtn").onclick = () => {
  colorIdx = (colorIdx + 1) % colors.length;
  msgEl.style.color = colors[colorIdx];
};

document.getElementById("changeBgColorBtn").onclick = () => {
  bgColorIdx = (bgColorIdx + 1) % bgColors.length;
  msgEl.style.backgroundColor = bgColors[bgColorIdx];
};

function toggleImage() {
  imageIdx = (imageIdx + 1) % images.length;
  imgEl.src = images[imageIdx];
  imgEl.style.opacity = 0.5;
  setTimeout(() => {
    imgEl.style.opacity = 1;
  }, 200);
}

imgEl.onclick = toggleImage;
document.getElementById("toggleImageBtn").onclick = toggleImage;
