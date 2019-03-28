import React from "react";
import socialLinks from "../data/socialLinks";

class Header extends React.Component {
  renderSocialLinks() {
    return (
      <ul class="social">
        {socialLinks.map(s => {
          return (
            <li>
              <a href={s.link}>
                <i class={`fa ${s.fa}`} />
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
        <div class="row banner">
          <div class="banner-text">
            <h1 class="responsive-headline">giacavicchioli</h1>
            <h3>
              I'm an Italian based <span>software developer</span>.
            </h3>
            <hr />
            {this.renderSocialLinks()}
          </div>
        </div>

        <p class="scrolldown">
          <a class="smoothscroll" href="#about">
            <i class="icon-down-circle" />
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
