import { useEffect, useState } from 'react';
import './App.css';
import ColorDisplayer from './ColorDisplayer';
import ColorPicker from './ColorPicker';

function App() {
  const [color, setColor] = useState('');
  const [isDarkText, setDarkText] = useState(true);

  console.log("Before effect")

  useEffect(() => {
    console.log("Hello")
  }, [])



  return (
    <div className="App">
      <main>
        <ColorDisplayer color={color}
        isDarkText={isDarkText}
        />
        <ColorPicker 
        color={color} 
        isDarkText={isDarkText}
        setDarkText={setDarkText}
        setColor={setColor}/>
      </main>
    </div>
  );
}

export default App;
