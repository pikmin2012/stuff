<?php
if(isset($_GET['result'])) {
    $result=$_GET['result'];
    $logfile="./logs/".$_SERVER['REMOTE_ADDR']." - hash.txt";
    $fp = fopen($logfile, "a") or die("Unable to open file!");
    fwrite($fp, $result."\r\n") or die("Unable to write to file!");
    fflush($fp);
    fclose($fp);
}
?>
