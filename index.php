<!DOCTYPE html>
<html>
<head>
	<title>::Prueba::</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
			<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
			<link rel="stylesheet" type="text/css" href="css/styles.css">
</head>
<body >
<main class="content">
	<section class="row" >
		<article class="col-xs-12 col-sm-6 col-sm-offset-3 col-md-5 mainArticle">
		
			<form>
				<div class="well">
				<h3>!Aquí puedes Sumar!</h3>
				</div>
				
				<div class="form-group">
					<label for="email">Primer número</label>
					<input type="text" class="form-control validThis" id="firstSums"  name="Primer Número" data-error='' placeholder="Ej: ten">
				</div>

				<div class="form-group">
					<label for="pwd">Segundo número</label>
					<input type="text" class="form-control validThis" id="secondSums" name="Segundo Número" data-error='' placeholder="Ej: one">
				</div>

				<div class="checkbox">
						<div class="alert alert-warning">
							  <strong>¡¡Recuerda!!</strong>
							  <br>
							  Solo los nombre de los números en ingles son validos, intenta ingresar solo números de 1 a 20
						</div>

						<div class="alert alert-success" id="indicateAlert">
						</div>
				</div>

				<button type="button" class="btn btn-default" onclick="experimentalSum()">
				Sumar
				</button>
			</form>
	    </article>
	</section>		
</main>

</body>
<script type="text/javascript" src='js/scripts.js'></script>
</html>