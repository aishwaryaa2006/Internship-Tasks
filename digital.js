const cards = document.querySelectorAll(".card3");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("expanded");
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("expanded");
  });
});
