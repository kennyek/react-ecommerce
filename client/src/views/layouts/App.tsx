import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCompass, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const App: React.FC = props => {
  return (
    <div>
      <header className="bck_b_light">
        <div className="container">
          <div className="left">
            <div className="logo">
              WAVES
            </div>
          </div>
          <div className="right">
            <div className="top">
              TOP LINKS
            </div>
            <div className="bottom">
              BOTTOM LINKS
            </div>
          </div>
        </div>
      </header>
      <div className="page_container">
        {props.children}
      </div>
      <footer className="bck_b_dark">
        <div className="container">
          <div className="logo">
            Waves
          </div>
          <div className="wrapper">
            <div className="left">
              <h2>Contact information</h2>
              <div className="business_nfo">
                <div className="tag">
                  <FontAwesomeIcon
                    icon={faCompass}
                    className="icon"
                  />
                  <div className="nfo">
                    <div>Address</div>
                    <div>Something 1234</div>
                  </div>
                </div>
                <div className="tag">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="icon"
                  />
                  <div className="nfo">
                    <div>Phone</div>
                    <div>012 345 67 89</div>
                  </div>
                </div>
                <div className="tag">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="icon"
                  />
                  <div className="nfo">
                    <div>Working hours</div>
                    <div>Mon-Fri @ 9-21</div>
                  </div>
                </div>
                <div className="tag">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="icon"
                  />
                  <div className="nfo">
                    <div>Email</div>
                    <div>nfo@example.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="left">
              <h2>Be the first to know</h2>
              <div>
                <div>
                  You snooze, you lose.
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;