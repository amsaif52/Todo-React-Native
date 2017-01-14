import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform
} from 'react-native';

import HEADER from './HEADER';
import FOOTER from './FOOTER';
import TODO from './TODO';

export default class APP extends Component{

  constructor(props){
    super(props);
    this.state ={
      value:"",
      items: [],
      allComplete: false
    }
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleToggleAllComplete = this.handleToggleAllComplete.bind(this);
  }

  handleAddItem(){
    if(!this.state.value) return value;
    const newItem = [
      ...this.state.items,
      {
        key: Date.now(),
        text:this.state.value,
        completed:false
      }
    ];
    console.log(newItem);
    debugger;
    this.setState({
      items:newItem,
      value:''
    });
  }

  handleToggleAllComplete(){
    const complete = !this.state.allComplete;
    const newItems = this.state.items.map((item)=>({
      ...this.state,
      complete
    }));
    console.table(newItems);
    return this.setState({
      items: newItems,
      allComplete: complete
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <HEADER
          value={this.state.value}
          onAddItem={this.handleAddItem}
          onChange={(value)=>{this.setState({value})}}
          onToggleAllComplete={this.handleToggleAllComplete}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#F5F5F5",
    ...Platform.select({
      ios:{
        paddingTop:30,
      },
    }),
  },
  content:{
    flex:1,
  }
});
