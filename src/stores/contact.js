import { defineStore } from 'pinia';
import https from '../https.js';

export const useContactStore = defineStore('contact', {
  state: () => ({
    loading: false,
    form: {
      honeypot: '',
      first_name: '',
      last_name: '',
      phone: '',
      email: '',
      message: '',
      subject: '',
      property_type: '',
      company: '',
      schedule: 'no',
      is_valid: '',
    },
  }),

  actions: {
    async doSendContactForm(request) {
      this.loading = true;

      try {
        const response = await https.sendContactForm(request);
        if (response.status >= 200 && response.status < 300 && response.data?.MessageId) {
          return true;
        } else {
          return false;
        }
      } catch (err) {
        this.error = err.message || 'An error occurred';
        throw err;
      } finally {
        this.loading = false;
      }
    },

    resetState() {
      this.loading = false;
    },
  },
});
