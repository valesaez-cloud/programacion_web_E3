$(function () {
  $("#loginForm").on("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    // limpiar estado previo
    $(".error-message").hide().text("");
    $(".form-control").removeClass("is-invalid");

    // --- validar correo ---
    const $mail = $("#mail");
    const correo = $mail.val().trim();

    if (correo === "") {
      $mail.addClass("is-invalid");
      $mail.next(".error-message").text("El correo es obligatorio.").show();
      isValid = false;
    } else {
      // validación simple de formato
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(correo)) {
        $mail.addClass("is-invalid");
        $mail.next(".error-message").text("Ingresa un correo válido.").show();
        isValid = false;
      }
    }

    // --- validar contraseña ---
    const $clave = $("#clave");
    const clave = $clave.val().trim();

    if (clave === "") {
      $clave.addClass("is-invalid");
      $clave.next(".error-message").text("La contraseña es obligatoria.").show();
      isValid = false;
    } else if (clave.length !== 7) {         
      $clave.addClass("is-invalid");
      $clave.next(".error-message").text("La contraseña debe tener 7 caracteres.").show();
      isValid = false;
    }

    if (isValid) {
      alert("Inicio de sesión exitoso.");
      this.reset();
    }
  });
});

