import React  from 'react';
import {
    Navigator,
    View,
    StyleSheet,
    Text
} from 'react-native';
import Splash from '../Components/Splash';
import StatusBarIOS from '../Components/StatusBarIOS';
class App extends React.Component{
   render(){
      return (
          <View style={{ flex:1}}>
               <StatusBarIOS barStyle="default" />
              /*
              使用导航器可以让你在应用的不同场景（页面）间进行切换。导航器通过路由对象来分辨不同的场景。利用renderScene方法，导航栏可以根据指定的路由来渲染场景。
              可以通过configureScene属性获取指定路由对象的配置信息，从而改变场景的动画或者手势。查看Navigator.SceneConfigs来获取默认的动画和更多的场景配置选项。
             */
             <Navigator
                  //定义启动的时候加载的路由
                  initialRoute ={{ name:'Splash',compoent:Splash}}
                  //用来配置场景和动画
                  configureScene ={(route) =>{
                    if(route.sceneCongif){
                        return route.sceneConfig;
                    }
                    return Navigator.SceneConfigs.FloatFromRight;
                  }}
                  //用来渲染指定路由的场景。调用的参数是路由和导航器。
                  renderScene={(route,navigator)=>{
                   let Component = route.Component;
                   return (
                       <Component navigator={navigator} route={route} {...route.passProps}/>
                   )
                  }}
             />
          </View>
      )
   }
}
export default App;