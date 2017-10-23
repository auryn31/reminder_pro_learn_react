import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';
import { bake_cookie, read_cookie } from 'sfcookies';


const reminder = (action) => {
  let {text, dueDate } = action;
  return {
    id: Math.random(),
    text,
    dueDate
  }
}

const removeByID = (state = [], id) => {
  const reminders = state.filter(reminder => reminder.id !== id);
  console.log('new reduced reminders', reminders);
  return reminders;
}

const reminders = (state = [], action) => {
  let reminders = null;
  state = read_cookie('reminders');
  switch (action.type) {
    case ADD_REMINDER:
        reminders = [...state, reminder(action)]
        return saveAndReturn(reminders);
    case DELETE_REMINDER:
        reminders = removeByID(state, action.id);
        return saveAndReturn(reminders);
    case CLEAR_REMINDERS:
        reminders = [];
        return saveAndReturn(reminders);
    default:
    return state;
  }
}

const saveAndReturn = (reminders) => {
  bake_cookie('reminders', reminders);
  return reminders;
}

export default reminders;
