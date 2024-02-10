import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import projectsReducer from '../PersonalHomepage/projectsSlice';
import modesReducer from '../PersonalHomepage/ModeSwitch/modesSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        projects: projectsReducer,
        modes: modesReducer,
    },
    middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;