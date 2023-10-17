import logo from './logo.svg';
import './App.css';
import ColorBox from './components/ColorBox';
import ColorBox2 from './components/ColorBox2';
import ColorBox3 from './components/ColorBox3';
import ColorBox4 from './components/ColorBox4';
import AddBoxButton from './components/AddBoxButton';

const App = () => {
  return (
    <>
    <div id="boxes" style= {{display: 'none'}}>
        <ColorBox/>
        <ColorBox2/>
        <ColorBox3/>
        <ColorBox4/>
    </div>
    <AddBoxButton/>
    </>
  )
}


export default App