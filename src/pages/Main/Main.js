import React from 'react';
import Slider from '../../components/Slider/Slider';
import './Main.css';



export default function Main() {
  return (
    <>
      <div className='row'>

        <Slider />

        <div className="slider-left-words">
          <div className='left-title'>
            Подчеркни свою индивидуальность
          </div>
        </div>

      </div>
      <div className="animation-wrapper">
        <div className='item opacity-0 translate0'>Стиль</div>
        <div className='item opacity-0 translate1'>Мода</div>
        <div className='item opacity-0 translate2'>Индивидуальность</div>
        {/* <div className='item opacity-0 translate3'>4dgfgfgfg</div> */}
        {/* <div className='item opacity-0 translate4'>5dgfghghgjhjhjh</div> */}


      </div>
    </>
  )
}
