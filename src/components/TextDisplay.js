import React from 'react';
import Text from './Text';

import utils from '../utils';

const TextDisplay = props => {
  const setColor = score => {
    if (score > 0) {
      return 'success';
    } else if (score < 0) {
      return 'danger';
    }
    return 'grey';
  };

  return (
    <>
      <progress
        className='progress is-info is-small'
        value={props.charCount}
        max='170'
      >
        {' '}
      </progress>

      <article className='message is-large is-info'>
        <div className='message-header'>
          <p>Post</p>
        </div>
        {props.tokens !== undefined ? (
          <div className='message-body'>
            {utils.range(0, props.tokens.length - 1).map(i => (
              <Text
                key={i}
                text={props.tokens[i].value}
                highlight={setColor(props.tokens[i].score)}
                score={props.tokens[i].score}
              />
            ))}
          </div>
        ) : (
          <span></span>
        )}
      </article>
    </>
  );
};
export default TextDisplay;
