import { all } from "redux-saga/effects"
import { watchUserSaga } from "./UserSaga"

const rootSaga= function*(){
    yield all([watchUserSaga()]);
}

export default rootSaga;