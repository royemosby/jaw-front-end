import logo from './wrangler.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header bg-black">
        <img src={logo} className="App-logo" alt="logo" />
        <p className=" underline">Edit {process.env.REACT_APP_API_URL} and save to reload.</p>
        <a
          className="App-link"
          href="https://www.freepik.com/vectors/bear-head"
          target="_blank"
          rel="noopener noreferrer">
          Bear head vector created by dgim-studio
        </a>
      </header>
    </div>
  )
}

export default App
