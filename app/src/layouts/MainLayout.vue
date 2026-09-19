<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> Stokio </q-toolbar-title>
        <q-space />
        <q-btn flat label="Início" :to="{ name: 'home' }" />
        <q-btn flat label="Produtos" :to="{ name: 'produtos' }" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
// Layout principal com uma toolbar simples de navegação.
</script>
