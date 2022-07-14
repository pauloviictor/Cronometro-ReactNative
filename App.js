import React, { Component } from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      time: 0,
      timer: null,
      button: 'GO',
      lastTime: null
    }

    this.timer = null;
    this.Go = this.Go.bind(this);
    this.Clear = this.Clear.bind(this);
  }

  Go(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
    }else{
      this.timer = setInterval( () => {
        this.setState({time: this.state.time + 0.1})
      }, 100)
    }
    
    if(this.state.button != 'STOP'){
      this.setState({button: 'STOP'})
    }else{
      this.setState({button:'GO'})
    }
    

  }

  Clear(){
    //pausa o cronometro
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null
    }
    //troca os valores
    this.setState({
      lastTime: this.state.time,
      time: 0,
      button: 'GO'
    })
 
  }

  render(){
    return(
      <View style={styles.main}>
        <Image source={require('./src/cronometro.png')}/>

        <Text style={styles.timeText}> {this.state.time.toFixed(1)}s </Text>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.Go}>
            <Text style={styles.btnText}> {this.state.button} </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.Clear}>
            <Text style={styles.btnText}>CLEAR</Text>
          </TouchableOpacity>

        </View>

        <Text style={styles.textLastTime}> {this.state.lastTime != null ? 'Last time is: ' + this.state.lastTime.toFixed(1) + 's' : ''} </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  main:{
    flex: 1,
    backgroundColor: '#999394',
    alignItems: 'center',
    justifyContent: 'center'
  },
  timeText:{
    marginTop: -150,
    fontSize: 50,
    fontWeight: 'bold',
    color: '#ffff'
  },
  btnArea:{
    flexDirection: 'row',
    marginTop: 100
  },
  btn:{
    margin: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    borderWidth: 4,
    borderRadius: 15,
    borderColor: '#fff'
  },
  btnText:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff'
  },
  textLastTime:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#D70008'
  }
});

export default App;