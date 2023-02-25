//Provider
import { useContext, useEffect } from "react";
import { DataUserContext } from './aplication/DataUserContext';
//Components
import Header from "./components/Header";
import Movies from "./pages/Movies";
import Series from "./pages/Series"
import Favorites from "./pages/Favorites";
import Search from "./pages/Search";
import Trending from "./pages/Trending";
import Coming from "./pages/Coming";
import Wellcome from "./pages/Wellcome";
import About from "./pages/About";
import SelectedMovie from "./components/SelectedMovie";

//Deps
import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

//Firebase
import { firebaseApp } from './aplication/firebaseConfig'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import SimpleBottomNavigation from "./components/SimpleBottomNavigation";
const auth = getAuth(firebaseApp)

export const App = () => {
  const { setUserGlobal, setUserMail, loadfavsUser } = useContext(DataUserContext)

  useEffect(() => {
    onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        setUserGlobal(usuarioFirebase)
        setUserMail(usuarioFirebase.email)
        
        loadfavsUser(usuarioFirebase.email)
        
          
        
      } else {
        setUserGlobal("")
        setUserMail("")
      }
    })
  }, [])

  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <HashRouter>
        <Header />
        <SimpleBottomNavigation />
        <Routes>
          <Route path="*" element={<Wellcome />} />
          <Route path="/wellcome" element={<Wellcome />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/coming" element={<Coming />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<About />} />
          <Route path="/selectedMovie/:MovieId/:MovieType" element={<SelectedMovie />} />
        </Routes>
      </HashRouter>
      {/* </BrowserRouter> */}
    </div>
  );
}


