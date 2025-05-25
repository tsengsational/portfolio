<template>
  <div class="contact">
    <div class="container">
      <h1 class="contact__title">Contact Me</h1>
      <div class="contact__content">
        <div class="contact__info">
          <h2 class="contact__info-title">Get in Touch</h2>
          <p class="contact__info-text">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div class="contact__info-links">
            <a href="https://github.com/yourusername" class="contact__info-link">
              <span class="contact__info-icon">💻</span>
              github.com/tsengsational
            </a>
            <a href="https://linkedin.com/in/yourusername" class="contact__info-link">
              <span class="contact__info-icon">🔗</span>
              linkedin.com/in/jasonftseng
            </a>
          </div>
        </div>

        <form class="contact__form" @submit.prevent="handleSubmit">
          <div class="contact__form-group">
            <label for="name" class="contact__form-label">Name</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              class="contact__form-input"
              required
            />
          </div>

          <div class="contact__form-group">
            <label for="email" class="contact__form-label">Email</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              class="contact__form-input"
              required
            />
          </div>

          <div class="contact__form-group">
            <label for="message" class="contact__form-label">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              class="contact__form-textarea"
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" class="contact__form-submit">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const form = ref({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = async () => {
  // Handle form submission
  console.log('Form submitted:', form.value)
  // Reset form
  form.value = {
    name: '',
    email: '',
    message: ''
  }
}

useHead({
  title: 'Contact',
  meta: [
    { name: 'description', content: 'Get in touch with me for collaborations or opportunities.' }
  ]
})
</script>

<style lang="scss" scoped>
.contact {
  &__title {
    text-align: center;
    margin-bottom: $spacing-xlarge;
  }

  &__content {
    max-width: 800px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $spacing-xlarge;

    @media (max-width: $breakpoint-md) {
      grid-template-columns: 1fr;
    }
  }

  &__info {
    &-title {
      margin-bottom: $spacing-medium;
      color: $primary-color;
    }

    &-text {
      margin-bottom: $spacing-large;
      line-height: 1.6;
      color: $text-secondary;
    }

    &-links {
      display: flex;
      flex-direction: column;
      gap: $spacing-medium;
    }

    &-link {
      display: flex;
      align-items: center;
      gap: $spacing-small;
      color: $text-color;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: $primary-color;
      }
    }

    &-icon {
      font-size: 1.25rem;
    }
  }

  &__form {
    &-group {
      margin-bottom: $spacing-medium;
    }

    &-label {
      display: block;
      margin-bottom: $spacing-small;
      color: $text-color;
    }

    &-input,
    &-textarea {
      width: 100%;
      padding: $spacing-small;
      border: 1px solid $border-color;
      border-radius: 4px;
      font-size: 1rem;
      transition: border-color 0.3s ease;

      &:focus {
        outline: none;
        border-color: $primary-color;
      }
    }

    &-textarea {
      resize: vertical;
    }

    &-submit {
      display: block;
      width: 100%;
      padding: $spacing-medium;
      background-color: $primary-color;
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: darken($primary-color, 10%);
      }
    }
  }
}
</style> 