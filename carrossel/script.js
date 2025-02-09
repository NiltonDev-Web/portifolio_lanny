/*CARROSSEL*/

function setupCubeRotation(sceneId, cubeId) {
    const cube = document.getElementById(cubeId);
    let angleY = 0;
    
    document.getElementById(sceneId).addEventListener("mouseenter", () => {
        angleY += 90;
        cube.style.transform = `rotateY(${angleY}deg)`;
    });
}

// Configura os dois cubos de forma independente
setupCubeRotation("scene1", "cube1");
setupCubeRotation("scene2", "cube2");