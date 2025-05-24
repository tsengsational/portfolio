<template>
  <div class="contact-page">
    <div class="container">
      <h1>Contact Me</h1>
      
      <div class="contact-content">
        <div class="contact-info">
          <h2>Get in Touch</h2>
          <p>Feel free to reach out to me for collaborations, opportunities, or just to say hello!</p>
          
          <div class="contact-methods">
            <div class="contact-method">
              <h3>Email</h3>
              <a href="mailto:your.email@example.com">your.email@example.com</a>
            </div>
            
            <div class="contact-method">
              <h3>GitHub</h3>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener">github.com/yourusername</a>
            </div>
            
            <div class="contact-method">
              <h3>LinkedIn</h3>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener">linkedin.com/in/yourusername</a>
            </div>
          </div>
        </div>

        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              placeholder="Your name"
            />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              required
              placeholder="Your message"
              rows="5"
            ></textarea>
          </div>

          <button type="submit" class="btn">Send Message</button>
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

const handleSubmit = () => {
  // This is a placeholder for form submission
  // In a real application, you would handle the form submission here
  alert('Thank you for your message! This is a demo form.')
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

<style lang="scss">
.contact-page {
  h1 {
    text-align: center;
    margin-bottom: $spacing-xlarge;
  }

  .contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $spacing-xlarge;

    @media (max-width: $breakpoint-md) {
      grid-template-columns: 1fr;
    }
  }

  .contact-info {
    h2 {
      margin-bottom: $spacing-medium;
    }

    p {
      margin-bottom: $spacing-large;
      color: rgba($text-color, 0.8);
    }
  }

  .contact-methods {
    display: grid;
    gap: $spacing-large;

    .contact-method {
      h3 {
        margin-bottom: $spacing-small;
        color: $primary-color;
      }

      a {
        color: $secondary-color;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .contact-form {
    background: white;
    padding: $spacing-large;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    .form-group {
      margin-bottom: $spacing-medium;

      label {
        display: block;
        margin-bottom: $spacing-small;
        color: $text-color;
      }

      input,
      textarea {
        width: 100%;
        padding: $spacing-small;
        border: 1px solid rgba($text-color, 0.2);
        border-radius: 4px;
        font-family: inherit;
        font-size: 1rem;

        &:focus {
          outline: none;
          border-color: $secondary-color;
        }
      }
    }

    button {
      width: 100%;
      margin-top: $spacing-medium;
    }
  }
}
</style> 