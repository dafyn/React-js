import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Layout } from 'antd';
import About from './Pages/AboutUs';
import ProjectDetail from './Pages/ProjectDetails';
import Projects from './Pages/Projects';
import News from './Pages/News';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterComponent from './Components/Footer';
import NavbarComponent from './Components/NavBar';
// import 'antd/dist/antd.css';
import './App.css';

const { Content } = Layout;

const App = () => {
  return (
    <Router>
      <Layout>
        <NavbarComponent />
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <div className="site-layout-content">
            <Routes> 
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
              <Route path="/project/:id" component={ProjectDetail} />
              <Route path="/news" component={News} />
            </Routes>  
          </div>
        </Content>
        <FooterComponent />
      </Layout>
    </Router>
  );
}

export default App;
