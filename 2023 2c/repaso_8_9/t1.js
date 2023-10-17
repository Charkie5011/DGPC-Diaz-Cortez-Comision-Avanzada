
// % es el operador para modulo
// modulo en math es el resto de la division entera 
//  10/2 = 5  par
// 11**2 !== 0 


const a = [1,2,3,4,5,6];
function criteria(e){
    return e%2 === 0 ; 
     
}

console.log(a.filter(criteria))  ;