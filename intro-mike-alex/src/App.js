import logo from './logo.svg';
import './App.css';
import Header from './Heading';
import Header2 from './Header2';
import Header3 from './Header3';
import Body from './Body';
import Profile from './Profile';
import Favlist from './FavList';
import Footer from './Footer';
import Header4 from './Header4';
function App() {
  return (
    <>
    <div className="App">
      <Header/>
      <Header2 />
      <Body />
      <Header3 />
      <Profile />
      <Header4 />
      <Favlist />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
           <Footer />
          Learn React
        </a>
    </div>
    </>
  )
}

export default App;
