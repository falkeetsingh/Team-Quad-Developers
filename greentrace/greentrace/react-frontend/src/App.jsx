import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import "./styles/App.scss";
import "./styles/Navbar.scss";
import "./styles/Home.scss";
import "./styles/Signup.scss";
import "./styles/Footer.scss";
import "./styles/mediaQueries.scss";
import "./styles/Dashboard.scss";
import "./styles/Farm.scss";
import Home from './components/Home';
import SignUp from './components/SignUp'; 
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Farm from './components/Farm';
import {useState,useEffect} from 'react'
// import Spline from './components/Spline';


function App() {
  const [plotData, setPlotData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/') 
      .then(response => response.json())
      .then(data => {
        setPlotData(data.plot_data); 
      })
      .catch(error => console.error('Error fetching plotData:', error));
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/Dashboard' element={<Dashboard plotData={plotData} />}/>
        <Route path='/Farm' element={<Farm/>}/>
        {/* <Route path='/Spline' element={<Spline/>}/> */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

