<template>
  <q-page class="column q-pa-md">
    <div class="col column bordered rounded-borders bg-white">
      <div class="row items-center no-wrap q-pa-md">
        <div class="column">
          <span class="text-caption text-weight-bold">Unidades de Medida</span>
          <span class="text-tiny text-grey-6">Gerencie as unidades usadas nos produtos</span>
        </div>

        <q-space />

        <q-input
          v-model="filter"
          class="units-search q-mr-sm"
          outlined
          placeholder="Buscar..."
        >
          <template #prepend>
            <q-icon name="search" size="18px" />
          </template>
        </q-input>

        <q-btn class="add-btn text-caption text-bold" unelevated no-caps color="primary" label="Adicionar">
          <q-tooltip>Nova unidade</q-tooltip>
        </q-btn>
      </div>

      <q-separator />

      <!-- Tabela -->
      <q-table
        class="units-table col"
        flat
        row-key="id"
        :rows="rows"
        :columns="unitsOfMeasureColumns"
        :filter="filter"
        v-model:pagination="pagination"
        hide-pagination
        no-data-label="Nenhuma unidade cadastrada"
      >
        <!-- Casas decimais em tom mais suave -->
        <template #body-cell-decimal_places="props">
          <q-td :props="props" class="text-grey-7">
            {{ props.value }}
          </q-td>
        </template>

        <!-- Status como badge quadrado -->
        <template #body-cell-is_active="props">
          <q-td :props="props">
            <q-badge
              class="status-badge"
              :color="props.value ? 'green-1' : 'red-1'"
              :text-color="props.value ? 'green-8' : 'red-8'"
              :label="props.value ? 'Ativo' : 'Inativo'"
            />
          </q-td>
        </template>
      </q-table>

      <q-separator />

      <!-- Rodapé: contagem + paginação -->
      <div class="row items-center justify-between q-px-md q-py-sm">
        <span class="text-caption text-grey-6">{{ rows.length }} unidades</span>
        <q-pagination
          v-model="pagination.page"
          class="units-pagination"
          :max="pagesNumber"
          :max-pages="5"
          boundary-numbers
          unelevated
          gutter="6px"
          size="13px"
          padding="6px 10px"
          color="grey-3"
          text-color="grey-8"
          active-color="primary"
          active-text-color="white"
        />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
  import { ref, computed } from 'vue';
  import { unitsOfMeasureColumns, unitsOfMeasureRows } from './units-of-measure.constants';

  defineOptions({ name: "UnitsOfMeasure" })

  const filter = ref('');
  const rows = unitsOfMeasureRows;
  const pagination = ref({ page: 1, rowsPerPage: 12 });

  const pagesNumber = computed(() =>
    Math.max(1, Math.ceil(rows.length / pagination.value.rowsPerPage))
  );
</script>

<style scoped>
  .bordered {
    border: 1px solid #e0e0e0;
  }

  .units-search {
    width: 200px;
    border-radius: 5px;
  }

  .add-btn {
    font-family: 12px;
    height: 40px;
  }

  .status-badge {
    padding: 8px 15px;
    font-size: 11px;
    font-weight: 600;
  }

  .units-table :deep(thead tr th) {
    position: sticky;
    top: 0;
    z-index: 1;
  }

  .units-table :deep(thead th) {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: rgba(0, 0, 0, 0.5);
    background-color: #fafafa;
  }

  .units-table :deep(tbody td) {
    font-size: 12px;
    color: rgba(14, 14, 14, 0.87);
  }

  .units-table :deep(tbody tr:nth-child(even)) {
    background-color: #fcfcfc;
  }

  .units-pagination :deep(.q-btn) {
    transition: background-color 0.2s ease, color 0.2s ease;
    min-width: 30px;
  }
</style>
