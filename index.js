import React from 'react';
import { generateRandomNumbers } from './helper'
import { render } from 'react-dom';
import { data } from './exercisesData'
import { Button, Alert } from 'reactstrap';
import WorkoutItem from './src/WorkoutItem';
import './style.css';


class DailyFlex extends React.Component {


  handleClick() {
    const max = 100;
    this.setState({
      showExercises: 'block',
      showButton: 'none'
    });
    
  }


  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    var warmUps = generateRandomNumbers(2, data.warmups.length);
    var exercises = generateRandomNumbers(3, data.exercises.length);
    var coolDowns = generateRandomNumbers(2, data.cooldowns.length);
    this.state = {
      warmup: data.warmups[warmUps[0]],
      warmup1: data.warmups[warmUps[1]],
      exercise: data.exercises[exercises[0]],
      exercise1: data.exercises[exercises[1]],
      exercise2: data.exercises[exercises[2]],
      cool: data.cooldowns[coolDowns[0]],
      cool1: data.cooldowns[coolDowns[1]],
      showExercises: 'none',
      showButton: 'block'
    };
  }




  render() {
    return (
      <div class='container'>
        <h1>CODE Daily Flex</h1>
        <Button color="primary" onClick={this.handleClick.bind(this)} style={{ display: this.state.showButton }}
        >Create Workout</Button>
        <hr />
        <div>
        </div>
        <div class='workoutList' style={{ display: this.state.showExercises }}>
          <Alert color="secondary">
            <h2>Warm up</h2>
            <WorkoutItem workoutData={this.state.warmup}>
              {this.state.warmup.name}
            </WorkoutItem>
            <WorkoutItem workoutData={this.state.warmup1}>
              {this.state.warmup1.name}
            </WorkoutItem>
          </Alert>
          <Alert color="secondary">
            <h2>Exercise</h2>
            <WorkoutItem workoutData={this.state.exercise}>
              {this.state.exercise.name}
            </WorkoutItem>
            <WorkoutItem workoutData={this.state.exercise1}>
              {this.state.exercise1.name}
            </WorkoutItem>
            <WorkoutItem workoutData={this.state.exercise2}>
              {this.state.exercise2.name}
            </WorkoutItem>
          </Alert>
          <Alert color="secondary">
            <h2>Cool Down</h2>
            <WorkoutItem workoutData={this.state.cool}>
              {this.state.cool.name}
            </WorkoutItem>
            <WorkoutItem workoutData={this.state.cool1}>
              {this.state.cool1.name}
            </WorkoutItem>
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