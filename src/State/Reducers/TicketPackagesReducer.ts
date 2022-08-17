import moment from "moment";
import {
  TicketPackageDispatchTypes,
  TicketPackageTypes,
  TICKET_PACKAGE_ADD_SUCCESS,
  TICKET_PACKAGE_FAIL,
  TICKET_PACKAGE_GET_SUCCESS,
  TICKET_PACKAGE_LOADING,
  TICKET_PACKAGE_UPDATE_SUCCESS,
} from "../ActionTypes/TicketPackageTypes";

export interface IdefaultState {
  loading: boolean;
  error?: Error;
  current: TicketPackageTypes[];
}

const initialState: IdefaultState = {
  loading: false,
  current: [],
};

const TicketPackageReducer = (
  state: IdefaultState = initialState,
  action: TicketPackageDispatchTypes,
): IdefaultState => {
  switch (action.type) {
    case TICKET_PACKAGE_FAIL:
      return {
        loading: false,
        current: state.current,
        error: action.error,
      };

    case TICKET_PACKAGE_LOADING:
      return {
        loading: true,
        current: state.current,
      };

    case TICKET_PACKAGE_GET_SUCCESS:
      return {
        loading: false,
        current: action.payload,
      };

    case TICKET_PACKAGE_ADD_SUCCESS:
      return {
        loading: false,
        current: [
          ...state.current,
          {
            ...action.payload,
            validDate: {
              seconds: moment(action.payload.validDate).unix(),
              nanoseconds: 0,
            },
            expiryDate: {
              seconds: moment(action.payload.validDate).unix(),
              nanoseconds: 0,
            },
          },
        ],
      };

    case TICKET_PACKAGE_UPDATE_SUCCESS:
      return {
        loading: false,
        current: state.current.map((value) => {
          if (value.id === action.payload.id) {
            return action.payload;
          }
          return value;
        }),
      };

    default:
      return state;
  }
};

export default TicketPackageReducer;
