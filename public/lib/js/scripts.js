// -----------------------------------------------------
// --------- CABECERA - MENU DE NAVEGACIÓN -------------
// -----------------------------------------------------

//- Ruta para que haga el previo: '/funcody.com/public'
const previoLocalHostJavaScript = "/funcody.com/public";
const medidaMediaQueryMovil = "(max-width: 1284px)";
const medidaMediaQueryDesktop = "(min-width: 1285px)";


// ------ AÑADIR ESTILO AL HACER CLICK SOBRE BOTON-HAMBURGUESA ---------

const menuIzquierdo = document.querySelector('.botones');

menuIzquierdo.addEventListener('click', (e) => { // Registra un evento a un objeto en específico. Cuando haga click en el contenedor botones
    const claseMenu = e.target.classList; // Mete en una variable una lista de clases de un elemento para después verificar que exista la clase que llamemos.

    // Selecciona el contenedor
    const contenedor = document.querySelector('.cabecera'),
        botHamburguesa = document.querySelector('.fa-bars'),
        botXcerrar = document.querySelector('.fa-times');

    if (claseMenu.contains('fa-bars')) {
        // cerrar el menú lateral
        contenedor.classList.add('no-menu');
        e.target.style.display = 'none'; // e.target hace referencia al objeto en el cual se lanzo el evento, en este caso "fa-bars"
        botXcerrar.style.display = 'block';
    } else if (claseMenu.contains('fa-times')) {
        contenedor.classList.remove('no-menu');
        e.target.style.display = 'none';
        botHamburguesa.style.display = 'block';
    }

    // CERRAR MENU LATERAL AL HACER CLICK FUERA - JQUERY

    const $menuPrimerNivel = $('.menu-primer-nivel');
    const $menu = $('.cabecera');

    $(document).mouseup(e => {
        if (!$menuPrimerNivel.is(e.target) // Si al hacer clic no es el contenedor
            && $menuPrimerNivel.has(e.target).length === 0) // ... ni un descendiente del contenedor
        {
            $menu.removeClass('no-menu');
            botXcerrar.style.display = 'none'; // Quita el botón cerrar
            botHamburguesa.style.display = 'block'; // Añade el botón hamburguesa
        }
    });

    $('.toggle').on('click', () => {
        $menu.toggleClass('no-menu');

    });
});


// -------------------------------------------------------------
// ------ ABRIR SUBMENU EN MENU MÓVIL AL HACER CLICK -----------
// -------------------------------------------------------------


// --- PARA WEB ---

$("html").click(function cerrarSubMenuWeb() { // Cerrar submenú al hacer clic fuera

    var vermediaquery = window.matchMedia(medidaMediaQueryMovil); // Inicializamos la mediaquery
    if (vermediaquery.matches) {

        var $subMenuWeb = $('#submenu-segundo-nivel-web');
        var $flechitaWeb = $('#flechitaWeb');

        $($subMenuWeb).css("overflow", "hidden");
        $($subMenuWeb).css("maxHeight", "0px");
        $($flechitaWeb).css("transform", "rotate(0)");
    }
});

$('#web').click(function cerrarSubMenuWeb(e) {
    var vermediaquery = window.matchMedia(medidaMediaQueryMovil); // Inicializamos la mediaquery
    if (vermediaquery.matches) {

        var $subMenuWeb = $('#submenu-segundo-nivel-web');
        var $flechitaWeb = $('#flechitaWeb');

        var $subMenuMarketing = $('#submenu-segundo-nivel-marketing');
        var $flechitaMarketing = $('#flechitaMarketing');

        if ($($subMenuWeb).css('overflow') === 'hidden') {  //Si está cerrado el submenú abre el menú

            $($subMenuWeb).css("overflow", "visible");
            $($subMenuWeb).css("maxHeight", "2000px");
            $($flechitaWeb).css("transform", "rotate(180deg)");

        } else { // sino realiza un cierra el menú

            $($subMenuWeb).css("overflow", "hidden");
            $($subMenuWeb).css("maxHeight", "0px");
            $($flechitaWeb).css("transform", "rotate(0)");
        }

        if ($($subMenuMarketing).css('overflow') === 'visible') {

            $($subMenuMarketing).css("overflow", "hidden");
            $($subMenuMarketing).css("maxHeight", "0px");
            $($flechitaMarketing).css("transform", "rotate(0)");
        }

        e.stopPropagation();
    }
});


// --- PARA MARKETING ---

$("html").click(function cerrarSubMenuMarketing() { // Cerrar submenú al hacer clic fuera

    var vermediaquery = window.matchMedia(medidaMediaQueryMovil); // Inicializamos la mediaquery
    if (vermediaquery.matches) {

        var $subMenuMarketing = $('#submenu-segundo-nivel-marketing');
        var $flechitaMarketing = $('#flechitaMarketing');

        $($subMenuMarketing).css("overflow", "hidden");
        $($subMenuMarketing).css("maxHeight", "0px");
        $($flechitaMarketing).css("transform", "rotate(0)");

    }

});

$('#marketing').click(function cerrarSubMenuMarketing(e) {

    var vermediaquery = window.matchMedia(medidaMediaQueryMovil); // Inicializamos la mediaquery
    if (vermediaquery.matches) {

        var $subMenuWeb = $('#submenu-segundo-nivel-web');
        var $flechitaWeb = $('#flechitaWeb');

        var $subMenuMarketing = $('#submenu-segundo-nivel-marketing');
        var $flechitaMarketing = $('#flechitaMarketing');

        if ($($subMenuMarketing).css('overflow') === 'hidden') {  //Si está cerrado el submenú abre el menú

            $($subMenuMarketing).css("overflow", "visible");
            $($subMenuMarketing).css("maxHeight", "2000px");
            $($flechitaMarketing).css("transform", "rotate(180deg)");

        } else { // sino realiza un cierra el menú

            $($subMenuMarketing).css("overflow", "hidden");
            $($subMenuMarketing).css("maxHeight", "0px");
            $($flechitaMarketing).css("transform", "rotate(0)");
        }

        if ($($subMenuWeb).css('overflow') === 'visible') {

            $($subMenuWeb).css("overflow", "hidden");
            $($subMenuWeb).css("maxHeight", "0px");
            $($flechitaWeb).css("transform", "rotate(0)");
        }

        e.stopPropagation();
    }
});


// -----------------------------------------------------
// --------- AÑADIR ESTILO AL BAJAR SCROLL -------------
// -----------------------------------------------------

window.onscroll = function () {
    var varCabeceraEncoge = document.getElementById('cabecera');
    var varIconoLogoEncoge = document.getElementById('logo');
    var varlinkHablamosEncoge = document.getElementById('linkHablamos');
    var varHablamos = document.getElementById('hablamos');
    var varSubmenuSegundoNivelMarketing = document.getElementById('submenu-segundo-nivel-marketing');
    var varSubmenuSegundoNivelWeb = document.getElementById('submenu-segundo-nivel-web');


    if (window.pageYOffset > 200) {
        varCabeceraEncoge.classList.add("cabeceraEncoge");
        varIconoLogoEncoge.classList.add("logoEncoge");
        varlinkHablamosEncoge.classList.add("linkHablamosEncoge");
        varHablamos.classList.add("hablamosEncoge");
        varSubmenuSegundoNivelMarketing.classList.add("submenuEncoge");
        varSubmenuSegundoNivelWeb.classList.add("submenuEncoge");


    } else {
        varCabeceraEncoge.classList.remove("cabeceraEncoge");
        varIconoLogoEncoge.classList.remove("logoEncoge");
        varlinkHablamosEncoge.classList.remove("linkHablamosEncoge");
        varHablamos.classList.remove("hablamosEncoge");
        varSubmenuSegundoNivelMarketing.classList.remove("submenuEncoge");
        varSubmenuSegundoNivelWeb.classList.remove("submenuEncoge");
    }
}

// --------------------------------------------
// --------- FORMULARIO DE CONTACTO -----------
// --------------------------------------------

// --------- AÑADIR ESTILO AL HACER CLICK SOBRE BOTON-ENVIAR CONTACTO -----------

function mailMensajeRecibido() {

    var varPantallaTotal = document.getElementById('idEnviarMail');

    varPantallaTotal.classList.remove("no-mostrar-mensaje-mail-enviado");
    varPantallaTotal.classList.add("mostrar-mensaje-mail-enviado");

    // --------- CIERRA VENTANA AL HACER DARLE AL BOTÓN -----------

    const BotonCerrarVentana = document.getElementById('idBotonCerrarVentana');

    BotonCerrarVentana.addEventListener('click', (e) => {

        varPantallaTotal.classList.add("no-mostrar-mensaje-mail-enviado");
        setTimeout(RemoveClassMostrarMensaje, 300); // El tiempo que dura la transición fade out

        function RemoveClassMostrarMensaje() {
            varPantallaTotal.classList.remove("mostrar-mensaje-mail-enviado");
        }
    });

    const xCerrarVentana = document.getElementById('idXCerrarVentana');

    xCerrarVentana.addEventListener('click', (e) => {

        varPantallaTotal.classList.add("no-mostrar-mensaje-mail-enviado");
        setTimeout(RemoveClassMostrarMensaje, 300); // El tiempo que dura la transición fade out

        function RemoveClassMostrarMensaje() {
            varPantallaTotal.classList.remove("mostrar-mensaje-mail-enviado");
        }
    });
}


// ----- ENVIAR FORMULARIO SIN RECARGAR PÁGINA MEDIANTE AJAX ------

function enviarMensaje() {

    // Capturamos todos los valores
    var nombre = document.getElementById('idNombre').value;
    var empresaWeb = document.getElementById('idtuempresaweb').value;
    var telefono = document.getElementById('idTelefono').value;
    var email = document.getElementById('idEmail').value;
    var mensaje = document.getElementById('idMensaje').value;
    // Hacemos una nueva httpRequest
    var xhttp = new XMLHttpRequest();
    //Cuando el xhttp esté listo
    xhttp.onreadystatechange = function () {
        // Si hay 5 tipos de xhttp.readyState. El 1 no se ha enviado, el 2 que se recibió,  el 3 se está procesando, el 4 se procesó y ya se recibieron los datos.
        // Status solo hay dos. 200 que se procesó toro bien y el 404 que es error.
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            // El elemento que tenga el id (formularioContacto), lo va a refrescar y a poner a cero.
            //document.getElementById("formularioContacto").innerHTML = xhttp.responseText;
        }
    };

    // El método post es más robusto el get es más rápido
    // Llama al fichero contacto.php y asíncrono (true).
    xhttp.open("POST", previoLocalHostJavaScript + "/lib/php/contacto.php", true);
    // El header es tipo de encabezado. Content-type es el tipo de contenido.
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // El nombre entre comillas es el nombre que se va a agarrar en $_POST en php. El nombre entre signos más es el valor del var de más arriba.
    xhttp.send("nombre=" + nombre + "&tuempresaweb=" + empresaWeb + "&telefono=" + telefono + "&email=" + email + "&mensaje=" + mensaje + "");

    // Limpiar el formulario
    document.getElementById("formularioContacto").reset();

    mailMensajeRecibido();
}


// --------------------------------------------
// --------- FORMULARIO TE LLAMAMOS -----------
// --------------------------------------------

// --------- AÑADIR ESTILO AL HACER CLICK SOBRE BOTON-ENVIAR CONTACTO -----------

function telefonoRecibido() {

    var varPantallaTotal = document.getElementById('idEnviarMailTeLlamamos');

    varPantallaTotal.classList.remove("no-mostrar-mensaje-telefono-recibido");
    varPantallaTotal.classList.add("mostrar-mensaje-telefono-recibido");


    // --------- CIERRA VENTANA AL HACER DARLE AL BOTÓN -----------

    const BotonCerrarVentanaTeLlamamos = document.getElementById('idBotonCerrarVentanaTeLlamamos');

    BotonCerrarVentanaTeLlamamos.addEventListener('click', (e) => {

        varPantallaTotal.classList.add("no-mostrar-mensaje-telefono-recibido");
        setTimeout(RemoveClassMostrarMensaje, 300); // El tiempo que dura la transición fade out

        function RemoveClassMostrarMensaje() {
            varPantallaTotal.classList.remove("mostrar-mensaje-telefono-recibido");
        }
    });

    const xCerrarVentanaTeLlamamos = document.getElementById('idXCerrarVentanaTeLlamamos');

    xCerrarVentanaTeLlamamos.addEventListener('click', (e) => {

        varPantallaTotal.classList.add("no-mostrar-mensaje-telefono-recibido");
        setTimeout(RemoveClassMostrarMensaje, 300); // El tiempo que dura la transición fade out

        function RemoveClassMostrarMensaje() {
            varPantallaTotal.classList.remove("mostrar-mensaje-telefono-recibido");
        }
    });
}


// ----- ENVIAR FORMULARIO SIN RECARGAR PÁGINA MEDIANTE AJAX ------

function teLlamamos() {

    // Capturamos todos los valores
    var telefonoTeLlamamos = document.getElementById('idTelefonoLlamamos').value;
    // Hacemos una nueva httpRequest
    var xhttpTeLlamamos = new XMLHttpRequest();
    //Cuando el xhttp esté listo
    xhttpTeLlamamos.onreadystatechange = function () {
        // Si hay 5 tipos de xhttp.readyState. El 1 no se ha enviado, el 2 que se recibió,  el 3 se está procesando, el 4 se procesó y ya se recibieron los datos.
        // Status solo hay dos. 200 que se procesó toro bien y el 404 que es error.
        if (xhttpTeLlamamos.readyState === 4 && xhttpTeLlamamos.status === 200) {
            // El elemento que tenga el id (formularioContacto), lo va a refrescar y a poner a cero.
            //document.getElementById("formularioContacto").innerHTML = xhttp.responseText;
        }
    };

    // El método post es más robusto el get es más rápido
    // Llama al fichero contacto.php y asíncrono (true).
    xhttpTeLlamamos.open("POST", previoLocalHostJavaScript + "/lib/php/te_llamamos.php", true);
    // El header es tipo de encabezado. Content-type es el tipo de contenido.
    xhttpTeLlamamos.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // El nombre entre comillas es el nombre que se va a agarrar en $_POST en php. El nombre entre signos más es el valor del var de más arriba.
    xhttpTeLlamamos.send("&nameTelefonoTeLlamamos=" + telefonoTeLlamamos + "");

    // Limpiar el formulario
    document.getElementById("formularioTeLlamamos").reset();
    telefonoRecibido();
}


/*
// ----- TEXTAREA ALTURA AUTOMÁTICA ------


function FitToContent(id, maxHeight)
{
    var text = id && id.style ? id : document.getElementById(id);
    if ( !text )
        return;

    var adjustedHeight = text.clientHeight;
    if ( !maxHeight || maxHeight > adjustedHeight )
    {
        adjustedHeight = Math.max(text.scrollHeight, adjustedHeight);
        if ( maxHeight )
            adjustedHeight = Math.min(maxHeight, adjustedHeight);
        if ( adjustedHeight > text.clientHeight )
            text.style.height = adjustedHeight + "px";
    }
}

window.onload = function() {
    document.getElementById("idMensaje").onkeyup = function() {
        FitToContent( this, 110 )
    };
}
*/


// -----------------------------------------------------
// --------- AÑADIR ESTILO AL CLIC CONTACTO -------------
// -----------------------------------------------------


//-- MATERIAL--

$('#li-submenu-segundo-nivel-contacto-material').click(function modificaSubMenuMaterial(e) {

    let $subMenuMaterial = $('#submenu-segundo-nivel-contacto-material');
    let $subMenuSeo = $('#submenu-segundo-nivel-contacto-seo');
    let $subMenuEscuchamos = $('#submenu-segundo-nivel-contacto-escuchamos');
    let $subMenuServicios = $('#submenu-segundo-nivel-contacto-servicios');

    let $signoMasMaterial = $('#signoMasMaterial');
    let $signoMasSeo = $('#signoMasSeo');
    let $signoMasEscuchamos = $('#signoMasEscuchamos');
    let $signoMasServicios = $('#signoMasServicios');

    var vermediaquery = window.matchMedia(medidaMediaQueryDesktop); // Inicializamos la mediaquery

    if ($($subMenuMaterial).css('maxHeight') === '0px') {  //Si está cerrado, ábrete y cierra toro lo demás

        function abrirMaterial() {
            $($subMenuMaterial).css("maxHeight", "200px");
            $($subMenuMaterial).css("overflow", "visible");
            $($signoMasMaterial).css("transform", "rotate(135deg)");
        }

        function cerrarDemas() {

            $($subMenuSeo).css("maxHeight", "0px");
            $($subMenuSeo).css("overflow", "hidden");
            $($signoMasSeo).css("transform", "rotate(0)");

            $($subMenuEscuchamos).css("maxHeight", "0px");
            $($subMenuEscuchamos).css("overflow", "hidden");
            $($signoMasEscuchamos).css("transform", "rotate(0)");

            $($subMenuServicios).css("maxHeight", "0px");
            $($subMenuServicios).css("overflow", "hidden");
            $($signoMasServicios).css("transform", "rotate(0)");
        }

        // Sirve para que no se cierra y se abran a la vez.
        cerrarDemas();
        if (vermediaquery.matches) {
            window.setTimeout(function cerrarAbrir() {
                abrirMaterial();
            }, 300);
        } else {
            abrirMaterial();
            cerrarDemas();
        }

    } else { // sino, si está abierto, ciérrate

        $($subMenuMaterial).css("maxHeight", "0px");
        $($subMenuMaterial).css("overflow", "hidden");
        $($signoMasMaterial).css("transform", "rotate(0)");
    }

    e.stopPropagation();
});


//-- SEO --

$('#li-submenu-segundo-nivel-contacto-seo').click(function modificaSubMenuSeo(e) {

    let $subMenuMaterial = $('#submenu-segundo-nivel-contacto-material');
    let $subMenuSeo = $('#submenu-segundo-nivel-contacto-seo');
    let $subMenuEscuchamos = $('#submenu-segundo-nivel-contacto-escuchamos');
    let $subMenuServicios = $('#submenu-segundo-nivel-contacto-servicios');

    let $signoMasMaterial = $('#signoMasMaterial');
    let $signoMasSeo = $('#signoMasSeo');
    let $signoMasEscuchamos = $('#signoMasEscuchamos');
    let $signoMasServicios = $('#signoMasServicios');

    var vermediaquery = window.matchMedia(medidaMediaQueryDesktop); // Inicializamos la mediaquery


    if ($($subMenuSeo).css('maxHeight') === '0px') {  //Si está cerrado, ábrete y cierra toro lo demás

        function abrirSeo() {
            $($subMenuSeo).css("maxHeight", "200px");
            $($subMenuSeo).css("overflow", "visible");
            $($signoMasSeo).css("transform", "rotate(135deg)");
        }

        function cerrarDemas() {
            $($subMenuMaterial).css("maxHeight", "0px");
            $($subMenuMaterial).css("overflow", "hidden");
            $($signoMasMaterial).css("transform", "rotate(0)");

            $($subMenuEscuchamos).css("maxHeight", "0px");
            $($subMenuEscuchamos).css("overflow", "hidden");
            $($signoMasEscuchamos).css("transform", "rotate(0)");

            $($subMenuServicios).css("maxHeight", "0px");
            $($subMenuServicios).css("overflow", "hidden");
            $($signoMasServicios).css("transform", "rotate(0)");
        }

        cerrarDemas();
        if (vermediaquery.matches) {
            window.setTimeout(function cerrarAbrir() {
                abrirSeo();
            }, 300);
        } else {
            abrirSeo();
            cerrarDemas();
        }


    } else { // sino, si está abierto, ciérrate

        $($subMenuSeo).css("maxHeight", "0px");
        $($subMenuSeo).css("overflow", "hidden");
        $($signoMasSeo).css("transform", "rotate(0)");
    }

    e.stopPropagation();
});


//-- ESCUCHAMOS --

$('#li-submenu-segundo-nivel-contacto-escuchamos').click(function modificaSubMenuEscuchamos(e) {

    let $subMenuMaterial = $('#submenu-segundo-nivel-contacto-material');
    let $subMenuSeo = $('#submenu-segundo-nivel-contacto-seo');
    let $subMenuEscuchamos = $('#submenu-segundo-nivel-contacto-escuchamos');
    let $subMenuServicios = $('#submenu-segundo-nivel-contacto-servicios');

    let $signoMasMaterial = $('#signoMasMaterial');
    let $signoMasSeo = $('#signoMasSeo');
    let $signoMasEscuchamos = $('#signoMasEscuchamos');
    let $signoMasServicios = $('#signoMasServicios');

    var vermediaquery = window.matchMedia(medidaMediaQueryDesktop); // Inicializamos la mediaquery


    if ($($subMenuEscuchamos).css('maxHeight') === '0px') {  //Si está cerrado, ábrete y cierra toro lo demás

        function abrirEscuhamos() {
            $($subMenuEscuchamos).css("maxHeight", "200px");
            $($subMenuEscuchamos).css("overflow", "visible");
            $($signoMasEscuchamos).css("transform", "rotate(135deg)");
        }

        function cerrarDemas() {
            $($subMenuMaterial).css("maxHeight", "0px");
            $($subMenuMaterial).css("overflow", "hidden");
            $($signoMasMaterial).css("transform", "rotate(0)");

            $($subMenuSeo).css("maxHeight", "0px");
            $($subMenuSeo).css("overflow", "hidden");
            $($signoMasSeo).css("transform", "rotate(0)");

            $($subMenuServicios).css("maxHeight", "0px");
            $($subMenuServicios).css("overflow", "hidden");
            $($signoMasServicios).css("transform", "rotate(0)");
        }

        cerrarDemas();
        if (vermediaquery.matches) {
            window.setTimeout(function cerrarAbrir() {
                abrirEscuhamos();
            }, 300);
        } else {
            abrirEscuhamos();
            cerrarDemas();
        }


    } else { // sino, si está abierto, ciérrate

        $($subMenuEscuchamos).css("maxHeight", "0px");
        $($subMenuEscuchamos).css("overflow", "hidden");
        $($signoMasEscuchamos).css("transform", "rotate(0)");
    }

    e.stopPropagation();
});


//-- SERVICIOS --

$('#li-submenu-segundo-nivel-contacto-servicios').click(function modificaSubMenuServicios(e) {

    let $subMenuMaterial = $('#submenu-segundo-nivel-contacto-material');
    let $subMenuSeo = $('#submenu-segundo-nivel-contacto-seo');
    let $subMenuEscuchamos = $('#submenu-segundo-nivel-contacto-escuchamos');
    let $subMenuServicios = $('#submenu-segundo-nivel-contacto-servicios');

    let $signoMasMaterial = $('#signoMasMaterial');
    let $signoMasSeo = $('#signoMasSeo');
    let $signoMasEscuchamos = $('#signoMasEscuchamos');
    let $signoMasServicios = $('#signoMasServicios');

    var vermediaquery = window.matchMedia(medidaMediaQueryDesktop); // Inicializamos la mediaquery


    if ($($subMenuServicios).css('maxHeight') === '0px') {  //Si está cerrado, ábrete y cierra toro lo demás

        function abrirServicios() {
            $($subMenuServicios).css("maxHeight", "200px");
            $($subMenuServicios).css("overflow", "visible");
            $($signoMasServicios).css("transform", "rotate(135deg)");
        }

        function cerrarDemas() {
            $($subMenuMaterial).css("maxHeight", "0px");
            $($subMenuMaterial).css("overflow", "hidden");
            $($signoMasMaterial).css("transform", "rotate(0)");

            $($subMenuSeo).css("maxHeight", "0px");
            $($subMenuSeo).css("overflow", "hidden");
            $($signoMasSeo).css("transform", "rotate(0)");

            $($subMenuEscuchamos).css("maxHeight", "0px");
            $($subMenuEscuchamos).css("overflow", "hidden");
            $($signoMasEscuchamos).css("transform", "rotate(0)");
        }

        cerrarDemas();
        if (vermediaquery.matches) {
            window.setTimeout(function cerrarAbrir() {
                abrirServicios();
            }, 300);
        } else {
            abrirServicios();
            cerrarDemas();
        }

    } else { // sino, si está abierto, ciérrate

        $($subMenuServicios).css("maxHeight", "0px");
        $($subMenuServicios).css("overflow", "hidden");
        $($signoMasServicios).css("transform", "rotate(0)");
    }

    e.stopPropagation();
});


// GALERIA IMAGENES HOVER OSCURECE LAS DEMÁS Y ACLARA LA SELECCIONADA:


$(document).ready(function () {

    let letMediaQueryDesktop = window.matchMedia(medidaMediaQueryDesktop); // Inicializamos la mediaquery

    //--  HOVER SOBRE UN PROYECTO
    function hoverProyecto() {

        $(".proyecto").hover(
            function () {
                $(this).removeClass("img-blanco-negro-encoge");
                $(this).addClass("img-color-agranda-hover");
            },
            function () {
                // código a ejecutarse cuando el apuntador sale del elemento
                $(this).removeClass("img-color-agranda-hover");
                $(this).addClass("img-contenedor img-blanco-negro-encoge");
            }
        );
    }

    //--  TRANSICIÓN DE SALIDA

    if (letMediaQueryDesktop.matches) { //- Media query solo para escritorio
        //--  HOVER SOBRE EL CONTENEDOR PROYECTOS
        $(".proyectos").hover(
            function () {
                // código a ejecutarse cuando el apuntador pasa por encima
                $(".proyecto").addClass("img-contenedor img-blanco-negro-encoge");
                hoverProyecto();
            },
            function () {
                window.setTimeout(function () {
                    // código a ejecutarse cuando el apuntador sale del elemento
                    $(".proyecto").removeClass("img-contenedor img-blanco-negro-encoge");
                }, 300);
            }
        );
    }
});


// ----------------------------------------------------
// --------- ABRIR ACORDEÓN PREGUNTAS -----------------
// ----------------------------------------------------

$(document).ready(function () {


    $(".contenedor-pregunta").click(function abrirCerrarPregunta(e) {

        // VARIABLES
        const medidaMediaQueryDesktop = "(min-width: 1285px)";
        let varmediaqueryDesktop = window.matchMedia(medidaMediaQueryDesktop); // Inicializamos la mediaquery
        let contenedorPregunta = $(this);
        let contenidoPregunta = contenedorPregunta.find(".submenu-segundo-nivel");
        let restoContenidosPreguntas = $(".submenu-segundo-nivel");
        let signoPregunta = contenedorPregunta.find("i");
        let restoSignosPregunta = $("i");

        // FUNCIONES

        function cierraRestoPreguntas() {

            $(restoContenidosPreguntas).addClass("pregunta-cerrada");
            $(restoContenidosPreguntas).removeClass("pregunta-abierta");

        }

        function cerrarAbrirSignoActual() {
            if ($(signoPregunta).hasClass("signo-mas-cerrado")) {

                $(signoPregunta).removeClass("signo-mas-cerrado");
                $(signoPregunta).addClass("signo-mas-abierto");

            } else if ($(signoPregunta).hasClass("signo-mas-abierto")) {

                $(signoPregunta).removeClass("signo-mas-abierto");
                $(signoPregunta).addClass("signo-mas-cerrado");
            }
        }

        function cierraRestoSignosPregunta() {

            if ($(restoSignosPregunta).hasClass("signo-mas-abierto")) {

                $(restoSignosPregunta).removeClass("signo-mas-abierto");
                $(restoSignosPregunta).addClass("signo-mas-cerrado");
            }
        }

        // CONDICIÓN

        if ($(contenidoPregunta).hasClass("pregunta-cerrada")) {

            if (varmediaqueryDesktop.matches) {
                cierraRestoPreguntas();
            }

            cierraRestoSignosPregunta();
            cerrarAbrirSignoActual();

            window.setTimeout(function abrePregunta() {
                $(contenidoPregunta).removeClass("pregunta-cerrada");
                $(contenidoPregunta).addClass("pregunta-abierta");
            }, 300);

        } else if ($(contenidoPregunta).hasClass("pregunta-abierta")) {

            if (varmediaqueryDesktop.matches) {
                cierraRestoPreguntas();
            }
            cierraRestoSignosPregunta();
            $(contenidoPregunta).removeClass("pregunta-abierta");
            $(contenidoPregunta).addClass("pregunta-cerrada");
        }
    });
});