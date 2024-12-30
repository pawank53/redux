import { call, put, takeLatest } from "redux-saga/effects"
import { fetchUsersSagaFailed, fetchUsersSagaSuccess, fetchUsers } from "./UserSliceSaga";


const fetchUserSaga = function* () {
    try {
        const response = yield call(() => 
            fetch('https://jsonplaceholder.typicode.com/users').then((res) => {
                if (res.ok) {
                    return res.json(); // Return the parsed JSON on success
                } else {
                    throw new Error("Failed to fetch the user!");
                }
            })
        );
        yield put(fetchUsersSagaSuccess(response)); // Pass the fetched data to the store
    } catch (error) {
        yield put(fetchUsersSagaFailed(error.message)); // Handle errors
    }
};


export const watchUserSaga=function* (){
    yield takeLatest(fetchUsers.type, fetchUserSaga);
}