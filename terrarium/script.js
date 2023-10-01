dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));

bringToFront(document.getElementById('plant1'));
bringToFront(document.getElementById('plant2'));
bringToFront(document.getElementById('plant3'));
bringToFront(document.getElementById('plant4'));
bringToFront(document.getElementById('plant5'));
bringToFront(document.getElementById('plant6'));
bringToFront(document.getElementById('plant7'));
bringToFront(document.getElementById('plant8'));
bringToFront(document.getElementById('plant9'));
bringToFront(document.getElementById('plant10'));
bringToFront(document.getElementById('plant11'));
bringToFront(document.getElementById('plant12'));
bringToFront(document.getElementById('plant13'));
bringToFront(document.getElementById('plant14'));

function dragElement(terrariumElement) {
    //set 4 positions for positioning on the screen
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    terrariumElement.onpointerdown = pointerDrag;


    function pointerDrag(e) {
        e.preventDefault();
        // console.log(e);
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // console.log(pos1, pos2, pos3, pos4);
        terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
        terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
    }

    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
}

function bringToFront(terrariumElement) {
    let highestZIndex = 0;

    terrariumElement.ondblclick = elementForward;

    function elementForward() {
        // Find the highest z-index among all elements
        let elements = document.querySelectorAll('.plant'); // Assuming all draggable elements have a class 'draggable'
        elements.forEach(function (element) {
            let zIndex = parseInt(element.style.zIndex) || 0;
            if (zIndex > highestZIndex) {
                highestZIndex = zIndex;
            }
        });

        // Set the z-index of the clicked element to be higher than the highest z-index
        terrariumElement.style.zIndex = highestZIndex + 1;
    }
}
