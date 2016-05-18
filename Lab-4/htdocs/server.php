<?php 

$servername = "localhost";
$username = "root";
$password = "";
$db = "hotel";

$conn = new mysqli($servername, $username, $password, $db);
if ($conn->connect_error) die("Connection failed: " . $conn->connect_error);

if(isset($_GET["action"])){
	
	if ($_GET["action"] == "show" && !empty($_GET["table"])){
		if ($result = $conn->query("SELECT * FROM `".$_GET["table"]."`")) {
				$Data = array('total' => 0, 'records' => array());
		    if ($result->num_rows > 0){
		    	$i = 0;
		    	$Data["total"] = $result->num_rows;
		    	while($row = mysqli_fetch_assoc($result)){
		    		$row["recid"] = $i++;
		    		$Data["records"][] = $row;
		    	}
		    	echo json_encode($Data); // ------------------------------------> codam din tablou obisnuit in format json deja ureaza sa lucram cu formatul json
		    }
		    $result->close();
		}
	}

	if($_GET["action"] == "add"){
		$sql = "";
		if($_GET["table"] == "clienti") $sql = "INSERT INTO `hotel`.`clienti` (`nume` , `prenume` , `telefon` , `masina` , `idnp` , `camera` ) VALUES ('".$_GET["value"][0]."', '".$_GET["value"][1]."', '".$_GET["value"][2]."', '".$_GET["value"][3]."', '".$_GET["value"][4]."', '".$_GET["value"][5]."')";
		if($_GET["table"] == "camere") $sql = "INSERT INTO `hotel`.`camere` (`camera` , `pret` , `tip` , `note` ) VALUES ('".$_GET["value"][0]."', '".$_GET["value"][1]."', '".$_GET["value"][2]."', '".$_GET["value"][3]."'); ";
		if($_GET["table"] == "facturi") $sql = "INSERT INTO `hotel`.`facturi` (`data` , `nopti` , `camera` , `idnp` ) VALUES ('".$_GET["value"][0]."', '".$_GET["value"][1]."', '".$_GET["value"][2]."', '".$_GET["value"][3]."');";
		$conn->query($sql);
	}

	if($_GET["action"] == "delete"){
		$sql = "";
		if($_GET["table"] == "clienti") $sql = "DELETE FROM `hotel`.`clienti` WHERE `clienti`.`idnp` = '".$_GET["value"]."'";
		if($_GET["table"] == "camere") $sql = "DELETE FROM `hotel`.`camere` WHERE `camere`.`camera` = '".$_GET["value"]."'";
		if($_GET["table"] == "facturi") $sql = "DELETE FROM `hotel`.`facturi` WHERE `facturi`.`idnp` = '".$_GET["value"]."'";
		$conn->query($sql);	
	}

	if($_GET["action"] == "update"){
		$sql = "";
		if($_GET["table"] == "clienti") $sql = "UPDATE `hotel`.`clienti` SET `nume` = '".$_GET["value"][0]."', `prenume` = '".$_GET["value"][1]."', `telefon` = '".$_GET["value"][2]."', `masina` = '".$_GET["value"][3]."', `idnp` = '".$_GET["value"][4]."', `camera` = '".$_GET["value"][5]."' WHERE `clienti`.`idnp` = '".$_GET["value"][6]."';";
		if($_GET["table"] == "camere") $sql = "UPDATE `hotel`.`camere` SET `camera` = '".$_GET["value"][0]."', `pret` = '".$_GET["value"][1]."', `tip` = '".$_GET["value"][2]."', `note` = '".$_GET["value"][3]."' WHERE `camere`.`camera` = '".$_GET["value"][4]."';";
		if($_GET["table"] == "facturi") $sql = "UPDATE `hotel`.`facturi` SET `data` = '".$_GET["value"][0]."', `nopti` = '".$_GET["value"][1]."', `camera` = '".$_GET["value"][2]."', `idnp` = '".$_GET["value"][3]."' WHERE `facturi`.`idnp` = '".$_GET["value"][4]."';";
		$conn->query($sql);
	}

}

$conn->close();

?>