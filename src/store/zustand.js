import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { buttonCount } from '@/utils/globals';

export const useCountStore = create(immer((set, get) => ({
  count: {
    countArray: [...Array(buttonCount).keys()].map(() => 0),
    getCount: (id) => id === undefined
      ? (get().count.countArray.reduce((sum, item) => (sum + item)))
      : (get().count.countArray[id])
  },

  add: (id) => set((state) => {
    state.count.countArray[id]++;
  })
})));
