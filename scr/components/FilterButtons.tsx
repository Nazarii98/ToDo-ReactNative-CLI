import React from 'react';
import {StyleSheet, View} from 'react-native';
import FilterButton from './FilterButton';
import {useDispatch, useSelector} from 'react-redux';
import {setFilter} from '../reducers/filterSlice';
import {RootState} from '../store/store';
import {FilterType} from '../types/Filters';

const FilterButtons: React.FC = () => {
  const filter = useSelector((state: RootState) => state.filter.currentFilter);
  const dispatch = useDispatch();

  const changeFilterHandler = (filterName: FilterType) => {
    dispatch(setFilter(filterName));
  };

  return (
    <View style={styles.filterContainer}>
      <FilterButton
        title="All"
        active={filter === 'all'}
        onPress={() => changeFilterHandler('all')}
      />
      <FilterButton
        title="Completed"
        active={filter === 'completed'}
        onPress={() => changeFilterHandler('completed')}
      />
      <FilterButton
        title="Incomplete"
        active={filter === 'incomplete'}
        onPress={() => changeFilterHandler('incomplete')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 12,
  },
});

export default FilterButtons;
