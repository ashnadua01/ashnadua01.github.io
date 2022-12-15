setTimeout(() => {
    const ChangeZone = document.querySelector(".Change");
    var textone = "A student at IIIT Hyderabad";
    var texttwo = "Passionate about Technology";
    var textthree = "A Knowledge Seeker";
    var textCount = 0;
    var turn = 1;
    TextFirst = setInterval(TextShow, 200);
    function TextShow() {
      if (turn == 1) {
        if (textCount < Number(textone.length)) {
          text1 = ChangeZone.innerHTML + textone[textCount];
          ChangeZone.innerHTML = text1;
          textCount++;
        } else {
          textCount = 0;
          clearInterval(TextFirst);
          ClearZone = setInterval(clearZone, 50);
          turn++;
        }
      } else if (turn == 2) {
        if (textCount < Number(texttwo.length)) {
          ChangeZone.innerHTML = ChangeZone.innerHTML + texttwo[textCount];
          textCount++;
        } else {
          textCount = 0;
          clearInterval(TextFirst);
          ClearZone = setInterval(clearZone, 50);
          turn = 3;
        }
      } else if (turn == 3) {
        if (textCount < Number(textthree.length)) {
          ChangeZone.innerHTML = ChangeZone.innerHTML + textthree[textCount];
          textCount++;
        } else {
          textCount = 0;
          clearInterval(TextFirst);
          ClearZone = setInterval(clearZone, 50);
          turn = 1;
        }
      }
    }
    function clearZone() {
      const textZone = document.querySelector(".Change");
      if (Number(ChangeZone.innerHTML.length) > 0) {
        var newText = "";
        for (var i = 0; i < Number(textZone.innerHTML.length) - 1; i++) {
          newText += textZone.innerHTML[i];
        }
        textZone.innerHTML = String(newText);
      } else {
        clearInterval(ClearZone);
        TextFirst = setInterval(TextShow, 200);
      }
    }
  }, 1000);
  