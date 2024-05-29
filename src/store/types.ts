// types.ts
export interface RootState {
    firstName: string;
    lastName: string;
}
  
// Define action types
export const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';
export const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME';

interface UpdateFirstNameAction {
    type: typeof UPDATE_FIRST_NAME;
    payload: string;
    [key: string]: any;
}

interface UpdateLastNameAction {
    type: typeof UPDATE_LAST_NAME;
    payload: string;
    [key: string]: any;
}

export type AppActions = UpdateFirstNameAction | UpdateLastNameAction;
  