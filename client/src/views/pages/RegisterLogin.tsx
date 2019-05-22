import * as React from 'react';
import { Button, Login } from '../components';

const RegisterLogin: React.FC = () => {
  return (
    <div className="page_wrapper">
      <div className="container">
        <div className="register_login_container">
          <div className="left">
            <h1>New Customers</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis porta magna. Pellentesque posuere quam
              ex, non dapibus mauris dignissim a. Morbi a molestie ipsum. Pellentesque habitant morbi tristique senectus
              et netus et malesuada fames ac turpis egestas. Vestibulum pharetra mollis orci eget tincidunt. Nam nec
              accumsan ipsum, nec dapibus risus. Nulla purus lacus, posuere vitae fringilla in, elementum eget neque.
              Etiam at euismod lorem, sed maximus ligula. Phasellus lacinia gravida lacinia. Nam metus ligula, placerat
              non maximus ut, facilisis eget odio. Nulla at sapien pharetra, dignissim enim in, dapibus risus. Nullam
              suscipit felis eget suscipit tincidunt.
            </p>
            <Button
              type="default"
              title="Create an account"
              linkTo="/register"
              addStyles={{
                margin: '10px 0 0 0',
              }}
            />
          </div>
          <div className="right">
            <h2>Registered Customers</h2>
            <p>Log in if you already have an account.</p>
            <Login />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterLogin;
