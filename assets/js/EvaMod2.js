$(document).ready(function () {

    const imagenFront = $(".card-img-front");
    const imagenBack = $(".card-img-back");

    imagenFront.click(function () {
        imagenBack.show();
        imagenFront.hide();
    });

    imagenBack.click(function () {
        imagenBack.hide();
        imagenFront.show();
    });

    const imagenFront1 = $(".card-img-front1");
    const imagenBack1 = $(".card-img-back1");

    imagenFront1.click(function () {
        imagenBack1.show();
        imagenFront1.hide();
    });

    imagenBack1.click(function () {
        imagenBack1.hide();
        imagenFront1.show();
    });

    const habilidades = $("#habilidades");
    const experienciaLaboral = $("#experiencias");

    $(".btn-warning").click(function () {
        habilidades.toggle();

    });
    $(".btn-info").click(function () {
        experienciaLaboral.toggle();

    });

    $("#formulario").on("submit", function(event) {
        event.preventDefault();
        $("#mensaje").show("slow");
    });
});



