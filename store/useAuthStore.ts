import { create } from "zustand";
import { getSupabaseBrowserClient } from "@/lib/supabase/browserClien";
import type {AuthStore} from '@/types/auth'


export const useAuthStore = create<AuthStore>((set) => ({
  currentUserId: null,
  loading: false,

  setCurrentUserId: (id) =>
    set({
      currentUserId: id,
    }),

  getCurrentUser: async () => {
    const supabase = getSupabaseBrowserClient();

    set({
      loading: true,
    });

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error) {
      console.log("Auth Error:", error.message);

      set({
        currentUserId: null,
        loading: false,
      });

      return;
    }

    set({
      currentUserId: user?.id || null,
      loading: false,
    });
  },
}));