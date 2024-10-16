document.getElementById('attendance-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('employeeName').value;
    const id = document.getElementById('employeeId').value;
    const date = document.getElementById('attendanceDate').value;
    const status = document.getElementById('attendanceStatus').value;

    const tableBody = document.querySelector('#attendance-table tbody');
    const row = tableBody.insertRow();

    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = id;
    row.insertCell(2).innerText = date;
    row.insertCell(3).innerText = status;

    document.getElementById('attendance-form').reset();
});

document.getElementById('download-btn').addEventListener('click', function() {
    let table = document.getElementById('attendance-table');
    let rows = Array.from(table.rows).map(row => Array.from(row.cells).map(cell => cell.innerText).join('\t')).join('\n');

    const blob = new Blob([rows], { type: 'application/vnd.ms-excel' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'attendance.xls';
    a.click();
    URL.revokeObjectURL(url);
});
