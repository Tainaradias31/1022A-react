import'./App.css'
import MeuComponente from './componentes/MeuComponente'

function App() {
  let nome = "Clara"
  let sobrenome = "elis"
 return (
  <>
  <MeuComponente/>
<h1 className="meu-nome"> olá gata sou:{nome} {sobrenome}</h1>
<h1>rs </h1>
</>
 )//JSX- Javiscript XML
}
export default App