$(document).ready(function () {
    $("#registroForm").submit(function (event) {
        event.preventDefault();
        let isValid = true;

        $(".error-message").hide();
        $(".form-control, .form-select").removeClass("is-invalid");

        // Campos obligatorios
        const campos = ["#nombre", "#apellidos", "#mail", "#direccion", "#telefono", "#rol"];
        const mensajes = [
            "El Nombre es obligatorio.",
            "Los Apellidos son obligatorios.",
            "El Mail es obligatorio.",
            "La Dirección es obligatoria.",
            "El Teléfono es obligatorio.",
            "Selecciona un rol."
        ];  

        campos.forEach((campo, i) => {
            if ($(campo).val().trim() === "") {
                $(campo).addClass("is-invalid");
                $(campo).next(".error-message").text(mensajes[i]).show(); 
                isValid = false;
            }


        });

      
        
 

        if (isValid) {
            alert("Usuario registrado correctamente.");
            $("#registroForm")[0].reset();
        }
    });
});
