import React from "react";

function About(props) {
  return (
    <section id="about">
      <div class="row">
        <div class="three columns">
          <img class="profile-pic" src="images/profilepic.jpg" alt="" />
        </div>

        <div class="nine columns main-col">
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

          <div class="row">
            <div class="columns contact-details">
              <h2>Contact Details</h2>
              <p class="address">test test tsets</p>
            </div>

            <div class="columns download">
              <p>
                <a href="#" class="button">
                  <i class="fa fa-download" />
                  Download Resume
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
