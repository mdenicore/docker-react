import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am an innovative solutions engineer with over 20 years experience providing the development,
analysis, design, and leadership for the consistent delivery of impactful business enterprise
solutions.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here is some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                    <span className="icon">
                        <i className="icon-world" />
                    </span>
                    <div className="desc">
                        <h3>Web Development</h3>
                        <p>Several years experience delivering world-class enterprise web and mobile applications utilizing Java, JavaScript ES6, HTML5, CSS3, React, Redux, Kotlin, and Android.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                    <span className="icon">
                        <i className="icon-cloud4" />
                    </span>
                    <div className="desc">
                        <h3>Integrations</h3>
                        <p>Experience in the design, build, and delivery of Microservices utilizing Spring Boot, Spring MVC, REST, Kafka, JPA, and PL/SQL to support the backend integration of enterprise applications.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                    <span className="icon">
                        <i className="icon-star" />
                    </span>
                    <div className="desc">
                        <h3>Leadership</h3>
                        <p>Proven skills in mentoring and leading development teams. Scrum Master for team delivering application for self-service integration of enterprise applications across the ADP enterprise.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
