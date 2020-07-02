//1 aula
//html  acrescentar o id nas tag HTML para realizar a manipulação com js 
<input  id="quantidade" class="quantidade" value="0" type="number" name="calabresa">

//js
 <script> getElementById("quantidade").value = 1 </script>
// altera o value 0 para 1

//seleciona o campo a ser modificado pelo ID
var input = document.getElementById('#quantidade');
















//-------------------botão de somar -------------//
//busca o botão no html através da Classe
   var botoesSoma = document.querySelectorAll(".btn-soma");

   console.log(botoesSoma);
//adiciona um evento após o clique do botão, e adiciona uma função
   botoesSoma.addEventListener('click', adicionar);
//Função definida abaixo, 1+1;
   function adicionar(){    
//busca a classe item mais próxima do botão soma  na estrutura html
       var item = botoesSoma.closest('.item');
//busca dentro da estrutura item através da classe quantidade   
       var input = item.querySelector('.quantidade');
// pega o elemento acima e adiciona 1+1   
       input.value++;
//buscar o valor na função pegapreço
       var preco = pegaPrecoItem(item);
// efetuar a função adicionaAoTotal  
       adicionaAoTotal(preco);
   }




//-------------------botão de subtrair -------------//
//busca o botão no html através do ID
   var botoesSubtrai = document.querySelectorAll(".btn-subtrai");

//adiciona um evento após o clique do botão, e adiciona uma função
   botoesSubtrai.addEventListener('click', subtrair);

//Função definida abaixo, 1-1;
   function subtrair(){

       var item = botoesSoma.closest('.item');
   
       var input = item.querySelector('.quantidade');
  
         if(input.value > 0){
            input.value--;
            var preco = pegaPrecoItem(item);
            adicionaAoTotal(-preco);
             }
            else
            {
               console.log(input.value); 
            }
   
         }



//Funções auxiliares
//buscar o valor fixado na página html com textContent e formatar como valor numérico
function pegaPrecoItem(item){
   //Encontrar a classe preco-item dentro da estrutura   
            var precoItem = item.querySelectorAll('.preco-item');
   //retornar o valor string pré-fixado na tag e converter em numérico   
           return Number(precoItem.textContent);
     }
  
     function adicionaAoTotal(preco){
   //buscar o ID total no documento inteiro   
         var elementoTotal = document.querySelector("#total");
  
  //efetua a soma do preço fixado por ele mesmo e inserir no elemento contemplando o ID total    
        elementoTotal.textContent = preco + Number(elementoTotal.textContent);
     }
  
  
