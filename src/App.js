import './App.css';
import Wrapper from './component/Wrapper';
import Header from './component/Header';
import MainVisual from './component/MainVisual';
import WWFSponsor from './component/WWFSponsor';

function App() {
  return (
    <Wrapper>
      <Header />
      <main>
      <MainVisual />
      <WWFSponsor />
      </main>
    </Wrapper>
  )
}

export default App;
