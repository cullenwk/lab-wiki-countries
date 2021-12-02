import logo from './logo.svg';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router';


 // src/App.js
function App() {

return  (

<div>
<Navbar />
<div style={{display: 'flex'}} >
  
  <CountriesList />
  <Routes>
    <Route path="/countries/:alpha3Code" element={<CountryDetails  />} />
  </Routes>



</div>
</div>
)
}

export  default App;


