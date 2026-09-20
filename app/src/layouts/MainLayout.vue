<template>
  <q-layout view="hHh Lpr lFf">
    <q-header class="bg-white text-grey-8 bordered">
      <q-toolbar class="q-pl-none">
        <div class="brand row items-center no-wrap">
          <img src="/icon.svg" alt="Stokio" style="width: 30px; height: 30px"/>

          <div class="column items-start justify-center">
            <span class="text-caption text-bold">Stokio</span>
            <span class="text-tiny text-grey-7">Gerenciamento de Inventário</span>
          </div>
        </div>
        <q-btn class="q-ml-sm" aria-label="Toggle drawer" flat @click="drawerOpened = !drawerOpened" round dense icon="menu"/>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawerOpened" show-if-above :width="275" :breakpoint="500" bordered>
      <q-scroll-area class="fit">
        <q-list class="q-pa-md">
          <span class="text-bold uppercase text-caption text-grey-6 q-mb-sm block"> INVENTÁRIO </span>
          <template v-for="(item, index) in drawerList" :key="index">
            <div
              class="menu-item full-width q-px-md q-py-sm row items-center justify-between rounded-borders"
              :class="{ 'menu-item--active': $route.path === item.to }"
              v-ripple
              @click="$router.push(item.to)"
            >
                <div class="row items-center" style="gap: 10px;">
                  <q-icon :name="item.icon" class="text-grey-3 rounded-borders bg-primary q-pa-sm" size="15px"/>
                  <div class="column">
                    <span class="text-caption text-grey-8 text-bold"> {{ item.label }}</span>
                    <span class="text-tiny text-grey-7"> {{ item.description }}</span>
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
  import { DrawerItemList } from './main-layout.types';
  import { LIST_DRAWER } from './main-layout.constants';

  const drawerOpened = ref<boolean>(false);
  const drawerList: DrawerItemList[] = LIST_DRAWER
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