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



let listContact =[];

const afficheContact = () => {
  let index=1;
  let contact ="";
   
  for( let contact of annuaire){
    listContact.push(index +")"+contact.prenom + " "+ contact.nom+" "+contact.age+"\n");
    //alert((index +")"+contact.prenom + " "+ contact.nom+" "+contact.age))
    index++
    
  }
  // console.log(listContact);
  return listContact
}

afficheContact()


// alert("bienvenue dans l'annuaire :"  )

const menu = "bienvenue dans l'annuaire : "+ listContact

 alert(menu);

 let prenom = prompt( "quel est votre prénom ?");
 let nom = prompt( "quel est votre nom ?");
 let age = prompt("quel est votre âge ?");


 function addContact(){

  
 }

 function suppContact(){
  
 }