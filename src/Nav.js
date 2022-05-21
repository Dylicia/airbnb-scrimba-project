import React from 'react';
import './index.css';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function Nav(){
  return (
    <div className="App">
      <nav className='navbar'>
        <img src={process.env.PUBLIC_URL + '/logo.png'} className='app_logo' alt='logo'/> 
      </nav>
  </div>
  );
}
export default Nav;
