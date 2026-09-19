<template>
  <q-layout view="hHh Lpr lFf">
    <q-header class="bg-white text-grey-8 bordered">
      <q-toolbar class="q-pl-none">
        <div class="brand row items-center no-wrap">
          <img src="/icon.svg" alt="Stokio" style="width: 36px; height: 36px"/>

          <div class="column items-start justify-center">
            <span class="text-caption text-bold">Stokio</span>
            <span class="text-caption text-grey-5">Gerenciamento de Inventário</span>
          </div>
        </div>
        <q-btn class="q-ml-sm" aria-label="Toggle drawer" flat @click="drawerAberto = !drawerAberto" round dense icon="menu"/>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawerAberto" show-if-above :width="275" :breakpoint="500" bordered>
      <q-scroll-area class="fit">
        <q-list class="q-pa-md">
          <span class="text-bold uppercase text-caption text-grey-6 q-mb-sm block"> INVENTÁRIO </span>
          <template v-for="(item, index) in listaDrawer" :key="index">
            <div
              class="menu-item full-width q-px-md q-py-sm row items-center justify-between rounded-borders"
              :class="{ 'menu-item--active': $route.path === item.para }"
              v-ripple
              @click="$router.push(item.para)"
            >
                <div class="row items-center" style="gap: 10px;">
                  <q-icon :name="item.icone" class="text-grey-3 rounded-borders bg-grey-6 q-pa-sm" size="20px"/>
                  <div class="column">
                    <span class="text-caption text-bold"> {{ item.rotulo }}</span>
                    <span class="text-caption text-grey-8"> {{ item.descricao }}</span>
                  </div>
                </div>
                <q-icon name="chevron_right" size="18px" class="text-grey-7"/>
            </div>
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { ItemListaDrawer } from './main-layout.types';
  import { LIST_DRAWER } from './main-layout.constants';

  const drawerAberto = ref<boolean>(false);
  const listaDrawer: ItemListaDrawer[] = LIST_DRAWER
</script>

<style scoped>
  .bordered {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }

  .brand {
    align-self: stretch;
    width: 275px;
    padding-left: 16px;
    gap: 10px;
    border-right: 1px solid rgba(0, 0, 0, 0.12);
  }

  .menu-item {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .menu-item:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .menu-item--active {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .menu-item--active:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
</style>