// Notification System
function showNotification(message, type = 'info') {
    const container = document.getElementById('notification-container');
    
    // Create container if it doesn't exist
    if (!container) {
        const newContainer = document.createElement('div');
        newContainer.id = 'notification-container';
        newContainer.className = 'fixed bottom-4 right-4 z-50 flex flex-col space-y-4';
        document.body.appendChild(newContainer);
    }
    
    const notification = document.createElement('div');
    
    // Set notification style based on type
    let bgColor, icon, borderColor;
    switch(type) {
        case 'success':
            bgColor = 'bg-green-100 dark:bg-green-800';
            borderColor = 'border-green-500';
            icon = '<i class="fas fa-check-circle text-green-500 dark:text-green-300"></i>';
            break;
        case 'error':
            bgColor = 'bg-red-100 dark:bg-red-800';
            borderColor = 'border-red-500';
            icon = '<i class="fas fa-exclamation-circle text-red-500 dark:text-red-300"></i>';
            break;
        case 'warning':
            bgColor = 'bg-yellow-100 dark:bg-yellow-800';
            borderColor = 'border-yellow-500';
            icon = '<i class="fas fa-exclamation-triangle text-yellow-500 dark:text-yellow-300"></i>';
            break;
        default: // info
            bgColor = 'bg-blue-100 dark:bg-blue-800';
            borderColor = 'border-blue-500';
            icon = '<i class="fas fa-info-circle text-blue-500 dark:text-blue-300"></i>';
    }
    
    notification.className = `${bgColor} border-l-4 ${borderColor} p-4 rounded-r-lg shadow-lg flex items-start max-w-xs transition-all duration-500 transform translate-x-full opacity-0`;
    notification.innerHTML = `
        <div class="flex-shrink-0 mr-3">
            ${icon}
        </div>
        <div class="flex-1 text-sm text-gray-800 dark:text-white pr-6">
            ${message}
        </div>
        <button class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    container.appendChild(notification);
    
    // Update notification count in the header
    updateNotificationCount();
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full', 'opacity-0');
    }, 10);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.classList.add('opacity-0', 'translate-x-full');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Update notification count badge
function updateNotificationCount() {
    const badge = document.querySelector('.notifications-button span');
    
    if (badge) {
        // Get current notification count
        let count = parseInt(badge.textContent || '0');
        count++;
        
        // Update badge
        badge.textContent = count;
        
        // Add animation
        badge.classList.add('animate-pulse');
        
        // Update badge color if it was previously 0
        if (count === 1) {
            badge.classList.remove('bg-gray-400');
            badge.classList.add('bg-pink-500');
        }
    }
}

// Initialize notification dropdown
function initNotificationSystem() {
    const notificationButton = document.querySelector('.notifications-button');
    const notificationsContent = document.querySelector('.notifications-content');
    
    if (!notificationButton || !notificationsContent) return;
    
    // Toggle notifications dropdown
    notificationButton.addEventListener('click', (e) => {
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
        } else {
            // Animate closing
            notificationsContent.classList.remove('opacity-100', 'scale-100');
            notificationsContent.classList.add('opacity-0', 'scale-95');
        }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (notificationsContent && notificationButton && 
            !notificationButton.contains(e.target) && 
            !notificationsContent.contains(e.target)) {
            
            notificationsContent.classList.add('hidden', 'opacity-0', 'scale-95');
            notificationsContent.classList.remove('opacity-100', 'scale-100');
        }
    });
}

// Example notifications on page load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize notification dropdowns
    initNotificationSystem();
    
    // Show welcome notification after 2 seconds
    setTimeout(() => {
        showNotification('Καλώς ήρθατε στην πλατφόρμα μαθημάτων πληροφορικής!', 'info');
    }, 2000);
    
    // Example of new content notification
    setTimeout(() => {
        showNotification('Νέο μάθημα προστέθηκε: Εισαγωγή στην Python', 'success');
    }, 4000);
});

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
    
    // Show notification function
    window.showNotification = function(message, type = 'info') {
        const container = document.getElementById('notification-container');
        if (!container) return;
        
        const notification = document.createElement('div');
        
        // Set notification style based on type
        let bgColor, icon, borderColor;
        switch(type) {
            case 'success':
                bgColor = 'bg-green-100';
                borderColor = 'border-green-500';
                icon = '<i class="fas fa-check-circle text-green-500"></i>';
                break;
            case 'error':
                bgColor = 'bg-red-100';
                borderColor = 'border-red-500';
                icon = '<i class="fas fa-exclamation-circle text-red-500"></i>';
                break;
            case 'warning':
                bgColor = 'bg-yellow-100';
                borderColor = 'border-yellow-500';
                icon = '<i class="fas fa-exclamation-triangle text-yellow-500"></i>';
                break;
            default: // info
                bgColor = 'bg-blue-100';
                borderColor = 'border-blue-500';
                icon = '<i class="fas fa-info-circle text-blue-500"></i>';
        }
        
        notification.className = `${bgColor} border-l-4 ${borderColor} p-4 rounded-r-lg shadow-lg flex items-start max-w-xs transition-all duration-500 transform translate-x-full opacity-0`;
        notification.innerHTML = `
            <div class="flex-shrink-0 mr-3">
                ${icon}
            </div>
            <div class="flex-1 text-sm text-gray-800 pr-6">
                ${message}
            </div>
            <button class="text-gray-500 hover:text-gray-700" onclick="this.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        container.appendChild(notification);
        
        // Update notification badge count
        const badge = document.querySelector('.notifications-button span');
        if (badge) {
            let count = parseInt(badge.textContent || '0');
            count++;
            badge.textContent = count;
            badge.classList.add('animate-pulse');
            badge.classList.remove('bg-gray-400');
            badge.classList.add('bg-pink-500');
        }
        
        // Animate in
        setTimeout(() => {
            notification.classList.remove('translate-x-full', 'opacity-0');
        }, 10);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.classList.add('opacity-0', 'translate-x-full');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 5000);
    }
    
    // Example notification after page load
    setTimeout(() => {
        if (typeof showNotification === 'function') {
            showNotification('Καλώς ήρθατε στην EduPolis!', 'info');
        }
    }, 2000);
}); 