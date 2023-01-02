export default function animatedCircles(event) {
  const color = "#ea4c22";
  let circle = document.createElement("span");
  circle.setAttribute("class", "circle");
  document.body.appendChild(circle);

  circle.style.left = event.clientX + "px";
  circle.style.top = event.clientY + "px";
  circle.style.borderColor = color;

  circle.style.transition = "all 0.5s linear 0s";

  circle.style.left = circle.offsetLeft - 20 + "px";
  circle.style.top = circle.offsetTop - 20 + "px";

  circle.style.width = "50px";
  circle.style.height = "50px";
  circle.style.borderWidth = "5px";
  circle.style.opacity = 0;
}
