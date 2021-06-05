import { TReducer } from 'src/store/rootReducer';

export const routeSelector = (state: TReducer) => state.notificationReducer.routeName;
export const notificationSelector = (state: TReducer) => state.notificationReducer.notification;
