import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomeLayout from './Layouts/HomeLayout';
import AboutLayout from './Layouts/AboutUsLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'antd/dist/antd.css';
import './App.css';

const App = () => {
  return (
    <Router>
          {/* <div className="site-layout-content"> */}
            <Routes> 
              <Route path='/' element={<HomeLayout />} />
              <Route path='/about' element={<AboutLayout />} />
            </Routes>  
          {/* </div> */}
    </Router>
  );
}

export default App;
