import { DrawerItemList } from "./main-layout.types";

export const LIST_DRAWER: DrawerItemList[] = [
  {
    icon: 'mdi-tape-measure',
    label: 'Unidades de Medida',
    description: 'Gerenciar unidades',
    to: '/unitsOfMeasure'
  },
  {
    icon: 'mdi-ticket-confirmation',
    label: 'Marcas',
    description: 'Gerenciar Marcas',
    to: "/brands"
  },
  {
    icon: 'mdi-shape',
    label: 'Categorias',
    description: 'Gerenciar Categorias',
    to: "/categories"
  },
  {
    icon: 'mdi-cart',
    label: 'Produtos',
    description: 'Gerenciar Produtos',
    to: "/products"
  },
  {
    icon: 'mdi-package-variant-closed',
    label: 'Estoque',
    description: 'Gerenciar Estoque',
    to: "/stock"
  }
]