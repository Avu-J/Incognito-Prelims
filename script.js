document.addEventListener("DOMContentLoaded", () => {
    const text = [
        "So much <span class='glitch'>space</span><br>",
        "so little <span class='glitch'>time</span>."
    ];

    let fullText = text.join("");
    let i = 0;
    let output = "";
    let tag = "";
    let isTag = false;

    function type() {
        if (i < fullText.length) {
            let char = fullText.charAt(i);

            if (char === "<") {
                isTag = true;
            }

            if (isTag) {
                tag += char;
                if (char === ">") {
                    output += tag;
                    tag = "";
                    isTag = false;
                }
            } else {
                output += char;
            }

            document.getElementById("typingText").innerHTML = output;
            i++;
            setTimeout(type, isTag ? 0 : 100);
        }
    }

    type();
});
