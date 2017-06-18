import  React, { Component } from 'react';
import { Text,TextInput, View, StyleSheet, ListView,TouchableHighlight, Alert } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:150,
    backgroundColor:"#F7F7F7",
    justifyContent:"flex-start"
  },
  input: {
    borderWidth:1,
    borderColor:"white",
    height:50,
    marginLeft:10,
    marginRight:10,
    padding:15,
    borderRadius:3
  },
  button:{
    height:60,
    borderColor:"#05A5D1",
    borderWidth:2,
    backgroundColor:"#333",
    margin:10,
    justifyContent:'center',
    alignItems:'center',
  },
  buttonText:{
    color:"#FAFAFA",
    fontSize:20,
    fontWeight:'600',
  },
  cancelButton:{
      backgroundColor:"#666"
  }

});

class TaskForm extends Component{
    static navigationOptions = {
        title: 'Form',
    }

    constructor(props){
      super(props);
      this.task = {task:''};
    }

    onTextChanged(taskText){
      this.task = {task:taskText}
    }

    onAdd(){
      if(this.task.task!==''){
        this.props.screenProps.onAddTask(this.task);
      }
      this.task={task:''};
      this.props.navigation.goBack();
    }

    onCancel(){
      this.props.navigation.goBack();
    }

    render(){
        return(
        <View style={styles.container}>
            <TextInput style={styles.container.input} onChangeText={this.onTextChanged.bind(this)}/>
              <TouchableHighlight style={styles.button} onPress={this.onAdd.bind(this)}>
                    <Text style={styles.buttonText}>
                      Add
                    </Text>
              </TouchableHighlight>
              <TouchableHighlight style={[styles.button,styles.cancelButton]} onPress={this.onCancel.bind(this)}>
                    <Text style={styles.buttonText}>
                      Cancel
                    </Text>
              </TouchableHighlight>
        </View>
        );
    }

}

export default TaskForm;