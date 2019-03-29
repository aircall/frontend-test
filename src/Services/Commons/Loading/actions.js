import {
    IS_LOADING,
    IS_LOADED,
} from './../../../constants/types';

export const isLoading = ()=>({
      type: IS_LOADING,
})

export const isLoaded = ()=>({
      type: IS_LOADED,
})
