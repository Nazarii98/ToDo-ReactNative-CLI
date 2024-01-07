import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {Colors} from '../styles/colors';

interface CustomButtonProps extends TouchableOpacityProps {
  title?: string;
  completed: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  title,
  completed,
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, completed && styles.activeButton]}
      {...props}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 34,
    width: 34,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: Colors.royalPurple,
  },
  buttonText: {
    // Add text styles here if needed
  },
});

export default CustomButton;
