import {Rules} from '../lib/Rules';

const rulesReducer = function rulesReducer(state = Rules(), action) {
  switch (action.type) {
    default:
      return state;
  }
};

export default rulesReducer;