import C from './utils/c++.png'
import './App.css';

function App() {
  return (
    <body class='dark'>
      <div className='justify-center items-center flex'>
        <h1 className="text-4xl font-extrabold  text-blue-600">
          ¡Bienvenido a mi portafolio!
        </h1>
        <img className="w-32 h-32" src={C} alt="C++"/>
      </div>
    </body>
    
  );
}

export default App;
