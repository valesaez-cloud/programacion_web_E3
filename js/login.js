$(document).ready(function () {
    $("#loginForm").submit(function (event) {
        event.preventDefault();
        let isValid = true;

        $(".error-message").hide();
        $(".form-control").removeClass("is-invalid");

        // Validar campo Correo (solo si está vacío)
        if ($("#correo").val().trim() === "") {
            $("#correo").addClass("is-invalid");
            $("#correo").next(".error-message").text("El correo es obligatorio.").show();
            isValid = false;
        }

        // Validar campo Contraseña (solo si está vacío)
        if ($("#clave").val().trim() === "") {
            $("#clave").addClass("is-invalid");
            $("#clave").next(".error-message").text("La contraseña es obligatoria.").show();
            isValid = false;
        }

        // Validar campo Contraseña tenga 7 caracteres
        if ($("#clave").val().trim() != "") {
            var clave = $("#clave").val().trim();
            
            if(clave.length < 7)
            {
                $("#clave").addClass("is-invalid");
                $("#clave").next(".error-message").text("La contraseña debe tener 7 caracteres").show();
                 isValid = false;
            } 
            
        }

        // Si ambos campos están llenos, mostrar mensaje
        if (isValid) {
            alert("Inicio de sesión exitoso.");
            $("#loginForm")[0].reset();
        }
    });
});
