// Get all color selector elements
var colorSelectors = document.querySelectorAll('.colorSelector');

// Loop through each color selector
colorSelectors.forEach(function(colorSelector) {
    // Add change event listener to each color selector
    colorSelector.addEventListener('change', function() {
        var selectedColor = this.value; // Get selected value
        var gridItem = this.closest('.grid-row').querySelector('.grid-item'); // Get grid item in the same row

        switch(selectedColor) {
            case 'one':
                gridItem.style.backgroundColor = '#ff9999';
                break;
            case 'two':
                gridItem.style.backgroundColor = '#99ff99';
                break;
            case 'three':
                gridItem.style.backgroundColor = '#9999ff';
                break;
            case 'four':
                gridItem.style.backgroundColor = '#ffff99';
                break;
            case 'five':
                gridItem.style.backgroundColor = '#99ffff';
                break;
            case 'six':
                gridItem.style.backgroundColor = '#ff99ff';
                break;
            case 'seven':
                gridItem.style.backgroundColor = '#ffcc99';
                break;
            case 'eight':
                gridItem.style.backgroundColor = '#ccff99';
                break;
            default:
                gridItem.style.backgroundColor = ''; // Reset to default
                break;
        }
    });
});
