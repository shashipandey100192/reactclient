import { configureStore } from '@reduxjs/toolkit';
import Myslicerfunc from './Myactions';

export const Mystoredata = configureStore({
    reducer: {
        counter:Myslicerfunc,
      },

})
