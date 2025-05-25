<template>
  <div class="project">
    <div class="container">
      <div class="project__header">
        <h1 class="project__title">{{ project.title }}</h1>
        <div class="project__meta">
          <span class="project__date">{{ formatDate(project.date) }}</span>
          <div class="project__tags">
            <span v-for="tag in project.tags" :key="tag" class="project__tag">{{ tag }}</span>
          </div>
        </div>
      </div>

      <div class="project__gallery" v-if="project.gallery">
        <img
          v-for="(image, index) in project.gallery"
          :key="index"
          :src="image"
          :alt="`${project.title} - Image ${index + 1}`"
          class="project__gallery-image"
        />
      </div>

      <div class="project__content">
        <Content :document="project" />
      </div>

      <div class="project__links" v-if="project.links">
        <a
          v-for="(link, label) in project.links"
          :key="label"
          :href="link"
          target="_blank"
          rel="noopener"
          class="project__link"
        >
          {{ label }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const { type, slug } = route.params

const { data: project } = await useAsyncData(`project-${type}-${slug}`, () =>
  queryContent(`/${type}`)
    .where({ slug })
    .findOne()
)

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style lang="scss" scoped>
.project {
  &__header {
    margin-bottom: $spacing-xlarge;
  }

  &__title {
    margin-bottom: $spacing-medium;
  }

  &__meta {
    display: flex;
    align-items: center;
    gap: $spacing-medium;
    color: $text-secondary;
  }

  &__date {
    font-size: 0.875rem;
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing-small;
  }

  &__tag {
    background-color: $primary-color;
    color: white;
    padding: $spacing-small $spacing-medium;
    border-radius: 16px;
    font-size: 0.875rem;
  }

  &__gallery {
    margin-bottom: $spacing-xlarge;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: $spacing-medium;
  }

  &__gallery-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 8px;
  }

  &__content {
    max-width: 800px;
    margin: 0 auto $spacing-xlarge;
    line-height: 1.6;

    :deep(h2) {
      margin: $spacing-xlarge 0 $spacing-medium;
      color: $primary-color;
    }

    :deep(p) {
      margin-bottom: $spacing-medium;
    }

    :deep(ul), :deep(ol) {
      margin-bottom: $spacing-medium;
      padding-left: $spacing-large;
    }

    :deep(li) {
      margin-bottom: $spacing-small;
    }

    :deep(a) {
      color: $primary-color;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    :deep(img) {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      margin: $spacing-medium 0;
    }

    :deep(pre) {
      background-color: $code-bg;
      padding: $spacing-medium;
      border-radius: 8px;
      overflow-x: auto;
      margin: $spacing-medium 0;
    }

    :deep(code) {
      font-family: $font-mono;
      font-size: 0.875rem;
    }
  }

  &__links {
    display: flex;
    gap: $spacing-medium;
    justify-content: center;
  }

  &__link {
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