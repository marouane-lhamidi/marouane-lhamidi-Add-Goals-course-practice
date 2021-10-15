import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View, Modal} from 'react-native';

const AddGoal = props =>{
    const [goal, setGoal] = useState('');
    const goalInput = (e) => {
        setGoal(e);
    }
    const goalInputs = () => {
        props.functions(goal);
        setGoal('');
    }

    return(
        <Modal visible={props.model} animationType="slide">
            <View  style={styles.InputContainer}>
                <TextInput
                    placeholder="Course Goals"
                    style={styles.Input}
                    onChangeText={goalInput}
                    value={goal}
                />
                <View style={styles.Buttons}>
                    <View style={styles.button}>
                        <Button
                            title="Add"
                            onPress={goalInputs}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Close"
                            color="red"
                            onPress={props.close}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}
export default AddGoal;


const styles = StyleSheet.create({

    InputContainer : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    Input : {
        borderColor : 'black',
        borderWidth : 1,
        padding : 10,
        width : '80%',
        marginBottom : 10
    },
    Buttons : {
        flexDirection : 'row',
        justifyContent: 'space-around',
        width: '80%'
    },
    button : {
        width: '40%',
    }

});
