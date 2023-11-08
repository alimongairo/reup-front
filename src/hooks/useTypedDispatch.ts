import { AnyAction } from 'redux';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../app/store';

export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;

const useTypedDispatch = () => useDispatch<AppThunkDispatch>();

export default useTypedDispatch;
