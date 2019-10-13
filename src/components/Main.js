import PropTypes from 'prop-types'
import React from 'react'
import Activity from './Activity'

const ACTIVITIES = [
  {title: 'Tech Lead @ McKinsey & Company', time: 'January 2017—Present', image: require('../images/mckinsey.png'), current: true},
  {title: 'Lead Engineer @ Urban Massage', time: 'July 2015—January 2017', image: require('../images/urban.jpg')},
  {title: 'Full Stack Developer @ Ardroid', time: 'July 2010—July 2015', image: require('../images/ardroid.png')},
  {title: 'Full Stack Developer @ Alpha Apps', time: 'May 2013—July 2015', image: require('../images/alpha-apps.png')},
  {title: 'Full Stack Developer @ AITNews', time: 'February 2013—June 2015', image: require('../images/aitnews.jpg')},
  {title: 'Full Stack Developer @ PixelInvention', time: 'September 2011—March 2013', image: require('../images/pixelinvention.jpg')},
  {title: 'Bachelor of Science @ University of Portsmouth', time: '2015, Major: Computing', image: require('../images/svu.jpg')},
  {title: 'Higher National Diploma @ Syrian Virtual University', time: '2014, Major: Marketing & Business Applications', image: require('../images/uop.png')},
];

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <p>Here's what I've been up to lately:</p>
          {ACTIVITIES.filter(a=>a.current).map((activity, index) => (
            <Activity key={index} activity={activity}/>
            ))}
          <p>And in the past:</p>
          {ACTIVITIES.filter(a=>!a.current).map((activity, index) => (
            <Activity key={index} activity={activity}/>
          ))}
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>

          <p>Your ideal candidate for a hands-on VP/Head of Eng. I aspire to build products &amp; services that improve the quality of people's lives, while I highly value creativity and excellence</p>
          <p>After building and scaling up multiple businesses working with world-class teams as a consultant I realised that this is my passion and I want to do it again where I have a stake in the business</p>
          <p>I’m a solution architect and a tech lead with about a decade of experience leading and working with various teams across different geographies and industries, main skills are in UI/UX, React, NodeJS, AWS, and Docker. Main industries are retail and banking</p>
          <p>I’m also an occasional public speaker, and I’m a big advocate of transparency across teams, agility and learning from mistakes, and data-driven decision making</p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <p>You can reach me at <a href="mailto:louay@alakkad.me">louay@alakkad.me</a> or DM me on one of my social media accounts</p>
          <ul className="icons">
            <li>
              <a href="https://linkedin.com/in/louay8" className="icon fa-linkedin">
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/louy" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/l0uy" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
