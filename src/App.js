import './App.css';
import Footer from "./components/footer";
import GrayContainer from "./components/graycontainer";
import Header from "./components/header";
import MainContainer from "./components/maincontainer";
import TopContainer from "./components/topcontainer";
function App() {
  return (
    <div className="App">
      <Header/>
      <TopContainer/>
      <GrayContainer/>
      <MainContainer/>
      <Footer/>
    </div>
  );
}

export default App;
