import {BrowserRouter,Routes,Route} from "react-router-dom"
import About from "./Pages/About"
import Signin from "./Pages/Signin"
import Dashboard from "./Pages/Dashboard"
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Header from "./Components/Header";


export default function App() {
  return (
 <BrowserRouter>
 <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/signin" element={<Signin />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/projects" element={<Projects />} />
  </Routes>
 </BrowserRouter>
  )
}

