<script lang="ts" setup>
// Recommended image aspect ratio: 128:79
// Recommended image resolution: 1536x948px
defineProps<{ imageSrc: string; imageAlt: string }>();
</script>

<template>
  <div class="isolate relative">
    <img
      :src="imageSrc"
      :alt="imageAlt"
      class="absolute left-[0.3%] top-[4.5%] -z-1 w-[99.3%] h-[95%] object-cover object-center bg-dark-900"
    />

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 641 415">
      <path
        d="M641,5.415c0,-2.989 -2.426,-5.415 -5.415,-5.415l-630.17,0c-2.989,0 -5.415,2.426 -5.415,5.415l0,404.17c0,2.989 2.426,5.415 5.415,5.415l630.17,-0c2.989,-0 5.415,-2.426 5.415,-5.415l0,-404.17Zm-3,14.585l-635,-0l0,389.43c0,1.97 0.6,2.57 2.57,2.57l629.86,-0c1.97,-0 2.57,-0.6 2.57,-2.57l0,-389.43Z"
        fill-rule="evenodd"
        class="fill-dark-800"
      />
      <circle cx="9.5" cy="10" r="4" fill="#ff554e" />
      <circle cx="23" cy="10" r="4" fill="#ffbf2f" />
      <circle cx="36.5" cy="10" r="4" fill="#28ca42" />
      <rect
        x="224"
        y="2"
        width="192"
        height="16"
        rx="2"
        class="fill-dark-400"
      />
      <text
        x="320"
        y="12.5"
        text-anchor="middle"
        class="fill-gray-300 text-[7px]"
      >
        http://localhost:3000/
      </text>
    </svg>
  </div>
</template>
