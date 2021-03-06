import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {colors} from "../../utils/color"
import {spacing} from "../../utils/sizes"
export const Timer = ({ focusSubject }) => {
  return (
    <View style={styles.container}>
      <View style={{paddingTop:spacing.xxl }}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title:{
    color: colors.white,
    textAlign: "center"
  },
  task: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center"
  }
});
