<template>
  <div class="about">
    <div class="container">
      <h1 class="about__title">About Me</h1>
      <div class="about__content">
        <div class="about__section">
          <h2 class="about__section-title">Background</h2>
          <p class="about__text">
            I am a software developer and digital artist with a passion for creating beautiful and functional applications.
            With expertise in both technical and creative fields, I bring a unique perspective to every project.
          </p>
        </div>

        <div class="about__section">
          <h2 class="about__section-title">Skills</h2>
          <div class="about__skills">
            <div class="about__skill-category">
              <h3 class="about__skill-title">Software Development</h3>
              <ul class="about__skill-list">
                <li class="about__skill-item">Frontend Development (Vue.js, React)</li>
                <li class="about__skill-item">Backend Development (Node.js, Python)</li>
                <li class="about__skill-item">Database Design</li>
                <li class="about__skill-item">API Development</li>
              </ul>
            </div>

            <div class="about__skill-category">
              <h3 class="about__skill-title">Digital Art</h3>
              <ul class="about__skill-list">
                <li class="about__skill-item">Digital Illustration</li>
                <li class="about__skill-item">UI/UX Design</li>
                <li class="about__skill-item">3D Modeling</li>
                <li class="about__skill-item">Animation</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="about__section">
          <h2 class="about__section-title">Contact</h2>
          <p class="about__text">
            Feel free to reach out to me for collaboration opportunities or just to say hello!
            You can find me on various platforms or send me an email.
          </p>
          <div class="about__contact-links">
            <a href="mailto:your.email@example.com" class="about__contact-link">Email</a>
            <a href="https://github.com/yourusername" class="about__contact-link">GitHub</a>
            <a href="https://linkedin.com/in/yourusername" class="about__contact-link">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: about } = await useAsyncData('about', () => 
  queryContent('/about').findOne()
)

useHead({
  title: 'About Me',
  meta: [
    { name: 'description', content: 'Learn more about my background as a software engineer and artist.' }
  ]
})
</script>

<style lang="scss" scoped>
.about {
  &__title {
    text-align: center;
    margin-bottom: $spacing-xlarge;
  }

  &__content {
    max-width: 800px;
    margin: 0 auto;
  }

  &__section {
    margin-bottom: $spacing-xlarge;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__section-title {
    margin-bottom: $spacing-medium;
    color: $primary-color;
  }

  &__text {
    line-height: 1.6;
    color: $text-secondary;
  }

  &__skills {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: $spacing-large;
  }

  &__skill-category {
    background: white;
    padding: $spacing-medium;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  &__skill-title {
    margin-bottom: $spacing-medium;
    color: $primary-color;
  }

  &__skill-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__skill-item {
    margin-bottom: $spacing-small;
    padding-left: $spacing-medium;
    position: relative;

    &:before {
      content: "•";
      position: absolute;
      left: 0;
      color: $primary-color;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__contact-links {
    display: flex;
    gap: $spacing-medium;
    margin-top: $spacing-medium;
  }

  &__contact-link {
    display: inline-block;
    padding: $spacing-small $spacing-medium;
    background-color: $primary-color;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: darken($primary-color, 10%);
    }
  }
}
</style> 