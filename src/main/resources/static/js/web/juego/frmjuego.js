$(document).on("click", "#btnagregar", function(){
	$("#txtidjuego").val("");
	$("#txtnombrejuego").val("");
	$("#txtdescripcion").val("");
	$("#txtconsola").val("");
	$("#txtcategoria").val("");
	$("#txtplataforma").val("");
	$("#txtproducto").val("");
	$("#txtcategoriaproducto").val("");
	$("#hddidregistrojuego").val("0");
	$("#modalJuego").modal("show");
});



$(document).on("click", ".btnactualizar", function(){
	$("#txtidjuego").val($(this).attr("data-idgame"));
	$("#txtnombrejuego").val($(this).attr("data-namegame"));
	$("#txtdescripcion").val($(this).attr("data-description"));
	$("#txtconsola").val($(this).attr("data-idconsole"));
	$("#txtcategoria").val($(this).attr("data-idcategory"));
	$("#txtplataforma").val($(this).attr("data-idplatforms"));
	$("#txtproducto").val($(this).attr("data-idproducto"));
	$("#txtcategoriaproducto").val($(this).attr("data-idcategoriaproducto"));
	$("#hddidregistrojuego").val($(this).attr("data-id_game"));	
	$("#modalJuego").modal("show");
});

$(document).on("click", "#btnguardar", function(){
	$.ajax({
		type: "POST",
		url: "/games/registrarJuego",
		contentType: "application/json",
		data: JSON.stringify({
			id_game: $("#txtidjuego").val(),
			name: $("#txtnombrejuego").val(),
			description: $("#txtdescripcion").val(),
			id_console: $("#txtconsola").val(),
			id_category: $("#txtcategoria").val(),
			id_platforms: $("#txtplataforma").val(),
			id_product: $("#txtproducto").val(),
			id: $("#txtcategoriaproducto").val(),
		}),
		success: function(resultado){
			alert(resultado.mensaje);
			//ListarJuegos();
		}
	});
	$("#modalJuego").modal("hide");
})



$(document).on("click", ".btneliminarjuego", function(){
	$("#hddideliminarjuego").val("");
	$("#hddideliminarjuego").val($(this).attr("data-idgame"));
	$("#mensajeeliminar").text("¿Está seguro de eliminar "+ 
			$(this).attr("data-namegame")+"?");
	$("#modalEliminarJuego").modal("show");
})
$(document).on("click", "#btneliminar", function(){
	$.ajax({
		type: "DELETE",
		contentType: 'application/json',
		url: "/games/eliminarJuego",
		data: JSON.stringify({
			id_game: $("#hddideliminarjuego").val()
		}),
		success: function(resultado){
			alert(resultado.mensaje);
			//ListarJuegos();
		}
	})
	$("#modalEliminarJuego").modal("hide");
})

function ListarJuegos(){
	$.ajax({
		type: "GET",
		url: "/juego/listarJuegos",
		dataType: "json",
		success: function(resultado){
			//console.log(resultado);
			$("#tbljuego > tbody").html("");
			$.each(resultado, function(index, value){
				$("#tbljuego > tbody").append("<tr>"+
						"<td>"+value.id_game+"</td>"+
						"<td>"+value.name_game+"</td>"+
						"<td>"+value.description+"</td>"+
						"<td>"+
							"<button type='button' class='btn btn-success btnactualizar'"+
							" data-id_game='"+value.id_game+"'"+
							" data-name_game='"+value.name_game+"'"+
							" data-description='"+value.description+"'"+
							"><i class='fas fa-pen'></i></button></td>"+
						"<td>"+
							"<button type='button' class='btn btn-danger btneliminarjuego'"+	
							" data-id_game='"+value.id_game+"'"+
							" data-name_game='"+value.name_game+"'"+
							"><i class='fas fa-trash'></i></button></td>"+							
						"</tr>")
			})
			
			
		}
	})
}



