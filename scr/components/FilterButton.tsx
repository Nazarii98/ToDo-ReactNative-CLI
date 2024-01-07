import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../styles/colors';

interface FilterButtonProps {
  title: string;
  active: boolean;
  onPress: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  title,
  active,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.filterButton, active && styles.activeFilterButton]}
      onPress={onPress}>
      <Text
        style={[
          styles.filterButtonText,
          active && styles.activeFilterButtonText,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  filterButton: {
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 12,
  },
  activeFilterButton: {
    backgroundColor: Colors.royalPurple,
  },
  filterButtonText: {
    color: Colors.lavender,
    fontSize: 20,
  },
  activeFilterButtonText: {
    color: 'white',
  },
});

export default FilterButton;
