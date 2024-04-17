import React, {useEffect, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {useAppDispatch, useAppSelector} from '../hooks/ReduxHooks';
import {
  addList,
  deleteList,
  editList,
  initializeApp,
} from '../redux/Todo/TodoActions';
import {stylesTodo} from './Styles';
import {FormData1, FormDataWithDate} from '../redux/Todo/Types';
import Notifications from '../service/Notification';

const Home = () => {
  const dispatch = useAppDispatch();
  const {user} = useAppSelector(state => state.todo);
  const [editIndex, setEditIndex] = useState(-1);
  const [date, setDate] = useState(new Date());
  const [dateText, setDateText] = useState<Date | null>(new Date());
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<FormData1>({
    defaultValues: {
      title: '',
      description: '',
    },
  });
  useEffect(() => {
    dispatch(initializeApp());
  }, []);

  const handleAddTask = async (data: FormData1) => {
    if (dateText) {
      const formDataWithDate: FormDataWithDate = {
        title: data.title,
        description: data.description,
        date: dateText,
      };

      if (editIndex !== -1) {
        Notifications.schduleNotification(
          new Date(Date.now() + 2 * 1000),
          'You have edited Todo',
          'Edit Todo',
        );
        await dispatch(editList({index: editIndex, todo: formDataWithDate}));
      } else {
        Notifications.schduleNotification(
          new Date(Date.now() + 2 * 1000),
          'You have added Todo',
          'Added Todo',
        );
        await dispatch(addList(formDataWithDate));
      }
      reset({
        title: '',
        description: '',
      });
      setDateText(new Date());
      setEditIndex(-1);
    } else {
      console.log('no');
    }
  };

  const handleEditTask = (index: number) => {
    const taskToEdit = user[index];
    reset({
      title: taskToEdit.title,
      description: taskToEdit.description,
    });
    setDateText(taskToEdit.date);
    setEditIndex(index);
  };

  const handleDeleteTask = async (index: number) => {
    await dispatch(deleteList(index));
    Notifications.schduleNotification(
      new Date(Date.now() + 2 * 1000),
      'You have Deleted Todo',
      'Deleted Todo',
    );
    reset({
      title: '',
      description: '',
    });
    setDateText(new Date());
    setEditIndex(-1);
  };

  const handleConfirmDate = (selectedDate: Date) => {
    setDateText(selectedDate);
    setIsDatePickerVisible(false);
  };
  const renderItem = ({
    item,
    index,
  }: {
    item: FormDataWithDate;
    index: number;
  }) => (
    <View style={stylesTodo.task}>
      <Text style={stylesTodo.itemList}>{item.title}</Text>
      <Text style={stylesTodo.itemList}>{item.description}</Text>
      <View style={stylesTodo.taskButtons}>
        <TouchableOpacity onPress={() => handleEditTask(index)}>
          <Text style={stylesTodo.editButton}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteTask(index)}>
          <Text style={stylesTodo.deleteButton}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={stylesTodo.container}>
      <Text style={stylesTodo.title}>To Do App</Text>
      <View>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <View>
              <TextInput
                placeholder="Enter Title"
                placeholderTextColor={'grey'}
                style={stylesTodo.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
              />
              {errors.title && (
                <Text style={{color: 'red'}}>This is required.</Text>
              )}
            </View>
          )}
          name="title"
          rules={{required: true}}
        />
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <View>
              <TextInput
                placeholder="Enter Description"
                placeholderTextColor={'grey'}
                style={stylesTodo.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
              />
              {errors.description && (
                <Text style={{color: 'red'}}>This is required.</Text>
              )}
            </View>
          )}
          name="description"
          rules={{required: true}}
        />
        <TouchableOpacity onPress={() => setIsDatePickerVisible(true)}>
          <Text style={stylesTodo.input}>
            {dateText ? dateText.toLocaleString() : 'Select Date/Time'}
          </Text>
        </TouchableOpacity>
        {isDatePickerVisible && (
          <DatePicker
            modal
            open={isDatePickerVisible}
            textColor="black"
            mode="datetime"
            date={date}
            onDateChange={setDate}
            onConfirm={handleConfirmDate}
            onCancel={() => setIsDatePickerVisible(false)}
            minimumDate={new Date()}
          />
        )}
      </View>

      <TouchableOpacity
        style={stylesTodo.addButton}
        onPress={handleSubmit(handleAddTask)}>
        <Text style={stylesTodo.addButtonText}>
          {editIndex !== -1 ? 'Update Task' : 'Add Task'}
        </Text>
      </TouchableOpacity>
      {user.length === 0 ? (
        <View style={stylesTodo.emptyListContainer}>
          <Text style={stylesTodo.emptyListText}>
            Your to-do list is empty!
          </Text>
        </View>
      ) : (
        <FlatList
          data={user}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default Home;
