// Quiz functionality
document.addEventListener('DOMContentLoaded', function() {
    const quizOptions = document.querySelectorAll('.quiz-option');
    const resultContainer = document.getElementById('result-container');
    const quizNextBtn = document.getElementById('quiz-next-btn');
    
    if (quizOptions.length === 0) return;
    
    let optionSelected = false;
    
    quizOptions.forEach(option => {
        option.addEventListener('click', () => {
            if (optionSelected) return;
            
            optionSelected = true;
            const isCorrect = option.getAttribute('data-correct') === 'true';
            
            // Show selected indicator
            const indicator = option.querySelector('.option-indicator');
            if (indicator) {
                indicator.classList.remove('hidden');
            }
            
            if (isCorrect) {
                // Correct answer styling
                option.classList.add('border-green-500');
                if (indicator) {
                    indicator.classList.add('bg-green-500');
                }
                
                if (resultContainer) {
                    resultContainer.classList.remove('hidden');
                    resultContainer.classList.remove('bg-red-100', 'dark:bg-red-900/40', 'text-red-800', 'dark:text-red-200');
                    resultContainer.classList.add('bg-green-100', 'dark:bg-green-900/40', 'text-green-800', 'dark:text-green-200');
                    resultContainer.innerHTML = '<p class="font-medium"><i class="fas fa-check-circle mr-2"></i> Σωστά! Η HTML είναι η γλώσσα σήμανσης για τη δημιουργία ιστοσελίδων.</p>';
                }
            } else {
                // Wrong answer styling
                option.classList.add('border-red-500');
                if (indicator) {
                    indicator.classList.add('bg-red-500');
                }
                
                // Highlight correct answer
                quizOptions.forEach(opt => {
                    if (opt.getAttribute('data-correct') === 'true') {
                        opt.classList.add('border-green-500');
                        const correctIndicator = opt.querySelector('.option-indicator');
                        if (correctIndicator) {
                            correctIndicator.classList.remove('hidden');
                            correctIndicator.classList.add('bg-green-500');
                        }
                    }
                });
                
                if (resultContainer) {
                    resultContainer.classList.remove('hidden');
                    resultContainer.classList.remove('bg-green-100', 'dark:bg-green-900/40', 'text-green-800', 'dark:text-green-200');
                    resultContainer.classList.add('bg-red-100', 'dark:bg-red-900/40', 'text-red-800', 'dark:text-red-200');
                    resultContainer.innerHTML = '<p class="font-medium"><i class="fas fa-times-circle mr-2"></i> Λάθος! Η σωστή απάντηση είναι: Hypertext Markup Language.</p>';
                }
            }
        });
    });
    
    if (quizNextBtn) {
        quizNextBtn.addEventListener('click', () => {
            alert('Αυτό είναι ένα δείγμα Quiz. Σε μια πλήρη εφαρμογή, θα μεταβαίνατε στην επόμενη ερώτηση.');
        });
    }
}); 