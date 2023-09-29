$(document).on("click", "#btnagregar", function(){
	$("#txtcategoria").val("");
	$("#txtdescripcion").val("");
	$("#hddidregistrocategoria").val("0");
	$.ajax({
		type: "GET",
		url: "/categoria/frmcategoria",
		dataType: "json"
	})
	$("#modalCategoria").modal("show");
});

$(document).on("click", ".btnactualizar", function(){
	$("#txtcategoria").val($(this).attr("data-idcategoria"));
	$("#txtdescripcion").val($(this).attr("data-desccategoria"));
	//$("#hddidregistrocategoria").val($(this).attr("data-idcategoria"));
	//var idestado = $(this).attr("data-idestado");
	$.ajax({
		type: "GET",
		url: "/categoria/frmcategoria",
		dataType: "json"
	})
	$("#modalCategoria").modal("show");
});

$(document).on("click", "#btnguardar", function(){
	$.ajax({
		type: "POST",
		url: "/categoria/registrarCategoria",
		contentType: "application/json",
		data: JSON.stringify({
			category_id: $("#txtcategoria").val(),
			category_name: $("#txtdescripcion").val()
		}),
		success: function(resultado){
			alert(resultado.mensaje);
			ListarSala();
		}
	});
	$("#modalCategoria").modal("hide");
})

$(document).on("click", ".btneliminarcategoria", function(){
	$("#hddideliminarsala").val("");
	$("#hddideliminarsala").val($(this).attr("data-idcategoria"));
	$("#mensajeeliminar").text("¿Está seguro de eliminar la "+ 
			$(this).attr("data-desccategoria")+"?");
	$("#modalEliminarCategoria").modal("show");
})


$(document).on("click", "#btneliminar", function(){
	$.ajax({
		type: "DELETE",
		contentType: 'application/json',
		url: "/categoria/eliminarCategoria",
		data: JSON.stringify({
			category_id: $("#hddideliminarsala").val()
		}),
		success: function(resultado){
			alert(resultado.mensaje);
			ListarSala();
		}
	})
	$("#modalEliminarCategoria").modal("hide");
})


/*
private Integer category_id;
private String category_name;
th:data-idcategoria="${categoria.category_id}"
th:data-desccategoria="${categoria.category_name}"
*/

function ListarSala(){
	$.ajax({
		type: "GET",
		url: "/categoria/listarCategorias",
		dataType: "json",
		success: function(resultado){
			//console.log(resultado);
			$("#tblcategoria > tbody").html("");
			$.each(resultado, function(index, value){
				$("#tblcategoria > tbody").append("<tr>"+
						"<td>"+value.category_id+"</td>"+
						"<td>"+value.category_name+"</td>"+
						"<td>"+
							"<button type='button' class='btn btn-success btnactualizar'"+
							" data-idcategoria='"+value.category_id+"'"+
							" data-desccategoria='"+value.category_name+"'"+
							"><i class='fas fa-pen'></i></button></td>"+
						"<td>"+
							"<button type='button' class='btn btn-danger btneliminarcategoria'"+	
							" data-idcategoria='"+value.category_id+"'"+
							" data-desccategoria='"+value.category_name+"'"+
							"><i class='fas fa-trash'></i></button></td>"+							
						"</tr>")
			})
			
			
		}
	})
}





