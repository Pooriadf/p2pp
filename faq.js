document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');
  
    faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
        const isActive = question.classList.contains('active');
  
        // Close all other open answers
        document.querySelectorAll('.faq-question.active').forEach(q => {
          q.classList.remove('active');
          q.nextElementSibling.style.maxHeight = null;
        });
  
        // Toggle the clicked question
        if (!isActive) {
          question.classList.add('active');
          const answer = question.nextElementSibling;
          answer.style.maxHeight = answer.scrollHeight + 'px'; // Smooth animation
        }
      });
    });
  });
  