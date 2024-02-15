import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authentication from "./Authentication";
import civilEngineArray from "./FakeBackendApi";
import "./styles/output.css";
import { useState } from "react";
import FailedAuthentication from "./FailedAuthentication";

function App() {
  const [index, setIndex] = useState(-1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [regNumber, setRegNumber] = useState("");
  const regNumberRegex = /[a-z0-9]+/gi;
  const [checkValue, setCheckValue] = useState(false);
  const [justCheck, setJustCheck] = useState(true);
  const handleChange = (e) => {
    setRegNumber(e.target.value.match(regNumberRegex).join("").toLowerCase());
  };

  const changePage = () => {
    for (let i = 0; i < civilEngineArray.length; i++) {
      if (civilEngineArray[i].regNum === regNumber) {
        setIsLoggedIn(true);
        setJustCheck(false);
        setIndex(i);
      } else {
        setCheckValue(true);
      }
    }
  };

  const goBack = () => {
    setIsLoggedIn(false);
    setCheckValue(false);
    setJustCheck(true);
  };

  return (
    <>
      {isLoggedIn ? (
        <BrowserRouter>
          <Header img={civilEngineArray[index].img}>
            <Routes>
              <Route></Route>
            </Routes>
          </Header>
        </BrowserRouter>
      ) : checkValue == true && justCheck == true ? (
        <FailedAuthentication goBack={goBack} />
      ) : (
        <Authentication handleChange={handleChange} changeLogs={changePage} />
      )}
    </>
  );
}

export default App;
