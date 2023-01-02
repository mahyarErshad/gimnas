export default function animatedCircles(event) {
  const color = "#ea4c22";
  const header = document.getElementById("HeaderTextSection");
  let circle = document.createElement("span");
  circle.setAttribute("class", "circle");
  header.appendChild(circle);

  circle.style.left = event.clientX + "px";
  circle.style.top = event.clientY + "px";
  circle.style.borderColor = color;

  circle.style.transition = "all 0.5s linear 0s";

  circle.style.left = circle.offsetLeft;
  circle.style.top = circle.offsetTop;

  circle.style.width = "75px";
  circle.style.height = "75px";
  circle.style.borderWidth = "5px";
  circle.style.opacity = 0;
  setTimeout(() => {
    header.removeChild(circle);
  }, 500);
}
