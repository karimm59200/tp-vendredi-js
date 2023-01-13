let annuaire = [
  {
      nom: "Dupont",
      prenom: "Jean",
      age: 15
  },
  {
      nom: "Durant",
      prenom: "Pierre",
      age: 16
  },
  {
      nom: "Martin",
      prenom: "Jean",
      age: 17
  }
];


listContact =[];
const afficheContact = () => {
  let index=1;
  for( let contact of annuaire){
    console.log(index +")"+contact.prenom + " "+ contact.nom+" "+contact.age);
    index++
    return 
  }
  
}

afficheContact()


// alert("bienvenue dans l'annuaire :"  )

const menu = `bienvenue dans l'annuaire : `

alert(menu);

