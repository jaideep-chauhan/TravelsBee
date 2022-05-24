import "./App.css";
import Home from "./Components/Home";
import TravelList from "./Components/TravelList";
import Page from "./Components/Page";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import { HashRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
        
        <Routes>
          <Route exact path="/" element={ <Home/>}>
            
          </Route>
          <Route exact path="/Blog" element={<Blog />}>
            
          </Route>
          <Route exact path="/Contact" element={<Contact/> }>
            
          </Route>
          <Route exact path="/TravelList" element={<TravelList />}>
            
          </Route>
          <Route exact path="/Page" element={<Page/> }>
            
          </Route>
          </Routes>
       
      </HashRouter>
      
    </>
  );
}

export default App;
