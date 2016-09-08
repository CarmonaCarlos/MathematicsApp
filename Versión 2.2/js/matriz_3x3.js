var borrar= document.getElementById('limpiar'); //Se guarda en la variable borrar lo que se obtiene del elemento con id limpiar
//al hacer clic en el boton borrar todo se ejecuta la sigunte funcion 
borrar.addEventListener("click",function (){
    $('.resultadoFinal').slideUp(100);// Se oculta la caja con la clase .resultadoFinal con una duracion de 100 milisegundos
    //Se obtinen las variables de los input y las guardamos en txt1 .... txt9 para luego poder aplicar color en este caso sera gray
    var txt1 = document.getElementById("A");
    var txt2 = document.getElementById("B");
    var txt3 = document.getElementById("C");
    var txt4 = document.getElementById("D");
    var txt5 = document.getElementById("E");
    var txt6 = document.getElementById("F");
    var txt7 = document.getElementById("G");
    var txt8 = document.getElementById("H");
    var txt9 = document.getElementById("I");
    //Se termina de obtener variables de los input

    //Se aplica color al borde de las cajas de los input 
    txt1.style.border = "1px solid gray";
    txt2.style.border = "1px solid gray";
    txt3.style.border = "1px solid gray";
    txt4.style.border = "1px solid gray";
    txt5.style.border = "1px solid gray";
    txt6.style.border = "1px solid gray";
    txt7.style.border = "1px solid gray";
    txt8.style.border = "1px solid gray";
    txt9.style.border = "1px solid gray";
    //Se termina de aplicar color a los bordes de las cajas de los input 
});
//Termina funcion al hacer clic en borrar todo

var botonx= document.getElementById('boton');
botonx.addEventListener("click",function (ev){
    ev.preventDefault();
    var txt1 = document.getElementById("A");
    var txt2 = document.getElementById("B");
    var txt3 = document.getElementById("C");
    var txt4 = document.getElementById("D");
    var txt5 = document.getElementById("E");
    var txt6 = document.getElementById("F");
    var txt7 = document.getElementById("G");
    var txt8 = document.getElementById("H");
    var txt9 = document.getElementById("I");
    txt1.style.border = "1px solid gray";
    txt2.style.border = "1px solid gray";
    txt3.style.border = "1px solid gray";
    txt4.style.border = "1px solid gray";
    txt5.style.border = "1px solid gray";
    txt6.style.border = "1px solid gray";
    txt7.style.border = "1px solid gray";
    txt8.style.border = "1px solid gray";
    txt9.style.border = "1px solid gray";
    var a = function (txt1){
        if(txt1.value== "" || txt1.value== null) {
            txt1.style.border = "2px solid red";
        }
    }
    var b = function (txt2){
        if(txt2.value== "" || txt2.value== null) {
            txt2.style.border = "2px solid red";
        } 
    }
    var c = function (txt3){
        if(txt3.value== "" || txt3.value== null) {
            txt3.style.border = "2px solid red";
        }
    }
    var d = function (txt4){
        if(txt4.value== "" || txt4.value== null) {
            txt4.style.border = "2px solid red";
        }
    }
    var e = function (txt5){
        if(txt5.value== "" || txt5.value== null) {
            txt5.style.border = "2px solid red";
        }
    }
    var f = function (txt6){
        if(txt6.value== "" || txt6.value== null) {
            txt6.style.border = "2px solid red";
        }
    }
    var g = function (txt7){
        if(txt7.value== "" || txt7.value== null) {
            txt7.style.border = "2px solid red";
        }
    }
    var h = function (txt8){
        if(txt8.value== "" || txt8.value== null) {
            txt8.style.border = "2px solid red";
        }
    }
    var i = function (txt9){
        if(txt9.value== "" || txt9.value== null) {
            txt9.style.border = "2px solid red";
        }
    }
    function mostrarAlerta() {
        $('.resultadoFinal').slideDown(100);
        var comprobar = document.getElementById('resultado');
        comprobar.innerHTML = "¡Hay elementos faltantes!"
    };
    if((txt1.value== "" || txt1.value== null)||(txt2.value== "" || txt2.value== null)||(txt3.value== "" || txt3.value== null)||(txt4.value== "" || txt4.value== null)||(txt5.value== "" || txt5.value== null)||(txt6.value== "" || txt6.value== null)||(txt7.value== "" || txt7.value== null)||(txt8.value== "" || txt8.value== null)||(txt9.value== "" || txt9.value== null)){
        mostrarAlerta();
        a(txt1);
        b(txt2);
        c(txt3);
        d(txt4);
        e(txt5);
        f(txt6);
        g(txt7);
        h(txt8);
        i(txt9);
    }else{
        var n1=document.form1.numero1.value;
        var n2=document.form1.numero2.value;
        var n3=document.form1.numero3.value;
        var n4=document.form1.numero4.value;
        var n5=document.form1.numero5.value;
        var n6=document.form1.numero6.value;
        var n7=document.form1.numero7.value;
        var n8=document.form1.numero8.value;
        var n9=document.form1.numero9.value;
        var d1=(n1*n5*n9);
        var d2=(n2*n6*n7);
        var d3=(n4*n8*n3);
        var e1=(n3*n5*n7)*-1;
        var e2=(n8*n6*n1)*-1;
        var e3=(n4*n2*n9)*-1;
        var res=(d1+d2+d3)+(e1+e2+e3);
        function mostrarResultado(){
            $('.resultadoFinal').slideDown(100);
        }
        mostrarResultado();
        var resultadoFinal = document.getElementById('resultado');
        resultadoFinal.innerHTML = "Determinante = " + res.toFixed(3);
    }
});        

