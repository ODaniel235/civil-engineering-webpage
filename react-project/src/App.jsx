import Header from "./Header";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Authentication from "./Authentication";
import NotePage from "./Notes";
import "swiper/css";
import FailedAuthentication from "./FailedAuthentication";
import civilEngineArray from "./FakeBackendApi";
import "./styles/output.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Infos from "./Infos";

function App() {/*
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
    e.preventDefault();
    let found = false;
    for (let i = 0; i < civilEngineArray.length; i++) {
      if (civilEngineArray[i].regNum === regNumber) {
        setIsLoggedIn(true);
        setJustCheck(false);
        setCheckValue(false);
        setIndex(i);
        found = true;
        break;
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
  const isLoggedFunction = () => {
    setIsLoggedIn(true);
    setJustCheck(false);
    setCheckValue(false);
  };
*/
  return (/*
    <BrowserRouter>
      <Header
        img={isLoggedIn ? civilEngineArray[index].img : ""}
        isLoggedFunction={isLoggedFunction}
      >
        <Routes>
          {isLoggedIn ? (
            <>
              <Route path="/notes" element={<NotePage />} />
              <Route path="/infos" element={<Infos exclude={index} />} />
              <Route path="*" element={<Navigate to="/infos" />} />
            </>
          ) : (
            <Route
              path="*"
              element={
                checkValue && justCheck ? (
                  <FailedAuthentication goBack={goBack} />
                ) : (
                  <Authentication
                    handleChange={handleChange}
                    changeLogs={changePage}
                    value={regNumber}
                  />
                )
              }
            />
          )}
        </Routes>
      </Header>
    </BrowserRouter>
*/
<BrowserRouter>
<Header img="" isLoggedFunction={()=>console.log('yes')}>
<p className="text-2xl bg-gray-800 mx-auto text-center my-auto">This web is currently down for reasons best known to the developer</p>
</Header>
</BrowserRouter>
  );
}

export default App;
