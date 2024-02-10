import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import projectsReducer from '../features/PersonalHomepage/Portfolio/projectsSlice';
import modesReducer from '../common/ModeSwitch/modesSlice';

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