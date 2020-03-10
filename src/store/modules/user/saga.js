import { takeLatest, call, all, put } from "redux-saga/effects";

import { toast } from "react-toastify";
import { updateProfileSucess, updateProfileFailure } from "./actions";
import api from "../../../services/api";
export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;

    const profile = Object.assign(
      { name, email, avatar_id },
      rest.oldPassword ? rest : {}
    );

    const response = yield call(api.put, "users", profile);

    toast.success("Perfil atualizado com sucesso");

    yield put(updateProfileSucess(response.data));
  } catch (err) {
    toast.error("Error ao atualizar");
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest("@user/UPDATE_PROFILE_REQUEST", updateProfile)]);
