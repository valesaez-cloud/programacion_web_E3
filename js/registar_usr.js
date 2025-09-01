$(function () {
  $("#registroForm").on("submit", function (e) {
    e.preventDefault();

    let ok = true;

    // limpiar errores previos
    $("#registroForm .error-message").hide().text("");
    $("#registroForm .form-control, #registroForm .form-select").removeClass("is-invalid");

    // ---- campos ----
    const $nombre    = $("#nombre");
    const $apellidos = $("#apellidos");
    const $mail      = $("#mail");
    const $direccion = $("#direccion");
    const $telefono  = $("#telefono");
    const $rol       = $("#rol");

    const nombre    = $nombre.val().trim();
    const apellidos = $apellidos.val().trim();
    const correo    = $mail.val().trim();
    const direccion = $direccion.val().trim();
    const telefono  = $telefono.val().trim();
    const rol       = $rol.val().trim();

    // helper para marcar error
    function err($el, msg){
      $el.addClass("is-invalid");
      $el.next(".error-message").text(msg).show();
      ok = false;
    }

    // Nombre (mín 2)
    if (!nombre)            err($nombre, "El nombre es obligatorio.");
    else if (nombre.length < 2) err($nombre, "El nombre debe tener al menos 2 caracteres.");

    // Apellidos (mín 2)
    if (!apellidos)             err($apellidos, "Los apellidos son obligatorios.");
    else if (apellidos.length < 2) err($apellidos, "Los apellidos deben tener al menos 2 caracteres.");

    // Correo (formato simple)
    if (!correo) err($mail, "El correo es obligatorio.");
    else {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(correo)) err($mail, "Ingresa un correo válido.");
    }

    // Dirección (mín 5)
    if (!direccion)              err($direccion, "La dirección es obligatoria.");
    else if (direccion.length < 5) err($direccion, "La dirección es demasiado corta.");

    // Teléfono (solo dígitos, 8–15)
    if (!telefono) err($telefono, "El teléfono es obligatorio.");
    else if (!/^\d{8,15}$/.test(telefono)) err($telefono, "Solo dígitos (8 a 15).");

    // Rol (no vacío)
    if (!rol) err($rol, "Selecciona un rol.");

    // Contraseña (mín 7)
    if (!clave)              err(clave, "La contraseña es obligatoria.");
    else if (clave.length < 7) err(clave, "La contraseña deben tener al menos 7 digitos.");


    // Si todo ok
    if (ok) {
      alert("Registro se realiza con éxito.");
      this.reset();
    }
  });
});
