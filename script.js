// ===== Heart Rate Chart =====
const heartCtx = document.getElementById('heartRateChart').getContext('2d');
new Chart(heartCtx, {
    type: 'line',
    data: {
        labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        datasets: [{
            label: 'Heart Rate (BPM)',
            data: [72, 75, 70, 78, 74, 76, 73],
            borderColor: 'rgb(255,99,132)',
            backgroundColor: 'rgba(255,99,132,0.2)',
            fill: true,
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { position: 'top' } }
    }
});

// ===== Blood Pressure Chart =====
const bpCtx = document.getElementById('bpChart').getContext('2d');
new Chart(bpCtx, {
    type: 'line',
    data: {
        labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        datasets: [
            {
                label: 'Systolic BP',
                data: [120, 118, 122, 119, 121, 123, 120],
                borderColor: 'rgb(54,162,235)',
                backgroundColor: 'rgba(54,162,235,0.2)',
                fill: true,
                tension: 0.3
            },
            {
                label: 'Diastolic BP',
                data: [80, 78, 82, 79, 81, 80, 78],
                borderColor: 'rgb(75,192,192)',
                backgroundColor: 'rgba(75,192,192,0.2)',
                fill: true,
                tension: 0.3
            }
        ]
    },
    options: {
        responsive: true,
        plugins: { legend: { position: 'top' } }
    }
});

// ===== Oxygen Levels Chart =====
const oxygenCtx = document.getElementById('oxygenChart').getContext('2d');
new Chart(oxygenCtx, {
    type: 'line',
    data: {
        labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        datasets: [{
            label: 'SpO2 (%)',
            data: [98, 97, 99, 96, 98, 97, 99],
            borderColor: 'rgb(255,206,86)',
            backgroundColor: 'rgba(255,206,86,0.2)',
            fill: true,
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { position: 'top' } }
    }
});

// ===== Temperature Chart =====
const tempCtx = document.getElementById('tempChart').getContext('2d');
new Chart(tempCtx, {
    type: 'line',
    data: {
        labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        datasets: [{
            label: 'Temperature (°C)',
            data: [36.6, 36.8, 37.0, 36.7, 36.9, 37.1, 36.8],
            borderColor: 'rgb(153,102,255)',
            backgroundColor: 'rgba(153,102,255,0.2)',
            fill: true,
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { position: 'top' } }
    }
});
