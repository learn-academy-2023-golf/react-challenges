import './App.css';
import DiceTray from './components/dicetray';
import RollTracker from './components/RollTracker';

const App = () => {
  return (
    <>
      <h1>Dice Roller</h1>
      <div className = "dicecontrol">
      <DiceTray /><RollTracker />
      </div>
    </>
  )
}

export default App;
