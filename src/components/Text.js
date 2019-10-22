import React from 'react';
import classNames from 'classnames';

const Text = props => {
  const spanClasses = classNames({
    tooltip: props.score != undefined,
    [`is-tooltip-${props.highlight}`]: props.score != undefined,
    [`has-text-${props.highlight}`]: true,
  });
  return (
    <span
      className={spanClasses}
      data-tooltip={props.score !== undefined ? `Score: ${props.score}` : ''}
    >
      {props.text + ' '}
    </span>
  );
};

export default Text;
