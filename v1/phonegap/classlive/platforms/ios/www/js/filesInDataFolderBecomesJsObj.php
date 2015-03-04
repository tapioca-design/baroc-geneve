<?php
$dir = "data";
$dh  = opendir($dir);



$t = "";
$t .= "[";


while (false !== ($filename = readdir($dh))) {
    // echo $filename;
    

    if ($filename!="." AND $filename!=".." AND $filename!=".DS_Store") {
	    $content = file_get_contents('data/'.$filename);
		$t .= "{";

		$t .= "n:";
		$t .= "'";
			$filename = str_replace(":", "/", $filename);
			$filename = str_replace(".json", "", $filename);
			$t .= str_replace(":", "/", $filename);
		$t .= "'";


		$t .= ",";



		$t .= "d:";
		$t .= "'";
			$t .= str_replace("'", "\'", $content);
		$t .= "'";

		$t .= "},";
	}
}

$t .= "]";

echo $t;


// echo "<pre>";
// print_r($files);
// echo "</pre>";



// if ($handle = opendir('/data')) {
//     while (false !== ($entry = readdir($handle))) {
        
//             echo "$entry\n";
        
//     }
//     closedir($handle);
// }

?>