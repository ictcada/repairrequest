document.addEventListener('DOMContentLoaded', function() {
    const requests = JSON.parse(localStorage.getItem('repairRequests')) || [];
    document.getElementById('requestCount').textContent = requests.length;
});