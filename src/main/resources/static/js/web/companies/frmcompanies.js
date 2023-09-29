$(document).on("click", "#btnagregar", function(){
	$("#txtIdCompanie").val("");
	$("#txtnombreCompanie").val("");
	$("#hddidregistroCompanie").val("0");
	$.ajax({
		type: "GET",
		url: "/companies/frmcompanies",
		dataType: "json"
	})
	$("#modalCompanie").modal("show");
});

$(document).on("click", ".btnactualizar", function(){
	$("#txtIdCompanie").val($(this).attr("data-id_companies"));
	$("#txtnombreCompanie").val($(this).attr("data-name_company"));
	//$("#hddidregistroCompanie").val($(this).attr("data-idsala"));
	//var idestado = $(this).attr("data-idestado");
	$.ajax({
		type: "GET",
		url: "/companies/frmcompanies",
		dataType: "json"
	})
	$("#modalCompanie").modal("show");
});




$(document).on("click", "#btnguardar", function(){
	$.ajax({
		type: "POST",
		url: "/companies/registrarCompanies",
		contentType: "application/json",
		data: JSON.stringify({
			id_companies: $("#txtIdCompanie").val(),
			name_company: $("#txtnombreCompanie").val()
		}),
		success: function(resultado){
			alert(resultado.mensaje);
			listacompanies();
		}	
	});
	$("#modalCompanie").modal("hide");
})




$(document).on("click", ".btneliminarcompanie", function(){
	$("#hddideliminarcompanie").val("");
	$("#hddideliminarcompanie").val($(this).attr("data-id_companies"));
	$("#mensajeeliminar").text("¿Está seguro de eliminar la "+ 
			$(this).attr("data-name_company")+"?");
	$("#modalEliminarCompanie").modal("show");
})


$(document).on("click", "#btneliminar", function(){
	$.ajax({
		type: "DELETE",
		contentType: 'application/json',
		url: "/companies/eliminarCompanie",
		data: JSON.stringify({
			id_companies: $("#hddideliminarcompanie").val()
		}),
		success: function(resultado){
			alert(resultado.mensaje);
			listacompanies();
		}
	})
	$("#modalEliminarCompanie").modal("hide");
})



