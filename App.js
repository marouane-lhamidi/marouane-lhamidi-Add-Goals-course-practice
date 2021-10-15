import React, {useState} from 'react';
import {StyleSheet, View, Button, FlatList} from 'react-native';
import AddGoal from "./Compnents/AddGoal";
import ListComp from "./Compnents/Listcomp";

function App() {
    const [ourGoals, setOurGoals] = useState([])
    const [modal, setModal] = useState(false)


    const goalAdd = (arg) => {
        if (arg) {
            setOurGoals(current => [
                ...current,
                {uid: Math.random().toString(), val: arg}
            ]);
            setModal(false);
        }
    }
    const goOut = () => {
        setModal(false);
    }
    const DeleteItem = (goalId) => {
        setOurGoals( current => {
            return ourGoals.filter(goal => goal.uid !== goalId)
        });
    }
    console.log('hello');
  return (
    <View  style={styles.screen}>
      <Button title='add goal' onPress={() => setModal(true)} />
      <AddGoal
          model={modal}
          functions={goalAdd}
          close = {goOut}
      />
      <FlatList
          keyExtractor={(item, index)=> item.uid}
          data={ourGoals}
          renderItem={ itemData =>
              <ListComp
                  title={itemData.item.val}
                  argument = {DeleteItem}
                  uid = {itemData.item.uid}

              />
          } />
    </View>
  );
}
export default App;


const styles = StyleSheet.create({
    screen : {
        padding : 50,
    }

});
