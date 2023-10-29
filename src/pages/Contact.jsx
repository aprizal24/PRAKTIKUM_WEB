import React from 'react';
import Cont from '/Users/rian/Documents/MyDoc/Semester 5/PraktikumProgramweb/MODUL3/Praktikum/ilab/src/img/Chat.jpg';

function Contact() {
  return (
    <div className="contact">
      <div className="row">
        <div className="col-md-5"> {/* Bagian kiri */}
          <img src={Cont} alt="" width={350} height={500} style={{ marginLeft: '70px', marginRight: '70px' }} />
        </div>
        <div className="col-md-6"> {/* Bagian kanan */}
          <div className="text-center">
            <br />
            <h1>Send Message</h1>
          </div>
          <br />
          <form>
            <div className="form-group" style={{ marginLeft: '40px' ,marginBottom: '30px' }}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" className="form-control" style={{ background: 'rgb(161, 161, 161)' }} />
            </div>
            <div className="form-group" style={{marginLeft: '40px', marginBottom: '30px' }}>
              <label htmlFor="studentId">NIM</label>
              <input type="text" id="studentId" className="form-control" style={{ background: 'rgb(161, 161, 161)'}} />
            </div>
            <div className="form-group" style={{ marginLeft: '40px', marginBottom: '30px' }}>
              <label htmlFor="message">Message</label>
              <textarea id="message" className="form-control" style={{ background: 'rgb(161, 161, 161)'}} rows="4" />
            </div>
            <button type="submit" className="btn btn-" style={{marginLeft: '40px'}}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
