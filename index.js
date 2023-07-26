(function () {
  // Calculate the initial scale value based on the desired zoom level
  var initialScale = 1 / (window.devicePixelRatio * 1.1);

  // Set the initial scale in the viewport meta tag
  var viewportMetaTag = document.querySelector('meta[name="viewport"]');
  viewportMetaTag.setAttribute(
    "content",
    "width=device-width, initial-scale=" +
      initialScale +
      ", maximum-scale=" +
      initialScale +
      ", user-scalable=no"
  );
})();

const items = document.querySelectorAll(".accordion button");
function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }
  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}
items.forEach((item) => item.addEventListener("click", toggleAccordion));
