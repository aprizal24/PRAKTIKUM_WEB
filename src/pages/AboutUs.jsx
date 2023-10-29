import React from 'react';
import Cod from '/Users/rian/Documents/MyDoc/Semester 5/PraktikumProgramweb/MODUL3/Praktikum/ilab/src/img/Com.jpg';

function AboutUs() {
  return (
    <div>
      <div className="aboutus d-flex align-items-center justify-content-end">
        <div className="text-left p-3" style={{ marginLeft: '20px' }}>
          <h3>ABOUT I-LAB</h3>
          <br />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores iure molestiae in atque ea ex. Quaerat dolorum laborum delectus repudiandae quia at. Fugit, perferendis cum. Numquam, sunt! Rerum, facilis aliquam?</p>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sequi sint corrupti nesciunt dicta culpa sapiente omnis numquam, amet officiis? Nihil obcaecati reprehenderit, porro vitae asperiores tempora vero quisquam a.</p>
        </div>
        <img src={Cod} alt="" width={350} height={500} style={{ marginRight: '80px' }} />
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="hero" style={{ marginTop: '40px',marginLeft: '40px'}}>
            <h2>Our Mission</h2>
            <p>We are committed to delivering high-quality solutions and services to our clients.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="hero" style={{ marginTop: '40px'}}>
            <h2>Why Choose Us</h2>
            <p>We have a team of experts dedicated to providing innovative solutions for your needs.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="hero" style={{ marginTop: '40px' ,marginRight: '40px' }}>
            <h2>Contact Us</h2>
            <p>Feel free to get in touch with us for any inquiries or collaborations.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
