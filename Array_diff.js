    function arrayDiff(a, b) {

for (let el in b) {
 for (let elem in a) {
  b[el] == a[elem] ? a[elem] = "toDel": 0;
 }
}
    a = a.join(" ").replace(/[a-zA-Z]/gi, "").split(" ");
    let rArr = [];
    for (let el in a){
        a[el].length > 0 ? rArr.push(a[el]) : 0;
    }
return rArr.map(Number);
}
 // OR

function arrayDiff(a, b) {
    return a.filter(x => b.includes(x) ? false : true);
}
