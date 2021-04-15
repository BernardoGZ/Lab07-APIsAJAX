//Bernardo Garcia Zermeno
//A00570682
//Laboratory #7: Gif buttons, using APIs

$(document).ready(function() {

// Start your code from here

var buttonDiv = $("#animal-buttons");
var gifDiv = $("#animals");

var apikey = "RaV0ANEBBbIH1BcAfm7V9ALhx2G9Y264";
var temas = ["futbol", "basquetbol", "tennis", "golf", "volleybol", "natacion" ];

for (let i = 0; i < temas.length; i++) {
    const element = temas[i];
    buttonDiv.append(`<button class='buttons' data-type='${element}'>${element}</button>`);
}

$(".buttons").on("click", function(e){
    e.preventDefault();
    getGifs();
})

function getGifs(){
    $.ajax({
        url: `https://api.giphy.com/v1/gifs/search?q=${temas[0]}&api_key=${apikey}&limit=10`, 
        success: function(respuesta){ 

            for (let i = 0; i < respuesta.data.length; i++) {
                const gif = respuesta.data[i];
                var still = 1;
                gifDiv.append(`<img class="gifs" src="${gif.images.fixed_height_still.url}" alt="No image"  data-imgsm='${gif.images.fixed_height_still.url}' data-imgcm='${gif.images.fixed_height.url}' data-var='${still}'>`);
                
            }
            
        },
        error: function() {
            console.log("No se ha podido obtener la informacion");
            }
    })
};

gifDiv.on("click", ".gifs", function(e){
    e.preventDefault();
    
    if (this.getAttribute('data-var') == 1) {

        this.setAttribute('src', this.getAttribute('data-imgcm'));       
        this.setAttribute('data-var', 0);
    }
    else{
        this.setAttribute('src', this.getAttribute('data-imgsm'));       
        this.setAttribute('data-var', 1);
    }

})

    //apikey> RaV0ANEBBbIH1BcAfm7V9ALhx2G9Y264
});
