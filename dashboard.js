// TESX Demo Dashboard

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow =
        "0 15px 30px rgba(59,130,246,.35)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "none";

    });

});

console.log("TESX Demo Dashboard Loaded");
