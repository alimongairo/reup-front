import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../app/store';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useTypedSelector;
