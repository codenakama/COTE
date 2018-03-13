import Immutable from "seamless-immutable";
import * as types from "./actionTypes";

export const initialState = Immutable({
  messages: []
});

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.TOAST_ADD_MESSAGE:
      return Immutable.merge(state, {
        messages: {
          $push: [
            {
              message: action.payload.message,
              timeout: action.payload.timeout,
              type: action.payload.type || "INFO",
              // TODO: could use proper id creation util here
              id: new Date().getUTCMilliseconds()
            }
          ]
        }
      });
    case types.TOAST_REMOVE_MESSAGE: {
      const newMessages = state.messages.filter(
        msg => msg.id !== action.payload
      );
      return Immutable.merge(state, { messages: { $set: newMessages } });
    }
    default:
      return state;
  }
}

// Selectors
export const getToasts = state => state.messages;
