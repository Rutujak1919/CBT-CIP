document.addEventListener('DOMContentLoaded', () => {
    const eventForm = document.querySelector('form');
    const eventCards = document.getElementById('eventCards');

    // Handle form submission
    eventForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get input values
        const eventName = document.getElementById('eventName').value;
        const eventDate = document.getElementById('eventDate').value;
        const eventTime = document.getElementById('eventTime').value;
        const eventLocation = document.getElementById('eventLocation').value;

        // Create event card
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${eventName}</h3>
            <p><strong>Date:</strong> ${eventDate}</p>
            <p><strong>Time:</strong> ${eventTime}</p>
            <p><strong>Location:</strong> ${eventLocation}</p>
        `;

        // Append card to event list
        eventCards.appendChild(card);

        // Reset form
        eventForm.reset();
    });
});
