<template>
  <div class="project" v-if="project">
    <div class="container">
      <div class="project__header">
        <h1 class="project__title">{{ project.title }}</h1>
        <div class="project__meta">
          <div class="project__tags" v-if="project.tags">
            <span v-for="tag in project.tags" :key="tag" class="project__tag">{{ tag }}</span>
          </div>
        </div>
      </div>

      <div class="project__gallery" v-if="project.gallery">
        <img
          v-for="(image, index) in project.gallery"
          :key="index"
          :src="image.image"
          :alt="`${project.title} - Image ${index + 1}`"
          class="project__gallery-image"
        />
      </div>
      <h2 class="project__description" v-if="project.description">{{ project.description }}</h2>

      <div class="project__content">
        <ContentDoc :document="project" />
      </div>

      <div class="project__links" v-if="project.link || project.links">
        <a
          v-if="project.link"
          :href="project.link"
          target="_blank"
          rel="noopener"
          class="project__link"
        >
          {{ project.link_text || 'View Project' }}
        </a>
        <template v-if="project.links">
          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            rel="noopener"
            class="project__link"
          >
            {{ project.github_text || 'View on GitHub' }}
          </a>
          <a
            v-if="project.demo"
            :href="project.demo"
            target="_blank"
            rel="noopener"
            class="project__link"
          >
            {{ project.demo_text || 'Live Demo' }}
          </a>
        </template>
      </div>
    </div>
  </div>
  <div v-else class="container">
    <p>Project not found</p>
  </div>
</template>

<script setup>
const route = useRoute()
const { type, slug } = route.params

const { data: project } = await useAsyncData(`project-${type}-${slug}`, () =>
  queryContent(`/${type}`)
    .where({ _path: { $contains: slug } })
    .findOne()
)

const formatDate = (date) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style lang="scss" scoped>
.project {
  .container {
    padding: $spacing-large;
  }

  &__header {
    margin-bottom: $spacing-xlarge;
  }

  &__title {
    margin-bottom: $spacing-medium;
  }

  &__description {
    margin-bottom: $spacing-xlarge;
    max-width: 800px;
    margin: 0 auto 1rem;
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
    height: 500px;
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