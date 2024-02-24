import Authentication from "./Authentication";
import NotePage from "./Notes";
import FailedAuthentication from "./FailedAuthentication";
import "./styles/output.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import civilEngineArray from "./FakeBackendApi";
import { useState } from "react";

function Dashboard({ onIndexChange }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [regNumber, setRegNumber] = useState("");
  const regNumberRegex = /[a-z0-9]+/gi;
  const [checkValue, setCheckValue] = useState(false);
  const [justCheck, setJustCheck] = useState(true);

  const changePage = (e) => {
    e.preventDefault();
    let found = false;
    for (let i = 0; i < civilEngineArray.length; i++) {
      if (civilEngineArray[i].regNum === regNumber) {
        setIsLoggedIn(true);
        setJustCheck(false);
        setCheckValue(false);
        onIndexChange(i)
        found = true;
        break;
      }
    }
    if (!found) {
      setCheckValue(true);
    }
  };
  const handleChange = (e) => {
    setRegNumber(
      e.target.value.match(regNumberRegex)?.join("").toLowerCase() ?? ""
    );
  };

  const goBack = () => {
    setIsLoggedIn(false);
    setCheckValue(false);
    setJustCheck(true);
  };
  return (
    <>
      {isLoggedIn ? (
        <NotePage />
      ) : checkValue && justCheck ? (
        <FailedAuthentication goBack={goBack} />
      ) : (
        <Authentication
          handleChange={handleChange}
          changeLogs={changePage}
          value={regNumber}
        />
      )}
    </>
  );
}

export default Dashboard;
