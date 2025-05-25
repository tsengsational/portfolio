<template>
  <div class="home">
    <section class="home__hero">
      <div class="home__hero-overlay"></div>
      <div class="home__hero-content container">
        <h1 class="home__title">Jason Tseng</h1>
        <p class="home__subtitle">Web Developer, Playwright, & Artist</p>
      </div>
    </section>

    <section class="home__featured">
      <div class="container">
        <h2 class="home__section-title">Featured Work</h2>
        <div class="home__grid">
          <div v-for="project in featuredProjects" :key="project._path" class="home__card">
            <NuxtLink :to="project._path" class="home__card-link">
              <img :src="project.thumbnail" :alt="project.title" class="home__card-image" />
              <div class="home__card-content">
                <h3 class="home__card-title">{{ project.title }}</h3>
                <p class="home__card-description">{{ project.description }}</p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { data: projects } = await useAsyncData('projects', () =>
  queryContent()
    .where({ _path: { $ne: '/art/index' } })
    .where({ _path: { $ne: '/software/index' } })
    .sort({ date: -1 })
    .find()
)

const featuredProjects = computed(() => {
  return projects.value || []
})
</script>

<style lang="scss" scoped>
.home {
  &__hero {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: url('/media/images/clouds.jpg') center center / cover no-repeat fixed;
    color: white;

    // Parallax effect for desktop
    background-attachment: fixed;

    // For mobile, fallback to scroll (fixed is not supported on iOS)
    @media (max-width: 1024px) {
      background-attachment: scroll;
    }
  }

  &__hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.45);
    z-index: 1;
  }

  &__hero-content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-align: center;
  }

  &__title {
    font-size: 4rem;
    text-transform: uppercase;
    margin-bottom: $spacing-medium;
    text-shadow: 0 2px 16px rgba(0,0,0,0.5);

    
  }

  &__subtitle {
    font-size: 1.5rem;
    opacity: 0.95;
    text-shadow: 0 2px 8px rgba(0,0,0,0.4);
  }

  &__featured {
    padding: $spacing-xxlarge 0;
  }

  &__section-title {
    text-align: center;
    margin-bottom: $spacing-xlarge;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: $spacing-large;
  }

  &__card {
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-4px);
    }
  }

  &__card-link {
    text-decoration: none;
    color: inherit;
  }

  &__card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  &__card-content {
    padding: $spacing-medium;
  }

  &__card-title {
    margin: 0 0 $spacing-small;
    font-size: 1.25rem;
  }

  &__card-description {
    margin: 0;
    color: $text-secondary;
  }
}
</style> 