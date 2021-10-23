import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import HomePageCarousel from './components/HomePageCarousel';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-dark">
      <Navbar/>
      <Container>
        <HomePageCarousel/>
      </Container>
    </div>
  );
}

export default App;
