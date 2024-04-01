/*FUNÇÕES

Vamos nos aprofundar um pouco mais em funções agora:

As funções podem possuir: 

CHAMADA: Toda função precisa de uma chamada.  //Sua mãe te pede pra comprar leite, ou você toda quarta de manhã tem que ir comprar leite, o disparo não precisa ser verbal, pode ser um relógio por exemplo, ela pode ser automatizada. 

PARAMETRO: Chamamos de entrada. //Você não pode ir a mercearia comprar sem saber oque quer que seria o leite e sem dinheiro, sem uma entrada. Nesse caso temos dois parametros o dinheiro, e oque sua mãe queria, que é o leite.

AÇÃO: O caminho para a funcionalidade acontecer. //O caminho que faço para pegar o leite, ir a mercearia, o processo todo que acontece la dentro, tudo que temos que fazer para conseguir o leite.

RETORNO: Resultado //Quando chega em casa e entrega o leite para sua mãe.






//NEM TODA FUNÇÃO TEM PARAMETROS E RETORNOS. NÃO É OBRIGATÓRIO. Mas agora vamos tratar disso sim, é algo muito importante para os estudos.

//BOTA NA CABEÇA ESSA CENA: TUA MAE FEZ UMA CHAMADA PASSOU O PARAMETRO PARA VOCÊ, VOCÊ FOI LÁ EXECUTOU A AÇÃO E DEU O RETORNO. Isso é função! Função na vida real.


Revisando oque são funções:

1 - São ações executadas assim que são chamadas ou em decorrencia de algum evento. //Você vai executar uma ação quando sua mãe chamar ou acontecer algum evento, sei lá todo dia que chuver você tem que tirar a roupa do varal, podem acontecer automaticamente ou precisando de uma chamada.

2 - Uma função pode receber parâmetros e retornar um resultado. // No nosso caso o parametro era o dinheiro e o resultado era a garrafa de leite.


Quando usamos funções na aula 10 não tinha parametros e nem retorno, era assim:

funcion ação(){

}

Vamos passar a ver assim agora:

funcion ação(parametro){
    return res
}
ação (5) //chamada 

*/ 

//IDENTIFICAR SE UM NUMERO É PAR OU IMPAR

function parimp(n){
    if (n%2==0){
      return 'par'
    }else{
        return 'impar'
    }

}
//Note que sem a chamada o código não faz nada, para funcionar:

//Podemos fazer a chamada assim:

/* 
let res = parimp(11) //chamada

console.log (res) //saida
*/

//Ou assim que é mais indicado em uma linha só:

console.log(parimp(11)) 

//chamada

//Na chamada o n ta valendo 11, é o meu parametro, ela é puxada para o n la em cima. Na proxima linha o if(ação) é feita a comparação, se o resto for 0 ele vai fazer o return par se for 1 vai fazer o return impar. E esse return impar vai vir para dentro de res, se eu mandar mostrar res na tela, a saída vai ser impar. 

//Criamos uma função que chamamos de parimp e ela recebe um parametro, que é um numero (n).

//E dentro dele vamos verificar se esse n que ele recebeu como parametro é par ou impar.

//So verificar se ele é divisivel por 2 verificando o resto %, se for 0 ele é divisivel e par, e ser for 1 é impar.