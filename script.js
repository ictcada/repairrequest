document.getElementById('repairForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Add submission timestamp
    data.submittedAt = new Date().toISOString();

    // Basic validation (HTML5 required attributes handle most, but we can add more)
    if (!data.requesterName || !data.department || !data.contactInfo || !data.equipmentType || !data.location || !data.problemDescription || !data.urgency || !data.requestDate) {
        alert('Please fill in all required fields.');
        return;
    }

    // Store in localStorage
    let requests = JSON.parse(localStorage.getItem('repairRequests')) || [];
    requests.push(data);
    localStorage.setItem('repairRequests', JSON.stringify(requests));

    // Confirm submission
    alert('Service request submitted successfully! You can view all requests from the dashboard.');

    // Optionally, reset the form
    this.reset();
});