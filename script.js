document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality for floor plans
    const tabs = document.querySelectorAll('.tab');

    // Add click event listeners to tabs
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));

            // Add active class to clicked tab
            tab.classList.add('active');

            // Handle tab content display
            if (index === 0) {
                // For demo purposes, we're only showing the first tab content
                // In a real implementation, you would toggle the visibility of different tab panes
            }
        });
    });

    // Navigation buttons for features section
    const prevBtn = document.querySelector('.nav-btn.prev');
    const nextBtn = document.querySelector('.nav-btn.next');

    if (prevBtn && nextBtn) {
        // In a real implementation, these would cycle through different features
        prevBtn.addEventListener('click', () => {
            console.log('Previous feature');
        });

        nextBtn.addEventListener('click', () => {
            console.log('Next feature');
        });
    }
});