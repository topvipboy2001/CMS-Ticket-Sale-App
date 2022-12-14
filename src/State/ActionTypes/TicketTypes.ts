export const TICKET_ADD_SUCCESS = "TICKET_ADD_SUCCESS";
export const TICKET_GET_SUCCESS = "TICKET_GET_SUCCESS";
export const TICKET_GET_WITH_FILTER_SUCCESS = "TICKET_GET_WITH_FILTER_SUCCESS";
export const TICKET_FAIL = "TICKET_FAIL";
export const TICKET_LOADING = "TICKET_LOADING";
export const TICKET_UPDATE_DATE_SUCCESS = "TICKET_UPDATE_DATE_SUCCESS";

export type TicketTypes = {
  id: string;
  bookingCode: string | null;
  checkIn: string | null;
  dateTicketRelease: Date | null;
  dateUse: Date | null;
  nameEvent: string | null;
  statusUsage: number | null;
};

export type TicketFilterTypes = {
  dateForm: string | undefined;
  dateTo: string | undefined;
  statusUsage: string | number;
  checkIn: string[];
};

export type TicketUpdateType = {
  id: string;
  dateUse: string | undefined;
};

export interface ITicketLoading {
  type: typeof TICKET_LOADING;
}

export interface ITicketFail {
  type: typeof TICKET_FAIL;
  error: Error;
}

export interface ITicketAddSuccess {
  type: typeof TICKET_ADD_SUCCESS;
  payload: TicketTypes;
}

export interface ITicketGetSuccess {
  type: typeof TICKET_GET_SUCCESS;
  payload: TicketTypes[];
}

export interface ITicketGetWithFilterSuccess {
  type: typeof TICKET_GET_WITH_FILTER_SUCCESS;
  payload: TicketTypes[];
}

export interface ITicketUpdateDateSuccess {
  type: typeof TICKET_UPDATE_DATE_SUCCESS;
  payload: TicketTypes;
}

export type TicketDispatchTypes =
  | ITicketLoading
  | ITicketFail
  | ITicketAddSuccess
  | ITicketGetSuccess
  | ITicketGetWithFilterSuccess
  | ITicketUpdateDateSuccess;
