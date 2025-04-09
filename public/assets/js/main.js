const toggleAction = (btn) => {
  const content = btn.nextElementSibling;
  const icon = btn.querySelector(".accordion-icon");
  const isOpen = !content.classList.contains("hidden");

  document
    .querySelectorAll(".accordion-content")
    .forEach((el) => el.classList.add("hidden"));
  document
    .querySelectorAll(".accordion-icon")
    .forEach((el) => (el.style.transform = "rotate(0deg)"));

  if (!isOpen) {
    content.classList.remove("hidden");
    icon.style.transform = "rotate(180deg)";
  }
};
