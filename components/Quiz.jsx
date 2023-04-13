  import { Card, Divider, Text, Button, Radio } from '@geist-ui/core';
  import { useState, useEffect } from 'react';

  export default function Quiz(props) {
    // initial states
    const [state, setState] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [response, setResponse] = useState("success");
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // data loading
      const shuffledOptions = shuffle([props.Op1, props.Op2, props.Op3, props.OpCorrect]);
      setOptions(shuffledOptions);
      setLoading(false);
    }, [props]);

    function shuffle(array) {
      // shuffle function
      let currentIndex = array.length, temporaryValue, randomIndex;

      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

    const handler = val => {
      // handler function
      setState(val);
    };

    function SubmitAnswer() {
      // submit answer function
      setDisabled(true);

      if (options[state - 1] === props.OpCorrect) {
        setResponse("success");
      } else {
        setResponse("error");
      }
    }

    return (
      <>
        {loading && <div className='quiz-placeholder' style={{ width: '750px', height: '300px' }}></div>}
        {!loading && (
          <div className='card-padding fade-in'>
            <Card width="750px">
              <Card.Content className='card-content'>
                <Text b my={0}>{props.Question}</Text>
              </Card.Content>
              <Divider h="1px" my={0} />
              <Card.Content>
                <Radio.Group value={state} onChange={handler} disabled={disabled}>
                  {options.map((option, index) => (
                    <Radio key={index} value={index + 1}>{option}</Radio>
                  ))}
                </Radio.Group>
                <div className='button-padding'>
                  {disabled ? (
                    response === "success" ? (
                      <Text b type="success">⭐ Good job! You got it correct.</Text>
                    ) : (
                      <Text b type="error">😱 Whoops! The correct answer was: {props.OpCorrect}</Text>
                    )
                  ) : (
                    <Button onClick={SubmitAnswer} className='button-padding' auto type="success">
                      Submit
                    </Button>
                  )}
                </div>
              </Card.Content>
            </Card>
          </div>
        )}
        <style
          jsx>{`
            .card-padding {
              padding-top: 20px;
            }

            .button-padding {
              padding-top: 10px;
            }

            .block-button {
              display: block;
              margin-bottom: 10px;
            }

            .card-content {
              padding: 20px;
            }

            .fade-in {
              animation: fade-in 0.5s ease-in;
            }

            @keyframes fade-in {
              0% {
                opacity: 0;
                transform: translateY(20px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}
        </style>
      </>
    );
  }
