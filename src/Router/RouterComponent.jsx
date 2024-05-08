import { Route, Routes } from "react-router-dom"
import Layout from "../components/Layout"
import About from "../components/About"
import Contact from "../components/Contact"
import Recipe from "../components/Recipe"
import Create from "../components/Create"

const RouterComponent = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Layout/>}/>
            <Route path="/recipe" element={<Recipe/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/create-recipe" element={<Create/>}/>
        </Routes>
    </div>
  )
}

export default RouterComponent