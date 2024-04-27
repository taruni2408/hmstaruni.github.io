
document.addEventListener('DOMContentLoaded', function() {
    const footerYear = document.querySelector('footer p');
    footerYear.textContent = `© ${new Date().getFullYear()} Hospital Management System. All rights reserved.`;
});

document.getElementById('registerPatientForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const gender = document.getElementById('gender').value;

    console.log('Registering patient:', { email, password, name, address, gender });
    
});
document.getElementById('addMedicalHistoryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const date = document.getElementById('date').value;
    const conditions = document.getElementById('conditions').value;
    const surgeries = document.getElementById('surgeries').value;
    const medication = document.getElementById('medication').value;

    console.log('Adding medical history:', { date, conditions, surgeries, medication });
    
});
document.getElementById('registerDoctorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;

    console.log('Registering doctor:', { email, password, name, gender });
    
});
document.getElementById('bookAppointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const date = document.getElementById('date').value;
    const starttime = document.getElementById('starttime').value;
    const endtime = document.getElementById('endtime').value;
    const status = document.getElementById('status').value;

    console.log('Booking appointment:', { date, starttime, endtime, status });
   
});


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var message = document.getElementById('message');

   
    if (username === "admin" && password === "admin123") {
        message.style.color = 'green';
        message.textContent = 'Login successful!';
        
        window.location.href = 'index.html';
    } else {
        message.textContent = 'Invalid username or password!';
        message.style.color = 'red';
    }
});
document.getElementById('addMedicalHistoryForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const date = document.getElementById('date').value;
    const conditions = document.getElementById('conditions').value;
    const surgeries = document.getElementById('surgeries').value;
    const medication = document.getElementById('medication').value;

    console.log('Submitting medical history:', { date, conditions, surgeries, medication });
    
});

