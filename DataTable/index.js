document.addEventListener('DOMContentLoaded', () => {
  const data = [
    { name: 'Ravi', age: 28, city: 'Hyderabad' },
    { name: 'Anusha', age: 34, city: 'Vijayawada' },
    { name: 'Venkatesh', age: 45, city: 'Tirupati' },
    { name: 'Sita', age: 29, city: 'Visakhapatnam' },
    { name: 'Karthik', age: 32, city: 'Guntur' },
    { name: 'Padma', age: 38, city: 'Rajahmundry' },
    { name: 'Arjun', age: 27, city: 'Nellore' },
    { name: 'Bhavani', age: 31, city: 'Kakinada' },
    { name: 'Srikanth', age: 36, city: 'Anantapur' },
    { name: 'Swapna', age: 33, city: 'Warangal' },
    { name: 'Manoj', age: 40, city: 'Kadapa' },
    { name: 'Neelima', age: 28, city: 'Ongole' },
    { name: 'Raghav', age: 35, city: 'Srikakulam' },
    { name: 'Madhavi', age: 30, city: 'Eluru' },
    { name: 'Surya', age: 29, city: 'Machilipatnam' },
    { name: 'Divya', age: 32, city: 'Chittoor' },
    { name: 'Pradeep', age: 37, city: 'Kurnool' },
    { name: 'Rajeswari', age: 34, city: 'Nizamabad' },
    { name: 'Ganesh', age: 28, city: 'Adilabad' },
    { name: 'Uma', age: 45, city: 'Karimnagar' },
    { name: 'Naveen', age: 33, city: 'Khammam' },
    { name: 'Lakshmi', age: 41, city: 'Nalgonda' },
    { name: 'Kiran', age: 30, city: 'Mahbubnagar' },
    { name: 'Jyothi', age: 36, city: 'Medak' },
    { name: 'Harsha', age: 29, city: 'Suryapet' },
    { name: 'Chandra', age: 35, city: 'Jagitial' },
    { name: 'Radha', age: 38, city: 'Miryalaguda' },
  ]

  const rowsPerPage = 5
  let currentPage = 1
  let filteredData = [...data]

  const tableBody = document.querySelector('#data-table tbody')
  const paginationDiv = document.getElementById('pagination')
  const filterInput = document.getElementById('filter-input')

  // Function to render table rows
  const renderTable = (data) => {
    tableBody.innerHTML = ''
    const start = (currentPage - 1) * rowsPerPage
    const end = start + rowsPerPage
    const pageData = data.slice(start, end)

    pageData.forEach((row) => {
      const tr = document.createElement('tr')
      Object.values(row).forEach((text) => {
        const td = document.createElement('td')
        td.textContent = text
        tr.appendChild(td)
      })
      tableBody.appendChild(tr)
    })
  }

  const renderPagination = (data) => {
    paginationDiv.innerHTML = ''
    const pageCount = Math.ceil(data.length / rowsPerPage)

    for (let i = 1; i <= pageCount; i++) {
      const button = document.createElement('button')
      button.textContent = i
      button.addEventListener('click', () => {
        currentPage = i
        renderTable(data)
      })
      paginationDiv.appendChild(button)
    }
  }

  const sortData = (column, order) => {
    const sortedData = [...filteredData].sort((a, b) => {
      if (a[column] < b[column]) return order === 'asc' ? -1 : 1
      if (a[column] > b[column]) return order === 'asc' ? 1 : -1
      return 0
    })
    filteredData = sortedData
    renderTable(filteredData)
    renderPagination(filteredData)
  }

  document.querySelectorAll('th').forEach((th) => {
    th.addEventListener('click', () => {
      const column = th.getAttribute('data-column')
      const order = th.getAttribute('data-order') === 'asc' ? 'desc' : 'asc'
      th.setAttribute('data-order', order)
      sortData(column, order)
    })
  })

  filterInput.addEventListener('input', () => {
    const query = filterInput.value.toLowerCase()
    filteredData = data.filter((row) => {
      return Object.values(row).some((value) =>
        String(value).toLowerCase().includes(query)
      )
    })
    currentPage = 1
    renderTable(filteredData)
    renderPagination(filteredData)
  })

  // Initial render
  renderTable(filteredData)
  renderPagination(filteredData)
})
