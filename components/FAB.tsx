import { Text, Pressable, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

interface Props {
  label: string;

  position?: 'left' | 'right';

  // Methods
  onPress?: () => void;
  onLongPress?: () => void;
}

export default function FAB({ label, onPress, onLongPress, position = 'right' }: Props) {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={({ pressed }) => [
        styles.floatinButton,
        position === 'right' ? styles.positionRight : styles.positionLeft,
        pressed && { opacity: 0.75 }
      ]}>
      <Text style={styles.textButton}>{label}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  floatinButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#65558F',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  positionRight: {
    right: 20,
  },
  positionLeft: {
    left: 20,
  },
  textButton: {
    color: '#fff',
    fontSize: 20,
  },
});