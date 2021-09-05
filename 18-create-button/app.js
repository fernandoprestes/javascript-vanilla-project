const controls = document.querySelector(".controls");
const cssText = document.querySelector(".cssText");
const btn = document.querySelector(".btn");

controls.addEventListener("change", handleChange);

const handleStyle = {
  element: btn,
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + "px";
  },
  width(value) {
    this.element.style.width = value + "px";
  },
  text(value) {
    this.element.innerHTML = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + "px";
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + "rem";
  },
};

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;
  handleStyle[name](value);
  saveValues(name, value);
  showCss();
}

function showCss() {
  cssText.innerHTML =
    "<span>" + btn.style.cssText.split("; ").join(";</span><span>");
}

/** save values on local storage */
function saveValues(name, value) {
  localStorage[name] = value;
}

/** load value local storage */
function setValues() {
  const properties = Object.keys(localStorage);
  properties.forEach((propertie) => {
    handleStyle[propertie](localStorage[propertie]);
    controls.elements[propertie].value = localStorage[propertie];
  });
  showCss();
}

setValues();
