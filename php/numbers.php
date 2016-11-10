<?php 
$sumando1 = strtolower($_POST["Number1"]);
$sumando2 = strtolower($_POST["Number2"]);

	$arr = array(
			'one' => 1,
			'two' => 2,
			'three' => 3,
			'fourt' => 4,
			'five' => 5,
			'six' => 6,
			'seven' => 7,
			'eight' => 8,
			'nine' => 9,
		    'ten' => 10,
		    'eleven' => 11,
		    'twelve' => 12,
		    'thirteen' => 13,
		    'fourteen' => 14,
		    'fifteen' => 15,
		    'sixteen' => 16,
		    'seventeen' => 17,
		    'eighteen' => 18,
		    'nineteen' => 19,
		    'twenty' => 20,
		    );

function LookingSame($sumando,$arr){
    foreach ($arr as $numeros => $valor) {
		if($sumando == $numeros){ return "true"; }
    }
}

$validSumando1 = LookingSame($sumando1,$arr);
$validSumando2 = LookingSame($sumando2,$arr);

if( $validSumando2 == 'true' && $validSumando1 == 'true' ){
   echo $arr[$sumando1] + $arr[$sumando2];
}

else if($validSumando1 != 'true' || $validSumando2 != 'true'){
   echo 'Ingresa un numero válido';
}

 ?>