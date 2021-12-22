import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

function DiceZone({isNumber}) {
  const [text, setText] = React.useState(undefined)
  return (
    <View style={styles.diceZone}>
      
    </View>
  )
}

function Zone({color}) {
  function renderDiceZones() {
    let diceZones = [
      <View style={{width: 32, height: 32, borderWidth: 1, borderRadius: 5, alignItems: 'center', justifyContent:'center', backgroundColor: 'white'}}>
        <MaterialCommunityIcons name="arrow-right-bold-box" size={32} color={color} />
      </View>
    ]
    for (let i=1; i< 12; i++) {
      diceZones.push(
        <View style={{width: 32, height: 32, borderWidth: 1, borderRadius: 5, backgroundColor: 'white'}}>
        </View>
      )
    }
    return diceZones
  }

  return (
    <View style={[styles.zone, {opacity: 0.8, justifyContent: 'space-around', borderWidth: 2, borderColor: color, height: 70, paddingBottom: 25, paddingTop: 10, paddingHorizontal: 10, backgroundColor: color}]}>
      {renderDiceZones()}
    </View>
  )
}

function Square({color}) {
  function renderDiceZones() {
    let diceZones = []
    for (let i=0; i< 4; i++) {
      let diceRow = [];
      for (let j=0; j<4; j++) {
        diceRow.push(
          <View style={{width: 32, height: 32, borderWidth: 1, borderRadius: 4, backgroundColor: 'white'}}>
          </View>
        )
      }
      diceZones.push(
        <View style={[styles.zone, {flex: 1, justifyContent: 'space-around'}]}>
          {diceRow}
        </View>
      )
    }
    return diceZones
  }

  return (
    <View style={[styles.zone, {flex: 1, flexDirection: 'column', opacity: 0.8, justifyContent: 'space-around', borderWidth: 2, borderColor: color, paddingBottom: 25, paddingTop: 10, paddingHorizontal: 10, backgroundColor: color, paddingRight: 50, paddingBottom: 50}]}>
      {renderDiceZones()}
    </View>
  )
}

export default function App() {
  return (
    <SafeAreaView style={{backgroundColor: 'grey'}}>
    <View style={styles.container}>
      <View style={{flexDirection: 'row', width: '100%', height: 200}}>
      </View>
      <View style={{flexDirection: 'row', width: '100%', height: 200}}>
        <View style={[styles.zone, {flex: 1, flexDirection: 'column'}]}>
          <View style={[styles.zone, {flex: 1, borderWidth: 1, borderColor: 'white'}]}/>
          <View style={[styles.zone, {flex: 1, borderWidth: 1, borderColor: 'white'}]}/>
          <View style={[styles.zone, {flex: 1, borderWidth: 1, borderColor: 'white'}]}/>
        </View>
        <View style={[styles.zone, {flex: 6, flexDirection: 'column'}]}>
          <View style={[styles.zone, {flex: 1, borderColor: 'white'}]}>
            <View style={[styles.zone, {flex: 1, borderWidth: 1, borderColor: 'white'}]}/>
            <View style={[styles.zone, {flex: 1, borderWidth: 1, borderColor: 'white'}]}/>
            <View style={[styles.zone, {flex: 1, borderWidth: 1, borderColor: 'white'}]}/>
            <View style={[styles.zone, {flex: 1, borderWidth: 1, borderColor: 'white'}]}/>
            <View style={[styles.zone, {flex: 1, borderWidth: 1, borderColor: 'white'}]}/>
            <View style={[styles.zone, {flex: 1, borderWidth: 1, borderColor: 'white'}]}/>
          </View>
          <View style={[styles.zone, {flex: 1, borderWidth: 1, borderColor: 'white'}]}/>
          <View style={[styles.zone, {flex: 1, borderWidth: 1, borderColor: 'white'}]}/>
        </View>
      </View>
      <View style={{flexDirection: 'row', width: '100%', height: 250}}>
        <Square color='yellow'/>
        <Square color='blue'/>
      </View>
      <Zone color='green'/>
      <Zone color='orange'/>
      <Zone color='purple'/>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '2%'
  },
  zone: {
    width: '100%',
    borderRadius: 5,
    // marginVertical: '2%',
    flexDirection: 'row'
  },
  diceZone: {
    width: 32,
    height: 32
  }
});
