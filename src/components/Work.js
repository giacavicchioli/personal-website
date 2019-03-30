import React from "react";
import projects from "../data/projects";

class Work extends React.Component {
  renderProjects() {
    return projects.map((p, idx) => {
      return (
        <div key={idx} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={`#modal-${idx}`} title="">
              <img alt="" src={p.img} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{p.title}</h5>
                  <p>{p.shortDescription}</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="icon-plus" />
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
        <div key={idx} id={`modal-${idx}`} className="popup-modal mfp-hide">
          <img className="scale-with-grid" src={p.img} alt="" />
          <div className="description-box">
            <h4>{p.title}</h4>
            <p>{p.description}</p>
            <span className="categories">
              <i className="fa fa-tag" />
              {p.categories}
            </span>
          </div>

          <div className="link-box">
            <a href={p.link}>Details</a>
            <button className="popup-modal-dismiss">Close</button>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
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
