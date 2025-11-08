function toggleAccordion(btn) {
  const allAccordions = document.querySelectorAll(".accordion-btn");
  const content = btn.nextElementSibling;
  const isOpen = btn.classList.contains("open");

  allAccordions.forEach(b => {
    if (b !== btn) {
      b.classList.remove("open");
      b.nextElementSibling.style.maxHeight = "0px";
    }
  });

  if (!isOpen) {
    btn.classList.add("open");
    content.style.maxHeight = content.scrollHeight + "px";
  } else {
    btn.classList.remove("open");
    content.style.maxHeight = "0px";
  }
}