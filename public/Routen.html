<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Routen</title>
    <link href="/assets/css/Routen.css" rel="stylesheet" />
    <link href="/assets/css/main.css" rel="stylesheet" />
    <script crossorigin="anonymous" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
        src="https://code.jquery.com/jquery-3.7.1.min.js"></script>


    <script src="/assets/js/main.js"></script>
</head>

<script crossorigin="anonymous" src="https://kit.fontawesome.com/790004d9dc.js"></script>

<H1 class="header">MediMove - Alle Routen</H1>
<ul class="nav">
    <li><a class="n1" href="/title" style="color:red;"><i class="fa-solid fa-hand-point-right" style="color:red;"></i>
            Medimove</a></li>
    <li><a href="/messages"><i class="fa-solid fa-envelope" style="font-size:1em;"></i></a></li>
</ul>


<body>

    <!-- This is your modal container that is initially hidden with CSS -->
    <div id="myModal" class="modal">
        <!-- Modal content container -->
        <div class="modal-content">
            <span class="close">&times;</span>
            <!-- Content will be injected here -->
            <div id="modalContainer"></div>
        </div>
    </div>


    <div class="bigbox">
        <div class="leftbox">

            <ul class="navibar">
                <li><a href=""><i class="fa-solid fa-compass" style="font-size:2em;"></i></a></li>
                <li><a href="/title">StartSeite/Dashboard</a></li>
                <li><a class="allrouten" href="/allRouten">Alle Routen <i class="fa-solid fa-route"></i></a></li>
                <li><a class="allf" href="/plan">Mein Fahrtenplan</a></li>
                <li><a href="/history">Fahrtenhistorie</a></li>
                <li><a href="/messages">Mitteilung <i class="fa-solid fa-bell"></i></a></li>
            </ul>
            <div>
                <button class="goback" onclick="goBackFunction()"><i class="fa-solid fa-arrow-left-long"
                        style="font-size:25px"></i></button>
            </div>
        </div>
        <div class="mainbox">
            <h1 class="read"><i class="fa-brands fa-readme" style="font-size:25px;"></i> Übersicht aller Routen </h1>
            <div class="atable">
                <table class="rtable" id="routen-tabelle">
                    <tr>
                        <th>Route-Nummer</th>
                        <th>zugeilter Fahrer</th>
                        <th>Fahrzeug</th>
                    </tr>
                </table>

                <dialog class="modal" id="modal">
                    <div class="pheader">
                        <div class="ph">RoutenInfo</div>
                        <button class="close-button">&times;</button>
                    </div>
                    <div class="info">
                        <h2>Route-Nr: 18867 <br>
                            Abholungsort:Bölingerstr.70338<br>
                            Ziel: Leonberg Krankenhaus<br>
                            Gäste : 5 </h2><br>

                        <a href="/Route-Anzeige.html">
                            <button class="rzeige"> Route anzeige</button>
                        </a>

                    </div>
                </dialog>


            </div>
        </div>

        <script>

            function openModalNeu(routeID) {
                // const tmp = {
                //     RouteID: routenId,
                //     Datum: new Date().toISOString(),
                //     Guests: [
                //         {Id: 1, Vorname: "Test", Nachname: "Otto", Start: "Wangen", Ziel: "Valhalla"}
                //     ]
                // };
                // Your logic here using the routeID parameter
                $.get(`/routen/${routeID}`, function (data) {
                    const datanew = { Guests: [] , RouteID: routeID , Datum: new Date().toISOString()};
                    let i = 1;
                    for (const entry of data) {
                        datanew.Guests.push({
                            Id: i,
                            Vorname: entry.Vorname,
                            Nachname: entry.Nachname,
                            Startort: entry.Startort,
                            Zielort: entry.Zielort
                        })
                        i++;

                    }
                    console.log(datanew);
                    const modalHtmlContent = generateModal(datanew);
                    $('#modalContainer').html(modalHtmlContent);
                    $('#myModal').show();
                });
            }

            // Function to close the modal
            function closeModalNew() {
                $('#myModal').hide();
            }

            // Event listener for the close button
            $('.close').click(function () {
                closeModalNew();
            });

            // Call this function when you want to open the modal
            // openModal();

            // If you want to close the modal when user clicks anywhere outside of the modal
            $(window).click(function (event) {
                if ($(event.target).is('#myModal')) {
                    closeModalNew();
                }
            });

            $(document).ready(function () {
                $.get("/routen", function (data) {
                    console.log(data);

                    for (const row of data) {
                        console.log("Fahrer:", row["FahrerNachname"]);

                        // <td><button class="press">${row["RouteID"]}</button></td>
                        const tableRow = `<tr>
                        <td><button class="press" onclick="openModalNeu('${row["RouteID"]}')">${row["RouteID"]}</button></td>
                        <td>${row["FahrerNachname"]}</td>
                        <td>${row["FahrzeugMarke"]}</td>
                    </tr>`;
                        $('#routen-tabelle').find('tbody').append(tableRow);
                    }
                })
             
            });

            function generateModal(data) {
                let guestRows = "";
                for (const guest of data.Guests) {
                    guestRows = guestRows + `
                <tr>
                    <td>${guest.Id}</td>
                    <td>${guest["Vorname"]} ${guest["Nachname"]}</td>
                    <td>✓</td>
                </tr>
                <tr>
                    <td>${guest["Startort"]} - ${guest["Zielort"]}</td>
                </tr>`;
                }

                return `
            <div class="modal-content">
            <h2>RouteInfo</h2>
            <div class="field">
                <label>Route:</label>
                <span>${data["RouteID"]}</span>
            </div>
            <div class="field">
                <label>Datum:</label>
                <span>${data["Datum"]}</span>
            </div>
            <div class="field">
                <label>Gäste:</label>
                <span>${data.Guests.length}</span>
            </div>
            <table class="guest-list">
               ${guestRows}
            </table>
            `;
                // <button type="button">Route anzeigen</button>
            }
        </script>

    </div>
</body>

</html>
