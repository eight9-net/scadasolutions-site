<script setup>
  import { ref } from 'vue';
  import { useContactStore } from '../stores/contact';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

  const isDisabledRef = ref(false);
  const messageSentRef = ref(false);
  const contactStore = useContactStore();
  const form = ref(contactStore.form);

  function sendContactForm(data) {
    if (isDisabledRef.value) {
      return;
    }
    isDisabledRef.value = true;
    contactStore.doSendContactForm(form.value).then(() => {
      messageSentRef.value = true;
      isDisabledRef.value = false;
    }).catch(() => {
      isDisabledRef.value = false;
    });
  }
</script>

<template>
  <form @submit.prevent="sendContactForm" class="p-4 fieldset rounded-box text-base-content" novalidate>

    <div class="flex gap-4">
      <fieldset class="fieldset flex-3">
        <label class="w-full input validator">
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
        <p class="hidden validator-hint">Must be Alphabetic characters only</p>
      </fieldset>

      <fieldset class="fieldset flex-3">
        <label class="w-full input validator">
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
        <p class="hidden validator-hint">Must be Alphabetic characters only</p>
      </fieldset>
    </div>

    <div class="flex gap-4">
      <fieldset class="fieldset flex-3">
        <label class="w-full input validator">
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
        <p class="hidden validator-hint">Must be at least 10 digits</p>
      </fieldset>

      <fieldset class="fieldset flex-3">
        <label class="w-full input validator">
          <FontAwesomeIcon :icon="['fas', 'envelope']" class="icon" />
          <input type="email" placeholder="Email" required v-model="form.email" />
        </label>
        <div class="hidden validator-hint">Enter valid email address</div>
      </fieldset>
    </div>

    <div class="flex gap-4">
      <fieldset class="fieldset flex-3">
        <label class="w-full input validator">
          <input
            type="text"
            required
            name="subject"
            placeholder="Subject"
            minlength="1"
            maxlength="150"
            v-model="form.subject"
          />
        </label>
        <div class="hidden validator-hint">Subject is required</div>
      </fieldset>
    </div>

    <div class="flex gap-4">
      <fieldset class="fieldset flex-3">
        <label class="w-full input validator">
          <input
            type="text"
            required
            name="property_type"
            placeholder="Property Type"
            minlength="1"
            maxlength="100"
            v-model="form.property_type"
          />
        </label>
        <div class="hidden validator-hint">Company is required</div>
      </fieldset>
      <fieldset class="fieldset flex-3">
        <label class="w-full input validator">
          <input
            type="text"
            name="company"
            placeholder="Company Name (Optional)"
            minlength="1"
            maxlength="150"
            v-model="form.company"
          />
        </label>
        <div class="hidden validator-hint">Company is required</div>
      </fieldset>
    </div>

    <div class="hidden"><input type="text" name="is_valid" v-model="form.is_valid"/></div>


    <div class="flex gap-4">
      <fieldset class="fieldset flex-3">
        <textarea id="contact_message" class="w-full textarea" placeholder="Message" v-model="form.message" rows="5" required></textarea>
        <div class="hidden validator-hint">Message is required</div>
      </fieldset>
    </div>

    <button type="submit" class="my-4 btn btn-primary" :class="{disabled: isDisabledRef}" :disabled="isDisabledRef">Send Message</button>
  </form>

  <div v-if="messageSentRef" class="p-4 my-4 text-green-800 bg-green-200 border border-green-400 rounded">
    <p>Thank you for contacting us! We have received your message and will get back to you shortly.</p>
  </div>

</template>

<style scoped>
  .validator-hint {
    font-size: 0.75rem;
  }
</style>