import  React, { Component } from 'react';
import { Text, View, StyleSheet, ListView, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import TaskRow from './TaskRow'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:40,
    backgroundColor:"#F7F7F7",
    justifyContent:"flex-start"
  },
  button:{
    height:60,
    borderColor:"#05A5D1",
    borderWidth:2,
    backgroundColor:"#333",
    margin:20,
    justifyContent:'center',
    alignItems:'center',
  },
  buttonText:{
    color:"#FAFAFA",
    fontSize:20,
    fontWeight:'600',

  }

});

class TaskList extends Component{
  constructor(props){
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1,r2) => r1!==r2
    });

    this.state = {
      dataSource: ds.cloneWithRows(props.todos)
    }

    
    this.renderRow = this.renderRow.bind(this);

  }

  componentWillReceiveProps(nextProps){
    var ds = this.state.dataSource.cloneWithRows(nextProps.todos);
    this.setState({dataSource:ds})
  }

  renderRow(todo){
    return(<TaskRow onDoneTask={this.props.onDoneTask} todo={todo}/>)
  }

    render(){
        return(
             <View style={styles.container}>
                <ListView 
                key={this.props.todos} 
                dataSource={this.state.dataSource} 
                renderRow={this.renderRow} />
                <TouchableHighlight style={styles.button} onPress={this.props.onAddingStarted}>
                    <Text style={styles.buttonText}>
                      Add one
                    </Text>
                  </TouchableHighlight>
            </View>
            );
    }
}

TaskList.propTypes = {
  onDoneTask:PropTypes.func.isRequired,
  onAddingStarted : PropTypes.func.isRequired,
  todos : PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TaskList;