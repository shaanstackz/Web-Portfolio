// script.js

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const submitBtn = document.getElementById('submit-btn');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  submitBtn.addEventListener('click', function() {
    const recipientEmail = 'shaan.kohli@yahoo.com';
    const subject = 'Message from Website';
    const body = `
      Name: ${nameInput.value}
      Email: ${emailInput.value}
      Message: ${messageInput.value}
    `;
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  });
});

