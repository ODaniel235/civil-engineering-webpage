import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authentication from "./Authentication";
import civilEngineArray from "./FakeBackendApi";
import "./styles/output.css";
import { useState } from "react";

function App() {
  const [index, setIndex] = useState(-1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [regNumber, setRegNumber] = useState("");
  const regNumberRegex = /[a-z]+\d*/gi;
  const handleChange = (e) => {
    setRegNumber(e.target.value.match(regNumberRegex).join(""));
  };

  const changePage = () => {
    for (let i = 0; i < civilEngineArray.length; i++) {
      if (civilEngineArray[i].name === regNumber) {
        setIsLoggedIn(true);
        setIndex(i);
      }
    }
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
      ) : (
        <Authentication handleChange={handleChange} changeLogs={changePage} />
      )}
    </>
  );
}

export default App;
