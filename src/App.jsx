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
import { useAuth0 } from '@auth0/auth0-react';
import AuthButtons from './Components/AuthButtons';

const { isAuthenticated } = useAuth0; // don't use in class component (hook)

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
        <AuthButtons />
          {isAuthenticated} ? <BestBooks /> : <h2> Please log in to see some books </h2>
        <Footer />
      </Router>
    );
  }
}

export default App;

