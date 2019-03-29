import React from "react";
import projects from "../data/projects";

class Work extends React.Component {
  renderProjects() {
    return projects.map((p, idx) => {
      return (
        <div class="columns portfolio-item">
          <div class="item-wrap">
            <a href={`#modal-${idx}`} title="">
              <img alt="" src={p.img} />
              <div class="overlay">
                <div class="portfolio-item-meta">
                  <h5>{p.title}</h5>
                  <p>{p.shortDescription}</p>
                </div>
              </div>
              <div class="link-icon">
                <i class="icon-plus" />
              </div>
            </a>
          </div>
        </div>
      );
    });
  }

  renderProjectDetails() {
    return projects.map((p, idx) => {
      return (
        <div id={`modal-${idx}`} class="popup-modal mfp-hide">
          <img class="scale-with-grid" src={p.img} alt="" />
          <div class="description-box">
            <h4>{p.title}</h4>
            <p>{p.description}</p>
            <span class="categories">
              <i class="fa fa-tag" />
              Branding, Webdesign
            </span>
          </div>

          <div class="link-box">
            <a href={p.link}>Details</a>
            <a className="popup-modal-dismiss">Close</a>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <section id="portfolio">
        <div class="row">
          <div class="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div
              id="portfolio-wrapper"
              class="bgrid-quarters s-bgrid-thirds cf"
            >
              {this.renderProjects()}
            </div>
          </div>

          {this.renderProjectDetails()}
        </div>
      </section>
    );
  }
}

export default Work;
