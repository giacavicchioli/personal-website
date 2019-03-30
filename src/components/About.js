import React from "react";

function About(props) {
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src="images/profilepic.jpg" alt="" />
        </div>

        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>
            Born on 1993 near Modena (IT), I've always been interested in
            computer science and technology.
            <br />
            In 2016 I got my bachelor degree in Software Engineering at the
            University of Bologna.
            <br />
            Right now I work as a software developer in a company that produces
            cash handling devices, with headquarter in Mirandola (MO).
          </p>

          <div className="row">
            {/* <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">test test tsets</p>
            </div> */}

            <div className="columns download">
              <p>
                <a
                  href="https://www.dropbox.com/s/0uph6hb723f99ox/CV.pdf?dl=0"
                  className="button"
                >
                  <i className="fa fa-download" />
                  Download CV
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
