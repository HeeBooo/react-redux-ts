import Hello from '../components/Hello';
import * as actions from '../actions';
import { StoreState } from '../types';
import { connect, Dispatch } from 'react-redux';

// mapStateToProps将当前store里的数据作为props绑定到组件上去
export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
    return {
        enthusiasmLevel,
        name: languageName,
    };
}

// mapDispatchToProps利用dispatch函数，创建回调props将actions传递到store
export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
      onIncrement: () => dispatch(actions.incrementEnthusiasm()),
      onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    };
}

export function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
    return Object.assign({}, ownProps, stateProps, dispatchProps);
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Hello);