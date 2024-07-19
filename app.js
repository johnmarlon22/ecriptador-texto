function processText(mode) {
    var inputText = document.getElementById("text").value.toLowerCase();
    var result = "";

    if (mode === "encrypt") {
        result = encryptText(inputText);
    } else if (mode === "decrypt") {
        result = decryptText(inputText);
    }

    document.getElementById("result").value = result;
}

function encryptText(text) {
    var encryptedText = "";
    for (var i = 0; i < text.length; i++) {
        switch (text[i]) {
            case 'e':
                encryptedText += "enter";
                break;
            case 'i':
                encryptedText += "imes";
                break;
            case 'a':
                encryptedText += "ai";
                break;
            case 'o':
                encryptedText += "ober";
                break;
            case 'u':
                encryptedText += "ufat";
                break;
            default:
                encryptedText += text[i];
        }
    }
    return encryptedText;
}

function decryptText(text) {
    var decryptedText = "";
    var i = 0;
    while (i < text.length) {
        if (text.substr(i, 5) === "enter") {
            decryptedText += "e";
            i += 5;
        } else if (text.substr(i, 4) === "imes") {
            decryptedText += "i";
            i += 4;
        } else if (text.substr(i, 2) === "ai") {
            decryptedText += "a";
            i += 2;
        } else if (text.substr(i, 4) === "ober") {
            decryptedText += "o";
            i += 4;
        } else if (text.substr(i, 4) === "ufat") {
            decryptedText += "u";
            i += 4;
        } else {
            decryptedText += text[i];
            i++;
        }
    }
    return decryptedText;
}

function copyText() {
    var resultText = document.getElementById("result");
    resultText.select();
    resultText.setSelectionRange(0, 99999); // Para móviles
    document.execCommand("copy");
    alert("Texto copiado: " + resultText.value);
}
