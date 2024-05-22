// import Header from "./components/Header/Header";
// import Hero from "./components/Hero/Hero";
import "./App.css";
// import Residencies from "./components/Residencies/Residencies";
// import Value from "./components/Value/Value";
// import Contact from "./components/Contact/Contact";
// import GetStarted from "./components/GetStarted/GetStarted";
// import Footer from "./components/Footer/Footer";
import Home from "./Home";
import Notfound from "./components/Notfound";
import Header from "./components/Header/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import Expert from "./components/Expert/Expert";
import Ourvalue from "./components/Ourvalue/Ourvalue";
import Contact from "./components/Contact/Contact";
import Getstarted from "./components/Getstarted";
import SocialHome from "./components/SocialHome/SocialHome";
import SocialProfile from "./components/SocialProfile/SocialProfile";
import "./App.css";
import { useSelector } from "react-redux";
import Expert1 from "./components/Expert/Expert1";
function App() {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="expert" element={<Expert />}></Route>
        <Route path="ourvalue" element={<Ourvalue />}></Route>
        <Route path="contactus" element={<Contact />}></Route>
        <Route path="getstarted" element={<Getstarted />}></Route>
        <Route path="expert/expert1" element={<Expert1/>}></Route>

        {/* <Route path="getstarted/socialhome" element={<SocialHome />}></Route>
        <Route
          path="getstarted/socialhome/socialprofile"
          element={<SocialProfile />}
        ></Route>
        <Route
          path="getstarted/socialhome/socialprofile/gets"
          element={<Getstarted />}
        ></Route> */}

        {/* <Route
          path="getstarted/"
          element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
        />
        <Route
          path="/home"
          element={user ? <SocialHome /> : <Navigate to="../auth" />}
        />
        <Route
          path="/auth"
          element={user ? <Navigate to="../home" /> : <Getstarted />}
        />
        <Route
          path="/profile/:id"
          element={user ? <SocialProfile /> : <Navigate to="../auth" />}
        /> */}

        <Route
          path="getstarted/"
          element={user ? <Navigate to="socialhome" /> : <Getstarted/>} 
        />
        <Route
          path="getstarted/socialhome"
          element={user ? <SocialHome/> : <Getstarted/>}
        />
        <Route
          path="/profile/:id"
          element={user ? <SocialProfile /> : <Getstarted/>}
        />
        {/* <Route
          path="/auth"
          element={user ? <Navigate to="../home" /> : <Auth />}
        /> */}
        {/* <Route path="*" element={<Notfound/>}></Route> */}
      </Routes>
    </div>
  );
}
export default App;
