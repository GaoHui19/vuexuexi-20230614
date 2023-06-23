export function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  
  export function loadFromLocalStorage(key) {
    const savedData = localStorage.getItem(key);
    return savedData ? JSON.parse(savedData) : [];
  }
  