function NotaMedia() {
    var notadoPrimeiroBimestre = document.getElementById("Nota1").value;
    var notadoSegundoBimestre = document.getElementById("Nota2").value;
    var notadoTerceiroBimestre = document.getElementById("Nota3").value;
    var notadoQuartoBimestre = document.getElementById("Nota4").value;
    notadoPrimeiroBimestre = parseFloat(notadoPrimeiroBimestre);
    notadoSegundoBimestre = parseFloat(notadoSegundoBimestre);
    notadoTerceiroBimestre = parseFloat(notadoTerceiroBimestre);
    notadoQuartoBimestre = parseFloat(notadoQuartoBimestre);

    
    var nota1 = notadoPrimeiroBimestre.value;
    var nota2 = notadoSegundoBimestre.value;
    var nota3 = notadoTerceiroBimestre.value;
    var nota4 = notadoQuartoBimestre.value;

    var notaFinal = (notadoPrimeiroBimestre + notadoSegundoBimestre + notadoTerceiroBimestre 
        + notadoQuartoBimestre) / 4
    var notaFixada = notaFinal.toFixed(1)
   
    document.getElementById('alert').innerHTML = 'Sua Média é: ' + notaFixada;

} 