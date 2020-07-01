import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import logo from './logo.svg'
import Header from './Header'
import Footer from './Footer'
import Microfrontend from './Microfrontend'

const {
  REACT_APP_MICROFRONTEND_1_HOST: microfrontend1Host,
  REACT_APP_MICROFRONTEND_2_HOST: microfrontend2Host,
} = process.env;


const Microfrontend1 = ({ history }) => (
  <Microfrontend history={history} host={microfrontend1Host} name="Microfrontend1" />
);

const Microfrontend2 = ({ history }) => (
  <Microfrontend history={history} host={microfrontend2Host} name="Microfrontend2" />
);

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header/>
        <h1>Goda's microfrontend page</h1>
        <Route exact path="/microfrontend1" component={Microfrontend1} />
        <Route exact path="/microfrontend2" component={Microfrontend2} />
        <Footer/>
        
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
