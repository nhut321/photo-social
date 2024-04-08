import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed";
import Message from "./pages/Message";
import Me from "./pages/Me";
import Saved from "./pages/Saved";
import Sidebar from "./components/Sidebar";
import Setting from "./pages/Setting";
import LoginRegister from './pages/LoginRegister'

function App() {
  const login = false
  return (
    <div className="App">
      <BrowserRouter>
        {
        login 
        ? 
        <>
            <Sidebar />
            <div className="app-wrap">
              <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="/message" element={<Message />} />
                <Route path="/me" element={<Me />} />
                <Route path="/saved" element={<Saved />} />
                <Route path="/setting" element={<Setting />} />
              </Routes>
            </div>
          </>
        : 
        <>
        <LoginRegister />
        </>
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
