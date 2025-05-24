<template>
  <div class="home">
    <section class="hero">
      <div class="container">
        <h1>Welcome to My Portfolio</h1>
        <p class="subtitle">Software Engineer & Artist</p>
      </div>
    </section>

    <section class="software-section">
      <div class="container">
        <h2>Software Engineering</h2>
        <div class="grid grid--2-cols">
          <div v-for="project in softwareProjects" :key="project._path" class="project-card">
            <NuxtLink :to="project._path">
              <img :src="project.thumbnail" :alt="project.title" class="project-image" />
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
            </NuxtLink>
          </div>
        </div>
        <div class="section-footer">
          <NuxtLink to="/software" class="btn">View All Software Projects</NuxtLink>
        </div>
      </div>
    </section>

    <section class="art-section">
      <div class="container">
        <h2>Artistic Work</h2>
        <div class="grid grid--2-cols">
          <div v-for="project in artProjects" :key="project._path" class="project-card">
            <NuxtLink :to="project._path">
              <img :src="project.thumbnail" :alt="project.title" class="project-image" />
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
            </NuxtLink>
          </div>
        </div>
        <div class="section-footer">
          <NuxtLink to="/art" class="btn">View All Art Projects</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { data: softwareProjects } = await useAsyncData('software', () => 
  queryContent('/software')
    .sort({ date: -1 })
    .limit(4)
    .find()
)

const { data: artProjects } = await useAsyncData('art', () => 
  queryContent('/art')
    .sort({ date: -1 })
    .limit(4)
    .find()
)
</script>

<style lang="scss">
.home {
  .hero {
    text-align: center;
    padding: $spacing-xlarge 0;
    background-color: $primary-color;
    color: white;
    margin-bottom: $spacing-xlarge;

    h1 {
      font-size: 3rem;
      margin-bottom: $spacing-medium;
    }

    .subtitle {
      font-size: 1.5rem;
      opacity: 0.9;
    }
  }

  .software-section,
  .art-section {
    padding: $spacing-xlarge 0;

    h2 {
      text-align: center;
      margin-bottom: $spacing-large;
    }
  }

  .project-card {
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-4px);
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    .project-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    h3 {
      padding: $spacing-medium;
      margin: 0;
    }

    p {
      padding: 0 $spacing-medium $spacing-medium;
      margin: 0;
      color: rgba($text-color, 0.8);
    }
  }

  .section-footer {
    text-align: center;
    margin-top: $spacing-large;
  }
}
</style> 