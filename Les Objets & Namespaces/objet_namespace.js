/* _____________________________________________________________ */

var myArray = ['Sébastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume'];

/* _____________________________________________________________ */

var myArray = [
    {
        nick: 'Sébastien',
        age: 23,
        sex: 'm',
        parent: 'aîné',
        work: 'JavaScripteur'
    },
    {
        nick: 'Laurence',
        age: 19,
        sex: 'f',
        parent: 'soeur',
        work: 'Sous-officier'
    },
    
    // et ainsi de suite…

];

/* _____________________________________________________________ */

// Définition de l'objet Person via un constructeur
function Person(nick, age, sex, parent, work, friends) {
    this.nick = nick;
    this.age = age;
    this.sex = sex;
    this.parent = parent;
    this.work = work;
    this.friends = friends;
}

// On crée des variables qui vont contenir une instance de l'objet Person :
var seb = new Person('Sébastien', 23, 'm', 'aîné', 'JavaScripteur', []);
var lau = new Person('Laurence', 19, 'f', 'soeur', 'Sous-officier', []);

alert(seb.nick); // Affiche : « Sébastien »
alert(lau.nick); // Affiche : « Laurence »

alert(seb instanceof Person); // Affiche true

seb.nick = 'Bastien'; // On change le prénom
seb.age = 18;        // On change l'âge

// On ajoute un ami dans le tableau « friends »
seb.friends.push(new Person('Johann', 19, 'm', 'aîné', 'JavaScripteur aussi', []));

alert(seb.friends[0].nick); // Affiche : « Johann »

// Avec ça, on peut aussi ajouter un ami à Johann

seb.friends[0].friends.push(new Person('Victor', 19, 'm', 'aîné', 'Internet Hero', []));

/* _____________________________________________________________ */

var myNamespace = {
    myBestFunction: function() {
        alert('Ma meilleure fonction !');
    }
};

// On exécute la fonction :
myNamespace.myBestFunction();

/* _____________________________________________________________ */

var thundersebWebMail = {
    // Propriétés
    version: 1.42,
    lang: 'english',

    // Initialisation
    init: function() { /* initialisation */ },

    // Gestion des mails
    mails: {
        list: function() { /* affiche la liste des mails */ },
        show: function() { /* affiche un mail */ },
        trash: function() { /* supprime un mail */ },
        // et cætera…
    },

    // Gestion des contacts
    contacts: {
        list: function() { /* affiche la liste des contacts */ },
        edit: function() { /* édite un contact */ },
        // et cætera…
    }
};

/* _____________________________________________________________ */

var myNamespace = {

    test: function() {
        alert('Test');
    },

    subNamespace: {
        init: function() {
            myNamespace.test(); // can't use (this) there, we should use the name of the namespace parent
        }
    }

};

myNamespace.subNamespace.init();

/* _____________________________________________________________ */