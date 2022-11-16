
import './App.css';
import Category from './components/Category';
import Food from './components/Food';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import Navbar from './components/Navbar';

function App() {
  return (
  <div>
    <Navbar/>
    <Hero/>
    <HomeCards/>
    <Food/>
    <Category/>
  </div>
  );
}

export default App;
