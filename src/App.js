import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Animations from "./pages/Animations";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" component={Home} />
        <Route path="/animations/" component={Animations} />
        <Route path="/services/" component={Services} />
        <Route path="/contact/" component={Contact} />

        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
}

export default App;
