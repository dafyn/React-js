import React from 'react';
import { BrowserRouter as Router, Routes} from 'react-router-dom';
import { Layout } from 'antd';
import About from './Pages/AboutUs';
import ProjectDetail from './Pages/ProjectDetails';
import Projects from './Pages/Projects';
import News from './Pages/News';
import Home from './Pages/Home';
import HeaderComponent from './Components/Header';
import FooterComponent from './Components/Footer';
// import 'antd/dist/antd.css';
// import './App.css';

const { Content } = Layout;

const App = () => {
  return (
    <Router>
      <Layout>
        <HeaderComponent />
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <div className="site-layout-content">
              <Routes exact path="/" component={Home} />
              <Routes path="/about" component={About} />
              <Routes path="/projects" component={Projects} />
              <Routes path="/project/:id" component={ProjectDetail} />
              <Routes path="/news" component={News} />
          </div>
        </Content>
        <FooterComponent />
      </Layout>
    </Router>
  );
}

export default App;
