/* =========================================================
   KARAOKE ONLINE
   CONTROL 1 + PHONE CONTROL 2
========================================================= */


/* =========================================================
   SONG DATABASE
========================================================= */
const songs = [
    {
        title: "BATANG BATA KA PA",
        artist: "APO HIKING SOCIETY",
        youtube: "KOZ5-FoaTEs"
    },

    {
        title: "BUILD ME UP BUTTERCUP",
        artist: "THE FOUNDATIONS",
        youtube: "NdvQblg9Uqc"
    },

    {
        title: "BURN",
        artist: "USHER",
        youtube: "pr1nFSA4r64"
    },

    {
        title: "BUWAN",
        artist: "JUAN CARLOS",
        youtube: "F9qjC5G9jj8"
    },

    {
        title: "BULOY",
        artist: "PAROKYA NI EDGAR",
        youtube: "vVpd28x7uyA"
    },

    {
        title: "BUKAS NA LANG KITA MAMAHALIN",
        artist: "LANI MISALUCHA",
        youtube: "oE6JwOqvscc"
    },

    {
        title: "BULAG PIPI AT BINGI",
        artist: "FREDDIE AGUILAR",
        youtube: "xbXzMEXD14M"
    },

    {
        title: "BROWN EYES",
        artist: "DESTINY CHILD",
        youtube: "qKRfLCytKe0"
    },

    {
        title: "BRING ME DOWN",
        artist: "CUESHE",
        youtube: "PGsmMBvi4YM"
    },

    {
        title: "BREAK EVEN",
        artist: "THE SCRIPT",
        youtube: "eVktv-LfqYI"
    },

    {
        title: "BORN FOR YOU",
        artist: "DAVID PORMERANZ",
        youtube: "Y6ir5F4y4-Y"
    },

    {
        title: "BOMBASTIC",
        artist: "SHAGGY",
        youtube: "YUYmCyOsh6U"
    },

    {
        title: "BILOG NANAMAN ANG BUWAN",
        artist: "TROPICAL DEPRESSION",
        youtube: "eQpNNcR-yJs"
    },

    {
        title: "BIGLANG LIKO",
        artist: "RON HENLEY",
        youtube: "1-7G-cKtkQA"
    },

    {
        title: "BIGLAAN",
        artist: "6CYCLEMIND",
        youtube: "IAZE8D9VlZA"
    },

    {
        title: "BECAUSE OF YOU",
        artist: "KEITH MARTIN",
        youtube: "Lx_QVGevCv0"
    },

    {
        title: "BOULEVARD",
        artist: "DAN BYRD",
        youtube: "Lx_QVGevCv0"
    },

    {
        title: "BED OF ROSES",
        artist: "BON JOVI",
        youtube: "9F0mAiipcwM"
    },

    {
        title: "BEFORE YOU GO",
        artist: "LEWIS CAPALDI",
        youtube: "FTgvsu5Feho"
    },

    {
        title: "BEFORE I LET YOU GO",
        artist: "FREESTYLE",
        youtube: "KKYDz94UW3o"
    },

    {
        title: "BEAUTIFUL SOUL",
        artist: "JESSE MCCARTNEY",
        youtube: "wMvgH3ysOMs"
    },

    {
        title: "BEAUTY AND THE BEAST",
        artist: "CELINE DION & PEABO",
        youtube: "JzyBZHUuXnY"
    },

    {
        title: "BEAUTIFUL IN WHITE",
        artist: "WESTLIFE",
        youtube: "fZyW-T0w0X4"
    },

    {
        title: "BEAUTIFUL IN MY EYES",
        artist: "JOSHUA KADISON",
        youtube: "LruQapGkZSI"
    },

    {
        title: "BEAUTIFUL GIRLS",
        artist: "SEAN KINGSTON",
        youtube: "h-EJCMxVLMA"
    },

    {
        title: "BEAUTIFUL GIRL",
        artist: "JOSI MARI CHAN",
        youtube: "5EVxgLGKQx8"
    },

    {
        title: "BE MY LADY",
        artist: "MARTIN NIEVERA",
        youtube: "UclCZ6Si7kY"
    },

    {
        title: "BAWAL NA GAMOT",
        artist: "WILLIE GARTE",
        youtube: "j-vA4ty_-sQ"
    },

    {
        title: "BANAL NA ASO SANTONG KABAYO",
        artist: "YANO",
        youtube: "eaJXriSSzts"
    },

    {
        title: "BULONG",
        artist: "DECEMBER AVENUE",
        youtube: "Dr69oG2xVAM"
    },

    {
        title: "BULONG",
        artist: "KITCHIE NADAL",
        youtube: "O2aq65azxpM"
    },

    {
        title: "BUKO",
        artist: "JIREH LIM",
        youtube: "B5W9Guo_6a4"
    },

    {
        title: "BUKSAN MO",
        artist: "Willie Revillame",
        youtube: "9JmLi6NynOQ"
    },

    {
        title: "BASTA'T KASAMA KITA",
        artist: "DINGDONG AVANZADO",
        youtube: "lPT18BOIfqc"
    },

    {
        title: "BEER",
        artist: "ITCHY WORMS",
        youtube: "C8twukz-0g0"
    },

    {
        title: "BASKETBALL",
        artist: "VIVA HOTBABES",
        youtube: "hv7Jvt82clQ"
    },

    {
        title: "BASANG BASA SA ULAN",
        artist: "AEGIS",
        youtube: "hHLKw2SmWz0"
    },

    {
        title: "BANYO QUEEN",
        artist: "ANDREW E",
        youtube: "3N5pMZOsxb8"
    },

    {
        title: "BAKIT NGAYON KA LANG",
        artist: "OGIE ALCASID",
        youtube: "KnSsOL-n9r0"
    },

    {
        title: "BINHI",
        artist: "ARTHUR NERY",
        youtube: "INSsfEyFFZ0"
    },

    {
        title: "BAKIT MAHAL PA RIN KITA",
        artist: "ERIK SANTOS",
        youtube: "P1xOO4G4b5U"
    },

    {
        title: "BAKIT LABIS KITANG MAHAL",
        artist: "BOYFRIENDS",
        youtube: "4DfXGMnl0QA"
    },

    {
        title: "BINALEWALA",
        artist: "MICHAEL DUTCHI",
        youtube: "pgZdn5xbR-A"
    },

    {
        title: "BAKIT KUNG SINO PA",
        artist: "LLOYD UMALI",
        youtube: "7lBSDaXj750"
    },

    {
        title: "BAKIT DI TOTOHANIN",
        artist: "CAROL BANAWA",
        youtube: "2GZyiXPAS3M"
    },

    {
        title: "BAKIT NGA BA MAHAL KITA",
        artist: "ROSELLE NAVA",
        youtube: "GwPgYdRcWUQ"
    },

    {
        title: "BAKIT BA",
        artist: "SIAKOL",
        youtube: "8f5MRaGQZjA"
    },

    {
        title: "BAKIT SINTA",
        artist: "PAUL SAPIERA",
        youtube: "bh-n0Q0nxO0"
    },

    {
        title: "BAKIT",
        artist: "RACHELLE ANN GO",
        youtube: "uShpWfVrDAI"
    },

    {
        title: "BAKIT",
        artist: "AEGIS",
        youtube: "5ZC0uHO8z7U"
    },

    {
        title: "BAKIT",
        artist: "VEHNEE SATURNO",
        youtube: "gM7AgDPMMl8"
    },

    {
        title: "BAKIT",
        artist: "IMELDA PAPIN",
        youtube: "qkHwxpkemS0"
    },

    {
        title: "BAKIT",
        artist: "CUESHE",
        youtube: "p5ifcfXvb8k"
    },

    {
        title: "BAKIT BA IKAW",
        artist: "Michael Pangilinan",
        youtube: "2DyfczmSP1I"
    },

    {
        title: "BAKIT PA BA",
        artist: "Jay R",
        youtube: "-hHonDPzjdM"
    },

    {
        title: "BALIW NA PUSO",
        artist: "Jessa Zaragoza",
        youtube: "ULdQc6ZUtEE"
    },

    {
        title: "BAKIT BA",
        artist: "ERIC SANTOS",
        youtube: "dc16YQ3mscU"
    },

    {
        title: "BYE BYE NA",
        artist: "RICO BLANCO",
        youtube: "Z2g0jlx2IcM"
    },

    {
        title: "BALIW SAYO",
        artist: "JROA",
        youtube: "ZXnzcLWIv2E"
    },

    {
        title: "BYAHE",
        artist: "JROA",
        youtube: "rh5VT3WG2tg"
    },

    {
        title: "BIYAHE",
        artist: "JOSH SANTANA",
        youtube: "RmSbWqqTofg"
    },

    {
        title: "BAGSAKAN",
        artist: "PAROKYA NI EDGAR",
        youtube: "N4EpyDOodOg"
    },

    {
        title: "BECAUSE OF YOU",
        artist: "NE-YO",
        youtube: "f3-BI_-8ALM"
    },

    {
        title: "BECAUSE OF YOU",
        artist: "Kelly Clarkson",
        youtube: "ycEGBMAL8zA"
    },

    {
        title: "BAD LIAR",
        artist: "IMAGINE DRAGONS",
        youtube: "5NnoirGWhPY"
    },

    {
        title: "BACK TO DECEMBER",
        artist: "TAYLOR SWIFT",
        youtube: "AJbcV6GUPro"
    },

    {
        title: "BACK AT ONE",
        artist: "BRIAN MCKNIGHT",
        youtube: "u8tYUcIGlAg"
    },

    {
        title: "AKIN KA NALANG",
        artist: "The Itchyworms",
        youtube: "v8sJfzhnwOM"
    },

    {
        title: "A WHOLE NEW WORLD",
        artist: "ZAYN, ZHAVIA WARD",
        youtube: "ree448dqCNI"
    },

    {
        title: "ANTUKIN",
        artist: "RICO BLANCO",
        youtube: "rPQQq0CEZ0M"
    },

    {
        title: "AYOKO NA SANA",
        artist: "Michael Pangilinan",
        youtube: "pXgQ5LRComU"
    },

    {
        title: "ALL OR NOTHING",
        artist: "O TOWN",
        youtube: "8bGNGbF36wY"
    },

    {
        title: "ALL OF ME",
        artist: "JOHN LEGEND",
        youtube: "e8LksR_zdY8"
    },

    {
        title: "A PERFECT CHRISTMAS",
        artist: "JOSE MARI CHAN",
        youtube: "D4QM2flrXFc"
    },

    {
        title: "Always",
        artist: "Daniel Caesar",
        youtube: "PhNazAWo8K8"
    },

    {
        title: "A SMILE IN YOUR HEART",
        artist: "Ariel Rivera",
        youtube: "auWvT4gVUhw"
    },

    {
        title: "AKING PAGMAMAHAL",
        artist: "Repablikan",
        youtube: "nxaHzEgjsU0"
    },

    {
        title: "AGAINST ALL ODDS",
        artist: "Phil Collins",
        youtube: "BJyUEsNC-_s"
    },

    {
        title: "Awitin Mo, Isasayaw Ko",
        artist: "VST & Company",
        youtube: "woZYQ_QXY0o"
    },

    {
        title: "ARAW GABI",
        artist: "MICHAEL PANGILINAN",
        youtube: "X_U_AnlIkIc"
    },

    {
        title: "APRIL BOY MEDLEY",
        artist: "APRIL BOY",
        youtube: "L2Y5wnhyfNI"
    },

    {
        title: "Anong Nangyari Sa Ating Dalawa",
        artist: "AIZA SIGUERRA",
        youtube: "kQGaVFbD1b0"
    },

    {
        title: "ANGELS BROUGHT ME HERE",
        artist: "Guy Sebastian",
        youtube: "VRs5ZBH2YzM"
    },

    {
        title: "ANGEL",
        artist: "SHAGGY",
        youtube: "GuzktcTTXgY"
    },

    {
        title: "AKALA",
        artist: "PAROKYA NI EDGAR",
        youtube: "JQuy4jr5QqE"
    },

    {
        title: "ANG HULING EL BIMBO",
        artist: "Eraserheads",
        youtube: "1hAmBPNhaFs"
    },

    {
        title: "ANAK",
        artist: "Freddie Aguilar",
        youtube: "v5_CXC8HVzI"
    },

    {
        title: "AKING AMA",
        artist: "Lil' Coli",
        youtube: "jDClKW4Rh4Q"
    },

    {
        title: "Always Be My Baby",
        artist: "David Cook",
        youtube: "zcUz-skZjdQ"
    },

    {
        title: "ALWAYS",
        artist: "Atlantic Starr",
        youtube: "nU6ILDECqwo"
    },

    {
        title: "ALWAYS",
        artist: "Bon Jovi",
        youtube: "zVkP4Qd1S10"
    },

    {
        title: "ALIPIN AKO",
        artist: "Liezel Garcia",
        youtube: "vOGR8oT0dD4"
    },

    {
        title: "ALIPIN",
        artist: "Shamrock",
        youtube: "Ch8WawV8Js0"
    },

    {
        title: "ALE",
        artist: "The Bloomfields",
        youtube: "BAXQW1ZEhWU"
    },

    {
        title: "Ang Tanging Alay Ko",
        artist: "KARAOKE",
        youtube: "P6496CVcfps"
    },

    {
        title: "Ala ala",
        artist: "Mm Madrigal",
        youtube: "k_i6Rctnpls"
    },

    {
        title: "Alaala",
        artist: "Freddie Aguilar",
        youtube: "qRDXGz3MCnk"
    },

    {
        title: "Ako'y Sayo at Ika'y Akin Lamang",
        artist: "IAXE Band",
        youtube: "aPtjHNYmBPs"
    },

    {
        title: "All Star",
        artist: "Smash Mouth",
        youtube: "aBZalv78EcQ"
    },

    {
        title: "All That I Need",
        artist: "Boyzone",
        youtube: "JgJWYTr9znc"
    },

    {
        title: "ALL THE LOVE IN THE WORLD",
        artist: "The Corrs",
        youtube: "MjfEJChi3B4"
    },

    {
        title: "ALL OUT OF LOVE",
        artist: "AIR SUPPLY",
        youtube: "ZpNbrYi1m1s"
    },

    {
        title: "ALL I NEED",
        artist: "shamrock",
        youtube: "dyCaFoJDyJM"
    },

    {
        title: "ALL MY LIFE",
        artist: "America",
        youtube: "IcQ8noPu8hQ"
    },

    {
        title: "ALL I WANT FOR CHRISTMAS",
        artist: "Mariah Carey",
        youtube: "l3iEnBThkIc"
    },

    {
        title: "ALL I WANT",
        artist: "OLIVIA RODRIGO",
        youtube: "FTa598gy9hg"
    },

    {
        title: "ALL I ASK",
        artist: "ADELE",
        youtube: "Y7YaEKYjOTs"
    },

    {
        title: "ALL BY MYSELF",
        artist: "Céline Dion",
        youtube: "c_OZDIhvjJs"
    },

    {
        title: "AAMININ KO",
        artist: "6 Cyclemind",
        youtube: "CCwYXIe-LJw"
    },

    {
        title: "A THOUSAND YEARS",
        artist: "Christina Perri",
        youtube: "UVea7f7tyKg"
    },

    {
        title: "A THOUSAND MILES",
        artist: "Vanessa Carlton",
        youtube: "tT_L8gRvMN4"
    },

    {
        title: "UNWELL",
        artist: "MACTCHBOX TWENTY",
        youtube: "i_nNeeRs8ig"
    },

    {
        title: "YOU'LL BE SAFE HERE",
        artist: "RIVERMAYA",
        youtube: "P4ApYxP0kos"
    },

    {
        title: "UPSIDE DOWN",
        artist: "6CYLEMIND",
        youtube: "H1TAEeO5YlE"
    },

    {
        title: "Heaven Knows",
        artist: "Rick Price",
        youtube: "m7o9fbTsRuc"
    },

    {
        title: "Back to me",
        artist: "Cueshe - Karaoke",
        youtube: "jNYXQLWlk6k"
    },

    {
        title: "24 Hours",
        artist: "Cueshe - Karaoke",
        youtube: "BiKU79XjelQ"
    },

    {
        title: "Stay",
        artist: "Karaoke",
        youtube: "ymalJ5AMH4U"
    },

    {
        title: "Borrowed Time",
        artist: "Karaoke",
        youtube: "feskSn7ZI6Y"
    }
];


/* =========================================================
   GLOBAL STATE
========================================================= */

let currentSong = 0;

let reservedSongs = [];

let youtubePlayer = null;

let pendingSongIndex = null;

let isPlaying = false;

let isPlayerReady = false;

let isChangingSong = false;

let endHandled = false;


/* =========================================================
   REMOTE / PEER STATE
========================================================= */

const urlParams =
    new URLSearchParams(window.location.search);

const remoteRoom =
    urlParams.get("remote");

const isRemote =
    Boolean(remoteRoom);


/* =========================================================
   PEERJS
========================================================= */

let peer = null;

let hostConnection = null;

let remoteConnections = [];


/* =========================================================
   START MODE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        if (isRemote) {

            startRemote();

        } else {

            startHost();

        }

    }
);


/* =========================================================
   HOST START
========================================================= */

function startHost() {

    const hostApp =
        document.getElementById("hostApp");

    const remoteApp =
        document.getElementById("remoteApp");


    if (hostApp) {

        hostApp.style.display =
            "block";

    }


    if (remoteApp) {

        remoteApp.style.display =
            "none";

    }


    startHostPeer();

    renderSongs();

}


/* =========================================================
   REMOTE START
========================================================= */

function startRemote() {

    const hostApp =
        document.getElementById("hostApp");

    const remoteApp =
        document.getElementById("remoteApp");


    if (hostApp) {

        hostApp.style.display =
            "none";

    }


    if (remoteApp) {

        remoteApp.style.display =
            "block";

    }


    startRemotePeer();

}


/* =========================================================
   HOST PEER
========================================================= */

function startHostPeer() {

    peer = new Peer();


    peer.on(
        "open",
        function (id) {

            const code =
                id.substring(
                    Math.max(0, id.length - 8)
                );


            const roomCode =
                document.getElementById(
                    "roomCode"
                );


            if (roomCode) {

                roomCode.textContent =
                    code.toUpperCase();

            }


            const remoteUrl =
                window.location.origin +
                window.location.pathname +
                "?remote=" +
                encodeURIComponent(id);


            const remoteLink =
                document.getElementById(
                    "remoteLink"
                );


            if (remoteLink) {

                remoteLink.textContent =
                    remoteUrl;

            }


            generateQRCode(remoteUrl);


            const connectionStatus =
                document.getElementById(
                    "connectionStatus"
                );


            if (connectionStatus) {

                connectionStatus.textContent =
                    "🟢 Room Ready";

            }

        }
    );


    peer.on(
        "connection",
        function (connection) {

            remoteConnections.push(
                connection
            );


            const phoneStatus =
                document.getElementById(
                    "phoneStatus"
                );


            if (phoneStatus) {

                phoneStatus.textContent =
                    "📱 Phone Connected";

            }


            connection.on(
                "open",
                function () {

                    sendState(
                        connection
                    );

                }
            );


            connection.on(
                "data",
                function (data) {

                    handleRemoteCommand(
                        data
                    );

                }
            );


            connection.on(
                "close",
                function () {

                    remoteConnections =
                        remoteConnections.filter(
                            c => c !== connection
                        );


                    if (
                        remoteConnections.length === 0
                    ) {

                        if (phoneStatus) {

                            phoneStatus.textContent =
                                "📱 No phone connected";

                        }

                    }

                }
            );

        }
    );


    peer.on(
        "error",
        function (error) {

            console.error(
                "Peer error:",
                error
            );


            const connectionStatus =
                document.getElementById(
                    "connectionStatus"
                );


            if (connectionStatus) {

                connectionStatus.textContent =
                    "🔴 Connection Error";

            }

        }
    );

}


/* =========================================================
   REMOTE PEER
========================================================= */

function startRemotePeer() {

    peer = new Peer();


    peer.on(
        "open",
        function () {

            hostConnection =
                peer.connect(
                    remoteRoom
                );


            hostConnection.on(
                "open",
                function () {

                    const status =
                        document.getElementById(
                            "remoteConnectionStatus"
                        );


                    if (status) {

                        status.textContent =
                            "🟢 Connected";

                    }

                }
            );


            hostConnection.on(
                "data",
                function (data) {

                    handleHostState(
                        data
                    );

                }
            );


            hostConnection.on(
                "close",
                function () {

                    const status =
                        document.getElementById(
                            "remoteConnectionStatus"
                        );


                    if (status) {

                        status.textContent =
                            "🔴 Disconnected";

                    }

                }
            );


            hostConnection.on(
                "error",
                function () {

                    const status =
                        document.getElementById(
                            "remoteConnectionStatus"
                        );


                    if (status) {

                        status.textContent =
                            "🔴 Connection Error";

                    }

                }
            );

        }
    );


    peer.on(
        "error",
        function (error) {

            console.error(
                "Remote Peer Error:",
                error
            );


            const status =
                document.getElementById(
                    "remoteConnectionStatus"
                );


            if (status) {

                status.textContent =
                    "🔴 Connection Failed";

            }

        }
    );

}


/* =========================================================
   GENERATE QR
========================================================= */

function generateQRCode(url) {

    const qr =
        document.getElementById(
            "qrcode"
        );


    if (!qr) {
        return;
    }


    qr.innerHTML = "";


    if (
        typeof QRCode !== "undefined"
    ) {

        new QRCode(
            qr,
            {
                text: url,
                width: 150,
                height: 150
            }
        );

    }

}


/* =========================================================
   COPY REMOTE LINK
========================================================= */

function copyRemoteLink() {

    const element =
        document.getElementById(
            "remoteLink"
        );


    if (!element) {
        return;
    }


    const link =
        element.textContent;


    if (
        !link ||
        link === "Preparing remote..."
    ) {

        return;

    }


    navigator.clipboard
        .writeText(link)
        .then(
            function () {

                alert(
                    "📱 Remote link copied!"
                );

            }
        );

}


/* =========================================================
   SEND STATE TO ONE REMOTE
========================================================= */

function sendState(connection) {

    if (
        !connection ||
        !connection.open
    ) {

        return;

    }


    connection.send({

        type: "state",

        currentSong:
            currentSong,

        reservedSongs:
            [...reservedSongs],

        isPlaying:
            isPlaying

    });

}


/* =========================================================
   BROADCAST STATE
========================================================= */

function broadcastState() {

    if (isRemote) {
        return;
    }


    remoteConnections.forEach(
        function (connection) {

            sendState(
                connection
            );

        }
    );

}


/* =========================================================
   HANDLE REMOTE COMMAND
========================================================= */

function handleRemoteCommand(data) {

    if (!data) {
        return;
    }


    switch (data.type) {

        case "reserve":

            reserveSong(
                data.index
            );

            break;


        case "removeReserve":

            removeReserve(
                data.index
            );

            break;


        case "next":

            nextSong();

            break;


        case "previous":

            previousSong();

            break;


        case "toggle":

            togglePlay();

            break;


        case "load":

            loadSong(
                data.index
            );

            break;

    }

}


/* =========================================================
   HANDLE HOST STATE
========================================================= */

function handleHostState(data) {

    if (
        !data ||
        data.type !== "state"
    ) {

        return;

    }


    currentSong =
        data.currentSong;


    reservedSongs =
        data.reservedSongs || [];


    isPlaying =
        data.isPlaying;


    const song =
        songs[currentSong];


    if (!song) {
        return;
    }


    const title =
        document.getElementById(
            "remoteSongTitle"
        );


    const artist =
        document.getElementById(
            "remoteArtist"
        );


    if (title) {

        title.textContent =
            song.title;

    }


    if (artist) {

        artist.textContent =
            song.artist;

    }


    renderRemoteSongs();

    renderRemoteQueue();

}


/* =========================================================
   REMOTE COMMAND
========================================================= */

function remoteCommand(command) {

    if (
        !hostConnection ||
        !hostConnection.open
    ) {

        return;

    }


    hostConnection.send({

        type: command

    });

}


/* =========================================================
   REMOTE RESERVE
========================================================= */

function remoteReserve(index) {

    if (
        !hostConnection ||
        !hostConnection.open
    ) {

        return;

    }


    hostConnection.send({

        type: "reserve",

        index: index

    });

}


/* =========================================================
   REMOTE REMOVE
========================================================= */

function remoteRemoveReserve(index) {

    if (
        !hostConnection ||
        !hostConnection.open
    ) {

        return;

    }


    hostConnection.send({

        type: "removeReserve",

        index: index

    });

}


/* =========================================================
   LOAD SONG
========================================================= */

function loadSong(index) {

    if (!songs.length) {
        return;
    }


    if (
        index < 0
    ) {

        index =
            songs.length - 1;

    }


    if (
        index >= songs.length
    ) {

        index = 0;

    }


    const song =
        songs[index];


    if (!song) {
        return;
    }


    currentSong =
        index;


    pendingSongIndex =
        index;


    endHandled =
        false;


    isChangingSong =
        true;


    const title =
        document.getElementById(
            "songTitle"
        );


    const artist =
        document.getElementById(
            "artist"
        );


    if (title) {

        title.textContent =
            song.title;

    }


    if (artist) {

        artist.textContent =
            song.artist;

    }


    renderSongs();


    broadcastState();


    /*
       PLAYER NOT READY YET
    */

    if (
        !youtubePlayer ||
        !isPlayerReady
    ) {

        isPlaying = false;

        broadcastState();

        return;

    }


    try {

        youtubePlayer.loadVideoById(
            song.youtube
        );

    } catch (error) {

        console.error(
            "YouTube load error:",
            error
        );

    }


    isPlaying = false;

    isChangingSong =
        false;


    broadcastState();

}


/* =========================================================
   YOUTUBE PLAYER READY
========================================================= */

function onYouTubePlayerReady(event) {

    youtubePlayer =
        event.target;


    isPlayerReady =
        true;


    let index =
        currentSong;


    if (
        pendingSongIndex !== null
    ) {

        index =
            pendingSongIndex;

    }


    pendingSongIndex =
        null;


    const song =
        songs[index];


    if (!song) {
        return;
    }


    currentSong =
        index;


    endHandled =
        false;


    try {

        event.target.cueVideoById(
            song.youtube
        );

    } catch (error) {

        console.error(
            "YouTube ready error:",
            error
        );

    }


    const title =
        document.getElementById(
            "songTitle"
        );


    const artist =
        document.getElementById(
            "artist"
        );


    if (title) {

        title.textContent =
            song.title;

    }


    if (artist) {

        artist.textContent =
            song.artist;

    }


    renderSongs();


    isPlaying =
        false;


    isChangingSong =
        false;


    broadcastState();

}


/* =========================================================
   YOUTUBE STATE
========================================================= */

function onYouTubePlayerStateChange(event) {

    if (
        !window.YT ||
        !YT.PlayerState
    ) {

        return;

    }


    if (
        event.data ===
        YT.PlayerState.PLAYING
    ) {

        isPlaying =
            true;


        endHandled =
            false;


        isChangingSong =
            false;


        broadcastState();

        return;

    }


    if (
        event.data ===
        YT.PlayerState.PAUSED
    ) {

        isPlaying =
            false;


        broadcastState();

        return;

    }


    if (
        event.data ===
        YT.PlayerState.ENDED
    ) {

        /*
           IMPORTANT:
           Prevent duplicate nextSong()
           calls from YouTube.
        */

        if (
            endHandled
        ) {

            return;

        }


        endHandled =
            true;


        isPlaying =
            false;


        broadcastState();


        /*
           Small delay so YouTube can
           completely finish the old video
           before loading the next one.
        */

        setTimeout(
            function () {

                if (
                    !isRemote
                ) {

                    nextSong();

                }

            },
            500
        );

    }

}


/* =========================================================
   CREATE YOUTUBE PLAYER
========================================================= */

function createYouTubePlayer() {

    if (
        isRemote
    ) {

        return;

    }


    if (
        typeof YT === "undefined" ||
        typeof YT.Player === "undefined"
    ) {

        console.error(
            "YouTube API is not ready."
        );

        return;

    }


    if (
        youtubePlayer
    ) {

        return;

    }


    const playerElement =
        document.getElementById(
            "youtubePlayer"
        );


    if (!playerElement) {

        console.error(
            "youtubePlayer element not found."
        );

        return;

    }


    youtubePlayer =
        new YT.Player(
            "youtubePlayer",
            {

                videoId:
                    songs[currentSong].youtube,

                playerVars: {

                    autoplay: 0,

                    rel: 0,

                    playsinline: 1

                },

                events: {

                    onReady:
                        onYouTubePlayerReady,

                    onStateChange:
                        onYouTubePlayerStateChange

                }

            }
        );

}


/* =========================================================
   NEXT
========================================================= */

function nextSong() {

    if (!songs.length) {
        return;
    }


    /*
       Stop duplicate next calls.
    */

    if (
        isChangingSong
    ) {

        return;

    }


    endHandled =
        false;


    /*
       PRIORITY:
       RESERVED SONG FIRST
    */

    if (
        reservedSongs.length > 0
    ) {

        const nextIndex =
            reservedSongs.shift();


        renderSongs();

        broadcastState();


        loadSong(
            nextIndex
        );


        return;

    }


    /*
       NO RESERVED SONG
       → NEXT SONG IN DATABASE
    */

    let nextIndex =
        currentSong + 1;


    if (
        nextIndex >= songs.length
    ) {

        nextIndex =
            0;

    }


    loadSong(
        nextIndex
    );

}


/* =========================================================
   PREVIOUS
========================================================= */

function previousSong() {

    if (!songs.length) {
        return;
    }


    let previousIndex =
        currentSong - 1;


    if (
        previousIndex < 0
    ) {

        previousIndex =
            songs.length - 1;

    }


    loadSong(
        previousIndex
    );

}


/* =========================================================
   PLAY / PAUSE
========================================================= */

function togglePlay() {

    if (
        !youtubePlayer ||
        !isPlayerReady
    ) {

        return;

    }


    const state =
        youtubePlayer.getPlayerState();


    if (
        state ===
        YT.PlayerState.PLAYING
    ) {

        youtubePlayer.pauseVideo();

    }

    else {

        youtubePlayer.playVideo();

    }

}


/* =========================================================
   RESERVE
========================================================= */

function reserveSong(index) {

    if (
        index < 0 ||
        index >= songs.length
    ) {

        return;

    }


    if (
        index === currentSong
    ) {

        return;

    }


    if (
        reservedSongs.includes(index)
    ) {

        return;

    }


    reservedSongs.push(
        index
    );


    renderSongs();

    broadcastState();

}


/* =========================================================
   REMOVE RESERVE
========================================================= */

function removeReserve(index) {

    reservedSongs =
        reservedSongs.filter(
            songIndex =>
                songIndex !== index
        );


    renderSongs();

    broadcastState();

}


/* =========================================================
   SEARCH HOST
========================================================= */

function searchSongs() {

    const input =
        document.getElementById(
            "search"
        );


    if (!input) {
        return;
    }


    const search =
        input.value
            .toLowerCase()
            .trim();


    renderSongs(
        search
    );

}


/* =========================================================
   RENDER HOST SONGS
========================================================= */

function renderSongs(
    search = ""
) {

    const list =
        document.getElementById(
            "songList"
        );


    if (!list) {
        return;
    }


    list.innerHTML = "";


    songs.forEach(
        function (song, index) {

            if (
                !song ||
                !song.title ||
                !song.artist
            ) {

                return;

            }


            const title =
                String(
                    song.title
                ).toLowerCase();


            const artist =
                String(
                    song.artist
                ).toLowerCase();


            if (
                !title.includes(search) &&
                !artist.includes(search)
            ) {

                return;

            }


            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "song";


            /* CURRENT */

            if (
                index === currentSong
            ) {

                button.classList.add(
                    "playing"
                );


                button.innerHTML = `

                    🎤 ${song.title}

                    <span>
                        ▶ NOW PLAYING
                    </span>

                `;


                button.onclick =
                    function () {

                        loadSong(
                            index
                        );

                    };


            }


            /* RESERVED */

            else if (
                reservedSongs.includes(
                    index
                )
            ) {

                const reserveNumber =
                    reservedSongs.indexOf(
                        index
                    ) + 1;


                button.classList.add(
                    "reserved"
                );


                button.innerHTML = `

                    🎵 ${song.title}

                    <span>
                        📌 RESERVED #${reserveNumber}
                    </span>

                `;


                button.onclick =
                    function () {

                        removeReserve(
                            index
                        );

                    };


            }


            /* NORMAL */

            else {

                button.innerHTML = `

                    🎵 ${song.title}

                    <span>
                        ${song.artist}
                    </span>

                `;


                button.onclick =
                    function () {

                        reserveSong(
                            index
                        );

                    };

            }


            list.appendChild(
                button
            );

        }
    );

}


/* =========================================================
   REMOTE SEARCH
========================================================= */

function searchRemoteSongs() {

    const input =
        document.getElementById(
            "remoteSearch"
        );


    if (!input) {
        return;
    }


    const search =
        input.value
            .toLowerCase()
            .trim();


    renderRemoteSongs(
        search
    );

}


/* =========================================================
   RENDER REMOTE SONGS
========================================================= */

function renderRemoteSongs(
    search = ""
) {

    const list =
        document.getElementById(
            "remoteSongList"
        );


    if (!list) {
        return;
    }


    list.innerHTML = "";


    songs.forEach(
        function (song, index) {

            if (
                !song ||
                !song.title ||
                !song.artist
            ) {

                return;

            }


            const title =
                String(
                    song.title
                ).toLowerCase();


            const artist =
                String(
                    song.artist
                ).toLowerCase();


            if (
                !title.includes(search) &&
                !artist.includes(search)
            ) {

                return;

            }


            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "phone-song";


            if (
                index === currentSong
            ) {

                button.classList.add(
                    "playing"
                );


                button.innerHTML = `

                    🎤 ${song.title}

                    <span>
                        ▶ NOW PLAYING
                    </span>

                `;

            }

            else if (
                reservedSongs.includes(
                    index
                )
            ) {

                const number =
                    reservedSongs.indexOf(
                        index
                    ) + 1;


                button.classList.add(
                    "reserved"
                );


                button.innerHTML = `

                    🎵 ${song.title}

                    <span>
                        📌 RESERVED #${number}
                        • Tap to remove
                    </span>

                `;


                button.onclick =
                    function () {

                        remoteRemoveReserve(
                            index
                        );

                    };

            }

            else {

                button.innerHTML = `

                    🎵 ${song.title}

                    <span>
                        ${song.artist}
                        • Tap to reserve
                    </span>

                `;


                button.onclick =
                    function () {

                        remoteReserve(
                            index
                        );

                    };

            }


            list.appendChild(
                button
            );

        }
    );

}


/* =========================================================
   REMOTE QUEUE
========================================================= */

function renderRemoteQueue() {

    const queue =
        document.getElementById(
            "remoteQueue"
        );


    if (!queue) {
        return;
    }


    queue.innerHTML = "";


    if (
        reservedSongs.length === 0
    ) {

        queue.textContent =
            "No reserved songs";

        return;

    }


    reservedSongs.forEach(
        function (index, position) {

            const song =
                songs[index];


            if (!song) {
                return;
            }


            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "queue-item";


            item.innerHTML = `

                <strong>
                    #${position + 1}
                </strong>

                <span>
                    ${song.title}
                </span>

                <button
                    onclick="remoteRemoveReserve(${index})">
                    ✕
                </button>

            `;


            queue.appendChild(
                item
            );

        }
    );

}


/* =========================================================
   YOUTUBE CALLBACK
========================================================= */

window.onYouTubeIframeAPIReady =
    function () {

        if (
            !isRemote
        ) {

            createYouTubePlayer();

        }

    };