import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useShallow } from "zustand/react/shallow";

import { SESSION_STORAGE } from "src/app-constants.ts";

type SessionStateType = {
  accessToken: string | null;
  refreshToken: string | null;
  setSession: ({ access, refresh }: { access: string; refresh: string }) => void;
  logout: () => void;
};

export const useSessionStore = create<SessionStateType>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      setSession: ({ access, refresh }) => set({ accessToken: access, refreshToken: refresh }),
      logout: () => set({ accessToken: undefined, refreshToken: undefined }),
    }),
    {
      name: SESSION_STORAGE, // localStorage
      version: 1,
      partialize: (state) => ({
        accessToken: state.accessToken,
        refreshToken: state.refreshToken,
      }),
    },
  ),
);

export function useSessionStoreSelector<T>(selector: (state: SessionStateType) => T): T {
  return useSessionStore(useShallow(selector));
}
