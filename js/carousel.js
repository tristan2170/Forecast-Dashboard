let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    // Accuweather slides
    let weather_slides = document.getElementsByClassName("wthr-slide");

    // Finance slides
    let headline_slides = document.getElementsByClassName("headline-slide");
    let gainers_slides = document.getElementsByClassName("gain-slide");
    let losers_slides = document.getElementsByClassName("lose-slide");
    let forex_slides = document.getElementsByClassName("forex-slide");


    let n = headline_slides.length 
    
    for (i = 0; i < n; i++) {
      headline_slides[i].style.display = "none";  
      weather_slides[i].style.display = "none";
      gainers_slides[i].style.display = "none";
      losers_slides[i].style.display = "none";
      forex_slides[i].style.display = "none";

      }

    slideIndex++;
    if (slideIndex > n) {slideIndex = 1}    
      headline_slides[slideIndex-1].style.display = "block";  
      weather_slides[slideIndex-1].style.display = "block";
      gainers_slides[slideIndex-1].style.display = "block";
      losers_slides[slideIndex-1].style.display = "block";
      forex_slides[slideIndex-1].style.display = "block";

  setTimeout(showSlides, 600000); // ten mins for testing 
} 