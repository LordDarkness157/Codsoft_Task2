document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    document.querySelector('.contact-form button').disabled = true;
    setTimeout(function () {
      document.querySelector('.contact-form button').disabled = false;
      alert('Form submitted successfully!');
    }, 1500);
    function scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    
    function handleSearch() {
      const searchInput = document.getElementById('search-input');
      if (searchInput) {
        const searchQuery = searchInput.value.toLowerCase();
    
        
        if (searchQuery.includes('television')) {
          scrollToSection('products');
        }
        
    
       
        searchInput.value = '';
      }
    }
    
    
    const searchForm = document.getElementById('search-form');
    if (searchForm) {
      searchForm.addEventListener('submit', function (event) {
        event.preventDefault();
        handleSearch();
      });
    }
  });
  
  
