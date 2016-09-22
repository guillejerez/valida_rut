function main(){
    var inputRut = document.getElementById('txtRut').value;
    procesaRut(inputRut);
}

function modulo11(rutSinDV) {
  var totalCiclo = rutSinDV.length;
  var pivote = 7;
  var sumandos = 0;

  for (var i = totalCiclo; i > 0 ; i--) {
    if (pivote<2) {
      pivote = 7;
    }
    sumandos+=(rutSinDV.substring(i-1,i) * pivote);
  }

  var digito = 11 - (sumandos % 11);
  if(digito == 10)
    digito = "K";
  console.log(digito);
  return digito;
}

function compararDV(rutSinDV, dv) {
  var res = modulo11(rutSinDV);
  return (res == dv)
}

function procesaRut(rut){
  dv = rut.substring(rut.length -1,rut.length);         /
  console.log(dv);
  var rutSinDV = rut.substring(0,rut.length - 2);

  if(rut.indexOf('.')>-1)
      {
          //console.log("si tiene puntos");
          while(rutSinDV.indexOf('.')>-1){    //quitando los puntos del string
              rutSinDV = rutSinDV.replace('.',"");
          }
      }else{
          //console.log("no tiene puntos");

      }// fin del If
    var resultado = compararDV(rutSinDV, dv);
    alert(resultado);
}


main();
