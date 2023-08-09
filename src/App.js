import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Clients from "./pages/Clients";
import Education from "./pages/Education";
import Guides from "./pages/Guides";
import Comparisons from "./pages/Comparisons";

import Introduction from "./pages/subpages/Introduction";
import HTMLBasics from "./pages/subpages/HTMLBasics";
import CSSBasics from "./pages/subpages/CSSBasics";
import CSharpBasics from "./pages/subpages/CSharpBasics";
import JavaScriptBasics from "./pages/subpages/JavaScriptBasics";
import ReactBasics from "./pages/subpages/ReactBasics";
import AdvancedIntro from "./pages/subpages/AdvancedIntro";

import CSharp1 from "./pages/subpages/CSharp/CSharp1";
import SmartphoneComparison from "./pages/compare/SmartphoneComparison";
import TabletComparison from "./pages/compare/TabletComparison";
import LaptopComparison from "./pages/compare/LaptopComparison";

import NotFound from "./pages/NotFound";
import PowerSupplyComparison from "./pages/compare/PowerSupplyComparison";
import GraphicsCardComparison from "./pages/compare/GraphicsCardComparison";
import TVComparison from "./pages/compare/TVComparison";
// const NotFound = () => {
//   return <h1>Page Not Found</h1>;
// };
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ParallaxProvider> */}
        <Header />
        <main>
          <div className="mainContent">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/clients" element={<Clients />} />
              <Route exact path="/education" element={<Education />} />
              <Route exact path="/guides" element={<Guides />} />

              <Route exact path="/guides/Intro" element={<Introduction />} />
              <Route exact path="/guides/HTMLBasics" element={<HTMLBasics />} />
              <Route exact path="/guides/CSSBasics" element={<CSSBasics />} />
              <Route
                exact
                path="/guides/CSharpBasics"
                element={<CSharpBasics />}
              />

              <Route
                exact
                path="/guides/CSharp/CSharp1"
                element={<CSharp1 />}
              />

              <Route
                exact
                path="/guides/JavaScriptBasics"
                element={<JavaScriptBasics />}
              />
              <Route
                exact
                path="/guides/ReactBasics"
                element={<ReactBasics />}
              />
              <Route
                exact
                path="/guides/AdvancedIntro"
                element={<AdvancedIntro />}
              />

              <Route exact path="/compare" element={<Comparisons />} />
              <Route
                exact
                path="/compare/phones"
                element={<SmartphoneComparison />}
              />

              <Route
                exact
                path="/compare/tablets"
                element={<TabletComparison />}
              />
              <Route
                exact
                path="/compare/laptops"
                element={<LaptopComparison />}
              />
              <Route
                exact
                path="/compare/powersupply"
                element={<PowerSupplyComparison />}
              />
              <Route
                exact
                path="/compare/graphicscards"
                element={<GraphicsCardComparison />}
              />
              <Route exact path="/compare/tvs" element={<TVComparison />} />
              {/* <Route path="/404" component={NotFound} />
              <Route path="*" component={NotFound} /> */}
              {/* <Redirect from="*" to="/404" /> */}
            </Routes>
          </div>
        </main>
        <Footer />
        {/* </ParallaxProvider> */}
      </div>
    );
  }
}

export default App;
