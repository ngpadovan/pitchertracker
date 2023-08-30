function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  }
  
  function calculateAge(birthdateString) {
    const birthdate = new Date(birthdateString);
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();
    return age;
  }