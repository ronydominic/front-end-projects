document.addEventListener("DOMContentLoaded", function() {
    fetch("data.json").then(response => {
        if (!response.ok) {
            throw new Error("Network response was not OK");
        }
        return response.json();
    }).then(data => {
        const containerWrapper = document.getElementById("tab-back");
        data.forEach(element => {
            console.log(element.title);
            const newContainer = document.createElement("div");
            newContainer.style.width = "100%";
            newContainer.style.height = "fit-content";

            const titleContainer = document.createElement("div");
            titleContainer.style.backgroundColor = "rgba(255,255,255,0.5)";
            titleContainer.style.color="black";
            titleContainer.style.width = "100%";
            titleContainer.style.height = "40px";
            titleContainer.style.borderRadius = "10px";
            titleContainer.style.marginBottom = "5px";
            titleContainer.style.border = "0.8px solid black";
            titleContainer.style.display = "flex";
            titleContainer.style.justifyContent = "space-between";
            titleContainer.style.alignItems = "center";
            titleContainer.innerHTML = `
                <span style='display: flex; align-items: center; margin-left: 10px; text-align: left; height: 100%;'>
                    ${element.title}
                </span>
                <span style='display: flex; align-items: center; padding-right: 5px; margin-right: 5px;'>
                    <a href='${element.url}' class='link-icon'>
                        <img src='../resources/link-icon.svg'>
                    </a>
                </span>
            `;
            newContainer.append(titleContainer);

            const descContainer = document.createElement("div");
            descContainer.style.backgroundColor = "rgba(255,255,255,0.4)";
            descContainer.style.width = "100%";
            descContainer.style.minHeight = "60px";
            descContainer.style.border = "0.8px solid black";
            descContainer.style.borderRadius = "10px";

            const techContainer = document.createElement("div");
            techContainer.style.minHeight = "30px";
            techContainer.innerHTML = "<h6 style='margin-left: 8px; margin-right: 8px; margin-top: 5px;'>Technologies used:</h6>";

            element.technologiesUsed.forEach(tech => {
                const techPill = document.createElement("span");
                techPill.style.display = "inline-block";
                techPill.style.margin = "3px";
                techPill.style.padding = "3px 8px";
                techPill.style.border = "1px solid #000";
                techPill.style.borderRadius = "10px";
                techPill.style.backgroundColor = "rgba(175, 145, 188, 0.5)";
                techPill.style.color = "black";
                techPill.style.fontSize = "12px";
                techPill.innerText = tech;
                techContainer.append(techPill);
            });

            descContainer.append(techContainer);

            const descTextContainer = document.createElement("div");
            descTextContainer.style.minHeight = "50px";
            descTextContainer.innerHTML = `
                <h6 style='margin-left: 8px; margin-right: 8px; margin-top: 5px'>Description:</h6>
                <p style='margin-left: 8px; margin-right: 8px;'>${element.desc}</p>
            `;
            descContainer.append(descTextContainer);

            newContainer.style.padding = "10px";
            newContainer.style.marginBottom = "15px";

            newContainer.append(descContainer);

            const tabBack = document.querySelector("#projects-tab-pane");
            tabBack.append(newContainer);
        });
    }).catch(error => console.error("Error loading JSON", error));
});