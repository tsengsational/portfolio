<template>
  <div class="layout">
    <header class="header">
      <nav class="nav container">
        <NuxtLink to="/" class="logo">Portfolio</NuxtLink>
        <div class="nav-links">
          <NuxtLink to="/software" class="nav-link">Software</NuxtLink>
          <NuxtLink to="/art" class="nav-link">Art</NuxtLink>
          <NuxtLink to="/about" class="nav-link">About</NuxtLink>
          <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
        </div>
      </nav>
    </header>

    <main class="main">
      <slot />
    </main>

    <footer class="footer">
      <div class="container">
        <p>&copy; {{ new Date().getFullYear() }} Your Name. All rights reserved.</p>
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
}

.header {
  background-color: $primary-color;
  padding: $spacing-medium 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: $spacing-medium;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: $spacing-small;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(white, 0.1);
  }
}

.main {
  flex: 1;
  padding: $spacing-large 0;
}

.footer {
  background-color: $primary-color;
  color: white;
  padding: $spacing-medium 0;
  margin-top: auto;
}
</style> 