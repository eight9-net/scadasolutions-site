<script setup>
  import { ref } from 'vue';
  const form = ref({
    first_name: '',
    email: '',
    message: ''
  });

  function sendContactForm(data) {
    // Simulate sending form data to an API endpoint
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Form submitted:', data);
        resolve();
      }, 1000);
    });
  }
</script>

<template>
  <form @submit.prevent="sendContactForm">
    <div class="form-group">
      <label for="contact_first_name">First Name</label>
      <input type="text" id="contact_first_name" v-model="form.first_name" required />
    </div>
    <div class="form-group">
      <label for="contact_email">Email</label>
      <input type="email" id="contact_email" v-model="form.email" required />
    </div>
    <div class="form-group">
      <label for="contact_message">Message</label>
      <textarea id="contact_message" v-model="form.message" rows="5" required></textarea>
    </div>
    <button type="submit" class="btn-submit">Send Message</button>
  </form>
</template>