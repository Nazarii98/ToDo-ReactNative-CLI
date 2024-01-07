import React, {useEffect, useState} from 'react';
import {Button, FlatList, StyleSheet, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {AppDispatch, RootState} from '../store/store';
import {Goal} from '../types/Goal';
import {
  applyFilter,
  fetchStoredData,
  saveDataToStorage,
  signOutFromGoogle,
} from '../utils/utils';
import {addGoal, deleteGoal, toggleComplete} from '../reducers/goalsSlice';
import GoalItem from '../components/GoalItem';
import GoalInput from '../components/GoalInput';
import FilterButtons from '../components/FilterButtons';
import {Colors} from '../styles/colors';

const GoalsScreen = () => {
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);
  const courseGoals = useSelector<RootState, Goal[]>(store => store.goals);
  const dispatch = useDispatch<AppDispatch>();
  const filter = useSelector((state: RootState) => state.filter.currentFilter);
  const filteredGoals = applyFilter(courseGoals, filter);

  useEffect(() => {
    const fetchData = async () => {
      const parsedData = await fetchStoredData();
      parsedData.forEach((data: Goal) => dispatch(addGoal(data)));
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    saveDataToStorage(courseGoals);
  }, [courseGoals]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = (enteredGoalText: string) => {
    dispatch(
      addGoal({
        text: enteredGoalText,
        id: Math.random().toString(),
        completed: false,
      }),
    );
    endAddGoalHandler();
  };

  const deleteGoalHandler = (id: string) => {
    dispatch(deleteGoal(id));
  };

  const toggleCompleteHandler = (id: string) => {
    dispatch(toggleComplete(id));
  };

  const singOutHandle = () => {
    signOutFromGoogle();
  };
  return (
    <View style={styles.appContainer}>
      <View style={styles.buttonsContainer}>
        <Button
          title="Log out"
          color={Colors.primaryButtonColor}
          onPress={singOutHandle}
        />
        <Button
          title="Add New Goal"
          color={Colors.primaryButtonColor}
          onPress={startAddGoalHandler}
        />
      </View>

      <FilterButtons />

      <GoalInput
        visible={modalIsVisible}
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandler}
      />

      <View style={styles.goalsContainer}>
        <FlatList
          data={filteredGoals}
          renderItem={itemData => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                completed={itemData.item.completed}
                onDeleteItem={deleteGoalHandler}
                onToggleComplete={toggleCompleteHandler}
              />
            );
          }}
          keyExtractor={item => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
};

export default GoalsScreen;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  goalsContainer: {
    flex: 4,
  },
});
