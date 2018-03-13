import React from "react";
import { storiesOf } from "@storybook/react";
import Toast from "./Toast";
import ToastContainer from "./ToastContainer";
import { createStore } from "redux";
import toastReducer from "./store/reducer";
import { Provider } from "react-redux";

{
  /* <Toast icon="check_circle" message="A success message here." /> */
}

let store = createStore(toastReducer);

storiesOf("Toast", module)
  .add("Normal", () => (
    <div style={{ backgroundColor: "#f3f3f3", height: "200px" }}>
      <Provider store={store}>
        <ToastContainer />
      </Provider>
    </div>
  ))
  .add("With error", () => (
    <div style={{ backgroundColor: "#f3f3f3", height: "200px" }}>
      <Toast
        icon="check_circle"
        message="An error message"
        error
        buttonText="Try Again"
      />
    </div>
  ))
  .add("With callback on button", () => (
    <div style={{ backgroundColor: "#f3f3f3", height: "200px" }}>
      <Toast
        icon="check_circle"
        message="A message"
        buttonText="Dismiss"
        onButtonClick={() => alert("Button clicked")}
      />
    </div>
  ));
