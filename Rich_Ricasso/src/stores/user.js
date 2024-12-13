import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    isLoggedIn: false,
    userId: null,
  }),
  actions: {
    login(userId) {
      this.isLoggedIn = true;
      this.userId = userId;
      localStorage.setItem('userId', userId); // Save the user ID
    },
    logout() {
      this.isLoggedIn = false;
      this.userId = null;
      localStorage.removeItem('userId'); // Remove the saved user ID
    },
    initialize() {
      const savedUserId = localStorage.getItem('userId');
      if (savedUserId) {
        this.isLoggedIn = true;
        this.userId = savedUserId;
      }
    },
  },
});
