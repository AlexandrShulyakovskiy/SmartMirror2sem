<?php
$buffer = file_get_contents("SmartMirrorInfo.json");
$smartMirrorInfo = json_encode($buffer);
$cron = $buffer;
//$smartMirrorInfo = preg_replace("[^\s]","/^?!\"$(.*)$/",$smartMirrorInfo);
//$smartMirrorInfo1 = str_split (  $smartMirrorInfo ,$split_length = 4 );
$smartMirrorInfo = str_replace(array("'",'"'),' ',$smartMirrorInfo);

//$smartMirrorInfo  = explode(",", $smartMirrorInfo);
echo exec("1 * * * * \E:\PHP\Apache24\htdocs\www\SmartMirror_Scrip.php > SmartMirror_Scrip.php");
file_put_contents($buffer, $smartMirrorInfo);

echo $smartMirrorInfo;

?>