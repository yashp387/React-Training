import cat from './assets/cat.jpg';
import svgImg from './assets/svgimg.svg';
import './App.css';

function App() {
  return  (
    <div>
      <h1>Image and Svg image demo</h1>
      <img className='cat' src={cat} alt="cat" />
      <img className='svgImg' src={svgImg} alt="svgImage" />
    </div>
  )
}

export default App
