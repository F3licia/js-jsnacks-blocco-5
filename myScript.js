/*[Snack 1]
Crea 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà,
peso e lunghezza.*/

var zucchini = 
[
{type:"1", weight:"80", length:"18"},
{type:"2", weight:"60", length:"16"},
{type:"3", weight:"50", length:"15"},

{type:"4", weight:"40", length:"14"},
{type:"5", weight:"70", length:"17"},
{type:"6", weight:"20", length:"10"},

{type:"7", weight:"50", length:"15"},
{type:"8", weight:"40", length:"14"},
{type:"9", weight:"60", length:"16"},

{type:"10", weight:"40", length:"14"}
]

//Calcola quanto pesano tutte le zucchine.
var sum = 0
for(var key in zucchini){
sum += parseInt(zucchini[key].weight);
}
console.log("Il peso totale è di " + sum + "g")


/*[Snack 2]
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Calcola quanto pesano tutte le zucchine.*/

var morethan15 = [];
var lessthan15 = []
var sumMore = 0
var sumLess = 0

for(var key in zucchini){
    if(zucchini[key].length < 15){                          //divido per grandezza minore di 15
        lessthan15.push(parseInt(zucchini[key].weight));   //pusho il valore del peso
        sumLess += (parseInt(zucchini[key].weight));       //lo sommo in una nuova var
        
    }else if(zucchini[key].length > 15){                  //stessa cosa per grandezza maggiore di 15
        morethan15.push(parseInt(zucchini[key].weight));
        sumMore += (parseInt(zucchini[key].weight));
    }
}

console.log("Il primo gruppo contiene zucchine del peso di "+ morethan15);
console.log("Il secondo gruppo contiene zucchine del peso di " + lessthan15);
console.log("l peso totale del primo gruppo è di " + sumMore);
console.log("l peso totale del secondo gruppo è di " + sumLess);

