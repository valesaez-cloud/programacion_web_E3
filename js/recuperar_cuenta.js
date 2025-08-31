$(document).ready(function () {
    $("#recuperarForm").submit(function (event) {
        event.preventDefault();
        let isValid = true;

        $(".error-message").hide();
        $(".form-control").removeClass("is-invalid");

        // Validar campo Correo (solo si está vacío)
        if ($("#mail").val().trim() === "") {
            $("#mail").addClass("is-invalid");
            $("#mail").next(".error-message").text("El mail es obligatorio.").show();
            isValid = false;
        }

        // Si todo está bien
        if (isValid) {
            alert("Se ha enviado un enlace de recuperación al mail ingresado.");
            $("#recuperarForm")[0].reset();
        }
    });
});
