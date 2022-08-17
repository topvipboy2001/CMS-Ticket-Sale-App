export const INVOICE_TICKET_ADD_SUCCESS = "INVOICE_TICKET_ADD_SUCCESS";
export const INVOICE_TICKET_GET_SUCCESS = "INVOICE_TICKET_GET_SUCCESS";
export const INVOICE_TICKET_GET_SUCCESS_WITH_FILTER =
  "INVOICE_TICKET_GET_SUCCESS_FILTER";
export const INVOICE_TICKET_FAIL = "INVOICE_TICKET_FAIL";
export const INVOICE_TICKET_LOADING = "INVOICE_TICKET_LOADING";

export type InvoiceTicketTypes = {
  id: string;
  dateUse: Date | null;
  name: string | null;
  checkIn: string | null;
  status: boolean | null;
};

export type FilterInvoiceTicketType = {
  status: string | boolean | null;
  dateFrom: Date | string | null;
  dateEnd: Date | string | null;
};

export interface IInvoiceTicketLoading {
  type: typeof INVOICE_TICKET_LOADING;
}

export interface IInvoiceTicketFail {
  type: typeof INVOICE_TICKET_FAIL;
  error: Error;
}

export interface IInvoiceTicketAddSuccess {
  type: typeof INVOICE_TICKET_ADD_SUCCESS;
  payload: InvoiceTicketTypes;
}

export interface IInvoiceTicketGetSuccess {
  type: typeof INVOICE_TICKET_GET_SUCCESS;
  payload: InvoiceTicketTypes[];
}
export interface IInvoiceTicketGetSuccessWithFilter {
  type: typeof INVOICE_TICKET_GET_SUCCESS_WITH_FILTER;
  payload: InvoiceTicketTypes[];
}

export type InvoiceTicketDispatchTypes =
  | IInvoiceTicketLoading
  | IInvoiceTicketFail
  | IInvoiceTicketAddSuccess
  | IInvoiceTicketGetSuccess
  | IInvoiceTicketGetSuccessWithFilter;
