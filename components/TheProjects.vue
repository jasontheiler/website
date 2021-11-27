<script setup lang="ts">
import { animate, spring } from "motion";

const projects = await Promise.all(
  Object.values(import.meta.glob("/content/projects/**/*.md")).map(
    async (module) => (await module()).default
  )
);
projects.sort((a, b) => a.order - b.order);

const viewsContainerElement = ref<HTMLElement>();
const viewsElement = ref<HTMLElement>();
const viewsSide = ref("left");
const projectElements = ref<HTMLElement[]>([]);
const setProjectElement = (element: any) => {
  if (!element) return;
  projectElements.value.push(element);
};

const { width } = useElementSize(viewsContainerElement);

watch(
  () => width.value * (7 / 32) * (viewsSide.value === "left" ? -1 : 1),
  (x) => {
    animate(
      viewsElement.value!,
      { x },
      { easing: spring({ stiffness: 200, damping: 15 }) }
    );
  }
);

let observer: IntersectionObserver;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      for (const { isIntersecting, target } of entries) {
        if (!isIntersecting) continue;
        viewsSide.value = target.getAttribute("data-views-side")!;
      }
    },
    { rootMargin: "-50% 0% -50% 0%" }
  );

  for (const projectElement of projectElements.value)
    observer.observe(projectElement);
});

onBeforeUnmount(() => observer.disconnect());
</script>

<template>
  <section class="relative">
    <div class="absolute inset-0 pointer-events-none">
      <div class="sticky top-0 w-full h-screen overflow-hidden">
        <div
          class="w-full max-w-screen-xl h-full mx-auto px-4 xs:(px-6) sm:(px-8) md:(px-10) lg:(px-12)"
        >
          <div
            ref="viewsContainerElement"
            class="w-full h-full flex justify-center items-center"
          >
            <div ref="viewsElement" class="relative w-9/16 origin-center">
              <ProjectViewBrowserDesktop
                imageSrc="/images/gol_desktop.png"
                imageAlt="Conway's Game of Life on desktop"
              />

              <ProjectViewBrowserSmartphone
                imageSrc="/images/gol_smartphone.png"
                imageAlt="Conway's Game of Life on smartphone"
                class="!absolute left-3/5 -bottom-1/10 w-1/4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="w-full max-w-screen-xl mx-auto px-4 xs:(px-6) sm:(px-8) md:(px-10) lg:(px-12)"
    >
      <div
        v-for="({ title, body }, idx) in projects"
        :ref="setProjectElement"
        :data-views-side="idx % 2 ? 'right' : 'left'"
        class="min-h-screen flex items-center"
      >
        <div :class="[idx % 2 ? 'mr-auto' : 'ml-auto']" class="w-3/8">
          <h1
            class="mb-8 bg-clip-text bg-gray-300 bg-foil font-bold text-5xl text-transparent"
          >
            {{ title }}
          </h1>

          <Component :is="body" />
        </div>
      </div>
    </div>
  </section>
</template>
