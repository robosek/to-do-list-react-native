import  React, { Component } from 'react';
import { Text, View, StyleSheet, ListView,TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#fff",
    borderWidth:1,
    borderColor:"#E7E7E7",
    flex: 1,
    flexDirection:"row",
    justifyContent:"space-between",
    padding:20,
    marginBottom:20,
    marginLeft:20,
    marginRight:20
  },
  label:{
    fontSize:30,
    fontWeight:'300'
  },
  doneButton:{
      borderRadius:5,
      backgroundColor:"green",
      padding:5
  },
});

class TaskRow extends Component{

    doneTask(){
        var task = this.props.todo;
        this.props.onDoneTask(task);
    }

    render(){
        return(
            <View style={styles.container}>
                 <Text style={styles.label}>{this.props.todo.task}</Text>
                 <TouchableHighlight style={styles.doneButton} onPress={this.doneTask.bind(this)}> 
                     <Text style={{color:"white"}}>Done</Text>
                 </TouchableHighlight>
            </View>
        );
    }

}

TaskRow.PropTypes = {
    task: PropTypes.shape({
        task: PropTypes.string.isRequired,
    }).isRequired
}

export default TaskRow;