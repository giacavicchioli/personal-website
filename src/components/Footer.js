import React from "react";
import socialLinks from "../data/socialLinks";

function Footer(props) {
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {socialLinks.map((p, i) => {
              return (
                <li key={i}>
                  <a href={p.link}>
                    <i className={`fa ${p.fa}`} />
                  </a>
                </li>
              );
            })}
          </ul>

          <ul className="copyright">
            <li>
              &copy; Copyright {new Date().getFullYear()} Giacomo Cavicchioli
            </li>
            <li>
              Made with <span className="fa fa-heart" /> and{" "}
              <a
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>
            </li>
          </ul>
        </div>

        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
