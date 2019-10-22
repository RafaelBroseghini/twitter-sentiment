import React, { useState, useEffect } from 'react';
import TextDisplay from './TextDisplay';

import sentiment from 'wink-sentiment';

const useSentimentGeneratorState = () => {
  const [text, setText] = useState('');
  const [tokens, setTokens] = useState([]);
  const [score, setScore] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    setSentimentState(text);
    setCharCount(text.length);
  }, [text]);

  const setSentimentState = text => {
    const res = sentiment(text);
    setScore(res.score);
    setTokens(res.tokenizedPhrase);
  };

  const setScoreColor = score => {
    if (score > 0) {
      return 'textarea is-success';
    } else if (score < 0) {
      return 'textarea is-danger';
    }
    return 'textarea is-primary';
  };

  return {
    text,
    score,
    tokens,
    charCount,
    setText,
    setScoreColor,
  };
};

const SentimentGenerator = () => {
  const {
    text,
    score,
    tokens,
    charCount,
    setText,
    setScoreColor,
  } = useSentimentGeneratorState();

  return (
    <>
      <section className='section'>
        <div className='container'>
          <div className='column is-half is-offset-one-quarter'>
            <h1 className='title'>Tweet score: {score}</h1>
            <div className='field'>
              <div className='control'>
                <textarea
                  maxLength={170}
                  className={setScoreColor(score)}
                  type='text'
                  value={text}
                  onChange={e => setText(e.target.value)}
                />
              </div>
            </div>
            <TextDisplay tokens={tokens} charCount={charCount} />
          </div>
        </div>
      </section>
    </>
  );
};

export default SentimentGenerator;
