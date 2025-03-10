import {
  CANCELED_ORDER_FAILURE,
  CANCELED_ORDER_REQUEST,
  CANCELED_ORDER_SUCCESS,
  CONFIRMED_ORDERS_FAILURE,
  CONFIRMED_ORDERS_REQUEST,
  CONFIRMED_ORDERS_SUCCESS,
  DELETE_ORDER_FAILURE,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELIVERED_ORDERS_FAILURE,
  DELIVERED_ORDERS_REQUEST,
  DELIVERED_ORDERS_SUCCESS,
  GET_ORDERS_FAILURE,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  PLACED_ORDERS_FAILURE,
  PLACED_ORDERS_REQUEST,
  PLACED_ORDERS_SUCCESS,
  SHIP_ORDERS_FAILURE,
  SHIP_ORDERS_REQUEST,
  SHIP_ORDERS_SUCCESS,
} from "./ActionType";

const initialState = {
  loading: false,
  orders: [],
  error: "",
};

const adminOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ORDERS_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
        error: "",
      };
    case GET_ORDERS_FAILURE:
      return {
        loading: false,
        orders: [],
        error: action.payload,
      };

    case CONFIRMED_ORDERS_REQUEST:
    case PLACED_ORDERS_REQUEST:
    case DELIVERED_ORDERS_REQUEST:
    case CANCELED_ORDER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case CONFIRMED_ORDERS_SUCCESS:
      return {
        ...state,
        confirmed: action.payload,
        isLoading: false,
      };

    case PLACED_ORDERS_SUCCESS:
      return {
        ...state,
        placed: action.payload,
        isLoading: false,
      };

    case DELIVERED_ORDERS_SUCCESS:
      return {
        ...state,
        delivered: action.payload,
        isLoading: false,
      };

    case CANCELED_ORDER_SUCCESS:
      return {
        ...state,
        canceled: action.payload,
        isLoading: false,
      };

    case CONFIRMED_ORDERS_FAILURE:
    case PLACED_ORDERS_FAILURE:
    case DELIVERED_ORDERS_FAILURE:
    case CANCELED_ORDER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    case DELETE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case DELETE_ORDER_SUCCESS:
      return {
        ...state,
        loading: true,
        deletedOrder:action.payload,
      };

    case DELETE_ORDER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case SHIP_ORDERS_REQUEST:
      return {
        ...state,
        isLoading: false,
        error: null,
      };

    case SHIP_ORDERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        shipped: action.payload,
      };

    case SHIP_ORDERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: null,
      };

    default:
      return state;
  }
};

export default adminOrderReducer;
