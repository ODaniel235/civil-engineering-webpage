import Header from "./Header";
import { BrowserRouter, Routes } from "react-router-dom";
import "./styles/output.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header>
          <Routes></Routes>
        </Header>
      </BrowserRouter>
    </>
  );
}

export default App;
