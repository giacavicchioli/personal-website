import React, { Component } from "react";

import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <Work />
        <Footer />
      </div>
    );
  }
}

export default App;
