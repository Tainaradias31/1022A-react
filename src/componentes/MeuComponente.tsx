//Faça um componente um faça um retangulo da largura da tela 
//por 200px

//crie uma variavel com let no js que contenha o valor " Meu componente"
//crie uma div no componente que dentro dela mostre um <p> 
//contendo a variavel.

function MeuComponente() {
    let MeuComp = " Meu Componente"
   return(

    <>
    <div className="Retangulo"><p>{MeuComp}</p></div>
    </>
    )
  }
  export default MeuComponente