/* .data */
const p1 = $('#p1');
var concatena1 = '';
var concatena2 = '';
var contador = 0;

$('#adjunta1').on('click',()=>{
    const texto = '<p>Texto de Ejemplo Texto de Ejemplo Texto de Ejemplo Texto de Ejemplo Texto de Ejemplo Texto de Ejemplo</p> ';
    concatena1 = concatena1 + texto
    $(p1).html(concatena1);
})

$('#obtiene1').on('click', ()=>{
    contador = 0;

    for (const i of $(p1).children()) {
        const texto = $(i).html();
        concatena2 = concatena2 +texto
        contador++;
    }
    alert(`Hay ${contador} párrafos y contiene: \n ${concatena2} \n`) 
});

/*addClass */
$('#agregar2').on('click', ()=>{
    $('.addClass2').css('color','red');
})

/* slideToggle */
$('#slide3').on('click',()=>{
    $('#img3').slideToggle();
})


/* append */
$('#agregar4').on('click',()=>{
    $('#append').append('<p>Texto de ejemplo Texto de ejemplo Texto de ejemplo Texto de ejemplo Texto de ejemplo</p>');
});

/* val */
$('#valor5').on('click', ()=>{
    alert($('#input5').val())
})

/* fadeIn y fadeOut */

$('#fadeIn6').on('click', ()=>{
    $('#img6').fadeIn();
})

$('#fadeOut6').on('click', ()=>{
    $('#img6').fadeOut();
})

/* focus */

$("#focus7").on('click', () => {
    $("#input7").on('focus', () => {
        alert("Focus Activo")
    });
});

/* hide y show */

$('#hide8').on('click', ()=>{
    $('#p8').hide();
})

$('#show8').on('click', ()=>{
    $('#p8').show();
})

/* slideUp y slideDown */

$('#slideUp9').on('click', (e)=>{
    $('#p9').slideUp();
})

$('#slideDown9').on('click', ()=>{
    $('#p9').slideDown();
})
