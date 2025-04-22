document.addEventListener('DOMContentLoaded', () => {
  // Cargar los productos desde localStorage //
  function loadProducts() {
    const products = JSON.parse(localStorage.getItem('products')) || []
    const tableBody = document
      .getElementById('productTable')
      .getElementsByTagName('tbody')[0]
    // Limpiar la tabla antes de cargar los productos //
    tableBody.innerHTML = ''
    products.forEach((product) => {
      const newRow = tableBody.insertRow()
      product.forEach((data) => {
        const cell = newRow.insertCell()
        const input = document.createElement('input')
        input.type = 'text'
        input.value = data
        input.placeholder = 'Nuevo dato'
        cell.appendChild(input)
      })
    })
  }
  // Guardar los productos en localStorage //
  function saveProducts() {
    const tableRows = document.querySelectorAll('#productTable tbody tr')
    const products = []
    tableRows.forEach((row) => {
      const rowData = []
      const inputs = row.querySelectorAll('input')
      inputs.forEach((input) => {
        rowData.push(input.value)
      })
      products.push(rowData)
    })
    localStorage.setItem('products', JSON.stringify(products))
  }
  // Verificar que los elementos existen antes de asignar eventos //
  const addRowBtn = document.getElementById('addRow')
  const resetTableBtn = document.getElementById('resetTable')
  const searchInput = document.querySelector('.search-bar input')
  const productTable = document.getElementById('productTable')
  if (addRowBtn) {
    addRowBtn.addEventListener('click', () => {
      const table = document
        .getElementById('productTable')
        .getElementsByTagName('tbody')[0]
      const newRow = table.insertRow()
      for (let i = 0; i < 6; i++) {
        const cell = newRow.insertCell(i)
        const input = document.createElement('input')
        input.type = 'text'
        input.placeholder = 'Nuevo dato'
        cell.appendChild(input)
      }
      saveProducts() // Guardar cada vez que se añade una fila //
    })
  }
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const filter = searchInput.value.toLowerCase()
      const rows = document.querySelectorAll('#productTable tbody tr')
      rows.forEach((row) => {
        const text = row.innerText.toLowerCase()
        row.style.display = text.includes(filter) ? '' : 'none'
      })
    })
  }
  if (resetTableBtn) {
    resetTableBtn.addEventListener('click', () => {
      localStorage.removeItem('products')
      loadProducts() // Recargar productos //
    })
  }
  if (productTable) {
    productTable.addEventListener('input', saveProducts)
  }
  // Cargar los productos guardados al cargar la página //
  loadProducts()
})
