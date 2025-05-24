<template>
  <div class="art-page">
    <div class="container">
      <h1>Artistic Work</h1>
      <div class="grid grid--3-cols">
        <div v-for="project in projects" :key="project._path" class="project-card">
          <NuxtLink :to="project._path">
            <img :src="project.thumbnail" :alt="project.title" class="project-image" />
            <div class="project-content">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
              <span class="category-tag">{{ project.category }}</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: projects } = await useAsyncData('art', () => 
  queryContent('/art')
    .sort({ date: -1 })
    .find()
)

useHead({
  title: 'Artistic Work',
  meta: [
    { name: 'description', content: 'Explore my artistic work, including playwriting and other creative projects.' }
  ]
})
</script>

<style lang="scss">
.art-page {
  h1 {
    text-align: center;
    margin-bottom: $spacing-xlarge;
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
      display: block;
      height: 100%;
    }

    .project-image {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }

    .project-content {
      padding: $spacing-medium;

      h3 {
        margin: 0 0 $spacing-small;
      }

      p {
        margin: 0 0 $spacing-medium;
        color: rgba($text-color, 0.8);
      }
    }

    .category-tag {
      display: inline-block;
      background-color: $accent-color;
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 0.875rem;
    }
  }
}
</style> 