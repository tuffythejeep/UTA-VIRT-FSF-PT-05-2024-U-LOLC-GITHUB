const container = document.querySelector('.container');

container.addEventListener('click', function (event) {
  const element = event.target;

  // TODO: Complete function
  if (element.matches("div.box")) {
    if (element.dataset.state === "hidden") {
      const num = element.dataset.number;
      element.dataset.state = "visible";
      element.textContent = num;
     }  
  }
});