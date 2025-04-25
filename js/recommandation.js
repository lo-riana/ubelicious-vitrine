// Nouveau recommandation.js sans serveur

document.addEventListener("DOMContentLoaded", () => {
    const listeLieux = document.getElementById("liste-lieux");

    const lieux = [{
            titre: "La Maison du Mochi",
            lieu: "39 Rue du Cherche-Midi, 75006 Paris",
            contenu: "Mochis artisanaux, à l'ube (selon saison). Cadre raffiné et minimaliste."
        },
        {
            titre: "Glace Bachir",
            lieu: "58 Rue Rambuteau, 75003 Paris",
            contenu: "Propose des glaces artisanales à l'ube (selon les périodes). Texture super fondante."
        },
        {
            titre: "Boba Café Paris",
            lieu: "47 Rue du Faubourg-Saint-Denis, 75010 Paris",
            contenu: "Bubble tea à l'ube, avec toppings personnalisables. Ambiance jeune et chill."
        },
        {
            titre: "Hanoï Corner",
            lieu: "17 Rue Dussoubs, 75002 Paris",
            contenu: "Desserts à l'ube (chè violet, gâteaux vapeur), cuisine généreuse et originale."
        }
    ];

    if (lieux.length === 0) {
        listeLieux.innerHTML = "<p>Aucun lieu recommandé pour le moment.</p>";
        return;
    }

    lieux.forEach((lieu) => {
        const card = document.createElement("div");
        card.classList.add("lieu-card");

        card.innerHTML = `
            <h3>${lieu.titre}</h3>
            <p><strong>Adresse :</strong> ${lieu.lieu}</p>
            <p><strong>Commentaire :</strong> ${lieu.contenu}</p>
        `;

        listeLieux.appendChild(card);
    });
});