import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


class App extends React.Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route 
            path="/"          
            element={<BestBooks />}
          />
          <Route
            path="/About"
            element={<About />}
          />
        </Routes>
        <Footer />
      </Router>
    );
  }
}

export default App;

