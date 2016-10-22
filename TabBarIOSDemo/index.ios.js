/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TabBarIOS
} from 'react-native';

// 获取屏幕宽度和高度
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

var TabBarIOSDemo = React.createClass({

    getInitialState() {
        return {
            tabBarSelectedItem: '联系人'
        }
    },

    // 绘制视图
    render() {
        return(
            <View style={styles.container}>
                {/* 头部 */}
                <View style={styles.headerStyle}>
                    <Text style={styles.headerTextStyle}>tabBar选项卡切换</Text>
                </View>

                {/* tabBar */}
                <TabBarIOS barTintColor="black" tintColor='orange'>
                    {/* 首页 */}
                    <TabBarIOS.Item
                        systemIcon="contacts"
                        selected={this.state.tabBarSelectedItem=='联系人'}
                        onPress={()=>{this.setState({
                            tabBarSelectedItem: '联系人'
                        })}}
                    >
                        <View style={styles.commonViewStyle}>
                            <Text style={styles.commonTextStyle}>联系人</Text>
                        </View>
                    </TabBarIOS.Item>

                    {/* 搜索 */}
                    <TabBarIOS.Item
                        systemIcon="search"
                        selected={this.state.tabBarSelectedItem=='搜索'}
                        onPress={()=>{this.setState({
                            tabBarSelectedItem: '搜索'
                        })}}
                    >
                        <View style={styles.commonViewStyle}>
                            <Text style={styles.commonTextStyle}>搜索</Text>
                        </View>
                    </TabBarIOS.Item>

                    {/* 下载 */}
                    <TabBarIOS.Item
                        systemIcon="downloads"
                        selected={this.state.tabBarSelectedItem=='下载'}
                        onPress={()=>{this.setState({
                            tabBarSelectedItem: '下载'
                        })}}
                    >
                        <View style={styles.commonViewStyle}>
                            <Text style={styles.commonTextStyle}>下载</Text>
                        </View>
                    </TabBarIOS.Item>

                    {/* 书店 */}
                    <TabBarIOS.Item
                        systemIcon="bookmarks"
                        selected={this.state.tabBarSelectedItem=='书店'}
                        onPress={()=>{this.setState({
                            tabBarSelectedItem: '书店'
                        })}}
                    >
                        <View style={styles.commonViewStyle}>
                            <Text style={styles.commonTextStyle}>书店</Text>
                        </View>
                    </TabBarIOS.Item>
                </TabBarIOS>

            </View>
        )
    }
});


// 设置样式
const styles = StyleSheet.create({

    container: {
        flex: 1
    },

    headerStyle: {
        marginTop: 20,
        width: width,
        height: 44,
        backgroundColor: 'black'
    },

    headerTextStyle: {
        textAlign: 'center',
        height: 44,
        lineHeight: 44,
        color: 'white',
        fontSize: 20
    },

    commonViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    commonTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 30
    }
})


AppRegistry.registerComponent('TabBarIOSDemo', () => TabBarIOSDemo);
