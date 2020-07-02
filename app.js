//-------------------botão de somar -------------//
//busca o botão no html através da Classe
   var botoesSoma = document.querySelectorAll(".btn-soma");

   for(let botao of botoesSoma)
   {
      botao.addEventListener('click', adicionar);

      function adicionar(){    
   
          var item = botao.closest('.item');
   
          var input = item.querySelector('.quantidade');
   
          input.value++;
   
          var preco = pegaPrecoItem(item);
   
          adicionaAoTotal(preco);
      }

   }


//-------------------botão de subtrair -------------//
//busca o botão no html através da classe
   var botoesSubtrai = document.querySelectorAll(".btn-subtrai");

   for(let botao of botoesSubtrai)
   
   {
      botao.addEventListener('click', subtrair);

      function subtrair(){
   
          var item = botao.closest('.item');
      
          var input = item.querySelector('.quantidade');
     
            if(input.value > 0)
            {
               input.value--;
               var preco = pegaPrecoItem(item);
               adicionaAoTotal(-preco);
            }
            else
            {
               console.log(input.value); 
            }      
      }
   }
   


//Função auxiliar
function pegaPrecoItem(item){

   var precoItem = item.querySelector('.preco-item');

   return Number(precoItem.textContent);
}

//Função auxiliar
function adicionaAoTotal(preco){

   var elementoTotal = document.querySelector("#total");

   elementoTotal.textContent = preco + Number(elementoTotal.textContent);
}



  

//validação do formulário preenchido
var FormPedido = document.forms.pedido;

FormPedido.addEventListener('submit', function(event){

      var contador = 0;

   var inputs = FormPedido.querySelectorAll("input.quantidade");

   for(let input of inputs)
   {
      if(input.value > 0)
      {
         contador++;
         
      }      
   }
   if(contador == 0)
   {
      alert("Deve ter pelo menos 1 pizza no pedido");
      event.preventDefault();
   }
});



