         
const scrollStep = 1; 
const scrollInterval = 10; 

function autoScroll() {
  window.scrollBy(0, scrollStep); 
}

setInterval(autoScroll, scrollInterval);