$(document).ready(function() {
    $('.tooltip').tooltipster();

    atualizaTamanhoFrase();
    inicializaCronometro();
    reiniciarJogo();
});

var $campo = $(".campo-digitacao");
var $tempoInicial = $(".tempo");

function atualizaTamanhoFrase(){
	var palavras_na_frase = $(".frase").text().split(" ").length;
	$(".numero-palavras").text(palavras_na_frase);
}

function inicializaCronometro(){
	$campo.one("focus", function(){

		var cronometroID = setInterval(function(){
			var tempo_restante = $tempoInicial.text();
			tempo_restante--;
			$tempoInicial.text(tempo_restante);
			
			if(tempo_restante < 1){
				console.log("acabou");
				clearInterval(cronometroID);

				$campo.attr("disabled", true);
				$campo.toggleClass("campo-desativado");
			}

		}, 1000);
	});
	
}

function reiniciarJogo(){
	$(".botao-reiniciar").on("click", function(){
		$campo.attr("disabled", false);
		$campo.toggleClass("campo-desativado");
		$tempoInicial.text(5);

		inicializaCronometro();
	});
}


