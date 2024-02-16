import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authentication from "./Authentication";
import NotePage from "./Notes";
import FailedAuthentication from "./FailedAuthentication";
import civilEngineArray from "./FakeBackendApi";
import "./styles/output.css";
import { useState } from "react";
import Notes from "./NotesCover";

function App() {
  const [index, setIndex] = useState(-1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [regNumber, setRegNumber] = useState("");
  const regNumberRegex = /[a-z0-9]+/gi;
  const [checkValue, setCheckValue] = useState(false);
  const [justCheck, setJustCheck] = useState(true);

  const handleChange = (e) => {
    setRegNumber(
      e.target.value.match(regNumberRegex)?.join("").toLowerCase() ?? ""
    );
  };

  const changePage = (e) => {
    let found = false;
    e.preventDefault()
    for (let i = 0; i < civilEngineArray.length; i++) {
      if (civilEngineArray[i].regNum === regNumber) {
        setIsLoggedIn(true);
        setJustCheck(false);
        setIndex(i);
        found = true;
        break; // Once found, no need to continue loop
      }
    }
    if (!found) {
      setCheckValue(true);
    }
  };

  const goBack = () => {
    setIsLoggedIn(false);
    setCheckValue(false);
    setJustCheck(true);
  };

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <Header img={civilEngineArray[index].img}>
          <Routes>
            <Route path="/notes" element={<NotePage />} />
            <Route path='/infos' element={<NotePage />} />
            <Route path='/check' element={<NotePage />} />
            <Route path='/dashboard' element={<NotePage />} />
          </Routes>
        </Header>
      ) : checkValue && justCheck ? (
        <FailedAuthentication goBack={goBack} />
      ) : (
        <Authentication handleChange={handleChange} changeLogs={changePage} />
      )}
    </BrowserRouter>
  );
}

export default App;
