<template>
  <div class="software">
    <div class="container">
      <div class="software__header">
        <h1 class="software__title">{{ section.title }}</h1>
        <p class="software__description">{{ section.description }}</p>
      </div>
      <div class="software__grid">
        <div v-for="project in projects" :key="project._path" class="software__card">
          <NuxtLink :to="project._path" class="software__card-link">
            <img :src="project.thumbnail" :alt="project.title" class="software__card-image" />
            <div class="software__card-content">
              <h2 class="software__card-title">{{ project.title }}</h2>
              <p class="software__card-description">{{ project.description }}</p>
              <div class="software__card-tags">
                <span v-for="tech in project.tech" :key="tech" class="software__card-tag">{{ tech }}</span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: content } = await useAsyncData('software', () => 
  queryContent('/software')
    .sort({ date: -1 })
    .find()
)

const section = computed(() => {
  return content.value?.[0] || { title: 'Software Projects', description: '' }
})

const projects = computed(() => {
  return content.value?.slice(1) || []
})

useHead({
  title: 'Software Projects',
  meta: [
    { name: 'description', content: 'Browse my software engineering projects and technical work.' }
  ]
})
</script>

<style lang="scss" scoped>
.software {
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
    height: 300px;
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