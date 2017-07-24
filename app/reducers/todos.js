import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

var index = {};
index.USERS = [
  {
    "tag": "Xiaoyun", "active": true
  }, {
    "tag": "Andrew", "active": true
  }, {
    "tag": "Kyle", "active": true
  }
];
index.TRANSLATE = [
  {
    "tag": "restaurant", "active": true
  }, {
    "tag": "store", "active": true
  }, {
    "tag": "common", "active": true
  }
];
index.FIELDS = [
  {
    "id": 0,
    "date": "Mon Aug 07 2017",
    "title":"Depart from DCA",
    "subtitle": "Boarding Time 9:35 AM. Transfer at Toronto. 3:35 PM Arrive at Haneda Airport.",
    "tags": ["Xiaoyun", "Andrew", "Kyle"],
    "active": true,
  }
];


export const todoCount = createReducer(0, {
  [types.ADD_TODO](state, action) {
    return state + 1;
  }
});

export const activeUsers = createReducer(index.USERS, {
  [types.SET_ACTIVE_USERS](state, action) {
    return action.state;
  }
});

export const userFilteredTodos = createReducer(index.FIELDS, {
  [types.SET_USER_FILTERED_TODOS](state, action) {
    return action.state;
  }
});
export const activeTranslate = createReducer(index.TRANSLATE, {
  [types.SET_ACTIVE_TRANSLATE](state, action) {
    return action.state;
  }
});
export const filteredTranslations = createReducer({}, {
  [types.SET_FILTERED_TRANSLATIONS](state, action) {
    return action.state;
  }
});