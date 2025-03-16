document.getElementById("mbForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let taille = parseFloat(document.getElementById("taille").value);
    let poids = parseFloat(document.getElementById("poids").value);
    let age = parseInt(document.getElementById("age").value);
    let sexe = document.getElementById("sexe").value;

    if (!taille || !poids || !age) {
        document.getElementById("resultat").innerText = "Veuillez remplir tous les champs.";
        return;
    }

    let mb;
    if (sexe === "homme") {
        mb = (10 * poids) + (6.25 * taille) - (5 * age) + 5;
    } else {
        mb = (10 * poids) + (6.25 * taille) - (5 * age) - 161;
    }

    let resultBox = document.getElementById("resultat");
    resultBox.innerText = `Votre métabolisme de base est de ${mb.toFixed(2)} kcal/jour.`;
    
    // Animation de fade-in sur le résultat
    resultBox.style.opacity = "0";
    setTimeout(() => {
        resultBox.style.opacity = "1";
        resultBox.style.transform = "translateY(0)";
    }, 100);

    resultBox.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
    resultBox.style.transform = "translateY(-10px)";
});
