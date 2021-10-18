<template>
  <header
    class="fixed left-0 top-0 w-full h-18 px-4 flex justify-end items-center bg-perforated backdrop-filter backdrop-blur-sm sm:(px-6)"
  ></header>
</template>

<style>
body {
  scroll-padding-top: 4.5rem;
}
</style>

<style scoped>
.bg-perforated {
  background-image: radial-gradient(
    rgba(15, 15, 15, 0.33) 1px,
    rgba(15, 15, 15, 1) 1px
  );
  background-size: 4px 4px;
}
</style>
