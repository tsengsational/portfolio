<template>
  <div class="layout">
    <header class="layout__header">
      <nav class="nav container">
        <NuxtLink to="/" class="nav__logo">Portfolio</NuxtLink>
        <div class="nav__links">
          <NuxtLink to="/software" class="nav__link">Developer</NuxtLink>
          <NuxtLink to="/art" class="nav__link">Art</NuxtLink>
          <NuxtLink to="/about" class="nav__link">About</NuxtLink>
          <NuxtLink to="/contact" class="nav__link">Contact</NuxtLink>
        </div>
      </nav>
    </header>

    <main class="layout__main">
      <slot />
    </main>

    <footer class="layout__footer">
      <div class="container">
        <p class="layout__copyright">&copy; {{ new Date().getFullYear() }} Your Name. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Add Netlify Identity widget script
onMounted(() => {
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
});
</script>

<style lang="scss">
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  &__header {
    background-color: $primary-color;
    padding: $spacing-medium 0;
    position: sticky;
    top: 0;
    z-index: 100;
  }

  &__main {
    flex: 1;
  }

  &__footer {
    background-color: $primary-color;
    color: white;
    padding: $spacing-medium 0;
    margin-top: auto;
  }

  &__copyright {
    margin: 0;
  }
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__logo {
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
  }

  &__links {
    display: flex;
    gap: $spacing-medium;
  }

  &__link {
    color: white;
    text-decoration: none;
    padding: $spacing-small;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgba(white, 0.1);
    }
  }
}
</style> 