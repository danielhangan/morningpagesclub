import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type Store = {
  fontSize: number;
  fontFamily: string;
  pageSize: string;
  pageColor: string;
  contentText: string;
  setFontSize: (value: number) => void | Promise<void>;
  setFontFamily: (value: string) => void | Promise<void>;
  setPageSize: (value: string) => void | Promise<void>;
  setPageColor: (value: string) => void | Promise<void>;
  setContentText: (value: string) => void | Promise<void>;
}

let appState: any = (set: any, get: any): Store => ({
  fontSize: 14,
  fontFamily: 'sans',
  pageSize: '40vw',
  pageColor: 'background',
  contentText: '',
  setFontSize: (value: number) => set(() => ({ fontSize: value })),
  setFontFamily: (value: string) => set(() => ({ fontFamily: value })),
  setPageSize: (value: string) => set(() => ({ pageSize: value })),
  setPageColor: (value: string) => set(() => ({ pageColor: value })),
  setContentText: (value: string) => set(() => ({ contentText: value })),
})

appState = devtools(appState)
appState = persist(appState, {
  name: 'app-state',
  // getStorage: () => sessionStorage,
})

export const appStore = create<Store>(appState)

