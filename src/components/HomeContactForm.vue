<script setup>
  import { ref } from 'vue';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  const form = ref({
    first_name: '',
    last_name: '',
    phone: '',
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
  <form @submit.prevent="sendContactForm" class="fieldset rounded-box p-4 text-base-content" novalidate>

    <div class="flex gap-4">
      <fieldset class="fieldset flex-3">
        <label class="input validator">
          <input
            type="text"
            required
            name="first_name"
            placeholder="First Name"
            pattern="[A-Za-z]*"
            minlength="1"
            maxlength="50"
            v-model="form.first_name"
          />
        </label>
        <p class="validator-hint hidden">Must be Alphabetic characters only</p>
      </fieldset>

      <fieldset class="fieldset flex-3">
        <label class="input validator">
          <input
            type="text"
            required
            name="last_name"
            placeholder="Last Name"
            pattern="[A-Za-z]*"
            minlength="1"
            maxlength="50"
            v-model="form.last_name"
          />
        </label>
        <p class="validator-hint hidden">Must be Alphabetic characters only</p>
      </fieldset>
    </div>

    <div class="flex gap-4">
      <fieldset class="fieldset flex-3">
        <label class="input validator">
          <FontAwesomeIcon :icon="['fas', 'phone']" class="icon" />
          <input
            type="tel"
            class="tabular-nums"
            required
            placeholder="Phone"
            minlength="10"
            maxlength="15"
            v-model="form.phone"
          />
        </label>
        <p class="validator-hint hidden">Must be at least 10 digits</p>
      </fieldset>

      <fieldset class="fieldset flex-3">
        <label class="input validator join-item">
          <FontAwesomeIcon :icon="['fas', 'envelope']" class="icon" />
          <input type="email" placeholder="mail@site.com" required v-model="form.email" />
        </label>
        <div class="validator-hint hidden">Enter valid email address</div>
      </fieldset>
    </div>

    <div class="flex gap-4">
      <fieldset class="fieldset flex-3">
        <textarea id="contact_message" class="textarea w-full" placeholder="Message" v-model="form.message" rows="5" required></textarea>
        <div class="validator-hint hidden">Message is required</div>
      </fieldset>
    </div>

    <button type="submit" class="btn btn-primary my-4">Send Message</button>
  </form>

</template>

<style scoped>
  .validator-hint {
    font-size: 0.75rem;
  }
</style>