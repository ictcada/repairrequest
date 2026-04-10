document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('requestsContainer');
    const requests = JSON.parse(localStorage.getItem('repairRequests')) || [];

    if (requests.length === 0) {
        container.innerHTML = '<p>No repair requests submitted yet.</p>';
        return;
    }

    let html = '<table>';
    html += '<thead><tr><th>Requester</th><th>Department</th><th>Equipment Type</th><th>Location</th><th>Urgency</th><th>Submitted At</th><th>Actions</th></tr></thead>';
    html += '<tbody>';

    requests.forEach((request, index) => {
        html += `<tr>
            <td>${request.requesterName}</td>
            <td>${request.department}</td>
            <td>${request.equipmentType}</td>
            <td>${request.location}</td>
            <td>${request.urgency}</td>
            <td>${new Date(request.submittedAt).toLocaleString()}</td>
            <td><button onclick="viewDetails(${index})">View Details</button></td>
        </tr>`;
    });

    html += '</tbody></table>';
    container.innerHTML = html;
});

function viewDetails(index) {
    const requests = JSON.parse(localStorage.getItem('repairRequests')) || [];
    const request = requests[index];

    if (request) {
        let details = 'Request Details:\n\n';
        for (const [key, value] of Object.entries(request)) {
            details += `${key}: ${value}\n`;
        }
        alert(details);
    }
}