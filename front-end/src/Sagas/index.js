import { fork } from "redux-saga/effects"
import HeaderSaga from "../Screens/Header/saga";

export default function* main() {
    yield fork(HeaderSaga)
}
