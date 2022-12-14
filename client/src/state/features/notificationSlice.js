import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alertTypes: {
    alertSuccess: "",
    alertError: "",
  },
};

export const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    setNotification: (state, action) => {
      if (action.payload.alertType === "success") {
        return {
          ...state,
          alertTypes: {
            ...state.alertTypes,
            alertSuccess: action.payload.msg,
          },
        };
      } else if (action.payload.alertType === "error") {
        return {
          ...state,
          alertTypes: {
            ...state.alertTypes,
            alertError: action.payload.msg,
          },
        };
      }
    },
    removeNotification: (state, action) => {
      return {
        ...state,
        alertTypes: {
          ...state.alertTypes,
          alertSuccess: "",
          alertError: "",
        },
      };
    },
  },
});

export const { setNotification, removeNotification } =
  notificationSlice.actions;

export default notificationSlice.reducer;
