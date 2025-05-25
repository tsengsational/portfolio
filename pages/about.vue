<template>
  <div class="about-page">
    <div class="container">
      <h1>About Me</h1>
      
      <div class="profile">
        <img :src="about.image" alt="Profile" class="profile-image" />
        <div class="profile-content">
          <h2>{{ about.title }}</h2>
        </div>
      </div>

      <div class="bio-sections">
        <section class="bio-section">
          <h2>Software Engineer</h2>
          <Content :document="about" field="developer_bio" />
        </section>

        <section class="bio-section">
          <h2>Artist</h2>
          <Content :document="about" field="artist_bio" />
        </section>
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

<style lang="scss">
.about-page {
  h1 {
    text-align: center;
    margin-bottom: $spacing-xlarge;
  }

  .profile {
    display: flex;
    align-items: center;
    gap: $spacing-large;
    margin-bottom: $spacing-xlarge;

    @media (max-width: $breakpoint-md) {
      flex-direction: column;
      text-align: center;
    }

    .profile-image {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      object-fit: cover;
    }

    .profile-content {
      h2 {
        margin: 0;
      }
    }
  }

  .bio-sections {
    display: grid;
    gap: $spacing-xlarge;

    .bio-section {
      background: white;
      padding: $spacing-large;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

      h2 {
        margin-bottom: $spacing-large;
        color: $primary-color;
      }

      .content {
        :deep(p) {
          margin-bottom: $spacing-medium;
          line-height: 1.6;
        }

        :deep(a) {
          color: $secondary-color;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style> 