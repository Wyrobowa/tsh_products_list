import { put, call } from 'redux-saga/effects';

// Services
import { getData } from '../services/requestService';

export const requestGetDataSaga = (
  successfulAction, unsuccessfulAction, requestTarget,
) => function* requestDataSagaGenerator(action) {
  try {
    const requestData = yield call(getData, requestTarget, action.query);
    yield put(successfulAction(requestData));
  } catch {
    yield put(unsuccessfulAction());
  }
}
