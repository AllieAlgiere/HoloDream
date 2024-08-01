document.addEventListener('DOMContentLoaded', function() {
    // Dropdown functionality
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('a');
        const content = dropdown.querySelector('.dropdown-content');
        
        button.addEventListener('click', function(event) {
            event.preventDefault();
            content.classList.toggle('show');
        });

        document.addEventListener('click', function(event) {
            if (!dropdown.contains(event.target)) {
                content.classList.remove('show');
            }
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Speech Bubble Text Update
    const speechBubble = document.querySelector('.speech-bubble');
    if (speechBubble) { // Ensure the speech bubble exists
        const messages = [
            "Welcome to HoloDream!",
            "Explore our characters!",
            "Join us for updates!",
            "Have questions? Contact us!",
            "Don't forget to drink water!",
            "Remember to take your medication!",
            "If you're wondering, you can call me Doc."

        ];

        function getRandomMessage() {
            const randomIndex = Math.floor(Math.random() * messages.length);
            return messages[randomIndex];
        }

        function updateSpeechBubble() {
            speechBubble.textContent = getRandomMessage();
            speechBubble.style.display = 'block'; // Ensure the speech bubble is visible
        }

        // Initial update
        updateSpeechBubble();

        // Optionally, update on every page load
        // setInterval(updateSpeechBubble, 10000); // Update every 10 seconds
    }
});
