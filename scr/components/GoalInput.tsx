import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image,
  ModalProps,
} from 'react-native';
import {Colors} from '../styles/colors';

interface GoalInputProps extends ModalProps {
  onAddGoal: (text: string) => void;
  onCancel: () => void;
}

const GoalInput: React.FC<GoalInputProps> = ({
  onAddGoal,
  onCancel,
  visible,
}) => {
  const [enteredGoalText, setEnteredGoalText] = useState<string>('');

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/images/stylus.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={onCancel}
              color={Colors.fuchsiaRose}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={addGoalHandler}
              color={Colors.lavender}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: Colors.darkIndigo,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    backgroundColor: Colors.lightLavender,
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});

export default GoalInput;
