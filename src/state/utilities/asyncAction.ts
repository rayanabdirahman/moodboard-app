import { AsyncActionStatus } from '../actions/types';

interface StartedAsyncAction {
  type: string;
  status: AsyncActionStatus.STARTED;
}

interface SucceededAsyncAction {
  type: string;
  status: AsyncActionStatus.SUCCEEDED;
  payload: any;
}

interface FailedAsyncAction {
  type: string;
  status: AsyncActionStatus.FAILED;
  payload: Error;
}

export type AsyncAction =
  | StartedAsyncAction
  | SucceededAsyncAction
  | FailedAsyncAction;

function startedAsyncAction(type: string): StartedAsyncAction {
  return {
    type,
    status: AsyncActionStatus.STARTED
  };
}

function succeededAsyncAction(
  type: string,
  payload: any
): SucceededAsyncAction {
  return {
    type: `${type}_SUCCESS`,
    status: AsyncActionStatus.SUCCEEDED,
    payload
  };
}

function failedAsyncAction(type: string, error: Error): FailedAsyncAction {
  return {
    type: `${type}_FAIL`,
    status: AsyncActionStatus.FAILED,
    payload: error
  };
}

export function async(
  type: string,
  action: (...args: any[]) => Promise<any>,
  ...args: any[]
) {
  return async (dispatch: any) => {
    dispatch(startedAsyncAction(type));
    try {
      const payload = await action(...args);
      dispatch(succeededAsyncAction(type, payload));
    } catch (error: any) {
      dispatch(failedAsyncAction(type, error));
    }
  };
}
