// import './App.css';
// import NavBar from './components/NavBar';
// import Home from './components/Home';
// import Clients from './components/Clients';
// import Impact from './components/Impact';
// import Services from './components/Services';
// import Why from './components/Why';
// import Company from './components/Company';
// import Footer from './components/Footer';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import Solutions from './components/Solutions';
// import BasicExample from './components/Navbar2';
import Landing from "./Pages/Landing";
import {Routes} from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    
    //   <NavBar />
      
      
    //   <Home />
      
    //   <div className='colors'>
    //   <Clients />
    //   </div>
      
    //   <Impact />
      
    //   <div className='solBox'>
    //   <Solutions />
    //   </div>
    //   <div className='serBox'>
    //   <Services />
    //   </div>
    //   <div className='bgclr'>
    //   <Why />
    //   </div>
    //   <div className='comp'>
    //   <Company />
    //   </div>
    //   <div className='foot'>
    //   <Footer />
    //   </div>
    // </div>
    <div>
     <Landing />
    </div>
  );
}

export default App;

// <Route exact path ="/table" component={C} />
//      <Route exact path ="/tablep" component={PaginationTable} />
//      <Route exact path ="/tablec" component={ColumnOrder} />

// <Routes exact path ="/" component={Landing} />  