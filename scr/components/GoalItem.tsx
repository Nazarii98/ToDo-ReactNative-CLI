import React from 'react';
import {StyleSheet, Text, View, Pressable, Button} from 'react-native';
import CustomButton from './CustomButton';
import {Colors} from '../styles/colors';

interface GoalItemProps {
  text: string;
  id: string;
  onDeleteItem: (id: string) => void;
  onToggleComplete: (id: string) => void;
  completed: boolean;
}

const GoalItem: React.FC<GoalItemProps> = ({
  text,
  id,
  onDeleteItem,
  onToggleComplete,
  completed,
}) => {
  return (
    <Pressable style={({pressed}) => pressed && styles.pressedItem}>
      <View style={[styles.goalItem, completed && styles.completedItem]}>
        <CustomButton
          onPress={() => onToggleComplete(id)}
          completed={completed}
        />
        <Text style={[styles.goalText, completed && styles.completedText]}>
          {text}
        </Text>
        <Button
          title="X"
          onPress={() => onDeleteItem(id)}
          color={Colors.fuchsiaRose}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    flexDirection: 'row',
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: Colors.royalPurple,
    alignItems: 'center',
  },
  goalText: {
    flex: 1,
    color: 'white',
    fontSize: 24,
    marginHorizontal: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
  completedText: {
    color: Colors.royalPurple,
    textDecorationLine: 'line-through',
  },
  completedItem: {
    backgroundColor: Colors.lavender,
  },
  buttons: {
    flexDirection: 'row',
    gap: 10,
  },
});

export default GoalItem;
