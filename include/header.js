// const autresProjets = document.getElementById("autresProjet");

// for (let i = 0; i < 3; ++i)
// {
//     divOfProjet = document.createElement("div");
//     autresProjets.appendChild(divOfProjet);
// }

document.getElementById("myNav").innerHTML =

    "<div class='container'>"

    + "<div class='all'>"
        + "<div class='box'>Johan Hullot  - </div>"
            + "<button onclick='window.location.href = `home.html`;' class='box h'>Home</button>"
            + "<button onclick='window.location.href = `projets.html`;' class='box h'>Projets</button>"
            + "<button onclick='window.location.href = `parcours.html`;' class='box h'>Parcours</button>"
            + "<button onclick='window.location.href = `contact.html` ;' class='box h'>Contact</button>"
        + "</div>"
    + "</div>";
