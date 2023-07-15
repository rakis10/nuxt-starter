<template>
  <div>
    <!-- Hero Section with Overlay -->
    <section class="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div class="relative">
        <img
          class="w-full h-auto"
          src="@/img/space.jpg"
          alt="Hero Image"
        >
        <div class="absolute inset-0 bg-black opacity-50" />
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 class="text-4xl font-bold mb-4 animate-bounce">
            Welcome to My Landing Page
          </h1>
          <p class="text-xl animate-pulse">
            Discover Amazing Tailwind CSS Effects
          </p>
        </div>
      </div>
    </section>

    <!-- Cards with Hover Effects -->
    <section class="py-12">
      <div class="max-w-5xl mx-auto grid grid-cols-3 gap-8">
        <div class="p-6 bg-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
          <h2 class="text-2xl font-bold mb-4">
            Card 1
          </h2>
          <p class="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div class="p-6 bg-white rounded-lg shadow-lg hover:rotate-3 transition-transform duration-300">
          <h2 class="text-2xl font-bold mb-4">
            Card 2
          </h2>
          <p class="text-gray-600">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
          </p>
        </div>
        <div class="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 class="text-2xl font-bold mb-4">
            Card 3
          </h2>
          <p class="text-gray-600">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </section>
    <div
      data-aos="fade-right"
      class="card"
      style="max-width: 18rem; margin: 200px auto;"
    >
      Loool
    </div>

    <!-- Scroll Animations -->
    <section class="py-12">
      <div
        class="max-w-5xl mx-auto"
        data-aos="fade-up"
      >
        <h2 class="text-4xl font-bold mb-4">
          Scroll Animations
        </h2>
        <p class="text-gray-600">
          Scroll down to see the animations in action!
        </p>
      </div>
    </section>

    <!-- Smooth Scrolling -->
    <section
      id="section4"
      class="py-12"
    >
      <div class="max-w-5xl mx-auto">
        <h2 class="text-4xl font-bold mb-4">
          Smooth Scrolling
        </h2>
        <p class="text-gray-600">
          Click the button to smoothly scroll to the next section.
        </p>
        <button
          class="btn btn-primary mt-4"
          @click="smoothScroll('#section5')"
        >
          Scroll Down
        </button>
      </div>
    </section>

    <!-- Call-to-Action (CTA) Button -->
    <section class="bg-gray-900 py-12">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-4xl font-bold text-white mb-4">
          Ready to Get Started?
        </h2>
        <p class="text-gray-300 mb-8">
          Join us now and experience the power of Tailwind CSS!
        </p>
        <a
          href="#"
          class="btn btn-primary"
        >Sign Up</a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

// Smooth scrolling function
const smoothScroll = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

</script>

<style>
.btn-primary {
  @apply bg-blue-600 hover:bg-blue-700;
}
</style>
