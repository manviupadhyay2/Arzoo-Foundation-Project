document.addEventListener('DOMContentLoaded', function() {
  const articlesContainer = document.querySelector('.articles');

  // Function to create a new article
  function createArticle(index) {
    const article = document.createElement('div');
    article.classList.add('article');
    article.textContent = `Article ${index + 1}`;
    return article;
  }

  // Populate articles
  for (let i = 0; i < 5; i++) {
    articlesContainer.appendChild(createArticle(i));
  }
});