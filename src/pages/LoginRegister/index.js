import React, { useState } from "react";
import "./LoginRegister.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function LoginRegister() {
  const [activeTab, setActiveTab] = useState(false);
  const [loginInput, setLoginInput] = useState({email: '', password: ''})
  const [regInput, setRegInput] = useState({name: '', email: '', password: ''})
  const switchTab = () => {
    setActiveTab((v) => !v);
  };

  const LoginFn = (e) => {
    e.preventDefault()
  }
  const RegFn = (e) => {
    e.preventDefault()
  }
  const onChangeLoginInput = (e) => {
    setLoginInput(v => {
      return {...v, [e.target.name]: e.target.value}
    })
  }
  const onChangeRegInput = (e) => {
    setRegInput(v => {
      return {...v, [e.target.name]: e.target.value}
    })
  }
  return (
    <div className="login-wrapper">
      <div
        className={
          activeTab
            ? "content justify-content-center align-items-center d-flex shadow-lg active"
            : "content justify-content-center align-items-center d-flex shadow-lg"
        }
        id="content"
      >
        {/* Register */}
        <div className="col-md-6 d-flex justify-content-center">
          <form onSubmit={RegFn}>
            <div className="header-text mb-4">
              <h1>Create Account</h1>
            </div>
            <div className="input-group mb-3">
              <input
                name='name'
                type="text"
                placeholder="Name"
                className="form-control form-control-lg bg-lignt fs-6"
                value={regInput.name}
                onChange={(e) => onChangeRegInput(e)}
              />
            </div>
            <div className="input-group mb-3">
              <input
                name='email'
                type="text"
                placeholder="Email"
                className="form-control form-control-lg bg-lignt fs-6"
                value={regInput.email}
                onChange={(e) => onChangeRegInput(e)}
              />
            </div>
            <div className="input-group mb-3">
              <input
                name='password'
                type="password"
                placeholder="Password"
                className="form-control form-control-lg bg-lignt fs-6"
                value={regInput.password}
                onChange={(e) => onChangeRegInput(e)}
              />
            </div>
            <div className="input-group mb-3 justify-content-center">
              <button type="submit" className="border-white text-white w-50 fs-6">
                Register
              </button>
            </div>
          </form>
        </div>
        {/* Login */}

        <div className="col-md-6 right-box">
          <form onSubmit={LoginFn}>
            <div className="header-text mb-4">
              <h1>Login</h1>
            </div>
            <div className="input-group mb-3">
              <input
                name="email"
                type="text"
                placeholder="Email"
                className="form-control form-control-lg bg-lignt fs-6"
                value={loginInput.email}
                onChange={(e) => onChangeLoginInput(e)}
              />
            </div>
            <div className="input-group mb-3">
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="form-control form-control-lg bg-lignt fs-6"
                value={loginInput.password}
                onChange={(e) => onChangeLoginInput(e)}
              />
            </div>
            <div className="input-group mb-5 d-flex justify-content-between">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" />
                <label
                  htmlFor="formcheck"
                  className="form-check-label text-secondary"
                >
                  Remember me
                </label>
              </div>
              <div className="forgot">
                <small>
                  <a href="">Forgot password</a>
                </small>
              </div>
            </div>
            <div className="input-group mb-3 justify-content-center">
              <button type="submit" className="border-white text-white w-50 fs-6" onClick={() => LoginFn()}>
                Login
              </button>
            </div>
          </form>
        </div>

        {/* Switch */}
        <div className="switch-content">
          <div className="switch">
            <div className="switch-panel switch-left">
              <h1>Hello, Again</h1>
              <p>We are happy to see you back</p>
              <button
                className="hidden text-white border-white w-50 fs-6 mt-2"
                onClick={() => switchTab()}
              >
                Login
              </button>
            </div>

            <div className="switch-panel switch-right">
              <h1>Wellcome</h1>
              <p>Tham gia di nha tieu thu</p>
              <button
                className="hidden text-white border-white w-50 fs-6 mt-2"
                onClick={() => switchTab()}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
