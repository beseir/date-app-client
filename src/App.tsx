import {Match} from "./components/MatchPage/Match.tsx";
import "./styles/App.css"
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import {Home} from "./components/MainPage/Home.tsx";
import {Filter} from "./components/Filter/Filter.tsx";
function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path={"*"}/>
            <Route element={<Match/>} path={"match"}/>
            <Route element={<Filter/>} path={"filter"}/>
        </Routes>

    </BrowserRouter>
  )
}

export default App
