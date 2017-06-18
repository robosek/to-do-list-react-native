import React, { Component } from 'react';
import TaskList from './TaskList';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  }

  onAddingStarted(){
    this.props.navigation.navigate('Form');
  }

  render() {
     return (
        <TaskList todos={this.props.screenProps.todos} onAddingStarted={this.onAddingStarted.bind(this)} onDoneTask={this.props.screenProps.onDoneTask}/>
    );
  }
}

export default HomeScreen;