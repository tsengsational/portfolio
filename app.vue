<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// Add Netlify Identity widget script
onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://identity.netlify.com/v1/netlify-identity-widget.js'
  script.async = true
  document.head.appendChild(script)
})
</script>
