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