<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
body {
  margin: 0;
  background: $background-main;
  font-family: $body-text;
  height: 100vh;
  color: $text-primary;
}
</style>
