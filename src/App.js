import React from 'react';
import Logo from './images/malina-style-text.jpg'
import './App.css';
import Users from './controllers/Users.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} className="logo" alt="logo" />
        <div className='login'> <span > Login </span><span>/  Register </span></div>
      </header>
<main className='parent'> 
  <div className='child'>
<h1> Alero Custom Arts</h1>
</div>

</main>
<section>
<div className='box'> 
<h2>create your own art</h2>
<button ><a href='./users' >SEE MORE</a></button>
<Users />

</div>
</section>
<section>
  <div className='box'>
<h2>see existing art</h2>
<button >ORDER</button>
</div>
</section>
<nav>

  <ul>About Us
    <li>line 1</li>
    <li>line 2</li>
    <li>line 3</li>
    <li>line 4</li>
  </ul>
  <ul>For Buyers
    <li>line 1</li>
    <li>line 2</li>
    <li>line 3</li>
    <li>line 4</li>
  </ul>
  <ul>Contuct us
    <li>line 1</li>
    <li>line 2</li>
    <li>line 3</li>
    <li>line 4</li>
  </ul>
</nav>
<footer>links</footer>
    </div>
  );
}

export default App;
