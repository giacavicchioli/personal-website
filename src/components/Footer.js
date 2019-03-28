import React from "react";

function Footer(props) {
  return (
    <footer>
      <div class="row">
        <div class="twelve columns">
          <ul class="social-links">
            <li>
              <a href="#">
                <i class="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-google-plus" />
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-linkedin" />
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-dribbble" />
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-skype" />
              </a>
            </li>
          </ul>

          <ul class="copyright">
            <li>&copy; Copyright 2014 CeeVee</li>
            <li>
              Design by{" "}
              <a title="Styleshout" href="http://www.styleshout.com/">
                Styleshout
              </a>
            </li>
          </ul>
        </div>

        <div id="go-top">
          <a class="smoothscroll" title="Back to Top" href="#home">
            <i class="icon-up-open" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
