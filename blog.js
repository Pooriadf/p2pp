document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const posts = document.querySelectorAll('.recent-posts .post');
  
    searchInput.addEventListener('input', function() {
      const query = searchInput.value.toLowerCase();
  
      posts.forEach(post => {
        const title = post.querySelector('.post-content h3').textContent.toLowerCase();
        const description = post.querySelector('.post-content p').textContent.toLowerCase();
  
        if (title.includes(query) || description.includes(query)) {
          post.style.display = 'flex';
        } else {
          post.style.display = 'none';
        }
      });
    });
  });
  