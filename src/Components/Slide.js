import { useEffect, useRef } from 'react';
import jsp from '../img/websocket.gif';
import danVelog from '../img/dan_velog2.gif';
import pofol from '../img/slide.gif'
import { Link } from 'react-router-dom';

function Slide(props) {

    let imgVal = [danVelog, jsp, pofol];

    const leftActicleOnClickChangImg = ()=>{
        imgVal.reverse().map((a, i)=>{
          if (props.img === imgVal[i]) {
            props.setLeftImg(imgVal[i+2]);
            props.setImg(imgVal[i+1]);
            props.setRightImg(imgVal[i]);
            if (i === imgVal.length - 2) {
                props.setLeftImg(imgVal[0]);
            }
            if (i === imgVal.length - 1) {
              i = 0;
              props.setImg(imgVal[i])
              props.setLeftImg(imgVal[i+1]);
            }
          }
          return null;
        })
        if(props.pNumber <= 1){
            props.setPNumber(imgVal.length)
        }
        else{
            props.setPNumber(props.pNumber-1)
        }
      }
      const rightActicleOnClickChangImg = ()=>{
        imgVal.map((a, i)=>{
          if (props.img === imgVal[i]) {
            props.setLeftImg(imgVal[i]);
            props.setImg(imgVal[i+1]);
            props.setRightImg(imgVal[i+2]);
            if (i === imgVal.length - 2) {
                props.setRightImg(imgVal[0]);
            }
            if (i === imgVal.length - 1) {
              i = 0;
              props.setImg(imgVal[i])
              props.setRightImg(imgVal[i+1]);
            }
          }
          return null;
        })
        if(props.pNumber >= imgVal.length){
            props.setPNumber(1)
        }
        else{
            props.setPNumber(props.pNumber+1)
        }
      }

      useEffect(()=>{
          if (props.pNumber === 1) {
              props.setPTitle("My Portfolio")
          }else if (props.pNumber === 2){
              props.setPTitle("JSP")
          }else{
              props.setPTitle("React,DRF")
          }
      })

    const left = useRef();
    const right = useRef();
    const center = useRef();
  
    const backCenter = useRef();
    const backCenterRight = useRef();
    const backCentLeft = useRef();
    const backLeft = useRef();
    const backRight = useRef();

    const handleLeftClick = () => {
        left.current.style.animation = "0.4s ease-in-out 0s 1 forwards backLeftSlide";
        right.current.style.animation = "0.4s ease-in-out 0s 1 forwards centerRightSlide";
        center.current.style.animation = "0.4s ease-in-out 0s 1 forwards leftCenterSlide";
        backCenter.current.style.animation = "0.4s ease-in-out 0s 1 backSideSlide"
        backCenterRight.current.style.animation = "0.4s ease-in-out 0s 1 backSideSlide"
        backCentLeft.current.style.animation = "0.4s ease-in-out 0s 1 backSideSlide"
        backLeft.current.style.animation = "0.4s ease-in-out 0s 1 leftBackSlide"
        backRight.current.style.animation = "0.4s ease-in-out 0s 1 rightBackSlide"
      }
    
      const handleRightClick = () => {
        left.current.style.animation = "0.4s ease-in-out 0s 1 forwards centerLeftSlide";
        right.current.style.animation = "0.4s ease-in-out 0s 1 forwards backRightSlide";
        center.current.style.animation = "0.4s ease-in-out 0s 1 forwards rightCenterSlide";
        backCenter.current.style.animation = "0.4s ease-in-out 0s 1 backSideSlide"
        backCenterRight.current.style.animation = "0.4s ease-in-out 0s 1 backSideSlide"
        backCentLeft.current.style.animation = "0.4s ease-in-out 0s 1 backSideSlide"
        backRight.current.style.animation = "0.4s ease-in-out 0s 1 rightBackSlide"
        backLeft.current.style.animation = "0.4s ease-in-out 0s 1 leftBackSlide"
      }
    
      const handleAnimationEnd = () => {
        left.current.style.animation = "none";
        right.current.style.animation = "none";
        center.current.style.animation = "none";
        backCenter.current.style.animation = "none";
        backCenterRight.current.style.animation = "none";
        backCentLeft.current.style.animation = "none";
        backLeft.current.style.animation = "none";
        backRight.current.style.animation = "none";
      }

      const openVelog = (title)=>{ 
          if(title === "My Portfolio"){
            window.open("https://velog.io/@hyeon4137/%EC%9E%84%EC%8B%9C%EC%A0%80%EC%9E%A5")
          }else if(title === "JSP"){
            window.open("https://velog.io/@hyeon4137/JSP%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0-%EA%B2%8C%EC%8B%9C%ED%8C%90-1%EC%9E%A5-nc5h9mid");
          }else if(title === "React,DRF"){
            window.open("https://velog.io/@hyeon4137/React-DRF-API%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-velog-%EB%94%B0%EB%9D%BC-%EB%A7%8C%EB%93%A4%EC%96%B4%EB%B3%B4%EA%B8%B0-6%EC%9E%A5");
          }
      }

    return(
        <>
            <div className="myContactInfo">
            <p className="info__header">CONTACT</p>
            <div className="mySocial">
                <p>1996. 4. 9 김대현</p>
                <p>dan-@kakao.com</p>
                <p>+82 1041373153</p>
            </div>
            </div>

            <div className="header__margin">
            <div className="mainBody__padding">
                {/* <div className="slide__shadow"></div> */}
            <div className="slide__back">
                <div className="slide__back__display">

                <div className="slide__back__section">
                    <div className="slide__back__left" ref={backLeft} onAnimationEnd={handleAnimationEnd}>
                    </div>
                    <div className="slide__back__left__center" ref={backCentLeft} onAnimationEnd={handleAnimationEnd}>
                    </div>
                </div>

                <div className="slide__back__section">
                    <div className="slide__back__center" ref={backCenter} onAnimationEnd={handleAnimationEnd}>
                    </div>
                </div>

                <div className="slide__back__section">
                    <div className="slide__back__right__center" ref={backCenterRight} onAnimationEnd={handleAnimationEnd}>
                    </div>
                    <div className="slide__back__right" ref={backRight} onAnimationEnd={handleAnimationEnd}>
                    </div>
                </div>

                </div>

                </div>
                <div className="slide__section">
                <div className="slide__acticle__left" ref={left} onAnimationEnd={handleAnimationEnd}
                onClick={()=>{
                    leftActicleOnClickChangImg();
                    handleLeftClick();
                }}>
                    <img src={props.leftImg} alt=""/>
                </div>
                
                <Link to="/ex3" onClick={()=>{openVelog(props.pTitle)}}>
                    <div className="slide__acticle__center" ref={center} onAnimationEnd={handleAnimationEnd}>
                        <img src={props.img} alt=""/>
                        <div className="slide__dec__position">
                            <div className="slide__dec__header">
                                <p>{props.pTitle} & Page {props.pNumber}</p>
                            </div> 
                        </div>
                    </div>
                </Link>

                <div className="slide__acticle__right" ref={right} onAnimationEnd={handleAnimationEnd}
                onClick={()=>{
                    rightActicleOnClickChangImg();
                    handleRightClick();
                }}>
                    <img src={props.rightImg} alt=""/>
                </div>

                </div>
            </div>
            </div>
        </>
    )
}
export default Slide;