import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const ListComp = props =>{
    return(
        <TouchableOpacity onPress={props.argument.bind(this, props.uid)} >
            <View style={styles.List}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default ListComp;


const styles = StyleSheet.create({

    List : {
        padding : 10,
        marginVertical : 10,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor : '#ccc'
    }

});
