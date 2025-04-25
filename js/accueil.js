document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.getElementById("carousel");
    const fiche = document.getElementById("fiche-recette");
    const miniatures = document.getElementById("miniatures");

    const recettes = [{
            titre: "Ube Ice Cream",
            description: "Glace maison à l'ube, crémeuse et douce.",
            urlImage: "../img/ice_cream.png",
            ingredients: "Ube, lait concentré, crème",
            etapes: "Mélanger les ingrédients\nCongeler\nMixer avant de servir"
        },
        {
            titre: "Ube Cake",
            description: "Gâteau moelleux et parfumé à l'ube.",
            urlImage: "../img/cake.png",
            ingredients: "Farine, sucre, ube, levure",
            etapes: "Mélanger\nCuire au four\nDéguster"
        },
        {
            titre: "Ube Latte",
            description: "Boisson chaude onctueuse à l'ube, parfaite pour l'hiver.",
            urlImage: "../img/late.png",
            ingredients: "Lait, ube râpé, sucre, vanille",
            etapes: "Faire chauffer le lait\nAjouter l'ube râpé et le sucre\nMélanger jusqu'à obtenir une boisson violette\nServir chaud"
        }
    ];

    let currentIndex = 0;

    recettes.forEach((recette, index) => {
        const img = document.createElement("img");
        img.src = recette.urlImage;
        img.alt = recette.titre;
        img.classList.add("carousel-item");
        if (index === 0) img.classList.add("active");
        carousel.appendChild(img);

        const thumb = document.createElement("img");
        thumb.src = recette.urlImage;
        thumb.alt = recette.titre;
        thumb.classList.add("miniature");
        thumb.dataset.index = index;
        thumb.addEventListener("click", () => showRecette(index));
        miniatures.appendChild(thumb);
    });

    function showRecette(index) {
        currentIndex = index;
        const recette = recettes[index];

        document.querySelectorAll(".carousel-item").forEach((img, i) => {
            img.classList.toggle("active", i === index);
        });

        fiche.innerHTML = `
        <h3>${recette.titre}</h3>
        <p><strong>Description :</strong> ${recette.description}</p>
        <p><strong>Ingrédients :</strong> ${recette.ingredients}</p>
        <p><strong>Etapes :</strong><br>${recette.etapes.replace(/\n/g, "<br>")}</p>
      `;
    }

    document.querySelector(".carousel-btn.left").onclick = () => {
        currentIndex = (currentIndex - 1 + recettes.length) % recettes.length;
        showRecette(currentIndex);
    };

    document.querySelector(".carousel-btn.right").onclick = () => {
        currentIndex = (currentIndex + 1) % recettes.length;
        showRecette(currentIndex);
    };

    showRecette(0);
});