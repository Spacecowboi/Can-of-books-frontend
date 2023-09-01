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
import { withAuth0 } from '@auth0/auth0-react';
import AuthButtons from './Components/AuthButtons';


class App extends React.Component {
  constructor(props){
    super(props);

  }
  render() {
    let isAuthenticated = this.props.auth0.isAuthenticated;
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
          { isAuthenticated ? <BestBooks /> : <h2> Please log in to see some books </h2> }
        <Footer />
      </Router>
    );
  }
}

export default withAuth0(App);

