var imgs = Array.from(document.getElementsByClassName("img-fluid"));
var lightBoxContainer = document.getElementById("lightBoxContainer");
var lightBoxItem = document.getElementById("lightBoxItem")
var Close = document.getElementById("Close");
var Next = document.getElementById("Next")
var Prev = document.getElementById("Prev");
var currentSlideIndex = 0;


for (let i = 0; i < imgs.length; i++)
{
    imgs[i].addEventListener("click", openLightBox)
}

function openLightBox(eventInfo)
{

    currentSlideIndex = imgs.indexOf(eventInfo.target);
    lightBoxContainer.style.display = "flex";
    var imgSrc = eventInfo.target.src;
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;

}


Close.addEventListener("click",closeLightBox)

function closeLightBox()
{
    lightBoxContainer.style.display = "none";
}


Next.addEventListener("click",nextSlide)

function nextSlide()
{
    currentSlideIndex++;
    if(currentSlideIndex == imgs.length)
    {
        currentSlideIndex = 0;
    }
    var imgSrc = imgs[currentSlideIndex].src;
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}



Prev.addEventListener("click",prevSlide)

function prevSlide()
{
    currentSlideIndex--;
    if(currentSlideIndex < 0)
    {
        currentSlideIndex = imgs.length - 1;
    }
    var imgSrc = imgs[currentSlideIndex].src;
    lightBoxItem.style.backgroundImage = `url(${imgSrc})`;
}


document.addEventListener("keyup" , function(eventInfo){
    if(eventInfo.keyCode == 39)
    {
        nextSlide();
    }

    else if(eventInfo.keyCode == 37)
    {
        prevSlide();
    }

    else if(eventInfo.keyCode == 27)
    {
        closeLightBox();
    }
})

