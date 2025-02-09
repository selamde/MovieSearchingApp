import {Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Movie from "./components/movie/Movie"


function App() {

  return (
    <>
     <div className="overflow-x-hidden relative">
      <Navbar />
      </div>
     <Router>
      <Routes>
        <Route path="/" element={ <Movie /> }></Route>

      </Routes>
      
     </Router>


    
     
    </>
  )
}

export default App
