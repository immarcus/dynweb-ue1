const http = require('http');
const url = require('url');

const server = http.createServer(function(request, response) {

  const parsedUrlObj = url.parse(request.url, true);

  if ( parsedUrlObj.pathname === "/http-examples" || parsedUrlObj.pathname === "/http-examples/" ) {
    response.statusCode = 200;
    response.setHeader('Content-type', 'text/plain; charset=utf-8');
    response.write('GET http://derstandard.at/\n');
    response.write('POST https://github.com/session\n- Parameter: commit, utf8, authenticity_token, login, password')
  } else if ( parsedUrlObj.pathname === "/about" || parsedUrlObj.pathname === "/about/" ) {
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.statusCode = 200;
    const html = `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>Hausübung</title>
      </head>
      <body>
        <h1 style="font-family: Verdana, Geneva, sans-serif;text-align:center;margin-bottom:70px;">Hausübung Dynamisches Web</h1>
        <p style="font-family: Verdana, Geneva, sans-serif;text-align:center;font-size:1.5em;">
          Marcus Wallner
        </p>
        <p style="font-family: Verdana, Geneva, sans-serif;text-align:center;font-size:1.5em;">
          Georg Wresnik
        </p>
      </body>
    </html>`;
    response.write(html);
  } else if (parsedUrlObj.pathname === "/buchstabiere") {
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.statusCode = 200;

    const wordParam = parsedUrlObj.query.w;
    const text = `Wort zum Buchstabieren: ${wordParam}`;

    response.write(text + '<br />' + '<br />');

    var letters = wordParam.split("");
    for (i = 0; i < letters.length; i++) {
      response.write( letters[i] + ' wie ' + getSpelling(letters[i]) + '<br />' );
    }

    function getSpelling(letter) {
      switch (letter) {
        case "a":
        case "A":
          return "Anton";
          break;
        case "ä":
        case "Ä":
          return "Ärger";
          break;
        case "b":
        case "B":
          return "Berta";
          break;
        case "c":
        case "C":
          return "Cäsar";
          break;
        case "d":
        case "D":
          return "Dora";
          break;
        case "e":
        case "E":
          return "Emil";
          break;
        case "f":
        case "F":
          return "Friedrich";
          break;
        case "g":
        case "G":
          return "Gustav";
          break;
        case "h":
        case "H":
          return "Heinrich";
          break;
        case "i":
        case "I":
          return "Ida";
          break;
        case "j":
        case "J":
          return "Julius";
          break;
        case "k":
        case "K":
          return "Konrad";
          break;
        case "l":
        case "L":
          return "Ludwig";
          break;
        case "m":
        case "M":
          return "Martha";
          break;
        case "n":
        case "N":
          return "Nordpol";
          break;
        case "o":
        case "O":
          return "Otto";
          break;
        case "ö":
        case "Ö":
          return "Österreich";
          break;
        case "p":
        case "P":
          return "Paula";
          break;
        case "q":
        case "Q":
          return "Quelle";
          break;
        case "r":
        case "R":
          return "Richard";
          break;
        case "s":
        case "S":
          return "Siegfried";
          break;
        case "ß":
          return "scharfes S";
          break;
        case "t":
        case "T":
          return "Theodor";
          break;
        case "u":
        case "U":
          return "Ulrich";
          break;
        case "ü":
        case "Ü":
          return "Übel";
          break;
        case "v":
        case "V":
          return "Viktor";
          break;
        case "w":
        case "W":
          return "Wilhelm";
          break;
        case "x":
        case "X":
          return "Xaver";
          break;
        case "y":
        case "Y":
          return "Ypsilon";
          break;
        case "z":
        case "Z":
          return "Zürich";
          break;
        default:
         return "";
          break;
      }
    }

  } else {
    response.statusCode = 404;
    response.write('404 Not Found');
  }

  response.end();

});

server.listen(3000);
