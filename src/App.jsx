import RouterComponent from "./Router/RouterComponent"
import Nav from "./components/Nav"

const App = () => {
  return (
    <div className="w-full bg-zinc-100">
      <Nav />
      <RouterComponent/>
    </div>
  )
}

export default App