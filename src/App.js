import {Route, Routes} from "react-router";
import LandingPage from "./LandingPage";
import NewUser from "./NewUser";
import LoggedIn from "./LoggedIn";
import AdminLogin from "./AdminLogin";
import AdminLandingPage from "./AdminLandingPage";
import "./styles.css";


function App() {
    return (


    <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/newuser" element={<NewUser/>} />
        <Route path="/loggedin" element={<LoggedIn/>} />
        <Route path="/admin" element={<AdminLogin/>} />
        <Route path="/adminlanding" element={<AdminLandingPage/>} />
        <Route path="build/index.html" element={<LandingPage/>} />
    </Routes>
)
}

export default App;















