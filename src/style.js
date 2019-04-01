'use strict';
var React = require('react-native');
var {StyleSheet} = React;

module.exports = StyleSheet.create({
    heading: {
        fontSize: 25,
        textAlign: 'center',
        backgroundColor: '#f4f4f4',
        padding: 5,
        marginBottom: 5,
        marginTop: 50,
    },

    sectionText: {
        fontSize: 15,
        padding: 10,
        lineHeight: 20,
        textAlign: 'center',  
    },

    imageWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },

    image: {
        width: 130,
        height: 130,
        padding: 20,
    },

    scrollView: {
        height: 500,
    },

})