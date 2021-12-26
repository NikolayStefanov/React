import { Route, Routes } from 'react-router-dom'

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';

function App() {
  return (
    <div className="container">
      <Header/>
        <Routes>
          <Route path="/" exact element={ <Categories/> }/>
          <Route path="/categories/:category" exact element={ <Categories/> }/>

        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
