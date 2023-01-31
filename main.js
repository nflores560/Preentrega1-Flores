const treskg = 1000;
const diezkg= 2500;
const veintekg = 15000;

 alert("Este es nuestro carrito de compras de alimentos para perros")

for (let i = 0; i <7; i++){
 let alimentokg=parseInt(prompt("Seleccione la presentación (en kilos) que desea comprar (3, 10, 20)"))

 if (alimentokg==3) {
    (alimentokg=treskg)
    let cantidad=parseint=prompt("Cuántas bolsas desea agregar a su carrito? (entre 1 y 10)");{
        if (cantidad>=1&&cantidad<=10){
            alert("El valor de su orden es de "+ cantidad + " unidad(es) de 3kg de alimento para perros, con un costo de $"  + alimentokg*cantidad)
            console.log("La transaccion realizada fue de $"+alimentokg*cantidad)
            break}
        
        else if ((cantidad<=1)||(cantidad>=10)||(cantidad=isNaN));{
            alert("Error. Su orden debe ser numérica y debe ser entre 1 y 10")
        }
    }
 }

 else if (alimentokg==10) {
    (alimentokg=diezkg)
    let cantidad=parseint=prompt("Cuántas bolsas desea agregar a su carrito? (entre 1 y 10)");{
        if (cantidad>=1&&cantidad<=10){
            alert("El valor de su orden es de "+ cantidad + " unidad(es) de 10kg de alimento para perros, con un costo de $"  + alimentokg*cantidad)
            console.log("La transaccion realizada fue de $"+alimentokg*cantidad)
            break}
        
        else if ((cantidad<=1)||(cantidad>=10)||(cantidad=isNaN));{
            alert("Error. Su orden debe ser numérica debe ser y entre 1 y 10")
        }
    }
 }

 else if (alimentokg==20) {
    (alimentokg=veintekg)
    let cantidad=parseint=prompt("Cuantas bolsas desea agregar a su carrito? (entre 1 y 10)");{
        if (cantidad>=1&&cantidad<=10){
            alert("El valor de su orden es de "+ cantidad + " unidad(es) de 20kg de alimento para perros, con un costo de $"  + alimentokg*cantidad)
            console.log("La transaccion realizada fue de $"+alimentokg*cantidad)
            break}
        
        else if ((cantidad<=1)||(cantidad>=10)||(cantidad=isNaN));{
            alert("Error. Su orden debe ser numérica y debe ser entre 1 y 10")
        }
    }
 }

else if ((alimentokg=isNaN)||(alimentokg!=3,10,20)){
    ;alert("Error. Debe ser un número, de las opciones que se demuestran")
    }
}

