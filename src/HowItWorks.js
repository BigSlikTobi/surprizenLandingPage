import React from 'react';


const HowItWorks = () => {
  return (
<section id="how-it-works" className="container" >
  <h2 className="text-center mb-4">How it Works</h2>
  <section className="d-flex align-items-stretch">
  <div className="row">
    <div className="col-sm-6 col-md-3">
      <div className="card mb-4">
        <img className="card-img-top" src="https://via.placeholder.com/500x300" alt="Step 1" />
        <div className="card-body">
          <h5 className="card-title">Step 1</h5>
          <p className="card-text">Tell us about the recipient</p>
        </div>
      </div>
    </div>
    <div className="col-sm-6 col-md-3">
      <div className="card mb-4">
        <img className="card-img-top" src="https://via.placeholder.com/500x300" alt="Step 2" />
        <div className="card-body">
          <h5 className="card-title">Step 2</h5>
          <p className="card-text">Choose a category and budget</p>
        </div>
      </div>
    </div>
    <div className="col-sm-6 col-md-3">
      <div className="card mb-4">
        <img className="card-img-top" src="https://via.placeholder.com/500x300" alt="Step 3" />
        <div className="card-body">
          <h5 className="card-title">Step 3</h5>
          <p className="card-text">We'll send the Surprizen Box send to you or to the recipien</p>
        </div>
      </div>
    </div>
    <div className="col-sm-6 col-md-3">
      <div className="card mb-4">
        <img className="card-img-top" src="https://via.placeholder.com/500x300" alt="Step 4" />
        <div className="card-body">
          <h5 className="card-title">Step 4</h5>
          <p className="card-text">Enjoy the special moment</p>
        </div>
      </div>
    </div>
  </div>
  </section>
</section>
  );
};

export default HowItWorks;
