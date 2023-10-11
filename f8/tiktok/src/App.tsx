import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Following from "./pages/Following"
import Home from "./pages/Home"
import DefaultLayout from "./components/Layouts/DefaultLayout"
import HeaderOnly from "./components/Layouts/HeaderOnly"
import Upload from "./pages/Upload"
function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<DefaultLayout><Home/></DefaultLayout>}></Route>
          <Route path="/home" element={<DefaultLayout><Home/></DefaultLayout>}/>
          <Route path="/following" element={<DefaultLayout><Following /></DefaultLayout>}/>
          <Route path="/upload" element={<HeaderOnly><Upload/></HeaderOnly>}/>
      </Routes>
      </div>
    </Router>
  )
}

export default App
