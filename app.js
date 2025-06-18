//1 Declara variables que representen tu nombre, edad, estatura en metros, ciudad y si tienes mascota (sí/no)

// let name = "Samuel"
// let age = 18
// let height = 1.77
// let country = "Medellin"
// let pet = true


//2 Cambia los valores y explica qué tipo de dato representa cada uno (Muestra en consola el tipo de dato).
//Nombre
// name = "santiago"
// console.log(typeof(name))
// //edad
// age = 19
// console.log(typeof(age)) 
// //altura
// height = 1.80
// console.log(typeof(height)) 




//3 Declara dos variables que se sumen (por ejemplo, cantidad de amigos en dos redes sociales) y una que contenga el resultado de una concatenación


// let friends_facebook = 20 
// let friends_instagram = 20 

// let total_friends = friends_facebook+friends_instagram 
// console.log(total_friends)


//4 Una persona quiere entrar a una discoteca. Solo puede si tiene más de 18 años. Muestra un mensaje dependiendo si entra o no.
// let age = prompt("Ingrese su edad: "); 
// let age_num = Number(age);

// if(age_num>=18){
//     prompt("El ususario es mayor de edad");
// } else{
//     prompt("El ususario es menor de edad");} 



//5 Una tienda online da descuentos si el cliente compra más de 3 productos. Evalúa si aplica descuento
// let amount = prompt("Ingrese la cantidad de productos: "); 
// let amount_num = Number(amount);

// if(amount_num>3){
//     prompt("Si aplica descuento");
// } else{
//     prompt("No aplica descuento");} 



//6 Un estudiante recibe una nota del 0 al 5. Crea condiciones para saber si reprueba, aprueba o tiene excelente desempeño.

// let calification = prompt("Ingrese la nota del estudiante: "); 
// let calification_num = Number(calification);
// if(calification_num>5 || calification_num<0){
//     prompt("Ingrese un numero valido");
// } else if(calification_num>4 && calification_num<=5){
//     prompt("Excelente desempeño");
//    } else if(calification_num > 3 && calification_num <=4){
//         prompt("aprobo");

//    }else if(calification_num < 3{
//         prompt("reprobo");

//    } 


//7 Un semáforo tiene tres moneyes. Dependiendo del money, se debe mostrar una acción: avanzar, detenerse o esperar.

// let money = prompt("Ingrese el money del semaforo: ");

// if (money == "Verde" || money == "verde"){
//     console.log("Puede pasar")
// } else if (money == "Amarillo" || money == "amarillo"){
//     console.log("Reduzca la velocidad")
// } else if (money == "Rojo" || money == "rojo"){
//     console.log("Detengase")
// } else {
//     console.log("Ingrese un money valido")
// }







//8 Para entrar a un torneo se debe tener entre 15 y 35 años y ser residente de Colombia. Evalúa si una persona puede participar.

// let age = prompt("Ingrese su edad: "); 
// let age_num = Number(age);
  //if(age_num<0){
    //console.log("No puede participar")
  //}


// 9 En una aplicación bancaria: o Si la cuenta tiene menos de $10.000, muestra “Saldo insuficiente”.o Si tiene entre $10.000 y $1.000.000, muestra “Saldo moderado”.o Si tiene más de $1.000.000 o tiene tarjeta premium, muestra “Clientepreferencial”.

// let money = prompt("Ingrese el dinero disponible: ");
// let money_num = Number(money);    
// if (money <10000 && money>0){
//     console.log("Saldo insuficiente")
// } else if (money>=10000 &&  money<=1000000){
//     console.log("Saldo moderado")
// } else if (money>1000000){
//     console.log("Cliente preferencial")
// } else {
//     console.log("Ingrese una cantidad valida")
// }


// 10 . Un restaurante ofrece menús dependiendo del día de la semana. Escribe una lógica que, según el día, muestre qué menú hay disponible.


// let day = prompt("Ingrese el dia: ");    



// switch(day){
//     case "lunes" || "Lunes" :
//         console.log("El plato del dia son frijoles");
//         break;
//     case "Martes" || "martes" :
//         console.log("El plato del dia es huevo con arroz");
//         break;
//     case "Miercoles" || "miercoles" :
//         console.log("El plato del dia son lentejas");
//         break;
//     case "Jueves" || "jueves" :
//         console.log("El plato del dia es sopa");
//         break;
//     case "Viernes" || "viernes" :
//         console.log("El plato del dia es pollo");
//         break;
//     default:
//         console.log("Ingrese un dia valido") 

        

// }



// 11 Evalúa si un usuario puede acceder a una oferta: • Tiene que haber iniciado sesión.• No debe tener reportes activos.• Su edad debe ser mayor a 21 años o tener membresía premium.



// let sesion = prompt("¿ya inicio sesion?, ingrese y para si n para no: "); 
//   if(sesion == "Y" || sesion == "y" ){
//     let reportes = prompt("¿Tiene reportes activos?")
//       if(reportes == "n" || sesion == "N" ){
//         let age1 = prompt("¿Ingrese su edad?")
//         let age_num = Number(age1);
//             if(age_num > 21){
//                 console.log("Puede acceder a la oferta")

//             }
//             else {
//                 console.log("Debe ser mayor a 21 años")
//             }
//         }
//         else{
//             console.log("No puede estar reportado")
//         }

//   }
//   else{
//     console.log("Debe ingresar sesion primero")
//   }









