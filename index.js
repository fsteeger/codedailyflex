import React from 'react';
import { generateRandomNumbers } from './helper'
import { render } from 'react-dom';
import { data } from './exercisesData'
import { Button,Alert } from 'reactstrap';


  

class DailyFlex extends React.Component {


  constructor(props) {
    super(props);
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
      <div class='container'>
        <h1>CODE Daily Flex</h1>
        <Button  color="primary" onClick={this.handleClick.bind(this)}
        >Create Workout</Button>
        <hr />
        <div style={{display: this.state.showExercises }}>
          <Alert color="secondary">
            <h2>Warm up</h2>
            <div><a target="_blank" src={this.state.warmup.gifName}> 1: {this.state.warmup.name}</a></div>
            <div><a target="_blank" src={this.state.warmup1.gifName}> 2: {this.state.warmup1.name}</a></div>
          </Alert>
          <Alert color="secondary">
            <h2>Exercise</h2>
            <div>1: {this.state.exercise.name}</div>
            <div>2: {this.state.exercise1.name}</div>
            <div>3: {this.state.exercise2.name}</div>
          </Alert>
          <Alert color="secondary">
            <h2>Cool Down</h2>
            <div>1: {this.state.cool.name}</div>
            <div>2: {this.state.cool1.name}</div>
          </Alert>
          <Alert color="primary">
            <h2>High 5</h2>
          </Alert>
        </div>
      </div>
    );
  }
}

render(<DailyFlex />, document.getElementById('root'));