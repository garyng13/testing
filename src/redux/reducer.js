import {DISHES} from '../share/dishes';
import {COMMENTS} from '../share/comments';
import {PROMOTIONS} from '../share/promotions';
import {LEADERS} from '../share/leaders';

export const initialState = {
    dishes : DISHES,
    comments : COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
}

export const Reducer = (state = initialState, action)=>{
    return state;
}
