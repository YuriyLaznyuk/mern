import {useDispatch} from 'react-redux';
import ActionCreators from '../store/action-creators';
import {bindActionCreators} from 'redux';

export const useAction = () => {
	const dispatch = useDispatch();
	return bindActionCreators(ActionCreators, dispatch);
};
