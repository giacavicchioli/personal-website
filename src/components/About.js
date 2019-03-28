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
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam.
          </p>

          <div class="row">
            <div class="columns contact-details">
              <h2>Contact Details</h2>
              <p class="address">test test tsets</p>
            </div>

            <div class="columns download">
              <p>
                <a href="#" class="button">
                  <i class="fa fa-download" />Download Resume
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
