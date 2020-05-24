import { takeLatest, all } from "redux-saga/effects";

import types from "redux/types/countriesType";
import {
  userGetUniqueCountrySaga,
  userGetListCountriesSaga,
} from "./countriesSaga";

export default function* rootSaga() {
  yield all([
    takeLatest(
      types.COUNTRIES_GET_UNIQUE_COUNTRY_SAGA,
      userGetUniqueCountrySaga
    ),
    takeLatest(
      types.COUNTRIES_GET_LIST_COUNTRIES_SAGA,
      userGetListCountriesSaga
    ),
  ]);
}
