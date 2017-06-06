'use-strict'
import React from 'react';
/*
* (屏幕宽高模块)
* */
import {
  Dimensions,
  Image,
  View,Text,
  InteractionManager
} from 'react-native';
import TabBarView from '../Containers/TabBarView';
//获取屏幕的宽度和高度
var {height,width} = Dimensions.get('window');
class Splash extends React.Component{
  //构造方法
  constructor(props){
    super(props);
  }
  compoentDidMount(){
    const {navigator} = this.props;
    this.timer = setTimeout(()=>{
      InteractionManager.runAfterInteractions(()=>{
         navigator.resetTo({
           component:TabBarView,
           name:'TabBarView'
         });
       });
     },2000);
  }
  componentWillUnMount(){
     this.timer && clearTimeout(this.timer);
  }
  render(
       return (
           <View style={{flex:1}}>
           <Image style={{ flex:1,width:width,height:height}} source={ require('../Img/10.png')}/>
           </View>
       )
  )
}
export default Splash;














