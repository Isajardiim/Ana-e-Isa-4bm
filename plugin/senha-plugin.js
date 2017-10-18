;(function($){
	// funções que verificam o código na tabela asc
	
	function letra(caracter){
		if(caracter.charCodeAt(0)>=65 && caracter.charCodeAt(0)<=90 || caracter.charCodeAt(0)>=97 && caracter.charCodeAt(0)<=122)
		{
			return true; // caso esse caracter esteja dentro desse intervalo de código da tabela asc retorna verdadeiro
		}
		return false;//caso não esteja retorna falso
	}
	function numero(caracter){
		
		if(caracter.charCodeAt(0)>=48 && caracter.charCodeAt(0)<=57){
			return true;// caso esse caracter esteja dentro desse intervalo de código da tabela asc retorna verdadeiro
		
		}
		return false;//caso não esteja retorna falso
	}
	function especial(caracter){
		if(caracter.charCodeAt(0)>=33 && caracter.charCodeAt(0)<=47 || caracter.charCodeAt(0)>=58 && caracter.charCodeAt(0)<=64 ){
			return true;// caso esse caracter esteja dentro desse intervalo de código da tabela asc retorna verdadeiro
		}
		return false;//caso não esteja retorna falso
	}
	
$.fn.verificar = function($campo,$status){
			//charCodeAtodeat pega o código asc da variável caracter
		//na tabela asc de 65 até 90 são as letras minúsculas e de 97 até 122 são as letras maiúsculas
		// na tabela asc de 48 até 57 são os números
		// na tabela asc de 33 até 47 e de 58 até 64 são os códigos correspondetes aos caracteres especiais
		
	
$campo.keydown(function (){
	// verificção e implementação do tipo do caracteres
	
		var tamanho = $campo.val().length;// pegando o tamanho do texto e passando para variável
		var tipo = 0;
		var alfa=false, num=false, esp=false;
		for(var i=0;i<tamanho-1;i++){
			var carac = $campo.val().charAt(i);//cada letra da senha se torna uma posição do array
			if(letra(carac)==true){// se for letra 
				alfa=true;
			}
			if(numero(carac)==true){// se for numero acresenta +1 no tipo
				num=true;
			}
			if(especial(carac)==true){// se for um caracter especial acrescenta 1 
				esp=true;
			}
		}
		
		//aplicação do status
		console.log(alfa, num, esp);
		//$(".statusSenha").text(option.text);
		if(tamanho<8 && alfa){
			$status.removeClass();
			$status.text("Muito fraca").addClass("alert alert-danger");// muito fraca - menos de 8 digitos de um mesmo tipo
		}
		if(tamanho<8 && alfa && num){
			$status.removeClass();
			$status.text("Fraca").addClass("alert alert-danger");;// fraca - menos de 8 digitos de 2 tipos
		}
		if(tamanho>=8 && alfa && num){
			$status.removeClass();
			$status.text("Moderada").addClass("alert alert-warning");// moderada - mais de 8 digitos 2 tipos
		}
		if(tamanho>=8 && alfa && num && esp){
			$status.removeClass();
			$status.text("Forte").addClass("alert alert-success"); // forte - mais de 8 digitos de 3 tipos
		}
});
}
})(jQuery);