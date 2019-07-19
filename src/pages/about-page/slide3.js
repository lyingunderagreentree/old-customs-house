import React from 'react'
import aboutPagePic3 from './img/About_3.jpg'

export default () => (
  <div className="slide1 slide columns">
    <div className="container column is-10 is-10-mobile">
      <div className="content-holder">
        <div className="content-holder__item">
          <div><h2>Высокая кухня</h2></div>

          <div className="text-block">
            <p>Меню, которое удовлетворит потребности даже самого привередливого гурмана: 
              изысканные блюда, приготовленные настоящими мастерами кулинарии, дикие морепродукты, 
              шикарная карта вин, уникальные десерты.</p>
          </div>
        </div>
      </div>

    </div>

    <img src={aboutPagePic3} className="background background--img" />

  </div>
)