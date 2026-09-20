export const unitsOfMeasureColumns = [
  { name: "id", field: "id", label: "#", align: "left" as const, style: "width: 48px" },
  { name: "code", field: "code", label: "Unidade", align: "left" as const },
  { name: "is_active", field: "is_active", label: "Status", align: "left" as const },
  { name: "name", field: "name", label: "Nome", align: "left" as const },
  { name: "decimal_places", field: "decimal_places", label: "Casas Decimais", align: "right" as const },
]

export const unitsOfMeasureRows = [
  { id: 1, code: "UN", name: "Unidade", decimal_places: 0, is_active: true },
  { id: 2, code: "CX", name: "Caixa", decimal_places: 0, is_active: true },
  { id: 3, code: "KG", name: "Quilograma", decimal_places: 3, is_active: true },
  { id: 4, code: "G", name: "Grama", decimal_places: 2, is_active: true },
  { id: 5, code: "L", name: "Litro", decimal_places: 3, is_active: true },
  { id: 6, code: "ML", name: "Mililitro", decimal_places: 0, is_active: false },
  { id: 7, code: "M", name: "Metro", decimal_places: 2, is_active: true },
  { id: 8, code: "CM", name: "Centímetro", decimal_places: 1, is_active: true },
  { id: 9, code: "PC", name: "Peça", decimal_places: 0, is_active: true },
  { id: 10, code: "PCT", name: "Pacote", decimal_places: 0, is_active: false },
  { id: 11, code: "DZ", name: "Dúzia", decimal_places: 0, is_active: true },
  { id: 12, code: "FD", name: "Fardo", decimal_places: 0, is_active: false }
]
