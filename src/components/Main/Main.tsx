import React from 'react';
import img1 from '../../../public/images/Main/img1.png';
import img2 from '../../../public/images/Main/img2.png';
import img3 from '../../../public/images/Main/img3.png';
import img4 from '../../../public/images/Main/img4.png';
import img5 from '../../../public/images/Main/img5.png';
import img6 from '../../../public/images/Main/img6.png';
import img7 from '../../../public/images/Main/img7.png';
import img8 from '../../../public/images/Main/img8.png';
import img9 from '../../../public/images/Main/img9.png';
import arrow from "../../../public/images/Main/arrow.svg";
import './Main.scss';
import { useAppContext } from "../../AppContext";

export const Main= React.memo(() => {
  const {onNext} = useAppContext();

  return (
    <div className="slide slide1 container">
      <main className="main">
        <div className="text-content">
          <div className="text-area">
            <p className="greeting">ПРИВЕТ,</p>
            <h1 className="title">
              ЭТО <span className="highlight">НЕ</span>
              <br />
              КОММЕРЧЕСКОЕ
              <br />
              ЗАДАНИЕ
              <button className="cta-button" onClick={onNext}>
                <div className="icon-container">
                  <img src={arrow} alt="arrow-right" className="arrow" />
                </div>
                <span>Что дальше?</span>
              </button>
            </h1>
          </div>
        </div>

        <img src={img1} alt="Decorative Image 1" className="decorative-image-slide1 image1" />
        <img src={img2} alt="Decorative Image 2" className="decorative-image-slide1 image2" />
        <img src={img3} alt="Decorative Image 3" className="decorative-image-slide1 image3" />
        <img src={img4} alt="Decorative Image 4" className="decorative-image-slide1 image4" />
        <img src={img5} alt="Decorative Image 5" className="decorative-image-slide1 image5" />
        <img src={img6} alt="Decorative Image 6" className="decorative-image-slide1 image6" />
        <img src={img7} alt="Decorative Image 7" className="decorative-image-slide1 image7" />
        <img src={img8} alt="Decorative Image 4" className="decorative-image-slide1 image8" />
        <img src={img9} alt="Decorative Image 4" className="decorative-image-slide1 image9" />
      </main>
    </div>
  );
});
