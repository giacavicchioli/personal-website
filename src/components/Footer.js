import React from "react";
import socialLinks from "../data/socialLinks";

function Footer(props) {
  return (
    <footer>
      <div class="row">
        <div class="twelve columns">
          <ul class="social-links">
            {socialLinks.map(p => {
              return (
                <li>
                  <a href={p.link}>
                    <i class={`fa ${p.fa}`} />
                  </a>
                </li>
              );
            })}
          </ul>

          <ul class="copyright">
            <li>
              &copy; Copyright {new Date().getFullYear()} Giacomo Cavicchioli
            </li>
            <li>
              Made with <span class="fa fa-heart" /> and{" "}
              <a href="https://reactjs.org" target="_blank">
                React
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
