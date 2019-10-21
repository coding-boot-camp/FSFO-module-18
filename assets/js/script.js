const pageEl = document.querySelector("#page");


function createEl(htmlString = "", className) {
  const el = document.createElement(htmlString);
  if (className) {
    el.setAttribute("class", className);
  }
  return el;
}

const containerEl = createEl("div", "container")
const events = createEl("h1")
events.textContent = "Events"
containerEl.appendChild(events)

pageEl.appendChild(containerEl)
