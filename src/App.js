import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import logo from './logo.svg'
import Header from './Header'
import Footer from './Footer'
import Microfrontend from './Microfrontend'
import MicrofrontendVue from './MicrofrontendVue'

const {
  REACT_APP_MICROFRONTEND_1_HOST: microfrontend1Host,
  REACT_APP_MICROFRONTEND_2_HOST: microfrontend2Host,
  REACT_APP_MICROFRONTEND_VUE_HOST: microfrontendVueHost,
} = process.env;


const Microfrontend1 = ({ history }) => (
  <Microfrontend history={history} host={microfrontend1Host} name="Microfrontend1" />
);

const Microfrontend2 = ({ history }) => (
  <Microfrontend history={history} host={microfrontend2Host} name="Microfrontend2" />
);

const MicrofrontendVueMF = ({ history }) => (
  <MicrofrontendVue history={history} host={microfrontendVueHost} name="MicrofrontendVue" />
);

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header/>
        <h1>Goda's microfrontend page</h1>
        <Route exact path="/microfrontend1" component={Microfrontend1} />
        <Route exact path="/microfrontend2" component={Microfrontend2} />
        <Route exact path="/microfrontendVue" component={MicrofrontendVueMF} />
        <Footer/>
        
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
