import "./App.css";
import Wrapper from "./component/Wrapper";
import Header from "./component/Header";
import MainVisual from "./component/MainVisual";
import WWFSponsor from "./component/WWFSponsor";
import WWFCampaign from "./component/WWFCampaign";
import { Routes, Route } from "react-router-dom";
import EarthHour from "./component/EarthHour";
import Why from "./component/Why";
import HowTo from "./component/HowTo";
import Who from "./component/Who";

function App() {
  return (
    <Wrapper>
      <Header />
      <main>
        <MainVisual />
        <WWFCampaign />
        <Routes>
          <Route path="/main" element={<EarthHour />} />
          <Route path="/why" element={<Why />} />
          <Route path="/who" element={<Who />} />
          <Route path="/howTo" element={<HowTo />} />
          <Route path="*" element={<HowTo />} />
        </Routes>
        <WWFSponsor />
      </main>
    </Wrapper>
  );
}

export default App;
