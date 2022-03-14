import { State } from '../store';

export const getLoadingState =
  (actionType: string) =>
  ({ ui }: State) => {
    const isLoading = ui.isLoading.find((elem) => elem.action === actionType);
    return isLoading ? true : false;
  };
