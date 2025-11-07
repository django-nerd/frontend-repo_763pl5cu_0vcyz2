import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseGrid from './components/CourseGrid';
import Articles from './components/Articles';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <CourseGrid />
        <Articles />
      </main>
      <Footer />
    </div>
  );
}

export default App;
