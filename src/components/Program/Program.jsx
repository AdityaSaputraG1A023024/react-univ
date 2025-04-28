import React from 'react';
import './Program.css';
import Grad1 from '../../utils/images/Grad1.png';
import Grad2 from '../../utils/images/Grad2.png';
import Grad3 from '../../utils/images/Grad3.png';

function Program() {
  return (
    <div className="program py-5">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">Our Program</h2>
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="program-card position-relative overflow-hidden rounded shadow-sm">
              <img src={Grad1} alt="Graduation Degree" className="img-fluid w-100" />
              <div className="program-overlay d-flex flex-column justify-content-center align-items-center">
                <div className="icon mb-2">
                  <i className="bi bi-mortarboard-fill fs-1 text-white"></i>
                </div>
                <h5 className="text-white fw-bold">Graduation Degree</h5>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="program-card position-relative overflow-hidden rounded shadow-sm">
              <img src={Grad2} alt="Master Degree" className="img-fluid w-100" />
              <div className="program-overlay d-flex flex-column justify-content-center align-items-center">
                <div className="icon mb-2">
                  <i className="bi bi-mortarboard-fill fs-1 text-white"></i>
                </div>
                <h5 className="text-white fw-bold">Master Degree</h5>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="program-card position-relative overflow-hidden rounded shadow-sm">
              <img src= {Grad3} alt="Postgraduate" className="img-fluid w-100" />
              <div className="program-overlay d-flex flex-column justify-content-center align-items-center">
                <div className="icon mb-2">
                  <i className="bi bi-mortarboard-fill fs-1 text-white"></i>
                </div>
                <h5 className="text-white fw-bold">Postgraduate</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Program;
