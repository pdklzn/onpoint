import React, { useState } from 'react';
import './Brend.scss';
import btnabout from '../../../public/images/Brend/btnabout.png';
import closebtn from '../../../public/images/Brend/closebtn.png';
import arrowbtn from '../../../public/images/Brend/arrowbtn.png';
import pageindicator from '../../../public/images/Brend/pageindicator.png';
import calendar from '../../../public/images/Brend/calendar.png';
import plate from '../../../public/images/Brend/plate.png';
import bottle from '../../../public/images/Brend/bottle.png';
import bubble1 from '../../../public/images/Brend/bubble1.png';
import bubble2 from '../../../public/images/Brend/bubble2.png';
import bubble3 from '../../../public/images/Brend/bubble3.png';
import bubble4 from '../../../public/images/Brend/bubble4.png';
import bubble5 from '../../../public/images/Brend/bubble5.png';
import bubble6 from '../../../public/images/Brend/bubble6.png';
import bubble7 from '../../../public/images/Brend/bubble7.png';
import bubble8 from '../../../public/images/Brend/bubble8.png';

type PageContent = {
  [key: number]: string[];
}

const pageContent: PageContent = {
  1: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'Faucibus pulvinar elementum integer enim',
    'Faucibus pulvinar elementum integer enim',
  ],
  2: [
    'Mi bibendum neque egestas congue quisque egestas diam',
    'Venenatis lectus magna fringilla urna',
    'Venenatis lectus magna fringilla urna',
  ],
};

const renderAdvList = (pageNum: number) =>
  pageContent[pageNum].map((el, i) => (
    <div key={i + pageNum * pageNum}>
      <span className="item-number">{`0${i + pageNum * pageNum}`}</span>
      <p>{el}</p>
    </div>
  ));

export const Brend = React.memo(() => {
  const [pageOpen, setPageOpen] = useState<'keymessage' | 'advantages'>('keymessage');
  const [currentPage, setCurrentPage] = useState(1);

  const pageIndicatorStyle = currentPage === 2 ? { transform: 'scale(-1, 1)' } : {};

  return (
    <div className={`slider ${pageOpen !== 'keymessage' ? 'keymessage-hidden' : ''}`}>
      <h2 className="brand-name">
        {pageOpen === 'keymessage' && (
          <span className="keymessage-text">
            КЛЮЧЕВОЕ СООБЩЕНИЕ <br />
          </span>
        )}
        <span className="span1">BREND</span>
        <span className="span2">XY</span>
      </h2>

      {pageOpen === 'keymessage' ? (
        <div className="keymessage-box">
          <section className="columns">
            <div className="message-box">
              <img src={plate} alt="plate icon" className="icon1" />
              <p className="text1">
                Ehicula ipsum a arcu
                <br /> cursus vitae. Eu non <br />
                diam phasellus <br />
                vestibulum lorem sed <br />
                risus ultricies
              </p>
            </div>
            <div className="message-box">
              <img src={calendar} alt="calendar icon" className="icon2" />
              <p className="text2">
                A arcu <br />
                cursus vitae
              </p>
            </div>
          </section>
          <button className="btn btn-about" onClick={() => setPageOpen('advantages')}>
            <img src={btnabout} alt="about" />
          </button>
        </div>
      ) : (
        <div className="background-dark">
          <div className="advantage-box">
            <h3 className="title-brend">Преимущества</h3>
            <section className="adv-list">{renderAdvList(currentPage)}</section>
            <div className="button-box">
              <button
                className="btn btn-left"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
                <img src={arrowbtn} alt="left button" />
              </button>
              <img src={pageindicator} alt="page indicator" style={pageIndicatorStyle} />
              <button
                className="btn btn-right"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, 2))}>
                <img src={arrowbtn} alt="right button" />
              </button>
            </div>
            <button className="btn btn-close" onClick={() => setPageOpen('keymessage')}>
              <img src={closebtn} alt="close" />
            </button>
          </div>
        </div>
      )}

      <img src={bottle} className="bottle" alt="spray bottle" />
      <img src={bubble1} className="bubble-1" alt="bubble" />
      <img src={bubble2} className="bubble-2" alt="bubble" />
      <img src={bubble3} className="bubble-3" alt="bubble" />
      <img src={bubble4} className="bubble-4" alt="bubble" />
      <img src={bubble5} className="bubble-5" alt="bubble" />
      <img src={bubble6} className="bubble-6" alt="bubble" />
      <img src={bubble7} className="bubble-7" alt="bubble" />
      <img src={bubble8} className="bubble-8" alt="bubble" />
    </div>
  );
});
