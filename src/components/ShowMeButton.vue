<script setup>
import { onMounted } from 'vue'

const refCodeKey = 'refctex'

// Store ref from URL in a cookie (1-year expiry)
onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search)
  const ref = urlParams.get(refCodeKey)
  if (ref) {
    document.cookie = `${refCodeKey}=${ref}; path=/; max-age=${60 * 60 * 24 * 365}`
  }
})

function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
  return match ? match[2] : null
}

function goToPresentation() {
  const refCode = getCookie(refCodeKey) || 'C1619131227'
  const source = 'landing_page'

  const fullLink = `https://www.ultimatepassiveprofit.com/presentation2/?refctex=${refCode}&utm_source=${source}`

  // Optional: Google Analytics tracking
  if (typeof gtag === 'function') {
    gtag('event', 'click', {
      event_category: 'CTA',
      event_label: 'Show Me How It Works',
    })
  }

  window.open(fullLink, '_blank')
}
</script>

<template>
  <button
    @click="goToPresentation"
    class="bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-semibold text-gray-900 rounded-full px-12 py-4 shadow-lg transition duration-300"
  >
    Show Me How It Works
  </button>
</template>
