$(document).on("click", "#btnagregar", function() {
	$("#txtid").val("");
	$("#txtnombre").val("");
	$("#txtdescripcion").val("");
	$("#txtidproducto").val("");
	$("#txtidcompany").val("");
	$("#txtidcategoria").val("");
	$.ajax({
		type: "GET",
		url: "/accesories/frmAccesories",
		dataType: "json"
	})
	$("#modalCategoria").modal("show");
});

$(document).on("click", ".btnactualizar", function() {
	$("#txtid").val($(this).attr("data-idaccessories"));
	$("#txtnombre").val($(this).attr("data-nombre"));
	$("#txtdescripcion").val($(this).attr("data-descripcion"));
	$("#txtidproducto").val($(this).attr("data-idproduct"));
	$("#txtidcompany").val($(this).attr("data-idcompanies"));
	$("#txtidcategoria").val($(this).attr("data-categoria"));
	$.ajax({
		type: "GET",
		url: "/accesories/frmAccesories",
		dataType: "json"
	})
	$("#modalCategoria").modal("show");
});

$(document).on("click", "#btnguardar", function() {
	$.ajax({
		type: "POST",
		url: "/accesories/registrarAccesories",
		contentType: "application/json",
		data: JSON.stringify({
			id_accessories: $("#txtid").val(),
			name: $("#txtnombre").val(),
			description: $("#txtdescripcion").val(),
			id_product: $("#txtidproducto").val(),
			id_company: $("#txtidcompany").val(),
			id: $("#txtidcategoria").val()
		}), //Recordar que estos datos son del request los nombres deben ser iguales
		success: function(resultado) {
			alert(resultado.mensaje);
			//ListarSala();
		}
	});
	$("#modalCategoria").modal("hide");
})

$(document).on("click", ".btneliminarcategoria", function() {
	$("#hddideliminarsala").val("");
	$("#hddideliminarsala").val($(this).attr("data-idaccessories"));
	$("#mensajeeliminar").text("¿Está seguro de eliminar el accesorio " +
		$(this).attr("data-nombre") + "?");
	$("#modalEliminarCategoria").modal("show");
})


$(document).on("click", "#btneliminar", function() {
	$.ajax({
		type: "DELETE",
		contentType: 'application/json',
		url: "/accesories/eliminarAccesories",
		data: JSON.stringify({
			id_accessories: $("#hddideliminarsala").val()
		}),
		success: function(resultado) {
			alert(resultado.mensaje);
			//ListarSala();
		}
	})
	$("#modalEliminarCategoria").modal("hide");
})

/*
function ListarSala() {
	$.ajax({
		type: "GET",
		url: "/product/listarProductos",
		dataType: "json",
		success: function(resultado) {
			//console.log(resultado);
			$("#tblcategoria > tbody").html("");
			$.each(resultado, function(index, value) {
				$("#tblcategoria > tbody").append("<tr>" +
					"<td>" + value.id_product + "</td>" +
					"<td>" + value.name + "</td>" +
					"<td>" + value.sku + "</td>" +
					"<td>" + value.description + "</td>" +
					"<td>" + value.unit_price + "</td>" +
					"<td>" + value.image_url + "</td>" +
					"<td>" + value.units_in_stock + "</td>" +
					"<td>" + value.date_created + "</td>" +
					"<td>" + value.last_updated + "</td>" +
					"<td>" +
					"<button type='button' class='btn btn-success btnactualizar'" +
					" data-idproducto='" + value.id_product + "'" +
					" data-nombre='" + value.name + "'" +
					" data-sku='" + value.sku + "'" +
					" data-descripcion='" + value.description + "'" +
					" data-precio='" + value.unit_price + "'" +
					" data-url='" + value.image_url + "'" +
					" data-stock='" + value.units_in_stock + "'" +
					" data-creado='" + value.date_created + "'" +
					" data-actualizado='" + value.last_updated + "'" +
					"><i class='fas fa-pen'></i></button></td>" +
					"<td>" +
					"<button type='button' class='btn btn-danger btneliminarcategoria'" +
					" data-idproducto='" + value.id_product + "'" +
					" data-nombre='" + value.name + "'" +
					" data-sku='" + value.sku + "'" +
					" data-descripcion='" + value.description + "'" +
					" data-precio='" + value.unit_price + "'" +
					" data-url='" + value.image_url + "'" +
					" data-stock='" + value.units_in_stock + "'" +
					" data-creado='" + value.date_created + "'" +
					" data-actualizado='" + value.last_updated + "'" +
					"><i class='fas fa-trash'></i></button></td>" +
					"</tr>")
			})


		}
	})
}*/





