<<<<<<< HEAD
import React from 'react';
import Footer from './components/Footer';
import Home from './components/Home';
import {
  Switch,
  Route
} from 'react-router-dom';
import HeroProfil from './components/HeroProfil';
import Navbar from './components/Navbar';

=======
import React from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Chatbot from "./components/Chatbot";
>>>>>>> chatbox

function App() {
  return (
    <div>
<<<<<<< HEAD
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profil-hero/:id" component={HeroProfil} />
      </Switch>
=======
      <Home />

      <Chatbot />
>>>>>>> chatbox
      <Footer />
    </div>
  );
}

export default App;
