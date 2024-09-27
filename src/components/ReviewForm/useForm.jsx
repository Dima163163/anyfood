import { useReducer } from 'react';

const DEFAULT_FROM_VALUE = {
  name: "",
  text: "",
  rating: 1
}

const SET_NAME_ACTION_TYPE = 'setName';
const SET_TEXT_ACTION_TYPE = 'setText';
const SET_RATING_ACTION_TYPE = 'setRating';
const SET_CLEAR_ACTION_TYPE = 'setClear';

const reducer = (state, action) => {
  const {type, payload} = action;

  switch(type) {
    case SET_NAME_ACTION_TYPE:
      return {
        ...DEFAULT_FROM_VALUE,
        name: payload
      };
    case SET_TEXT_ACTION_TYPE:
      return {
        ...state,
        text: payload
      };
    case SET_RATING_ACTION_TYPE:
      return {
        ...state,
        rating: payload
      };
    case SET_CLEAR_ACTION_TYPE:
      return {
        ...DEFAULT_FROM_VALUE,
      };
    default:
      return state;
  }
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FROM_VALUE);

  const {name, text, rating} = form;

  const setName = (value) => {
    dispatch({type: SET_NAME_ACTION_TYPE, payload: value})
  };

  const setText = (value) => {
    dispatch({type: SET_TEXT_ACTION_TYPE, payload: value})
  };

  const setRating = (value) => {
    dispatch({type: SET_RATING_ACTION_TYPE, payload: value})
  };

  const setClear = () => {
    dispatch({type: SET_CLEAR_ACTION_TYPE})
  };

  return {
    name,
    text,
    rating,
    setName,
    setText,
    setRating,
    setClear
  };
};