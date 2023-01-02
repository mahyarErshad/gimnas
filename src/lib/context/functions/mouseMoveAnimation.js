export default function animatedCircles(event) {
  const color = "#ea4c22";
  let circle = document.createElement("span");
  circle.setAttribute("class", "circle");
  document.body.appendChild(circle);

  circle.style.left = event.clientX + "px";
  circle.style.top = event.clientY + "px";
  circle.style.borderColor = color;

  circle.style.transition = "all 0.5s linear 0s";

  circle.style.left = circle.offsetLeft;
  circle.style.top = circle.offsetTop;

  circle.style.width = "100px";
  circle.style.height = "100px";
  circle.style.borderWidth = "5px";
  circle.style.opacity = 0;
  setTimeout(() => {
    document.body.removeChild(circle);
  }, 500);
}
