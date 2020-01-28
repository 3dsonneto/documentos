function search(){
  var cpf = document.getElementById('inputCPF').value;
  console.log(cpf);
  validationCPF(cpf);
}
function next(cpfValue){
  document.getElementById('busca').setAttribute("class", "ocultar");
  document.getElementById('resultado').removeAttribute("class", "ocultar");
  document.getElementById('tituloDocumentos').innerHTML = 'Certificados de: '+cpfValue;
}

function back(){
  document.getElementById('busca').removeAttribute("class", "ocultar");
  document.getElementById('resultado').setAttribute("class", "ocultar");
  document.getElementById('inputCPF').value = '';
}

function validationCPF(cpfValue){

  var storage = firebase.storage();
  // Retorna uma promise que será processada
  storage.ref().child(cpfValue).listAll().then(function(todosArquivos){
    if(todosArquivos.items.length >= 1){
      next(cpfValue);
    } else {
      alert('CPF não cadastrado')
    }
  })
  .catch(function(error){
    console.log('ERRO', error);
  });
}

