import React from "react";
import socialLinks from "../data/socialLinks";

class Header extends React.Component {
  renderSocialLinks() {
    return (
      <ul className="social">
        {socialLinks.map((s, i) => {
          return (
            <li key={i}>
              <a href={s.link}>
                <i className={`fa ${s.fa}`} />
              </a>
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    return (
      <header id="home">
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">giacavicchioli</h1>
            <h3>
              I'm an Italian based <span>software developer</span>.
            </h3>
            <hr />
            {this.renderSocialLinks()}
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle" />
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
