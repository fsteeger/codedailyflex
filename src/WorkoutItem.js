/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './workoutItem.css';


export default class WorkoutItem extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      data: props.workoutData
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div className='workoutItem'>
        <Button color="secondary" onClick={this.toggle}>{this.props.buttonLabel}{this.state.data.name}</Button>
        <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.state.data.name}</ModalHeader>
          <ModalBody>
            That's how you do it:
            <iframe src={this.state.data.gifName} width="480" height="405" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href={this.state.data.gifName}>via GIPHY</a></p>
            <p>This is  
            {" "+this.state.data.difficulty}
             </p>
            
          
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Thanks</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
