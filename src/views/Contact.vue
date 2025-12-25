<template>
  <div class="contact">
    <h1>Contact Us</h1>
    <div class="contact-form">
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="form.message" rows="5" required></textarea>
        </div>
        <button type="submit" class="btn-submit">Send Message</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const form = reactive({
  name: '',
  email: '',
  message: ''
});

const handleSubmit = () => {
  console.log('Form submitted:', form);
  // Add form submission logic here
  alert('Form submitted! (This is a demo)');
};
</script>

<style scoped>
.contact {
  padding: 2rem 0;
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  color: #2c3e50;
  margin-bottom: 2rem;
}

.contact-form {
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #2c3e50;
  font-weight: 500;
}

input,
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  font-size: 1rem;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #42b983;
}

.btn-submit {
  background-color: #42b983;
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-submit:hover {
  background-color: #369970;
}
</style>
