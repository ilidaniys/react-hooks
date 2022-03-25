// import react from 'react'
import Navbar from "./Component/Navbar/Navbar";
import Home from "./pages/Home";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from "./pages/About";
import Profile from "./pages/Profile";
import Alert from "./Component/Alert/Alert";
import AlertState from "./Contex/Alert/AlertState";
import GithubState from "./Contex/Github/githubState";

function App() {

    return (
        <GithubState>
            <AlertState>
                <BrowserRouter>
                    <Navbar/>
                    <div className="container pt-4">
                        <Alert
                            alert={{text: 'Test ALERT'}}
                        />
                        <Routes>
                            <Route path={'/'} exact element={<Home/>}/>
                            <Route path={'/about'} element={<About/>}/>
                            <Route path={'/profile:name'} element={<Profile/>}/>
                        </Routes>
                    </div>
                </BrowserRouter>
            </AlertState>
        </GithubState>
    );
}

export default App;
