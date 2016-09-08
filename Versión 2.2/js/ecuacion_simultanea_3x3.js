var borrar= document.getElementById('limpiar')
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
  function mostrarAlerta() {
    $('.resultadoFinal').slideDown(100);
    var comprobar = document.getElementById('resultado');
    comprobar.innerHTML = "¡Hay elementos faltantes!"
  };
  if((txt1.value== "" || txt1.value== null)||(txt2.value== "" || txt2.value== null)||(txt3.value== "" || txt3.value== null)||(txt4.value== "" || txt4.value== null)||(txt5.value== "" || txt5.value== null)||(txt6.value== "" || txt6.value== null)||(txt7.value== "" || txt7.value== null)||(txt8.value== "" || txt8.value== null)||(txt9.value== "" || txt9.value== null)||(txt10.value== "" || txt10.value== null)||(txt11.value== "" || txt11.value== null)||(txt12.value== "" || txt12.value== null)) {
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
    var t1=document.form1.termino1.value;
    var t2=document.form1.termino2.value;
    var t3=document.form1.termino3.value;
    var d1= (n1*n5*n9)+(n2*n6*n7)+(n4*n8*n3)+(n3*n5*n7*-1)+(n8*n6*n1*-1)+(n4*n2*n9*-1);
    var d2= (t1*n5*n9)+(n2*n6*t3)+(t2*n8*n3)+(n3*n5*t3*-1)+(n8*n6*t1*-1)+(t2*n2*n9*-1);
    var d3= (n1*t2*n9)+(t1*n6*n7)+(n4*t3*n3)+(n3*t2*n7*-1)+(t3*n6*n1*-1)+(n4*t1*n9*-1);
    var d4= (n1*n5*t3)+(n2*t2*n7)+(n4*n8*t1)+(t1*n5*n7*-1)+(n8*t2*n1*-1)+(n4*n2*t3*-1);
    var x= d2/d1;
    var y= d3/d1;
    var z= d4/d1;
    function mostrarResultado(){
      $('.resultadoFinal').slideDown(100);
    };
    mostrarResultado();
    var resultadoFinal = document.getElementById('resultado');
    resultadoFinal.innerHTML = 'X = ' + x.toFixed(3) + '<br/>' + 'Y = '+ y.toFixed(3) + '<br/>' + 'Z = ' + z.toFixed(3);
  }
});
