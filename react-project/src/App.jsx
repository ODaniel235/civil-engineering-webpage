import Header from "./Header";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NotePage from "./Notes";
import "./styles/output.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Infos from "./Infos";
import Dashboard from "./Dashboard";
import civilEngineArray from "./FakeBackendApi";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleIndexChange = (index) => {
    setSelectedIndex(index);
  };
  return (
    <BrowserRouter>
      <Header img={civilEngineArray[selectedIndex].img}>
        <Routes>
          <Route
            path="/dashboard"
            element={<Dashboard onIndexChange={handleIndexChange} />}
          />
          <Route path="*" element={<Navigate to="/dashboard" />} />
          <Route path="/check" element={<NotePage />} />
          <Route path="/infos" element={<Infos index={selectedIndex} />} />
          <Route path="/notes" element={<NotePage />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
