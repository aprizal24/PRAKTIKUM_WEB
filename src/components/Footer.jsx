import React from 'react';
import ilab from '/Users/rian/Documents/MyDoc/Semester 5/PraktikumProgramweb/MODUL3/Praktikum/ilab/src/img/logo-ilab.png';
import Fb from '/Users/rian/Documents/MyDoc/Semester 5/PraktikumProgramweb/MODUL3/Praktikum/ilab/src/img/logo-facebook.png';
import Ig from '/Users/rian/Documents/MyDoc/Semester 5/PraktikumProgramweb/MODUL3/Praktikum/ilab/src/img/logo-instagram.png';
import Twit from '/Users/rian/Documents/MyDoc/Semester 5/PraktikumProgramweb/MODUL3/Praktikum/ilab/src/img/logo-twitter.png';


function Footer() {
  return (
    <div className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <img className="mx-auto d-block mb-5" src={ilab} alt="Bootstrap" height="50px" />
            <p className="text-center" style={{ color: 'rgb(169, 169, 169)' }}>Hak Cipta ©2022. Infinite Learning</p>
          </div>

          <div className="col-3">
            <p style={{ color: 'rgb(169, 169, 169)' }}>Layanan</p>
            <p>Pemasaran Email</p>
            <p>Kampanye</p>
            <p>Branding</p>
            <p>Offline</p>
          </div>

          <div className="col-3">
            <p style={{ color: 'rgb(169, 169, 169)' }}>Tentang Kami</p>
            <p>Cerita Kami</p>
            <p>Manfaat</p>
            <p>Tim</p>
            <p>Karier</p>
          </div>

          <div className="col-3">
            <p style={{ color: 'rgb(169, 169, 169)' }}>Ikuti Kami</p>
            <div className="row">
              <div className="col-2">
                <img src={Fb} alt="" width="20" height="20" />
              </div>
              <div className="col-10">
                <p>Facebook</p>
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <img src={Twit} alt="" width="20" height="17" />
              </div>
              <div className="col-10">
                <p>Twitter</p>
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <img src={Ig} alt="" width="20" height="20"/>
              </div>
              <div className="col-10">
                <p>Instagram</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
