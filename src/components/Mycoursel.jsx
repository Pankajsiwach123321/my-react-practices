import React from 'react'
import imgo from '../assets/images/logo192.png'
const Mycoursel = () => {
  return (
    <div><div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-interval="10">
          <div class="carousel-inner">
              <div class="carousel-item active ">
                  <div className='d-flex justify-content-center '>
                    <img src={imgo} class="d-block" alt="#" />
                  </div>
              </div>
              <div class="carousel-item ">
                  <div className='d-flex justify-content-center '>
                    <img src={imgo} class="d-block" alt="#" />
                  </div>
              </div>
              <div class="carousel-item ">
                  <div className='d-flex justify-content-center '>
                    <img src={imgo} class="d-block" alt="#" />
                  </div>
              </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
          </button>
      </div></div>
  )
}

export default Mycoursel