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

// Example notifications on page load
document.addEventListener('DOMContentLoaded', function() {
    // Show welcome notification after 2 seconds
    setTimeout(() => {
        showNotification('Καλώς ήρθατε στην πλατφόρμα μαθημάτων πληροφορικής!', 'info');
    }, 2000);
    
    // Example of new content notification
    setTimeout(() => {
        showNotification('Νέο μάθημα προστέθηκε: Εισαγωγή στην Python', 'success');
    }, 4000);
}); 