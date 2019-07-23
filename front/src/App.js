import React from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import HeroProfil from "./components/HeroProfil";
import Chatbot from "./components/Chatbot";
import InscriptionForm from './components/InscriptionForm';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profil-hero/:id" component={HeroProfil} />
        <Route exact path="/signup" component={InscriptionForm} />
      </Switch>
      <Chatbot />
      <Footer />
    </div>
  );
}

export default App;
