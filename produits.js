const produit=[
    { Id : 1 ,nom: "clavier" , catégorie: "Accessoires" , prix: 120 , Stock : 5},
    { Id : 2 , nom: "souris" , catégorie: "Accessoires" , prix:80 , Stock : 8},
    {Id :3 , nom :"écran" , catégorie : "Informatiques" , prix : 900 , Stock : 0},
    {Id :4 , nom :"Casque" ,Catégoie : "Accessoires" , prix : 240 , Stock : 3},
];
for(let i in produit){
    console.log(produit[i].nom);
    console.log(produit[i].prix);
}

const dispo = produit.filter( i => i.Stock > 0 );
console.log("le nombre de produits disponibles est : " + dispo.length);


const somes= produit.reduce((somme,produit) => somme + produit.prix * produit.Stock ,0);
console.log("la valeur totale du stock est : " + somes);






if (dispo.length > 0) {
    const moinsCher = dispo.reduce((min, produit) => {
        return produit.prix < min.prix ? produit : min;
    });

    console.log("Produit le moins cher : " + moinsCher.nom);
    console.log("Prix : " + moinsCher.prix + " MAD");
} else {
    console.log("Aucun produit n'est disponible.");
}





const lignes = produit.map(p => p.nom + " - " + p.prix + " MAD - " + p.Stock + " unités");
console.log(lignes);





function estValide(produit) {
    return Number.isFinite(produit.prix) &&
           produit.prix >= 0 &&
           Number.isFinite(produit.Stock) &&
           produit.Stock >= 0;
}


const { nom, prix } = moinsCher;

console.log("Nom : " + nom);
console.log("Prix : " + prix + " MAD");



