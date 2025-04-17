// Toggle folder content
function toggleFolder(folderId) {
    const content = document.getElementById(`${folderId}-content`);
    const arrow = document.getElementById(`${folderId}-arrow`);
    
    if (content && arrow) {
        content.classList.toggle('open');
        arrow.classList.toggle('rotate-180');
    }
}

// Show grade modal
function showGrade(school, grade) {
    const modal = document.getElementById('gradeModal');
    const title = document.getElementById('modalTitle');
    
    if (!modal || !title) return;
    
    let gradeText = '';
    if (school === 'lykeio') {
        gradeText = `${grade}' Λυκείου`;
    } else {
        gradeText = `${grade}' Γυμνασίου`;
    }
    
    title.textContent = gradeText;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('gradeModal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Close modal when clicking outside
    window.onclick = function(event) {
        const gradeModal = document.getElementById('gradeModal');
        const loginModal = document.getElementById('loginModal');
        
        if (event.target === gradeModal) {
            closeModal();
        }
        
        if (event.target === loginModal && typeof closeLoginModal === 'function') {
            closeLoginModal();
        }
    };
    
    // Open all folders by default
    const folderContents = ['lykeio-content', 'gymnasio-content', 'test-content'];
    folderContents.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.add('open');
        }
    });
}); 