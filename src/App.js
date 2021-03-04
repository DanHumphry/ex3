import { useState } from 'react';
import './App.css';
import jsp from './img/websocket.gif';
import pofol from './img/slide.gif'
import danVelog from './img/dan_velog2.gif';
import Slide from './Components/Slide';
import { Route } from 'react-router-dom';

function App() {

  let [img, setImg] = useState(pofol);
  let [leftImg, setLeftImg] = useState(danVelog);
  let [rightImg, setRightImg] = useState(jsp);

  let [pNumber, setPNumber] = useState(1);
  let [pTitle, setPTitle] = useState("My Portfolio");

  return (
    <>
    <div className="body bird-container">
      <div className="mainBody">
        <Route exact path="/ex3">
          <Slide img={img} setImg={setImg}
          leftImg={leftImg} setLeftImg={setLeftImg} rightImg={rightImg} setRightImg={setRightImg}
          pNumber={pNumber} setPNumber={setPNumber} pTitle={pTitle} setPTitle={setPTitle}/>
        </Route>
      </div>
    </div>
    </>
  );
}

export default App;
