import { takeEvery, call, put } from "redux-saga/effects"

function* header({ payload }) {
  return ;
}

export default function* main() {
    yield takeEvery("SOMETHING", header)
}
