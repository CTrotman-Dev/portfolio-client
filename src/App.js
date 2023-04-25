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
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/education" element={<Education />} />
              <Route path="/guides" element={<Guides />} />

              <Route path="/guides/Intro" element={<Introduction />} />
              <Route path="/guides/HTMLBasics" element={<HTMLBasics />} />
              <Route path="/guides/CSSBasics" element={<CSSBasics />} />
              <Route path="/guides/CSharpBasics" element={<CSharpBasics />} />

              <Route path="/guides/CSharp/CSharp1" element={<CSharp1 />} />

              <Route
                path="/guides/JavaScriptBasics"
                element={<JavaScriptBasics />}
              />
              <Route path="/guides/ReactBasics" element={<ReactBasics />} />
              <Route path="/guides/AdvancedIntro" element={<AdvancedIntro />} />

              <Route path="/compare" element={<Comparisons />} />
              <Route
                path="/compare/phones"
                element={<SmartphoneComparison />}
              />

              <Route path="/compare/tablets" element={<TabletComparison />} />
              <Route path="/compare/laptops" element={<LaptopComparison />} />
              <Route
                path="/compare/powersupply"
                element={<PowerSupplyComparison />}
              />
              <Route
                path="/compare/graphicscards"
                element={<GraphicsCardComparison />}
              />
              <Route path="/compare/tvs" element={<TVComparison />} />
              <Route path="/404" component={NotFound} />
              <Route path="*" component={NotFound} />
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
