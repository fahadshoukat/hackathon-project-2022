import React from 'react'
import sliderImg from '../../images/slider-image.jpg'
const Slider = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col py-5">
                <img className='img-fluid' src={sliderImg} alt="slider-Image" />
            </div>
        </div>
    </div>
  )
}

export default Slider