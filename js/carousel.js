let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    // Accuweather slides
    let finance_slides = document.getElementsByClassName("fin_slide");
    let weather_slides = document.getElementsByClassName("wthr_slide");

    // Finance slides
    let gainers_slides = document.getElementsByClassName("gain-slide");
    let losers_slides = document.getElementsByClassName("lose-slide");

    let forex_slides = document.getElementsByClassName("forex-slide");


    let n = finance_slides.length 
    
    for (i = 0; i < n; i++) {
      finance_slides[i].style.display = "none";  
      weather_slides[i].style.display = "none";
      gainers_slides[i].style.display = "none";
      losers_slides[i].style.display = "none";
      forex_slides[i].style.display = "none";

      }

    slideIndex++;
    if (slideIndex > n) {slideIndex = 1}    
      finance_slides[slideIndex-1].style.display = "block";  
      weather_slides[slideIndex-1].style.display = "block";
      gainers_slides[slideIndex-1].style.display = "block";
      losers_slides[slideIndex-1].style.display = "block";
      forex_slides[slideIndex-1].style.display = "block";

  setTimeout(showSlides, 600000); // ten mins for testing 
} 