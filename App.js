import React, { Component } from 'react'
import { Text, View } from 'react-native'

class Home extends Component {
   state = {
      myState: 'Lorem ipsum'
   }
   updateState = () => this.setState({ myState: 'The state is fuckeddddd'})
   render() {
      return (
         <View>
			<Text> </Text>
            <Text onPress = {this.updateState}>
               {this.state.myState}
            </Text>
         </View>
      );
   }
}
export default Home;