import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([
    {
        id: 1,
        checked: true,
        item: "One half pound bag of Cocoa Covered Almonds Unsalted"
    },
    {
        id: 2,
        checked: false,
        item: "Item 2"
    },
    {
        id: 3,
        checked: false,
        item: "Item 3"
    }
]);



  return (
    <div className="App">
      <Header title="Grocery List"></Header>
      <Main items={items} setItems={setItems}></Main>
      <Footer length={items.length}></Footer>
    </div>
  );
}

export default App;
