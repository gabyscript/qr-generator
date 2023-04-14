
import QRinput from './Components/QRinput/QRinput';
import Footer from './Components/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';

library.add(fab)

function App() {  

  return (
    <div className="App">
      <QRinput />
      <Footer />
    </div>
  )
}

export default App
