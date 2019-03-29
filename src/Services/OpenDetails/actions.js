import {
    DETAILS_OPEN,
    DETAILS_CLOSE,
} from './../../constants/types';

export const openDetails = ()=>({
      type: DETAILS_OPEN,
})

export const closeDetails = ()=>({
      type: DETAILS_CLOSE,
})
