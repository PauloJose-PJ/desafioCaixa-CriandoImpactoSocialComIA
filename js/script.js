let synth = window.speechSynthesis;
        let utterance;

        function lerSite() {
            const texto = document.body.innerText;
            utterance = new SpeechSynthesisUtterance(texto);
            utterance.lang = "pt-BR";
            utterance.rate = 1.5;
            synth.speak(utterance);
        }

        function pararLeitura() {
            synth.cancel();
        }