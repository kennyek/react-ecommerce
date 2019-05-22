import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  type: string;
  title: string;
  linkTo: string;
  addStyles: React.CSSProperties;
}

const Button: React.FC<Props> = props => {
  function buttons() {
    let template: string | JSX.Element = '';

    switch (props.type) {
      case 'default':
        template =
          <Link
            className="link_default"
            to={props.linkTo}
            {...props.addStyles}
          >
            {props.title}
          </Link>
          break;
      default:
        template = '';
        break;
    }

    return template;
  }

  return (
    <div className="my_link">
      {buttons()}
    </div>
  );
};

export default Button;
