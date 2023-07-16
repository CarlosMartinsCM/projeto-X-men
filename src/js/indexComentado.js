/* JavaScript é uma linguagem de programação muito utilizada para iterações em navegadores. Sempre precisamos linkar o javascript com o projeto, geralmente no
arquivo index.html, a diferença é que ele sempre é posto no final, entre o fechamento da tag body e fechamento da tag html.
*/

// Essa linha de código cria um alerta básico quando a página é carregada com o conteúdo.
//alert('Olá');

// ================ PROJETO XMEN ================================

/* Para iniciarmos destacamos a importancia de se saber o real objetivo do código, 
        ou seja, o que queremos alcançar com esse código.
    
    Podemos usar comentarios para nos guiar em cada etapa do código.

    Segue o cronograma do projeto.

_________________________________________________________________________________________

  O que precisamos fazer? - quando passar o mouse em cima do personagem na lista temos
  que adicionar a borda azul de seleção na imagem pequena do personagem e mostrar a
  imagen, o nome e o texto grande do personagem que está selecionado

  OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos
  seleciona-lo
    passo 1 - pegar os personagens no js pra poder verificar quando o usuario
    passar o mouse em cima de um deles.
    passo 2 - adicionar a classe selecionado no personagem que o usuario passar o
    cursor do mouse.
    passo 3 - verificar se já existe um personagem selecionado, se sim, devemos
    remover a seleção dele

  OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a
  imagem, o nome e a descrição do personagem grande.
    passo 1 - pegar o elemento do personagem grande pra adicionar as informações
    nele
    passo 2 - alterar a imagen do personagem grande
    passo 3 - alterar o nome do personagem grande
    passo 4 - alterar a descrição do personagem grande
*/

// OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos
//   seleciona-lo

//     passo 1 - pegar os personagens no js pra poder verificar quando o usuario
//     passar o mouse em cima de um deles.

// === Passo 1 ===
// Pegar os elementos que o usuário passar o mouse em cima. Com o evento de mouse enter.


// console.log é uma forma apresentar informações na aba de console do navegador.
//console.log(document)


// com o document temos uma representação do documento html no console do navegador.

/* quando utilizamos o . (ponto) estamos acessando algo que está dentro do document,
    podem ser propriedades ou metodos do documento.

    Propriedades: Seriam uma caracteristica do documento, por exemplo, nome da página.

    Métodos: Método ou função é alguma coisa que gera uma ação, por exemplo, o aler, que gera um alerta para o usuário.
    document.getElementById(aqui passamos o id que será selecionado pelo metodo)
*/

// Aqui conseguimos mostrar no console log, o elemento selecionado pelo id, no caso
//  o ciclope.
// Temos então uma representação do li do ciclope no console do navegador
// console.log(document.getElementById('ciclope'));

// Criamos variáveis com o const para indicar que o valor da variavel nunca muda.

// Variável que guarda o elemento
//const itemCiclope = document.getElementById('ciclope') // Representação do li.

//Ao invés de buscar um por um, podemos usar o querySelectorAll para buscar todos
//document.querySelectorAll('.personagem') // Representação de todas as li's
// Mostrando no navegador
//console.log(document.querySelectorAll('.personagem'))

const personagem = document.querySelectorAll('.personagem');
//console.log(personagem); Mostrando no navegador com console log

// passo 2 - adicionar a classe selecionado no personagem que o usuario passar o

// forEach = para cada
// Aqui montamos um laço para percorrer a lista de personagens
// O laço percorre a lista de personagens e adidiona a classe 'selecionado'

personagem.forEach(personagem => {
  //console.log(personagem);]
  personagem.addEventListener('mouseenter', () => {

    //Essa alteração foi feita para melhorar a usabilidade de quem acessa o site pelo celular.
    if(window.innerWidth < 450){
      window.scrollTo({top: 0, behavior: 'smooth'});
    }

    // passo 3 - verificar se já existe um personagem selecionado, se sim, devemos
    // remover a seleção dele
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');

    //console.log('Mouse capturado');
    personagem.classList.add('selecionado');


    //       OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a
    //                    imagem, o nome e a descrição do personagem grande.

    // passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele



    // Nesta linha pegamos o elemento do personagem grande através da classe personagem-grande com o uso so queryselector.
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    // console.log(imagemPersonagemGrande); Mostrado no log do navegador

    // passo 2 - alterar a imagen do personagem grande

    //Nesta linha conseguimos acessar os atributos do personagem através do id. Posteriormente o id é enviado para a outra parte do codigo, assim quando passarmos o mouse encima do personagem ele mostrara a imagem grande correspondente.

    const idPersonagem = personagem.attributes.id.value;
    // console.log(idPersonagem);

    //Aqui conseguimos alterar os atributos da imagem, com o src conseguimos alterar a imagem, buscando a imagem no projeto e adicionando ao personagem selecionado. No primeiro exemplo, ele adiciona a imagem da vampira, estatica, na segunda linha usamos a constante id personagem, id esse que possui o mesmo nome da imagem, e conseguimos adicinar a imagem do personagem selecionado pelo id enviado pela linha anterior.
    imagemPersonagemGrande.src = "./src/images/card-vampira.png";
    imagemPersonagemGrande.src = `./src/images/card-${idPersonagem}.png`;

    // passo 3 - alterar o nome do personagem grande

    // Aqui pegamos o nome do personagem através do id
    const nomePersonagem = document.getElementById('nome-personagem');
    // Aqui alteramos o nome do personagem com o innertext, adicionamos ao html o atributo data-name, que então, através do nome que estiver contido neste atributo, será carregado na página com o nome correto
    nomePersonagem.innerText = personagem.getAttribute('data-name');

    // passo 4 - alterar a descrição do personagem grande
  
    // Aqui pegamos o elemento que iremos mudar a descrição.
    const descricaoPersonagem = document.getElementById('descricao-personagem')
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');


  })


})

