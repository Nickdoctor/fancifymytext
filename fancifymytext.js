document.addEventListener('DOMContentLoaded', function() {    // Use this to prevent script from running before load 
    const BiggerButton = document.getElementById('BiggerButton');
    const textArea = document.getElementById("textArea");
    const FancyButton = document.getElementById("FancyButton");
    const BoringButton = document.getElementById("BoringButton");
    const MooButton = document.getElementById("MooButton");

    function showAlert() {
        textArea.style.fontSize ='24pt';
    }
    function fancy() {
        textArea.style.color = 'blue';
        textArea.style.fontWeight = 'bold';
        textArea.style.textDecoration = 'underline';
    }
    function boring() {
        textArea.style.color = '';
        textArea.style.fontWeight = '';
        textArea.style.textDecoration = '';
    }
    function moo() {
        textArea.value= textArea.value.toUpperCase();
                                                //"How are you?"
        var parts = textArea.value.split(".");  // ["How", "are", "you?"]
        textArea.value = parts.join("-Moo");       // "How_are_you?"
    }

    BiggerButton.addEventListener('click', showAlert);
    FancyButton.addEventListener('click', fancy);
    BoringButton.addEventListener('click', boring);
    MooButton.addEventListener('click',moo);
});