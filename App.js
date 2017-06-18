import React, { Component } from 'react';
import { Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen'
import TaskForm from './TaskForm';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      todos:[
        {task:'Learn reat native'},
        {task:'Learn redux'}
      ]
    }
  }

  onAddTask(task){
    var todos = this.state.todos;
    todos.push(task);
    this.setState({todos})
  }

  onDoneTask(task){
      var todos = this.state.todos;
      var index = todos.indexOf(task);
      todos.splice(index,1);
      this.setState({todos});

      Alert.alert(
      'Success',
      'Task was signed as Done!',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }

  render(){
    return(<StackNav screenProps={{todos:this.state.todos,onAddTask:this.onAddTask.bind(this),onDoneTask:this.onDoneTask.bind(this)}} />);
  }
}

const StackNav = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Form:{
    screen: TaskForm
  }
});

export default App;

