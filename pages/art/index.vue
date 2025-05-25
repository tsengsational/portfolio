<template>
  <div class="art">
    <div class="container">
      <div class="art__header">
        <h1 class="art__title">{{ section.title }}</h1>
        <p class="art__description">{{ section.description }}</p>
      </div>
      
      <div v-for="(projects, category) in groupedProjects" :key="category" class="art__category">
        <h2 class="art__category-title">{{ category }}</h2>
        <div class="art__grid">
          <div v-for="project in projects" :key="project._path" class="art__card">
            <NuxtLink :to="project._path" class="art__card-link">
              <div v-if="project.thumbnail" class="art__card-image-container">
                <img :src="project.thumbnail" :alt="project.title" class="art__card-image" />
              </div>
              <div v-else class="art__card-image-placeholder">
                <span class="art__card-image-text">{{ project.title }}</span>
              </div>
              <div class="art__card-content">
                <h3 class="art__card-title">{{ project.title }}</h3>
                <p class="art__card-description">{{ project.description }}</p>
                <div class="art__card-tags">
                  <span v-for="tag in project.tags" :key="tag" class="art__card-tag">{{ tag }}</span>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: content } = await useAsyncData('art', () => 
  queryContent('/art')
    .sort({ order: 1, date: -1 })
    .find()
)

const section = computed(() => {
  return content.value?.[0] || { title: 'Art Projects', description: '' }
})

const projects = computed(() => {
  return content.value?.slice(1) || []
})

const groupedProjects = computed(() => {
  const groups = {}
  projects.value.forEach(project => {
    const category = project.category || 'Other'
    if (!groups[category]) {
      groups[category] = []
    }
    groups[category].push(project)
  })
  return groups
})

useHead({
  title: 'Artistic Work',
  meta: [
    { name: 'description', content: 'Explore my artistic work, including playwriting and other creative projects.' }
  ]
})
</script>

<style lang="scss" scoped>
.art {
  &__header {
    text-align: center;
    margin-bottom: $spacing-xlarge;
  }

  &__title {
    margin-bottom: $spacing-medium;
  }

  &__description {
    font-size: 1.1rem;
    color: $text-secondary;
    max-width: 600px;
    margin: 0 auto;
  }

  &__category {
    margin-bottom: $spacing-xlarge;
  }

  &__category-title {
    margin-bottom: $spacing-large;
    padding-bottom: $spacing-small;
    border-bottom: 2px solid $primary-color;
    color: $primary-color;
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

  &__card-image-container {
    width: 100%;
    height: 300px;
    overflow: hidden;
  }

  &__card-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__card-image-placeholder {
    width: 100%;
    height: 300px;
    background-color: $primary-color;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    text-align: center;
    padding: $spacing-medium;
  }

  &__card-image-text {
    font-weight: bold;
  }

  &__card-content {
    padding: $spacing-medium;
  }

  &__card-title {
    margin: 0 0 $spacing-small;
    font-size: 1.25rem;
  }

  &__card-description {
    margin: 0 0 $spacing-medium;
    color: $text-secondary;
  }

  &__card-tags {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing-small;
  }

  &__card-tag {
    background-color: $primary-color;
    color: white;
    padding: $spacing-small $spacing-medium;
    border-radius: 16px;
    font-size: 0.875rem;
  }
}
</style> 