import * as constants from '../constants';

// 负责操作增加行为
export interface IncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
}

// 负责操作减少行为
export interface DecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
}

// 描述哪些action是可以增减还是减少的 
export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

// 实际action
export function incrementEnthusiasm(): IncrementEnthusiasm {
    return {
        type: constants.INCREMENT_ENTHUSIASM
    };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    };
}