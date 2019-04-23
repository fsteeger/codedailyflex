import React from 'react';
import { generateRandomNumbers,getGif } from './helper'
import { render } from 'react-dom';
import { data } from './exercises'
import { Button,Jumbotron,Alert } from 'reactstrap';


  

class DailyFlex extends React.Component {


  constructor(props) {
    super(props);
    //var lala = getGif();
    this.handleClick = this.handleClick.bind(this);
    this.state = { warmup: 0,
    warmup1: 0,
    exercise: 0,
    exercise1: 0,
    exercise2: 0,
    cool: 0,
    cool1: 0,
    showExercises: 'none' };
  }

  

  
  handleClick() {
    const max = 100;
    var warmUps = generateRandomNumbers(2,data.warmups.length);
    var exercises = generateRandomNumbers(3,data.exercises.length);
    var coolDowns = generateRandomNumbers(2,data.cooldowns.length);

    this.setState({ 
      warmup: data.warmups[warmUps[0]],
      warmup1: data.warmups[warmUps[1]],
      exercise: data.exercises[exercises[0]],
      exercise1: data.exercises[exercises[1]],
      exercise2: data.exercises[exercises[2]],
      cool: data.cooldowns[coolDowns[0]],
      cool1: data.cooldowns[coolDowns[1]],
      showExercises: 'block'
      });
  }

  handleClickReset() {
    this.setState({ warmup: 0,
    warmup1: 0,
    exercise: 0,
    exercise1: 0,
    exercise2: 0,
    cool: 0,
    cool1: 0 
    });
  }

  render() {
    return (
      <div>
        <h1>CODE Daily Flex</h1>
        <Button  color="primary" onClick={this.handleClick.bind(this)}
        >Create Workout</Button>
        <hr />
        <div style={{display: this.state.showExercises }}>
          <Jumbotron>
            <h2>Warm up</h2>
            <div>1: {this.state.warmup}</div>
            <div>2: {this.state.warmup1}</div>
          </Jumbotron>
          <Jumbotron>
            <h2>Exercise</h2>
            <div>1: {this.state.exercise}</div>
            <div>2: {this.state.exercise1}</div>
            <div>3: {this.state.exercise2}</div>
          </Jumbotron>
          <Jumbotron>
            <h2>Cool Down</h2>
            <div>1: {this.state.cool}</div>
            <div>2: {this.state.cool1}</div>
          </Jumbotron>
          <Alert color="primary">
            <h2>High 5</h2>
          </Alert>
        </div>
      </div>
    );
  }
}

render(<DailyFlex />, document.getElementById('root'));