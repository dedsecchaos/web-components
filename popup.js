const openPopupBtn = document.getElementById("open-popup-btn");
const floatingPopup = document.getElementById("floating-popup");
const popupClose = document.getElementById("popup-close");

let isDragging = false;
let offsetX, offsetY;

openPopupBtn.addEventListener("click", () => {
    floatingPopup.style.display = "block";
});

popupClose.addEventListener("click", () => {
    floatingPopup.style.display = "none";
});

floatingPopup.addEventListener("mousedown", (e) => {
    isDragging = true;
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
});
function elementDrag(e) {
 e = e || window.event;
 e.preventDefault();
 pos1 = pos3 - e.clientX;
 pos2 = pos4 - e.clientY;
 pos3 = e.clientX;
 pos4 = e.clientY;

 floatingPopup.style.top = (floatingPopup.offsetTop - pos2) + "px";
 floatingPopup.style.left = (floatingPopup.offsetLeft - pos1) + "px";
}

function closeDragElement() {
  document.onmouseup = null;
  document.onmousemove = null;
}