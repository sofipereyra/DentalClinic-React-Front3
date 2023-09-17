import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import { ContextProvider } from "./Components/utils/global.context";


function App() {
    return (
        <ContextProvider>
            <Router>
                <Navbar/>
                <Routes>
                    <Route index path="/" element={<Home/>}></Route>
                    <Route path="/detail/:id" element={<Detail/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                    <Route path="/favs" element={<Favs/>}></Route>
                </Routes> 
                <Footer/> 
            </Router>
        </ContextProvider>
    );
}

export default App;

