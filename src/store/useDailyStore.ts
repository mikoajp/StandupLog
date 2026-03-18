import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DailyEntry } from '../types';

interface DailyState {
  entries: DailyEntry[];
  addEntry: (entry: DailyEntry) => void;
  getEntryByDate: (date: string) => DailyEntry | undefined;
}

export const useDailyStore = create<DailyState>()(
  persist(
    (set, get) => ({
      entries: [],
      addEntry: entry =>
        set(state => ({
          entries: [entry, ...state.entries],
        })),
      getEntryByDate: date => get().entries.find(e => e.date === date),
    }),
    {
      name: 'daily-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
