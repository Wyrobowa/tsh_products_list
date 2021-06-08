import { all } from 'redux-saga/effects';

// Sagas
import { watchLogin } from './appStatusSaga';
import { watchGetProducts } from './productsSaga';
import { watchGetUser } from './userSaga';

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchGetProducts(),
    watchGetUser(),
  ]);
}
