/*

    * match() : retourne un tableau contenant toutes les occurrences recherchées.
    
    * search() : retourne la position d'une portion de texte (semblable à indexOf() mais avec une regex).
    
    * split() : la fameuse méthode split(), mais avec une regex en paramètre.
    
    * replace() : effectue un rechercher/remplacer.
    
    * test() : test l'existance d'une chaine caractère (renvoit true ou false).
    
    * var myRegex = /contenu_à_rechercher/;
    
    (Si votre regex contient elle-même des slashs, n'oubliez pas de les échapper en utilisant un anti-slash comme suit) :
    
    * var regex_1 = /contenu_/_contenu/; (avant).
    
    * var regex_1 = /contenu_\/_contenu/; (après).

*/


/* ---  Recherche de mots simple  --- */

if (/raclette/.test('Je mangerais bien une raclette savoyarde !')) {
    alert('Ça semble parler de raclette');
} else {
    alert('Pas de raclette à l\'horizon');
}

/* ---  Recherche de mots simple en ignorant les majuscules  --- */

// on ajoute le i après /L'express/

if (/Raclette/i.test('Je mangerais bien une raclette savoyarde !')) {
    alert('Ça semble parler de raclette');
} else {
    alert('Pas de raclette à l\'horizon');
}

/* ---  Recherche de mots simple plusieurs mots différents  --- */

// on ajoute le OU | entre les mots

if (/Raclette|Tartiflette/i.test('Je mangerais bien une tartiflette savoyarde !')) {
    alert('Ça semble parler de trucs savoyards');
} else {
    alert('Pas de plats légers à l\'horizon');
}

/*

    * /^Une phrase pour la recherche$/
    
    * Les symboles ^ et $ permettent respectivement de représenter le début et la fin d'une chaîne de caractères. Si un de ces symboles est présent, il indique à la regex que ce qui est recherché commence ou termine la chaîne.
    
    * exemples :
    
    * chaine (Raclette savoyarde)  Regex (/^Raclette savoyarde$/) Résultat (true).
    
    * chaine (Une raclette savoyarde)  Regex (/^Raclette/)  Résultat (false).
    
    * chaine (Une raclette savoyarde)  Regex (/savoyarde$/) Résultat (true).
    
    * chaine (Une raclette savoyarde !)  Regex (/raclette savoyarde$/) Résultat (false).

*/


/*

    * /gr[aèio]s/ : Ici, la regex trouvera les mots « gras », « grès », « gris » et « gros ».
    
    * [a-o] : Si nous voulons trouver les lettres allant de a à o
    
    * [a-zA-Z] : va rechercher toutes les lettres de l'alphabet, qu'elles soient minuscules ou majuscules.
    
    * [0-9] : trouvera donc un chiffre allant de 0 à 9.
    
    * [a-z0-9] : trouvera une lettre minuscule ou un chiffre.
    
    * [^aeyuio] : ignorer les voyelles grace au ^ après le corchet.
    
    * [a-zâäàéèùêëîïôöçñ] :[a-z] trouvera a, b, i, o… mais ne trouvera pas â, ï ou encore ê. S'il s'agit de trouver un caractère accentué.
    
    * /gr.s/ : « grys », « grus », « grps »… Le point symbolise donc un caractère quelconque.


*/


/*

    * Les trois symboles quantificateurs :
    
    * ? : ce symbole indique que le caractère qui le précède peut apparaître 0 ou 1 fois.
    
    * + : ce symbole indique que le caractère qui le précède peut apparaître 1 ou plusieurs fois.
    
    * * : ce symbole indique que le caractère qui le précède peut apparaître 0, 1 ou plusieurs fois.
    
    * {n} : le caractère est répété n fois.
    
    * {n,m} : le caractère est répété de n à m fois. Par exemple, si on a {0, 5}, le caractère peut être présent de 0 à 5 fois.
    
    * {n,} : le caractère est répété de n fois à l'infini.
    
    * /raclett?e/ : ici, le premier t sera trouvé, et derrière le deuxième se trouve le point d'interrogation, ce qui signifie que le deuxième t peut apparaître 0 ou 1 fois.
    
    * /raclet+e/ : Le + indique que le t sera présent une fois ou un nombre infini de fois.
    
    * /raclett*e/ : Le * indique que le t sera présent une zéro ou une fois ou un nombre infini de fois. 
    
    * /raclet{1,3}e/ : le caractère t est répété de 1 à 3 fois.
    
    * /racle[tf]+e/ : « racleffe  ou « raclette ».
    
    * /Hellow+/ : Hellowwwwwwwww (true).
    
    * /Go{2,}gle/ : Goooooogle (true).
    
    * Le 1er septembre : /Le [1-9][a-z]{2,3} septembre/ (true).
    
    * Le 1er septembre : /Le [1-9][a-z]{2,3}[a-z]+/ (false) "La dernière regex est fausse à cause de l'espace. En effet, la classe [a-z] ne trouvera pas l'espace."
    

*/


/*

    * Les métacaractères : ( ! ^ $ ( ) [ ] { } ? + * . / \ | )
    
    * il faut ajouter un anti slache \ avant les métacartères si ses derniers font parti des critères de recherche.

*/

/*

    * Les types génériques (classes raccourcies)
    
    * \d : Trouve un caractère décimal (un chiffre)

    * \D : Trouve un caractère qui n'est pas décimal (donc pas un chiffre)

    * \s : Trouve un caractère blanc

    * \S : Trouve un caractère qui n'est pas un caractère blanc

    * \w : Trouve un caractère « de mot » : une lettre, accentuée ou non, ainsi que l'underscore

    * \W : Trouve un caractère qui n'est pas un caractère « de mot »
    
    * \n : TQouve un retour à la ligne
    
    * \t : Trouve une tabulation
    
    * \b : Trouve une limite de mot
    
    * \B : Ne trouve pas une limite de mot

*/

// Adresse Email Validator

var email = prompt("Entrez votre adresse e-mail :", "javascript@siteduzero.com");

if (/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(email)) {
    alert("Adresse e-mail valide !");
} else {
    alert("Adresse e-mail invalide !");
}

var myRegex1 = /^Raclette$/i;
// égale
var myRegex2 = new RegExp("^Raclette$", "i");



// Les parenthèses capturantes

//  le type générique \S. \S+ indique qu'on recherche une série de caractères

// On ajoute les parenthèses pour faire comprendre pour faire comprendre à l'interpréteur JavaScript que leur contenu devra être extrait.

// La regex est exécutée via exec()

// RegExp :  le contenu des parenthèses capturantes est enregistré temporairement au sein de l'objet RegExp. Le premier couple de parenthèses sera enregistré dans la propriété $1, le deuxième dans $2 et ainsi de suite (max $9)

var birth = 'Je suis né en mars';

/^Je suis né en (\S+)$/.exec(birth);

alert(RegExp.$1); // Affiche : « mars »


// -----


var email = prompt("Entrez votre adresse e-mail :", "javascript@mondomaine.com");

if (/^([a-z0-9._-]+)@([a-z0-9._-]+)\.([a-z]{2,6})$/.test(email)) {
    alert('Partie locale : ' + RegExp.$1 + '\nDomaine : ' + RegExp.$2 + '\nExtension : ' + RegExp.$3);
} else {
    alert('Adresse e-mail invalide !');
}

// -----

var html = '<a href="www.mon-adresse.be"><strong class="web">Mon site</strong></a>';

/<a href="(.+?)">/.exec(html);

alert(RegExp.$1);

// Le point d'interrogation va faire en sorte que la recherche soit moins gourmande et s'arrête une fois que le minimum requis est trouvé, d'où l’appellation non-greedy (« non gourmande »).


// Recherche et capture

var date = '05/26/2011';

date = date.replace(/^(\d{2})\/(\d{2})\/(\d{4})$/, 'Le $2/$1/$3');

alert(date); // Le 26/05/2011

