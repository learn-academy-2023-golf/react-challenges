import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Profile from './components/Profile'
import Favorite from './components/Favorite'
import Footer from './components/Footer'
import Music from './components/Music'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Profile />
      <img src="https://images.vexels.com/media/users/3/259068/isolated/preview/3505dabf5402b90ef63641725d54b5c7-pumpkin-halloween-icon.png" />
      <Favorite />
      <br></br>
      <Music />
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
