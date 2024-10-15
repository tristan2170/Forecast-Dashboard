let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let finance_slides = document.getElementsByClassName("fin_slide");
    let weather_slides = document.getElementsByClassName("wthr_slide");
    
    for (i = 0; i < finance_slides.length; i++) {
      finance_slides[i].style.display = "none";  
      weather_slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > finance_slides.length) {slideIndex = 1}    
      finance_slides[slideIndex-1].style.display = "block";  
      weather_slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 12000); 
}