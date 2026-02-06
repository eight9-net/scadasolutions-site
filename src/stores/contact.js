import { defineStore } from 'pinia';
import https from '../https.js';

export const useContactStore = defineStore('contact', {
  state: () => ({
    loading: false,
    error: null,
    success: false,
    form: {
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
      this.error = null;
      this.success = false;

      try {
        const response = await https.sendContactForm(request);
        if (response.status >= 200 && response.status < 300) {
          this.success = true;
          return response;
        } else {
          this.error = response.data?.message || 'Failed to send contact form';
          return response;
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
      this.error = null;
      this.success = false;
    },
  },
});
