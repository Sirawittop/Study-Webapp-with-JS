document.addEventListener("DOMContentLoaded", function () {
    const imgManipulated = document.querySelector("#imgManipulated img");
    const figcaption = document.querySelector("#imgManipulated figcaption");
    const thumbBox = document.querySelector("#thumbBox");

    // Thumbnail click handler
    thumbBox.addEventListener("click", function (event) {
        if (event.target.tagName === "IMG") {
            const clickedImgSrc = event.target.getAttribute("src");
            const largeImgSrc = clickedImgSrc.replace("images/small/", "images/medium/");
            imgManipulated.src = largeImgSrc;

            const paintingTitle = event.target.getAttribute("alt");
            const paintingArtist = event.target.getAttribute("title");
            figcaption.innerHTML = `<em>${paintingTitle}</em><br><span>${paintingArtist}</span>`;
        }
    });

    // Slider input event handler
    const sliders = document.querySelectorAll('.sliders');
    sliders.forEach((slider) => {
        slider.addEventListener("input", function () {
            const filterValues = [];
            let propertyName
            let propertyValue = ""
            sliders.forEach((slider) => {
                propertyName = slider.id.replace("slider", "")
                // if (slider) {
                //     propertyName += "-webkit-filter: blur"
                // }
                console.log(slider)
                if (propertyName == "hue-rotate" ) {
                    propertyValue = slider.value + "deg" 
                }
                else if (propertyName == "blur"){
                    propertyValue = slider.value + "px"
                }
                else{
                    propertyValue = slider.value + "%";
                }
                    
                filterValues.push(`${propertyName}(${propertyValue})`);
            });
            imgManipulated.style.filter = filterValues[0]+filterValues[1]+filterValues[2]+filterValues[3]+filterValues[4]+filterValues[5]
            console.log(filterValues)
            
        });
    });

    // Reset button click handler
    const resetFiltersButton = document.querySelector("#resetFilters");
    resetFiltersButton.addEventListener("click", function () {
        imgManipulated.style.filter = "none";
        sliders.forEach((slider) => {
            slider.value = slider.getAttribute("value");
        });
    });
});
