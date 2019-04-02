import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux';



 class CounterApp extends Component {



  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row', justifyContent:'space-around',width:200 }}>
          <TouchableOpacity onPress={()=>
          this.props.increaseCounter()

          }>

            <Text style={{fontSize:20}}>Increase</Text>
          </TouchableOpacity>


          <TouchableOpacity>

            <Text style={{fontSize:20}}>{this.props.counter}</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={()=>
          this.props.decreaseCounter()

          }>

            <Text style={{fontSize:20}}>Decrease</Text>
          </TouchableOpacity>






        </View>
        
      </View>
    );
  }
}

function mapDispatchToProps(dispatch){
    return {

        increaseCounter:()=>dispatch({type:'INCREASE_COUNTER'}),
        decreaseCounter:()=>dispatch({type:'DECREASE_COUNTER'}),

    }
}






function mapStateToProps(state){
return {

    counter:state.counter
}
  

}

export default  connect(mapStateToProps,mapDispatchToProps)(CounterApp)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
 
});
