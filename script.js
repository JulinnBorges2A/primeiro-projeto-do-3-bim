document.addEventListener('DOMContentLoaded', () => {
    // Select the accessibility button and options menu
    const accessibilityButton = document.getElementById('botao-acessibilidade');
    const accessibilityOptions = document.getElementById('opcoes-acessibilidade');

    // Select the font size buttons
    const increaseFontButton = document.getElementById('aumentar-fonte');
    const decreaseFontButton = document.getElementById('diminuir-fonte');

    // Define a key for local storage to save the user's font size preference
    const FONT_SIZE_STORAGE_KEY = 'userFontSize';

    // Set a minimum and maximum font size to prevent extreme values
    const MIN_FONT_SIZE = 0.8; // Example minimum size
    const MAX_FONT_SIZE = 1.5; // Example maximum size
    const FONT_SIZE_STEP = 0.1; // Step for increasing/decreasing font size

    // Retrieve the user's saved font size from local storage or set a default
    let currentFontSize = parseFloat(localStorage.getItem(FONT_SIZE_STORAGE_KEY)) || 1.0;
    
    // Apply the initial font size to the body
    document.body.style.fontSize = `${currentFontSize}rem`;

    // Toggle the visibility of the accessibility options on button click
    accessibilityButton.addEventListener('click', () => {
        accessibilityButton.classList.toggle('rotacao-botao');
        accessibilityOptions.classList.toggle('apresenta-lista');
    });

    // Increase the font size on button click
    increaseFontButton.addEventListener('click', () => {
        if (currentFontSize < MAX_FONT_SIZE) {
            currentFontSize += FONT_SIZE_STEP;
            document.body.style.fontSize = `${currentFontSize}rem`;
            localStorage.setItem(FONT_SIZE_STORAGE_KEY, currentFontSize); // Save to local storage
        }
    });

    // Decrease the font size on button click
    decreaseFontButton.addEventListener('click', () => {
        if (currentFontSize > MIN_FONT_SIZE) {
            currentFontSize -= FONT_SIZE_STEP;
            document.body.style.fontSize = `${currentFontSize}rem`;
            localStorage.setItem(FONT_SIZE_STORAGE_KEY, currentFontSize); // Save to local storage
        }
    });
});
