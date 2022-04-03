import './App.css';
import FaceDetection from './video/FaceDetection.mp4';
import HomePage from './components/Main';

function App() {
  return (
    <div className="main">
        <video loop autoPlay muted>
          <source src={FaceDetection} type="video/mp4" />
        </video>
        <div className="HomePage">
          <HomePage />
        </div>
      </div>
  );
};

export default App;
