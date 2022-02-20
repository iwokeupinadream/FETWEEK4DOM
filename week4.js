document.getElementById('add').addEventListener('click', () => {
    console.log('event listener trigged')
    let table = document.getElementById('list')
    let row = table.insertRow(1)
    
    row.insertCell(0).innerHTML = document.getElementById('firstName').value
    row.insertCell(1).innerHTML = document.getElementById('lastName').value
    row.insertCell(2).innerHTML = document.getElementById('birthday').value

    document.getElementById('firstName').value = ''
    document.getElementById('lastName').value = ''
    document.getElementById('birthday').value = ''
})