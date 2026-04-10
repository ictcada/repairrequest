# ICTC Equipment Repair Request System

This is a web-based system for submitting and managing repair requests for ICTC (Information and Communication Technology Center) equipment.

## Files

- `index.html`: Dashboard/home page with navigation and quick stats
- `submit.html`: Form for submitting new repair requests
- `view.html`: Page to view all submitted requests
- `styles.css`: CSS styles for all pages
- `script.js`: JavaScript for form validation and submission
- `view-script.js`: JavaScript to load and display stored requests
- `dashboard.js`: JavaScript for dashboard functionality

## Usage

1. Open `index.html` in a web browser to access the dashboard
2. From the dashboard, choose to submit a new request or view existing ones
3. Submit requests via the form, which are stored locally
4. View and manage requests from the view page

Note: This is a frontend-only implementation using localStorage for data persistence. In a production environment, you would need to integrate a backend service to process and store the submitted requests securely.

## Features

- Requester information (name, department, contact)
- Equipment details (type, ID, location)
- Problem description
- Urgency level selection
- Request date
- Form validation
- Responsive design