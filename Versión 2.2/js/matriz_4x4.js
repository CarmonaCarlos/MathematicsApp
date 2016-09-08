var borrar= document.getElementById('limpiar');
borrar.addEventListener("click",function (){
    $('.resultadoFinal').slideUp(100);
    var txt1 = document.getElementById("A");
    var txt2 = document.getElementById("B");
    var txt3 = document.getElementById("C");
    var txt4 = document.getElementById("D");
    var txt5 = document.getElementById("E");
    var txt6 = document.getElementById("F");
    var txt7 = document.getElementById("G");
    var txt8 = document.getElementById("H");
    var txt9 = document.getElementById("I");
    var txt10 = document.getElementById("J");
    var txt11 = document.getElementById("K");
    var txt12 = document.getElementById("L");
    var txt13 = document.getElementById("M");
    var txt14 = document.getElementById("N");
    var txt15 = document.getElementById("O");
    var txt16 = document.getElementById("P");
    txt1.style.border = "1px solid gray";
    txt2.style.border = "1px solid gray";
    txt3.style.border = "1px solid gray";
    txt4.style.border = "1px solid gray";
    txt5.style.border = "1px solid gray";
    txt6.style.border = "1px solid gray";
    txt7.style.border = "1px solid gray";
    txt8.style.border = "1px solid gray";
    txt9.style.border = "1px solid gray";
    txt10.style.border = "1px solid gray";
    txt11.style.border = "1px solid gray";
    txt12.style.border = "1px solid gray";
    txt13.style.border = "1px solid gray";
    txt14.style.border = "1px solid gray";
    txt15.style.border = "1px solid gray";
    txt16.style.border = "1px solid gray";
});
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
    var txt10 = document.getElementById("J");
    var txt11 = document.getElementById("K");
    var txt12 = document.getElementById("L");
    var txt13 = document.getElementById("M");
    var txt14 = document.getElementById("N");
    var txt15 = document.getElementById("O");
    var txt16 = document.getElementById("P");
    txt1.style.border = "1px solid gray";
    txt2.style.border = "1px solid gray";
    txt3.style.border = "1px solid gray";
    txt4.style.border = "1px solid gray";
    txt5.style.border = "1px solid gray";
    txt6.style.border = "1px solid gray";
    txt7.style.border = "1px solid gray";
    txt8.style.border = "1px solid gray";
    txt9.style.border = "1px solid gray";
    txt10.style.border = "1px solid gray";
    txt11.style.border = "1px solid gray";
    txt12.style.border = "1px solid gray";
    txt13.style.border = "1px solid gray";
    txt14.style.border = "1px solid gray";
    txt15.style.border = "1px solid gray";
    txt16.style.border = "1px solid gray";
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
          var j = function (txt10){
        if(txt10.value== "" || txt10.value== null) {
            txt10.style.border = "2px solid red";
        }
    }
    var k = function (txt11){
        if(txt11.value== "" || txt11.value== null) {
            txt11.style.border = "2px solid red";
        }
    }
    var l = function (txt12){
        if(txt12.value== "" || txt12.value== null) {
            txt12.style.border = "2px solid red";
        }
    }
    var m = function (txt13){
        if(txt13.value== "" || txt13.value== null) {
            txt13.style.border = "2px solid red";
        }
    }
    var n = function (txt14){
        if(txt14.value== "" || txt14.value== null) {
            txt14.style.border = "2px solid red";
        }
    }
     var o = function (txt15){
        if(txt15.value== "" || txt15.value== null) {
            txt15.style.border = "2px solid red";
        }
    }
    var p = function (txt16){
        if(txt16.value== "" || txt16.value== null) {
            txt16.style.border = "2px solid red";
        }
    }
    function mostrarAlerta() {
        $('.resultadoFinal').slideDown(100);
        var comprobar = document.getElementById('resultado');
        comprobar.innerHTML = "¡Hay elementos faltantes!"
     };
    if((txt1.value== "" || txt1.value== null)||(txt2.value== "" || txt2.value== null)||(txt3.value== "" || txt3.value== null)||(txt4.value== "" || txt4.value== null)||(txt5.value== "" || txt5.value== null)||(txt6.value== "" || txt6.value== null)||(txt7.value== "" || txt7.value== null)||(txt8.value== "" || txt8.value== null)||(txt9.value== "" || txt9.value== null)||(txt10.value== "" || txt10.value== null)||(txt11.value== "" || txt11.value== null)||(txt12.value== "" || txt12.value== null)||(txt13.value== "" || txt13.value== null)||(txt14.value== "" || txt14.value== null)||(txt15.value== "" || txt15.value== null)||(txt16.value== "" || txt16.value== null)){
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
        j(txt10);
        k(txt11);
        l(txt12);
        m(txt13);
        n(txt14);
        o(txt15);
        p(txt16);
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
        var n10=document.form1.numero10.value;
        var n11=document.form1.numero11.value;
        var n12=document.form1.numero12.value;
        var n13=document.form1.numero13.value;
        var n14=document.form1.numero14.value;
        var n15=document.form1.numero15.value;
        var n16=document.form1.numero16.value;
        var a=((n6*n11*n16)+(n7*n12*n14)+(n10*n15*n8)+(n8*n11*n14*-1)+(n15*n12*n6*-1)+(n10*n7*n16*-1))*(n1);
        var b=((n5*n11*n16)+(n7*n12*n13)+(n9*n15*n8)+(n8*n11*n13*-1)+(n15*n12*n5*-1)+(n9*n7*n16*-1))*(n2*-1);
        var c=((n5*n10*n16)+(n6*n12*n13)+(n9*n14*n8)+(n8*n10*n13*-1)+(n14*n12*n5*-1)+(n9*n6*n16*-1))*(n3);
        var d=((n5*n10*n15)+(n6*n11*n13)+(n9*n14*n7)+(n7*n10*n13*-1)+(n14*n11*n5*-1)+(n9*n6*n15*-1))*(n4*-1);
        var res=(a+b+c+d);
        function mostrarResultado(){
            $('.resultadoFinal').slideDown(100);
        }
        mostrarResultado();
        var resultadoFinal = document.getElementById('resultado');
        resultadoFinal.innerHTML = "Determinante = " + res.toFixed(3);
    }
});       

