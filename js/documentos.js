function search(){
  var cpf = document.getElementById('inputCPF').value;
  console.log(cpf);
  validationCPF(cpf);
}

function back(){
  document.getElementById('busca').removeAttribute("class", "ocultar");
  document.getElementById('resultado').setAttribute("class", "ocultar");
  document.getElementById('inputCPF').value = '';
}

function validationCPF(cpfValue){
  document.getElementById('busca').setAttribute("class", "ocultar");
  document.getElementById('resultado').removeAttribute("class", "ocultar");
  document.getElementById('tituloDocumentos').innerHTML = 'Certificados de: '+cpfValue;


}
