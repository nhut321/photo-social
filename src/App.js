import { useContext, useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed";
import Message from "./pages/Message";
import Me from "./pages/Me";
import Saved from "./pages/Saved";
import Sidebar from "./components/Sidebar";
import Setting from "./pages/Setting";
import LoginRegister from "./pages/LoginRegister";
import { authContext } from "./context/AuthContext";
import axios from "axios";
import { baseURL } from "./baseURL";
import { homeContext } from "./context/HomeContext";

function App() {
  const [connectServer, setConnectServer] = useState(false);
  const HomeContext = useContext(homeContext)
  const Auth = useContext(authContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.get(baseURL).then((data) => {
          setConnectServer(true);
        });
      } catch (err) {
        setConnectServer(false);
        console.log("server khong ket noi duoc");
        console.log(err);
      }
    };
    fetchData();
  }, [connectServer]);
  return (
    <div className="App">
      {
        HomeContext.statePostBox
        ?
        <div className="post-box__mask"></div>
        :
        <></>
      }
      <>
        {/* <div className="app-wrap">
          <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/message" element={<Message />} />
              <Route path="/me" element={<Me />} />
              <Route path="/saved" element={<Saved />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/login" element={<LoginRegister />} />
          </Routes>
        </div> */}
        {connectServer ? (
          <div className="app-wrap">
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/message" element={<Message />} />
              <Route path="/me" element={<Me />} />
              <Route path="/saved" element={<Saved />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/login" element={<LoginRegister />} />
            </Routes>
          </div>
        ) : (
          <div className="spinmod d-flex w-100 align-items-center justify-content-center h-100">
            <div
              className="spinner-border"
              style={{
                width: "3rem",
                height: "3rem",
              }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
            <div>Dang ket noi toi server</div>
          </div>
        )}
      </>
    </div>
  );
}

export default App;
