/**
 * ${NAME}
 * Created by ${USER} on ${DATE}.
 */
 'use strict';
 import React,{ Component } from 'react';
 import {
    View,
    Text,
 } from 'react-native';
 
const DefaultProps = {

};

const DefaultPropsTypes = {

};

export default class ${NAME} extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    // 渲染
    render() {
        return (
            <View>
                 <Text>${NAME}</Text>
            </View>
        );
    }
}
${NAME}.defaultProps = DefaultProps;
${NAME}.propTypes = DefaultPropsTypes;
