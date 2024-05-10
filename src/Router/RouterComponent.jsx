import { Route, Routes } from "react-router-dom"
import Layout from "../components/Layout"
import About from "../components/About"
import Contact from "../components/Contact"
import Recipe from "../components/Recipe"
import Create from "../components/Create"
import Details from "../components/Details"
import Update from "../components/Update"

const RouterComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/create-recipe" element={<Create />} />
        <Route path="/recipe/:id" element={<Details />} />
        <Route path="update-recipe/:id" element={<Update/>} />
      </Routes>
    </div>
  )
}

export default RouterComponent