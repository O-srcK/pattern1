document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.container');
    const blockTemplate = document.getElementById('unitary-block-template').content;

    // Calculate dimensions
    const blockHeight = 20 * 4 + 5 * 3; // Height of a unitary-block including spacing
    const blockWidth = 20 * 4 + 5; // Width of a unitary-block including spacing
    const screenHeight = window.innerHeight; // Total height of the screen
    const screenWidth = window.innerWidth; // Total width of the screen

    const rowCount = Math.ceil(screenHeight / blockHeight); // Calculate the number of rows needed
    const blockCount = Math.ceil(screenWidth / blockWidth); // Calculate the number of blocks per row

    // Populate rows and blocks to fill the screen horizontally and vertically
    for (let i = 0; i < rowCount; i++) {
        const fullRow = document.createElement('div');
        fullRow.classList.add('full-row'); // Create a full-row div

        for (let j = 0; j < blockCount; j++) {
            const blockClone = document.importNode(blockTemplate, true); // Clone the template
            fullRow.appendChild(blockClone); // Append cloned block to full row
        }
        
        container.appendChild(fullRow); // Append the full row to the container
    }

    // Make sure rows fill any remaining vertical space
    const remainingHeight = screenHeight - (rowCount * blockHeight);
    if (remainingHeight > 0) {
        const fullRow = document.createElement('div');
        fullRow.classList.add('full-row'); // Create another full-row div for remaining space

        for (let j = 0; j < blockCount; j++) {
            const blockClone = document.importNode(blockTemplate, true); // Clone the template
            fullRow.appendChild(blockClone); // Append cloned block to full row
        }

        container.appendChild(fullRow); // Append the full row to the container
    }
});
