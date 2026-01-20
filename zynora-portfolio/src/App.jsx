import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import Technology from './components/Technology';
import Screenshots from './components/Screenshots';
import Demo from './components/Demo';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Technology />
        <Screenshots />
        <Demo />
      </main>
      <Footer />
    </div>
  );
}

export default App;
