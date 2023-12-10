function factoriel(valeur) { // valeur = 5
    for (let i = valeur - 1; i >= 1; i--) {
        valeur *= i;
    }
    console.log(valeur);
}

factoriel(2); // 5 * 4 * 3 * 2 * 1