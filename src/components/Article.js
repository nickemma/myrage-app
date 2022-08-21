import './css/Article.css';

const Article = () => (
  <section className="article">
    <div className="feature-content-first">
      <div className="feature-item">
        <img
          src="https://myrage321.netlify.app/static/media/icon1.9d3d39069d7d19ee754280f122c73e68.svg"
          alt="icons"
        />
        <h2>Data Collection</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi
          accumsan cras laoreet.
        </p>
      </div>
      <div className="feature-item">
        <img
          src="https://myrage321.netlify.app/static/media/icon3.da0981622112787428bb99ef359b3c14.svg"
          alt="icons"
        />
        <h2>Mini Information</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi
          accumsan cras laoreet.
        </p>
      </div>
      <div className="feature-item">
        <img
          src="	https://myrage321.netlify.app/static/media/icon2.bbd2b12c5672204ae47d39ee81361938.svg"
          alt="icons"
        />
        <h2>Face Recognition</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi
          accumsan cras laoreet.
        </p>
      </div>
    </div>
    <div className="feature-content-second">
      <div className="feature-item2">
        <img
          src="https://myrage321.netlify.app/static/media/icon4.7cd5593a358cf2645b1de53e5aa33217.svg"
          alt="icons"
        />
        <h2> Saving Option</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi
          accumsan cras laoreet.
        </p>
      </div>
      <div className="feature-item2">
        <img
          src="https://myrage321.netlify.app/static/media/icon5.2cb6215e74c2adec0f24d276b16bb47a.svg"
          alt="icons"
        />
        <h2>Advanced Communication</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi
          accumsan cras laoreet.
        </p>
      </div>
      <div className="feature-item2">
        <img
          src="https://myrage321.netlify.app/static/media/icon5.2cb6215e74c2adec0f24d276b16bb47a.svg"
          alt="icons"
        />
        <h2>Media Support</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id morbi
          accumsan cras laoreet.
        </p>
      </div>
    </div>
    <div className="schedule">
      <div className="demo">
        <img
          src="https://myrage321.netlify.app/static/media/lines_left.0ec9b1c909062614eb5ebdfaa9566487.svg"
          alt="icons"
        />
        <h2>Schedule Demo</h2>
        <img
          src="https://myrage321.netlify.app/static/media/lines_right.3ec5cc788cb651a036ffddcb75d37a6a.svg"
          alt="icons"
        />
      </div>
      <div className="title-text">
        <span>
          Learn more about all the potential that our product can provide to
          enhance your business.
        </span>
        <a href="/">
          <button type="button">BOOK A DEMO</button>
        </a>
      </div>
    </div>
  </section>
);

export default Article;
