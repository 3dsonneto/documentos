function search(){
  var cpf = document.getElementById('inputCPF').value;
  console.log(cpf);
  validationCPF(cpf);
}

function validationCPF(cpfValue){
  document.getElementById('tituloDocumentos').innerHTML = 'Certificados de: '+cpfValue;


}
