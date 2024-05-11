import './ColorPicker.css'

const ColorPicker = ({ color, setColor, isDarkText ,setDarkText }) => {

  return (
    <form onSubmit={(e) => e.preventDefault()} className="ColorPicker">
      <label htmlFor="">Add color name:</label>
      <input 
      required 
      autoFocus 
      type="text" 
      onChange={e => setColor(e.target.value)} 
      value={color} placeholder='Add color name' />
      <button type='button' onClick={e => setDarkText(!isDarkText)}>Toggle Text Color</button>
    </form>
  )
}

export default ColorPicker