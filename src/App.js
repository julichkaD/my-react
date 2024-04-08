import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./components/RegisterPage";
import WelcomePage from "./components/WelcomePage";
import AnotherPage from "./components/AnotherPage";
import "./index.css";

function App() {
  const [username, setUsername] = useState("");
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<RegisterPage setUsername={setUsername} />}
          />
          <Route path="/welcome-page" element={<WelcomePage />} />
          <Route
            path="/another-page"
            element={<AnotherPage username={username} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
