$(document).ready(function () {
    var atual, proximo, anterior; //fieldsets
    var opacity;
    var progresso = 1;
    var etapas = $("fieldset").length;

    /**
     * Função para atualizar a barra de progresso
     * @param {int} etapa_atual 
     */
    $.setProgressBar = function(etapa_atual) {
        var porcentagem = parseFloat(100 / etapas) * etapa_atual;
        porcentagem = porcentagem.toFixed();

        $(".progress-bar").css("width", porcentagem + "%")
    }

    /**
     * Evento click do botão "proximo"
     */
    $(".next").click(function () {

        atual = $(this).parent();
        proximo = $(this).parent().next();

        //Add Class Active
        $("#progressbar li").eq($("fieldset").index(proximo)).addClass("active");

        // Mostra a proximo fieldset
        proximo.show();

        // Esconde o atual fieldset com CSS
        atual.animate({ opacity: 0 }, {
            step: function (now) {
                opacity = 1 - now;

                atual.css({
                    'display': 'none',
                    'position': 'relative'
                });
                proximo.css({
                    'opacity': opacity
                });
            },
            duration: 500
        });
        setProgressBar(++progresso);
    });

    /**
     * Evento click do botão "anterior"
     */
    $(".previous").click(function () {

        atual = $(this).parent();
        anterior = $(this).parent().prev();

        // Remove a classe ativo
        $("#progressbar li").eq($("fieldset").index(atual)).removeClass("active");

        // Mostra o fieldset anterior
        anterior.show();

        // Esconde o fieldset atual com css
        atual.animate({ opacity: 0 }, {
            step: function (now) {
                opacity = 1 - now;

                atual.css({
                    'display': 'none',
                    'position': 'relative'
                });
                anterior.css({ 'opacity': opacity });
            },
            duration: 500
        });
        setProgressBar(--progresso);
    });

    // Chamda da função
    $.setProgressBar(progresso);
});