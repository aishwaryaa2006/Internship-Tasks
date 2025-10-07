const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const arrow = card.querySelector(".arrow");
  let expanded = false;

  arrow.addEventListener("click", () => {
    let extraText = card.querySelector(".extraText");

    if (!expanded) {
      if (!extraText) {
        const p = document.createElement("p");
        p.className = "extraText";
        p.textContent =
          card.dataset.text ||
          "Adventure capital surrounded by stunning lakes.";

        p.style.opacity = "0";
        p.style.maxHeight = "0";
        p.style.overflow = "hidden";
        p.style.transition = "all 0.5s ease";
        p.style.padding = "10px 0";

        card.insertBefore(p, arrow);

        void p.offsetHeight;

        p.style.opacity = "1";
        p.style.maxHeight = "100px"; 
      }

      card.style.maxHeight = card.scrollHeight + "px";
      card.style.transition = "max-height 0.6s ease";

      arrow.style.transform = "rotate(180deg)";
      arrow.style.transition = "transform 0.4s ease";

      expanded = true;
    } else {

      if (extraText) {

        extraText.style.opacity = "0";
        extraText.style.maxHeight = "0";
        extraText.style.padding = "0";

        setTimeout(() => {
          extraText.remove();
        }, 500);
      }

      card.style.maxHeight = "";
      card.style.transition = "max-height 0.6s ease";

      arrow.style.transform = "rotate(0deg)";
      arrow.style.transition = "transform 0.4s ease";

      expanded = false;
    }
  });
});
