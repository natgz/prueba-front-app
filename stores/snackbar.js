import { defineStore } from 'pinia'

export const snackbarStore = defineStore('snackbar-store', {
  state: () => {
    return {
      snackbar: () => ({
        show: false,
        message: '',
      })
    }
  },
  actions: {
    setSnackbar(obj) {
      this.snackbar = obj

      setTimeout(() => {
        this.snackbar = { show: false, message: '' }
      }, 5000)
    },
  },
})
