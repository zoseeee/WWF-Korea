import './App.css';
import Wrapper from './component/Wrapper';
import Header from './component/Header';
import MainVisual from './component/MainVisual';

function App() {
  return (
    <Wrapper>
      <Header />
      <main>
      <MainVisual />
      </main>
    </Wrapper>
  )
}

export default App;
