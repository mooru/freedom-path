<script setup>

import { ref, onMounted, onUnmounted } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import ShowMeButton from './components/ShowMeButton.vue';

const currentIndex = ref(0);
const totalSlides = 5;
let intervalId = null;

function updateSlidePosition() {
  const slideContainer = document.getElementById('slide-container');
  if (slideContainer) {
    slideContainer.style.transform = `translateX(-${currentIndex.value * 100}%)`;
  }
}

function nextSlide() {
  currentIndex.value = (currentIndex.value + 1) % totalSlides;
  updateSlidePosition();
}

function prevSlide() {
  currentIndex.value = (currentIndex.value - 1 + totalSlides) % totalSlides;
  updateSlidePosition();
}

onMounted(() => {
  updateSlidePosition();
  intervalId = setInterval(nextSlide, 6000);
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});

const showModal = ref(false)
const name = ref('')
const email = ref('')

function submitForm() {
  // You can route to a new page, call an API, etc.
  console.log('Name:', name.value)
  console.log('Email:', email.value)
  showModal.value = false
}

import { computed } from 'vue'
// Optional: make these dynamic later
const refCode = 'C1619131227'
const source = 'landing_page'

// Create the full URL
const fullLink = computed(() =>
  `https://www.ultimatepassiveprofit.com/presentation2/?refctex=${refCode}&utm_source=${source}`
)

// Track click if Google Analytics is installed
function trackClick() {
  if (typeof gtag === 'function') {
    gtag('event', 'click', {
      event_category: 'CTA',
      event_label: 'Show Me How It Works',
    })
  }
}



</script>

<template>
  
  <!-- Hero -->
<header class="relative overflow-hidden py-20 px-6 text-white">
  <div class="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800/80 to-transparent z-10"></div>
  <div class="absolute inset-0 z-0">
    <img
      src="/images/header.jpg"
      alt="Family background"
      class="w-full h-full object-cover object-right"
    />
  </div>
  <div class="relative z-20 max-w-3xl mx-auto text-center">
    <h1 class="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight font-heading">
      Create a Future Where You Don’t Work for Money — In Just 2 Years
    </h1>
    <p class="text-lg sm:text-xl max-w-xl mx-auto mb-10 opacity-90">
      Most people trade time for money forever. There’s a smarter way — one that prioritizes patience, vision, and a strategy built for long-term freedom.
    </p>
    <a
    :href="fullLink"
    target="_blank"
    rel="noopener noreferrer"
    @click="trackClick"
    class="bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-semibold text-gray-900 rounded-full px-12 py-4 shadow-lg transition duration-300 animate-fade-in hover:animate-pulse"
  >
    Show Me How It Works
  </a>
  </div>
</header>


  <!-- Problem Statement -->
  <section id="problem" class="max-w-4xl mx-auto px-6 py-16 text-center">
    <h2 class="text-3xl font-bold font-heading mb-8 text-blue-900">He Did Everything “Right”—And Still Ended Up Worried About Money</h2>
    <p class="italic text-lg mb-6 max-w-3xl mx-auto">
      He got the degree. Landed the job. Saved when he could. Said no to things he really wanted so he could “plan for the future.”
    </p>
    <p class="italic text-lg mb-6 max-w-3xl mx-auto">
      But decades later, he was still calculating how many years until retirement. Still worried about inflation. Still wondering if he could ever stop working—and actually live.
    </p>
    <p class="italic text-lg mb-6 max-w-3xl mx-auto">
      And he’s not alone.
    </p>
    <p class="italic text-lg max-w-3xl mx-auto font-semibold">
      Millions are stuck in the same cycle—<span class="underline">doing everything they were told</span>… only to find that the system was never designed to make them free.
    </p>
  </section>

  <!-- Solution Overview -->
  <section id="solution" class="max-w-4xl mx-auto px-6 py-16 text-center">
    <h2 class="text-3xl font-bold mb-8 font-heading text-blue-900">A Journey From Endless Struggle to True Financial Freedom</h2>
    <p class="mb-6 text-lg max-w-3xl mx-auto">
      Picture waking up each day without the weight of money worries holding you back. A life where your income grows silently in the background—freeing you to spend time with loved ones, pursue your passions, and live on your own terms.
    </p>
    <p class="mb-6 text-lg max-w-3xl mx-auto">
      This isn’t a dream reserved for the lucky few. It’s a path built on patience, faith, and a proven approach that transforms small, steady steps into lasting freedom.
    </p>
    <p class="max-w-3xl text-lg mx-auto font-semibold">
      You’ve worked hard. Now it’s time for your money to work <em>for</em> you.
    </p>
  </section>


  <!-- Benefits with full width background -->
  <section id="benefits" class="bg-teal-50 py-16">
    <div class="max-w-5xl mx-auto px-6">
      <h2 class="text-3xl font-bold mb-12 font-heading text-center text-blue-900">Here’s What You’ll Experience When You Take This Path</h2>
      <div class="space-y-10 max-w-4xl mx-auto text-lg">
        
        <div class="flex items-start space-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 flex-shrink-0 text-teal-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <div>
            <p class="font-semibold text-lg text-blue-900">Freedom From Financial Stress</p>
            <p class="text-gray-700">
              Imagine no longer living paycheck to paycheck, with growing income that supports your life—even when you’re not working.
            </p>
          </div>
        </div>

        <div class="flex items-start space-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 flex-shrink-0 text-teal-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <div>
            <p class="font-semibold text-lg text-blue-900">Time to Focus on What Matters</p>
            <p class="text-gray-700">
              Spend more moments with family, friends, or passions—because your wealth-building strategy works quietly in the background.
            </p>
          </div>
        </div>

        <div class="flex items-start space-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 flex-shrink-0 text-teal-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <div>
            <p class="font-semibold text-lg text-blue-900">Confidence in Your Future</p>
            <p class="text-gray-700">
              Wake up each day knowing your financial foundation is strong, steady, and designed to last for decades.
            </p>
          </div>
        </div>

        <div class="flex items-start space-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 flex-shrink-0 text-teal-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <div>
            <p class="font-semibold text-lg text-blue-900">A Supportive Community Behind You</p>
            <p class="text-gray-700">
              You’re never alone. Connect with like-minded people who encourage, share, and grow together on this journey.
            </p>
          </div>
        </div>

        <div class="flex items-start space-x-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 flex-shrink-0 text-teal-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <div>
            <p class="font-semibold text-lg font-heading text-blue-900">A Simple, Clear Plan You Can Trust</p>
            <p class="text-gray-700">
              No gimmicks or complicated tricks—just a proven approach that puts you in control of your financial destiny.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>


<!-- How It Works Section -->
<section class="relative h-screen text-white overflow-hidden" id="how-it-works">
  <!-- Background image and overlay wrapper -->

  <img src="/images/process.jpg" alt="Wealth Strategy" class="absolute inset-0 w-full h-full object-cover z-0" />
  <div class="absolute inset-0 bg-black/70 z-10"></div>

  <!-- Content wrapper -->
  <div class="relative z-20 max-w-5xl mx-auto px-6 py-20 h-full flex flex-col justify-center items-center text-center">
    <h2 class="text-4xl font-bold mb-12">A Simple, Proven Process to Build Lasting Wealth</h2>

    <div class="w-full flex flex-col items-center">
      <!-- Slides container -->
      <div class="overflow-hidden w-full">
        <div id="slide-container" class="flex transition-transform duration-700 ease-in-out w-full">
          <!-- Slide 1 -->
          <div class="min-w-full px-4">
            <h3 class="text-xl text-blue-300 font-semibold mb-1">STEP 1</h3>
            <h4 class="text-2xl font-bold mb-2">Start With a Clear Vision</h4>
            <p class="text-lg">Define what financial freedom means to you. Without clarity, progress is impossible. We help you articulate a vision you believe in.</p>
          </div>
          <!-- Slide 2 -->
          <div class="min-w-full px-4">
            <h3 class="text-xl text-blue-300 font-semibold mb-1">STEP 2</h3>
            <h4 class="text-2xl font-bold mb-2">Leverage the Right Tools</h4>
            <p class="text-lg">Use proven strategies and platforms designed for long-term wealth creation—not speculation or hype.</p>
          </div>
          <!-- Slide 3 -->
          <div class="min-w-full px-4">
            <h3 class="text-xl text-blue-300 font-semibold mb-1">STEP 3</h3>
            <h4 class="text-2xl font-bold mb-2">Join a Supportive Community</h4>
            <p class="text-lg">You're not alone. Our community provides accountability, encouragement, and shared learning so you keep going.</p>
          </div>
          <!-- Slide 4 -->
          <div class="min-w-full px-4">
            <h3 class="text-xl text-blue-300 font-semibold mb-1">STEP 4</h3>
            <h4 class="text-2xl font-bold mb-2">Stay Consistent</h4>
            <p class="text-lg">Wealth doesn't appear overnight. Our process is built around consistency, not shortcuts.</p>
          </div>
          <!-- Slide 5 -->
          <div class="min-w-full px-4">
            <h3 class="text-xl text-blue-300 font-semibold mb-1">STEP 5</h3>
            <h4 class="text-2xl font-bold mb-2">Build for Generations</h4>
            <p class="text-lg">You're not just doing this for you. The work you do now can bless generations. That’s the power of legacy.</p>
          </div>
        </div>
      </div>

      <!-- Arrows positioned below text -->
      <div class="mt-8 flex gap-6 justify-center">
        <button @click="prevSlide" class="text-white text-2xl bg-black/60 px-4 py-2 rounded-full hover:bg-white/20">‹</button>
        <button @click="nextSlide" class="text-white text-2xl bg-black/60 px-4 py-2 rounded-full hover:bg-white/20">›</button>
      </div>
    </div>
  </div>

  

</section>

  <!-- Social Proof (Horizontal with Images) -->
  <section id="social-proof" class="max-w-6xl mx-auto px-6 py-16">
    <h2 class="text-3xl font-bold mb-12 text-center font-heading text-blue-900">Hear From Those Who Have Started The Journey</h2>
    <div class="flex space-x-8 overflow-x-auto no-scrollbar pb-4">
      <!-- Testimonial 1 -->
      <div class="flex-shrink-0 bg-white rounded-lg shadow-md border-l-8 border-yellow-400 p-6 italic text-gray-700 w-80 flex">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Emmanuel A."
          class="w-16 h-16 rounded-full mr-4 flex-shrink-0 object-cover"
        />
        <div>
          <p class="mb-4">
            "For years, I struggled to save anything meaningful. This project changed everything—I finally have a plan that works quietly behind the scenes, and I’m excited about the possibilities ahead of me."
          </p>
          <footer class="text-right font-semibold text-blue-900 not-italic">— Emmanuel A., Software Developer</footer>
        </div>
      </div>
      <!-- Testimonial 2 -->
      <div class="flex-shrink-0 bg-white rounded-lg shadow-md border-l-8 border-yellow-400 p-6 italic text-gray-700 w-80 flex">
        <img
          src="https://randomuser.me/api/portraits/women/65.jpg"
          alt="Grace N."
          class="w-16 h-16 rounded-full mr-4 flex-shrink-0 object-cover"
        />
        <div>
          <p class="mb-4">
            "As a single mom, I needed a way that will help me secure my children's future. The steady growth and community support gave me confidence and peace of mind I never had before."
          </p>
          <footer class="text-right font-semibold text-blue-900 not-italic">— Grace N., Graphic Designer</footer>
        </div>
      </div>
      <!-- Testimonial 3 -->
      <div class="flex-shrink-0 bg-white rounded-lg shadow-md border-l-8 border-yellow-400 p-6 italic text-gray-700 w-80 flex">
        <img
          src="https://randomuser.me/api/portraits/men/76.jpg"
          alt="David O."
          class="w-16 h-16 rounded-full mr-4 flex-shrink-0 object-cover"
        />
        <div>
          <p class="mb-4">
            "I was skeptical at first, but after understanding the project, it's track record and connecting with others on the same path, I’m on track to reach financial freedom much sooner than I imagined."
          </p>
          <footer class="text-right font-semibold text-blue-900 not-italic">— David O., Entrepreneur</footer>
        </div>
      </div>
    </div>

    <div class="flex justify-center space-x-10 mt-16 max-w-3xl mx-auto text-center text-gray-600 font-semibold">
      <div class="bg-indigo-100 rounded-lg p-6 shadow-md w-28">
        <div class="text-2xl text-indigo-900">750k+</div>
        <div>People on the Journey</div>
      </div>
      <div class="bg-indigo-100 rounded-lg p-6 shadow-md w-28">
        <div class="text-2xl text-indigo-900">9</div>
        <div>Years Track Record</div>
      </div>
      <div class="bg-indigo-100 rounded-lg p-6 shadow-md w-28">
        <div class="text-2xl text-indigo-900">100%</div>
        <div>Verifiable</div>
      </div>
    </div>
  </section>

  <!-- Call to Action -->
  <section id="cta" class="bg-blue-900 py-20 px-6 text-center text-white rounded-t-3xl">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-4xl font-heading font-extrabold mb-6">Ready to Start Building Your Future?</h2>
      <p class="text-lg mb-10 opacity-90">Take the first step toward financial freedom today. It’s simple, proven, and designed to fit your life — no gimmicks, just real results.</p>
      <a
    :href="fullLink"
    target="_blank"
    rel="noopener noreferrer"
    @click="trackClick"
    class="bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-semibold text-gray-900 rounded-full px-12 py-4 shadow-lg transition duration-300 animate-fade-in hover:animate-pulse"
  >
    Show Me How It Works
  </a>
    </div>

  </section>
  

<!-- Modal Overlay -->
<div
  v-if="showModal"
  class="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
>
  <!-- Modal Content -->
  <div class="bg-white p-8 rounded-lg shadow-xl max-w-md w-full relative z-60">
    <!-- Close Button -->
    <button
      @click="showModal = false"
      class="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
    >
      &times;
    </button>

    <!-- Content -->
    <h2 class="text-2xl text-center font-bold mb-4">Let’s Show You How It Works</h2>
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" id="name" v-model="name" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" id="email" v-model="email" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
      </div>
      <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
        Submit
      </button>
    </form>
  </div>
</div>

  

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}
</style>



