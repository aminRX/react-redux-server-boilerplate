import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import todoAction from './../actions/todo';
import { ADD_TODO } from './../constans/constans';

export function* addTodoAsync(action) {
  yield delay(100);
  console.log(action);
}

export default function* watchAddTodoAsync() {
  yield takeEvery(ADD_TODO, addTodoAsync);
}
