<script setup lang="ts">
import { Button } from '@backoffice/components';
</script>

<template>
  <main>
    <header>
      <nav>
        <h2>Hello world from another side! Entity</h2>
        <Button label="Click on me"></Button>
      </nav>
    </header>
    <nuxt-page />
  </main>
</template>

<style scoped lang="css">
header {
  line-height: 1.5;
  max-width: 100vw;
}

nav > a {
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 768px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    margin-left: auto;
    margin-right: auto;
    max-width: 768px;
  }

  nav {
    text-align: left;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
