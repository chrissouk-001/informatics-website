// Notifications functionality
document.addEventListener('DOMContentLoaded', () => {
    // Check if notifications button exists (it might not be in all pages)
    const notificationsButton = document.querySelector('.notifications-button');
    const notificationsContent = document.querySelector('.notifications-content');
    
    if (notificationsButton && notificationsContent) {
        // Toggle notifications dropdown
        notificationsButton.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // Toggle visibility
            notificationsContent.classList.toggle('hidden');
            
            // Animate opening
            if (!notificationsContent.classList.contains('hidden')) {
                // Small delay for the animation to work properly after display change
                setTimeout(() => {
                    notificationsContent.classList.add('opacity-100', 'scale-100');
                    notificationsContent.classList.remove('opacity-0', 'scale-95');
                }, 10);
                
                // Remove the notification count (simulating "read" functionality)
                const notificationBadge = notificationsButton.querySelector('span');
                if (notificationBadge) {
                    notificationBadge.classList.remove('animate-pulse');
                    
                    // Optional: Clear notification count after a delay
                    setTimeout(() => {
                        notificationBadge.textContent = '0';
                        notificationBadge.classList.add('bg-gray-400');
                        notificationBadge.classList.remove('bg-pink-500');
                    }, 2000);
                }
            } else {
                // Animate closing
                notificationsContent.classList.remove('opacity-100', 'scale-100');
                notificationsContent.classList.add('opacity-0', 'scale-95');
            }
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!notificationsButton.contains(e.target) && !notificationsContent.contains(e.target)) {
                notificationsContent.classList.add('hidden', 'opacity-0', 'scale-95');
                notificationsContent.classList.remove('opacity-100', 'scale-100');
            }
        });
    }
    
    // Add animation keyframes to stylesheet
    const style = document.createElement('style');
    style.textContent = `
        @keyframes notificationPulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
}); 