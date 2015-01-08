var borrar= document.getElementById('limpiar');
borrar.addEventListener("click",function (){
$('.resultadoFinal').slideUp(100); 
var txt1 = document.getElementById("A");
var txt2 = document.getElementById("B");
var txt3 = document.getElementById("C");
var txt4 = document.getElementById("D");
txt1.style.border = "1px solid gray";
txt2.style.border = "1px solid gray";
txt3.style.border = "1px solid gray";
txt4.style.border = "1px solid gray";
});
var botonx = document.getElementById('boton');
botonx.addEventListener("click",function (ev){
    ev.preventDefault();
    var txt1 = document.getElementById("A");
    var txt2 = document.getElementById("B");
    var txt3 = document.getElementById("C");
    var txt4 = document.getElementById("D");
    txt1.style.border = "1px solid gray";
    txt2.style.border = "1px solid gray";
    txt3.style.border = "1px solid gray";
    txt4.style.border = "1px solid gray";
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
    function mostrarAlerta() {
        //navigator.vibrate(200);
        $('.resultadoFinal').slideDown(100);
        var comprobar = document.getElementById('resultado');
        comprobar.innerHTML = "¡Hay elementos faltantes!"
    };
    if((txt1.value== "" || txt1.value== null)||(txt2.value== "" || txt2.value== null)||(txt3.value== "" || txt3.value== null)||(txt4.value== "" || txt4.value== null)){
        mostrarAlerta();
        a(txt1);
        b(txt2);
        c(txt3);
        d(txt4);
    }else{
        var n1=document.form1.numero1.value;
        var n2=document.form1.numero2.value;
        var n3=document.form1.numero3.value;
        var n4=document.form1.numero4.value;
        var res= ((n1)*(n4));
        var res2= ((n2)*(n3));
        var n= res2*-1;
        var fin= res+n;
        //alert('Determinante = '+fin.toFixed(3));
        function mostrarResultado(){
            $('.resultadoFinal').slideDown(100);
        }
        mostrarResultado();
        var resultadoFinal = document.getElementById('resultado');
        resultadoFinal.innerHTML = "Determinante = " + fin.toFixed(3);
    }
});