document.addEventListener("DOMContentLoaded", () => {
    const uidDisplay = document.getElementById("uidDisplay");
    const generateUIDButton = document.getElementById("generateUID");
    const historyTextarea = document.getElementById("history");
    const deploymentInput = document.getElementById("deploymentInput");
    const addDeploymentButton = document.getElementById("addDeployment");
    const deploymentList = document.getElementById("deploymentList");

    // Generate UID
    generateUIDButton.addEventListener("click", () => {
        const uid = UID-${Date.now().toString(36).toUpperCase()};
        uidDisplay.textContent = Generated UID: ${uid};
        historyTextarea.value += UID Generated: ${uid}\n;
    });

    // Add Deployment Location
    addDeploymentButton.addEventListener("click", () => {
        const location = deploymentInput.value.trim();
        if (location) {
            const li = document.createElement("li");
            li.textContent = Deployed at: ${location};
            deploymentList.appendChild(li);
            historyTextarea.value += Deployed at: ${location}\n;
            deploymentInput.value = "";
        } else {
            alert("Please enter a deployment location.");
        }
    });
});