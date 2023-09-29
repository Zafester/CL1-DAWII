$(document).on("click", "#btnagregar", function(){
	$("#txtid").val("");
	$("#txtnombre").val("");
	$("#txtsku").val("");
	$("#txtdescripcion").val("");
	$("#txtprecio").val("");
	$("#txturl").val("");
	$("#txtstock").val("");
	$("#txtcreado").val("");
	$("#txteditado").val("");
	$("#txtcategoriaproducto").val("");
	$.ajax({
		type: "GET",
		url: "/product/frmProduct",
		dataType: "json"
	})
	$("#modalCategoria").modal("show");
});

$(document).on("click", ".btnactualizar", function(){
	$("#txtid").val($(this).attr("data-idproducto"));
	$("#txtnombre").val($(this).attr("data-nombre"));
	$("#txtsku").val($(this).attr("data-sku"));
	$("#txtdescripcion").val($(this).attr("data-descripcion"));
	$("#txtprecio").val($(this).attr("data-precio"));
	$("#txturl").val($(this).attr("data-url"));
	$("#txtstock").val($(this).attr("data-stock"));
	$("#txtcreado").val($(this).attr("data-creado"));
	$("#txteditado").val($(this).attr("data-actualizado"));
	$("#txtcategoriaproducto").val($(this).attr("data-idcategoria"));
	$.ajax({
		type: "GET",
		url: "/product/frmProduct",
		dataType: "json"
	})
	$("#modalCategoria").modal("show");
});

$(document).on("click", "#btnguardar", function(){
	$.ajax({
		type: "POST",
		url: "/product/registrarProducto",
		contentType: "application/json",
		data: JSON.stringify({
			id_product: $("#txtid").val(),
			name: $("#txtnombre").val(),
			sku: $("#txtsku").val(),
			description: $("#txtdescripcion").val(),
			unit_price: $("#txtprecio").val(),
			image_url: $("#txturl").val(),
			units_in_stock: $("#txtstock").val(),
			dateCreated: $("#txtcreado").val(),
			lastUpdated: $("#txteditado").val(),
			id: $("#txtcategoriaproducto").val(),
		}), //Recordar que estos datos son del request los nombres deben ser iguales
		success: function(resultado){
			alert(resultado.mensaje);
			//ListarSala();
		}
	});
	$("#modalCategoria").modal("hide");
})

$(document).on("click", ".btneliminarcategoria", function(){
	$("#hddideliminarsala").val("");
	$("#hddideliminarsala").val($(this).attr("data-idproducto"));
	$("#mensajeeliminar").text("¿Está seguro de eliminar el producto "+ 
			$(this).attr("data-nombre")+"?");
	$("#modalEliminarCategoria").modal("show");
})


$(document).on("click", "#btneliminar", function(){
	$.ajax({
		type: "DELETE",
		contentType: 'application/json',
		url: "/product/eliminarProducto",
		data: JSON.stringify({
			id_product: $("#hddideliminarsala").val()
		}),
		success: function(resultado){
			alert(resultado.mensaje);
			//ListarSala();
		}
	})
	$("#modalEliminarCategoria").modal("hide");
})


function ListarSala(){
	$.ajax({
		type: "GET",
		url: "/product/listarProductos",
		dataType: "json",
		success: function(resultado){
			//console.log(resultado);
			$("#tblcategoria > tbody").html("");
			$.each(resultado, function(index, value){
				$("#tblcategoria > tbody").append("<tr>"+
						"<td>"+value.id_product+"</td>"+
						"<td>"+value.name+"</td>"+
						"<td>"+value.sku+"</td>"+
						"<td>"+value.description+"</td>"+
						"<td>"+value.unit_price+"</td>"+
						"<td>"+value.image_url+"</td>"+
						"<td>"+value.units_in_stock+"</td>"+
						"<td>"+value.date_created+"</td>"+
						"<td>"+value.last_updated+"</td>"+
						"<td>"+
							"<button type='button' class='btn btn-success btnactualizar'"+
							" data-idproducto='"+value.id_product+"'"+
							" data-nombre='"+value.name+"'"+
							" data-sku='"+value.sku+"'"+
							" data-descripcion='"+value.description+"'"+
							" data-precio='"+value.unit_price+"'"+
							" data-url='"+value.image_url+"'"+
							" data-stock='"+value.units_in_stock+"'"+
							" data-creado='"+value.date_created+"'"+
							" data-actualizado='"+value.last_updated+"'"+
							"><i class='fas fa-pen'></i></button></td>"+
						"<td>"+
							"<button type='button' class='btn btn-danger btneliminarcategoria'"+	
							" data-idproducto='"+value.id_product+"'"+
							" data-nombre='"+value.name+"'"+
							" data-sku='"+value.sku+"'"+
							" data-descripcion='"+value.description+"'"+
							" data-precio='"+value.unit_price+"'"+
							" data-url='"+value.image_url+"'"+
							" data-stock='"+value.units_in_stock+"'"+
							" data-creado='"+value.date_created+"'"+
							" data-actualizado='"+value.last_updated+"'"+
							"><i class='fas fa-trash'></i></button></td>"+							
						"</tr>")
			})
			
			
		}
	})
}





