var names = ["John", "Mick"];

console.log(names);

console.log(typeof(names));


/* 2.primjer */

var prazanNiz = [];

for(i = 0; i < prazanNiz.length; i++) {
    console.log("1.element na poziciji ["+ i + "] =" + prazanNiz[i]);
};


/* 3.primjer */

var brojcaniNiz = [1, 2, 3, 4, 5, 6, 7];

var suma = 0;

for(var x = 0; x < brojcaniNiz.length; x++) {
    suma += brojcaniNiz[x];

};

console.log(suma);

/* 4. primjer*/

var wierdbrojcaniNiz = [1, 2, , 3, 4, 5, 6, 7];
var sumaW = 0;

for(var x = 0; x < wierdbrojcaniNiz.length; x++) {
    if(wierdbrojcaniNiz[x] === undefined) {
        continue
    }
    sumaW += wierdbrojcaniNiz[x];
}

console.log("SumaW je " + sumaW);

/* 5.primjer */

var matrix = [[1, 2, 3], ["John", "Jane", "Mike"]];

for(var i = 0; i < matrix.length; i++){

    for(var j = 0; j < matrix[i].length; j++ ){

        console.log("matrix[" + i + "][" + j + "] = " + matrix[i][j]);

    }
}

/* 6.primjer */

var myNames = ["jane", "john",, "mike"];

var y = 1;

for(var myName of myNames){
    console.log(y + ". " + myName);
    y++
};


/*zadaci */

/*1.zad */

var names = ["John", "Jane", "Bob", , "Mike"];

for(var i = 0; i < names.length; i++){
    console.log(names[i]);
}

/*2.zad */

names.push("Domagoj");

console.log(names);

/*3.zad */

var i = -1;

do {
    i++;
    console.log(names[i]);
    
} while(names[i] !== "Jane");

/*4.zad */

/*4.1 */

var noviNiz = [];

for(var _name of names){
    if( _name === undefined) {
        continue
    }
    noviNiz.push(_name);
};

console.log(noviNiz);

/*4.2 */

for(var i = 0; i < names.length; i++){
    if(names[i] === undefined) {
        names.splice(i, 1);
    }
}

console.log("spliced -->" + names.join());



/*5.zad */

names.sort();

/*6.zad*/

console.log(names.join());

/*7.zad */

var brojcaniNiz = [1, 2, , 3, 4, , 5, "test", [1, 2, 3], 6, 7, true];
/*zbroji sve clanove niza */

var suma = 0;

for(var x = 0; x < brojcaniNiz.length; x++){

    if(typeof brojcaniNiz[x] !== "number"){
        console.log(
            "Element na indexu " +
            x +
            " nije broj pa ga preskacemo nego je = " +
            typeof brojcaniNiz[x],
        );
        continue;
    }
}

/* */

var namesLong = ["John", "Jane", "Bob", , "Mike", "Leonardo"];

var duljina = 0;
var najduzeIme = "";

for(var ime of namesLong) {

    if(typeof ime !== "string") {
        continue;
    }
    var duljinaImena = ime.length;
    if(duljinaImena > duljina) {
        duljina = duljinaImena;
        najduzeIme = ime;
    }
}

console.log("Duljina: " + duljina);
console.log("Najduze ime je: " + najduzeIme);