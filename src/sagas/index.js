import { all, call } from 'redux-saga/effects';

import watchIncrementAsync from './feed';

export default function* rootSaga() {
    yield all([
        call(watchIncrementAsync),
    ]);
}
