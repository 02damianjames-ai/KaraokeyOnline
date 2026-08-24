/* =========================================================
   KARAOKE ONLINE
   CONTROL 1 + PHONE CONTROL 2

   IMPROVED:
   - Automatic PeerJS reconnect
   - Safari / iPhone background recovery
   - Wi-Fi recovery
   - Prevent duplicate connections
   - Automatic state sync after reconnect
========================================================= */


/* =========================================================
   SONG DATABASE
========================================================= */

const songs = [
    {
        title: "DUKHA",
        artist: "AEGIS",
        youtube: "EKD8fd5eMrk"
    },

    {
        title: "DREAM GIEL",
        artist: "KOLOHE KAI",
        youtube: "EIe9YEOwpvA"
    },

    {
        title: "DRAG ME DOWN",
        artist: "ONE DIRECTION",
        youtube: "udidLdWZ_64"
    },

    {
        title: "DOTA O AKO",
        artist: "AIKEE FT SABRINA",
        youtube: "k6v8zYeaZD4"
    },

    {
        title: "DONT MATTER (TAGALOG)",
        artist: "TAGALOG",
        youtube: "O2Dr-s_EbyA"
    },

    {
        title: "DONT MATTER",
        artist: "AKON",
        youtube: "IXV_jiks3Mw"
    },

    {
        title: "DONT LET ME DOWN",
        artist: "THE CHAINSMOKERS",
        youtube: "Sb3dbE_vqhc"
    },

    {
        title: "DONT LET ME DOWN",
        artist: "THE BEATLES",
        youtube: "cbxuN_v8D3Y"
    },

    {
        title: "DONT STOP BELIEVIN",
        artist: "JOURNEY",
        youtube: "VzuzYFCPJgc"
    },

    {
        title: "DROWNING",
        artist: "BACKSTREET BOYS",
        youtube: "3d_IlZQsXn4"
    },

    {
        title: "DONT KNOW WHAT TO SAY",
        artist: "RIC SEGRETO",
        youtube: "nxtzuzmwb7M"
    },

    {
        title: "DOMINO",
        artist: "JESSIE J",
        youtube: "14WsRIy4XM8"
    },

    {
        title: "DO I HAVE TO CRY FOR YOU",
        artist: "NICK CARTER",
        youtube: "_vByAXKI4Fg"
    },

    {
        title: "DIWATA",
        artist: "ABRA FT CHITO MIRANDA",
        youtube: "yvnRmAJh5Po"
    },

    {
        title: "DIVE",
        artist: "ED SHEERAN",
        youtube: "rtKW1dNKRog"
    },

    {
        title: "DITO SA ISANG TABI",
        artist: "JESSA ZARAGOZA",
        youtube: "aMDAzXAr0cA"
    },

    {
        title: "DITO KA LANG",
        artist: "MOIRA DELA TORRE",
        youtube: "nJEdf5DBAOY"
    },

    {
        title: "DI KO KAYA",
        artist: "ERIC SANTOS",
        youtube: "B5fpuihgHp4"
    },

    {
        title: "DI LANG IKAW",
        artist: "JURIS",
        youtube: "_mFi2XaxmGQ"
    },

    {
        title: "DI KO KAYANG TANGGAPIN",
        artist: "APRIL BOY REGINO",
        youtube: "4P87RbwbAG0"
    },

    {
        title: "DI BALE NALANG",
        artist: "JERICHO ROSALES",
        youtube: "v3I717GTrRs"
    },

    {
        title: "DI AKO F*CKBOY",
        artist: "JROA",
        youtube: "PbPzyFR3-0s"
    },

    {
        title: "DESTINY",
        artist: "JIM BRICKMAN",
        youtube: "LY6P-QmNibI"
    },

    {
        title: "DESPACITO",
        artist: "LUIS FONSI",
        youtube: "Ebk8JE0TK28"
    },

    {
        title: "DEMONS",
        artist: "IMAGINE DRAGONS",
        youtube: "1-bk1KmwsqE"
    },

    {
        title: "DAYANG DAYANG",
        artist: "BUKROS SINGERS",
        youtube: "0thFTwg76ZU"
    },

    {
        title: "DATI PA",
        artist: "AIZA SEGUERRA",
        youtube: "0BkfhxbQt4I"
    },

    {
        title: "DATING TAYO",
        artist: "TJ MONTERDE",
        youtube: "DcEI2aEokks"
    },

    {
        title: "DATI",
        artist: "SAM CONCEPCION",
        youtube: "8y5AMt7TZT8"
    },

    {
        title: "DANCING ONY MY OWN",
        artist: "CALUMM SCOTT",
        youtube: "j7picn_454E"
    },

    {
        title: "DANCING QUEEN",
        artist: "ABBA",
        youtube: "qjMSGIfB1j8"
    },

    {
        title: "DANCE WITH MY FATHER",
        artist: "LUTHER VANDROSS",
        youtube: "-l24u_d_OJk"
    },

    {
        title: "DAHIL TANGING IKAW",
        artist: "JAYA",
        youtube: "nK9i8HC_1Sc"
    },

    {
        title: "DAHIL SAYO",
        artist: "INIGO PASCUAL",
        youtube: "6tV-LQqgjR0"
    },

    {
        title: "DAHIL MAHAL KITA",
        artist: "BOYFRIENDS",
        youtube: "krDW47ggmaM"
    },

    {
        title: "DAHIL MAHAL NA MAHAL KITA",
        artist: "ROSELLE NAVA",
        youtube: "ezOYRO8jI-Y"
    },

    {
        title: "DAHIL IKAW",
        artist: "TRUE FAITH",
        youtube: "jiZnJYJ0pAM"
    },

    {
        title: "DAHAN",
        artist: "DECEMBER AVENUE",
        youtube: "D6l5o_XjfmM"
    },

    {
        title: "DAHAN DAHAN",
        artist: "MAJA SALVADOR",
        youtube: "S6JS5GFC0D4"
    },

    {
        title: "DADALHIN",
        artist: "REGINE VELASQUEZ",
        youtube: "BohBUy9a6c0"
    },

    {
        title: "CRAZY FOR YOU",
        artist: "SPONG COLA",
        youtube: "iufUQWidHM0"
    },

    {
        title: "COUNTING STARS",
        artist: "ONE REPUBLIC",
        youtube: "PBn0A4kD71o"
    },

    {
        title: "COUNT ON YOU",
        artist: "TOMMY SHAW",
        youtube: "XGB8gmhwWzU"
    },

    {
        title: "COUNT ON ME",
        artist: "BRUNO MARS",
        youtube: "DC3LY7K7WOI"
    },

    {
        title: "ALWAYS",
        artist: "MARCO SISON",
        youtube: "9LEeveU5BBo"
    },

    {
        title: "COME ON IN OUT OF THE RAIN",
        artist: "SHERYN REGIS",
        youtube: "Lm_lhEoH76c"
    },

    {
        title: "COOL KA LANG",
        artist: "PRETTIER THAN PINK",
        youtube: "NPioeQYlGeY"
    },

    {
        title: "COOL DOWN",
        artist: "KOLOHE KAI",
        youtube: "TrMwx641o-c"
    },

    {
        title: "COLLIDE",
        artist: "HOWIE DAY",
        youtube: "GLcJfDaIBSA"
    },

    {
        title: "COME WHAT MAY",
        artist: "AIR SUPPLY",
        youtube: "y5LtVfddlCQ"
    },

    {
        title: "CLOSER YOU AND I",
        artist: "GINO PADILLA",
        youtube: "pvgScUhloHM"
    },

    {
        title: "CLOSE TO YOU",
        artist: "THE CARPENTERS",
        youtube: "kWTCtLNLAVU"
    },

    {
        title: "CHRISTMAS IN OUR HEARTS",
        artist: "JOSE MARIE CHAN",
        youtube: "In2oG-kAyiw"
    },

    {
        title: "CHINITO",
        artist: "YENG CONSTANTINO",
        youtube: "tqaHBaVG6XU"
    },

    {
        title: "CHASING PAVEMENTS",
        artist: "ADELE",
        youtube: "igwAJdMbFAQ"
    },

    {
        title: "CHANGES IN MY LIFE",
        artist: "MARK SHERMAN",
        youtube: "0pPTVakg5Hs"
    },

    {
        title: "CANT TAKE MY EYES OFF YOU",
        artist: "MORTEN HARKET",
        youtube: "rMH45OMIjBE"
    },

    {
        title: "CHAMPAGNE SUPERNOVA",
        artist: "OASIS",
        youtube: "U_ojfis9lYw"
    },

    {
        title: "CAN YOU FEEL THE LOVE TONIGHT",
        artist: "ELTON JOHN",
        youtube: "8SdNqJ0M6kE"
    },

    {
        title: "CREEP",
        artist: "RADIOHEAD",
        youtube: "8mK_remhVlM"
    },

    {
        title: "CALIFORNIA KING BED",
        artist: "RIHANNA",
        youtube: "8NXGzWPGOwk"
    },

    {
        title: "BLACK MAGIC",
        artist: "LITTLE MIX",
        youtube: "uU1C2oJRWEE"
    },

    {
        title: "ALL I EVER NEED",
        artist: "AUSTIN MAHONE",
        youtube: "Wg2no0A8EqQ"
    },

    {
        title: "BALANG ARAW",
        artist: "I BELONG TO THE ZOO",
        youtube: "hiEaNwg7Fjw"
    },

    {
        title: "BECAUSE YOU LOVED ME",
        artist: "CELINE DION",
        youtube: "XP1W7CTdwCs"
    },

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
        youtube: "ObfXWNaLkfI"
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
    new URLSearchParams(
        window.location.search
    );

const remoteRoom =
    urlParams.get("remote");

const isRemote =
    Boolean(remoteRoom);


/* =========================================================
   PEERJS STATE
========================================================= */

let peer = null;

let hostConnection = null;

let remoteConnections = [];

let remoteReconnectTimer = null;

let remoteReconnectAttempts = 0;

let remoteConnecting = false;

let peerStarting = false;

let pageIsVisible = true;


/* =========================================================
   CONNECTION SETTINGS
========================================================= */

const RECONNECT_BASE_DELAY = 1000;

const RECONNECT_MAX_DELAY = 10000;


/* =========================================================
   START MODE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        pageIsVisible =
            !document.hidden;


        if (isRemote) {

            startRemote();

        } else {

            startHost();

        }

    }
);


/* =========================================================
   PAGE VISIBILITY
========================================================= */

document.addEventListener(
    "visibilitychange",
    function () {

        pageIsVisible =
            !document.hidden;


        if (!isRemote) {
            return;
        }


        if (!document.hidden) {

            console.log(
                "📱 Remote page visible - checking connection..."
            );


            reconnectRemoteImmediately();

        }

    }
);


/* =========================================================
   SAFARI / IOS PAGESHOW
========================================================= */

window.addEventListener(
    "pageshow",
    function () {

        if (!isRemote) {
            return;
        }


        console.log(
            "📱 pageshow - checking remote connection..."
        );


        reconnectRemoteImmediately();

    }
);


/* =========================================================
   SAFARI / IOS PAGE FOCUS
========================================================= */

window.addEventListener(
    "focus",
    function () {

        if (!isRemote) {
            return;
        }


        reconnectRemoteImmediately();

    }
);


/* =========================================================
   NETWORK ONLINE
========================================================= */

window.addEventListener(
    "online",
    function () {

        console.log(
            "📶 Network online - reconnecting..."
        );


        if (isRemote) {

            reconnectRemoteImmediately();

        }

    }
);


/* =========================================================
   NETWORK OFFLINE
========================================================= */

window.addEventListener(
    "offline",
    function () {

        console.log(
            "📴 Network offline"
        );


        if (isRemote) {

            updateRemoteStatus(
                "🔴 Offline"
            );

        }

    }
);


/* =========================================================
   HOST START
========================================================= */

function startHost() {

    const hostApp =
        document.getElementById(
            "hostApp"
        );


    const remoteApp =
        document.getElementById(
            "remoteApp"
        );


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
        document.getElementById(
            "hostApp"
        );


    const remoteApp =
        document.getElementById(
            "remoteApp"
        );


    if (hostApp) {

        hostApp.style.display =
            "none";

    }


    if (remoteApp) {

        remoteApp.style.display =
            "block";

    }


    updateRemoteStatus(
        "🟡 Connecting..."
    );


    startRemotePeer();

}


/* =========================================================
   UPDATE REMOTE STATUS
========================================================= */

function updateRemoteStatus(
    text
) {

    const status =
        document.getElementById(
            "remoteConnectionStatus"
        );


    if (status) {

        status.textContent =
            text;

    }

}


/* =========================================================
   HOST PEER
========================================================= */

function startHostPeer() {

    if (peer) {

        try {

            if (
                !peer.destroyed
            ) {

                return;

            }

        } catch (error) {

            console.error(
                "Host peer check error:",
                error
            );

        }

    }


    peer =
        new Peer();


    peer.on(
        "open",
        function (id) {

            console.log(
                "🟢 Host Peer opened:",
                id
            );


            const code =
                id.substring(
                    Math.max(
                        0,
                        id.length - 8
                    )
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
                encodeURIComponent(
                    id
                );


            const remoteLink =
                document.getElementById(
                    "remoteLink"
                );


            if (remoteLink) {

                remoteLink.textContent =
                    remoteUrl;

            }


            generateQRCode(
                remoteUrl
            );


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


    /* =====================================================
       HOST RECEIVES PHONE
    ===================================================== */

    peer.on(
        "connection",
        function (connection) {

            console.log(
                "📱 Incoming phone connection"
            );


            /*
               Avoid duplicate connection object.
            */

            if (
                remoteConnections.includes(
                    connection
                )
            ) {

                return;

            }


            remoteConnections.push(
                connection
            );


            const phoneStatus =
                document.getElementById(
                    "phoneStatus"
                );


            if (phoneStatus) {

                phoneStatus.textContent =
                    "📱 Phone Connecting...";

            }


            connection.on(
                "open",
                function () {

                    console.log(
                        "🟢 Phone connected to host"
                    );


                    if (phoneStatus) {

                        phoneStatus.textContent =
                            "📱 Phone Connected";

                    }


                    /*
                       IMPORTANT:
                       Send latest state immediately.
                    */

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

                    console.log(
                        "📴 Phone connection closed"
                    );


                    removeHostConnection(
                        connection
                    );

                }
            );


            connection.on(
                "error",
                function (error) {

                    console.error(
                        "Phone connection error:",
                        error
                    );

                }
            );

        }
    );


    /* =====================================================
       HOST PEER ERROR
    ===================================================== */

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


    /* =====================================================
       HOST PEER DISCONNECTED
    ===================================================== */

    peer.on(
        "disconnected",
        function () {

            console.log(
                "🔴 Host Peer disconnected"
            );


            const connectionStatus =
                document.getElementById(
                    "connectionStatus"
                );


            if (connectionStatus) {

                connectionStatus.textContent =
                    "🟡 Reconnecting...";

            }


            /*
               PeerJS can reconnect the same Peer.
            */

            setTimeout(
                function () {

                    if (
                        peer &&
                        !peer.destroyed &&
                        !peer.open
                    ) {

                        try {

                            peer.reconnect();

                        } catch (error) {

                            console.error(
                                "Host reconnect error:",
                                error
                            );

                        }

                    }

                },
                1000
            );

        }
    );


    /* =====================================================
       HOST PEER CLOSED
    ===================================================== */

    peer.on(
        "close",
        function () {

            console.log(
                "🔴 Host Peer closed"
            );


            peer = null;

        }
    );

}


/* =========================================================
   REMOVE HOST CONNECTION
========================================================= */

function removeHostConnection(
    connection
) {

    remoteConnections =
        remoteConnections.filter(
            function (item) {

                return item !== connection;

            }
        );


    const phoneStatus =
        document.getElementById(
            "phoneStatus"
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


/* =========================================================
   REMOTE PEER START
========================================================= */

function startRemotePeer() {

    if (
        !remoteRoom
    ) {

        updateRemoteStatus(
            "🔴 No room"
        );

        return;

    }


    /*
       Prevent duplicate Peer creation.
    */

    if (
        peerStarting
    ) {

        return;

    }


    if (
        peer &&
        !peer.destroyed
    ) {

        /*
           Peer exists.
           Just make sure connection exists.
        */

        if (
            peer.open
        ) {

            connectToHost();

        }

        else {

            updateRemoteStatus(
                "🟡 Connecting..."
            );

        }


        return;

    }


    peerStarting =
        true;


    updateRemoteStatus(
        "🟡 Connecting..."
    );


    console.log(
        "📱 Creating remote Peer..."
    );


    peer =
        new Peer();


    /* =====================================================
       REMOTE PEER OPEN
    ===================================================== */

    peer.on(
        "open",
        function (id) {

            console.log(
                "🟢 Remote Peer opened:",
                id
            );


            peerStarting =
                false;


            remoteReconnectAttempts =
                0;


            connectToHost();

        }
    );


    /* =====================================================
       REMOTE PEER ERROR
    ===================================================== */

    peer.on(
        "error",
        function (error) {

            console.error(
                "Remote Peer Error:",
                error
            );


            peerStarting =
                false;


            /*
               If peer itself is still alive,
               don't immediately destroy it.
            */

            if (
                error &&
                error.type ===
                "peer-unavailable"
            ) {

                updateRemoteStatus(
                    "🟡 Host unavailable - retrying..."
                );

                scheduleRemoteReconnect();

                return;

            }


            updateRemoteStatus(
                "🟡 Connection retry..."
            );


            scheduleRemoteReconnect();

        }
    );


    /* =====================================================
       REMOTE PEER DISCONNECTED
    ===================================================== */

    peer.on(
        "disconnected",
        function () {

            console.log(
                "🔴 Remote Peer disconnected"
            );


            updateRemoteStatus(
                "🟡 Reconnecting..."
            );


            /*
               Try PeerJS reconnect first.
            */

            try {

                if (
                    peer &&
                    !peer.destroyed
                ) {

                    peer.reconnect();

                }

            } catch (error) {

                console.error(
                    "Peer reconnect error:",
                    error
                );

            }


            /*
               Also check the host connection.
            */

            scheduleRemoteReconnect();

        }
    );


    /* =====================================================
       REMOTE PEER CLOSED
    ===================================================== */

    peer.on(
        "close",
        function () {

            console.log(
                "🔴 Remote Peer closed"
            );


            peer =
                null;


            hostConnection =
                null;


            peerStarting =
                false;


            updateRemoteStatus(
                "🟡 Reconnecting..."
            );


            scheduleRemoteReconnect();

        }
    );

}


/* =========================================================
   CONNECT TO HOST
========================================================= */

function connectToHost() {

    if (
        !isRemote
    ) {

        return;

    }


    if (
        !peer ||
        peer.destroyed
    ) {

        startRemotePeer();

        return;

    }


    if (
        !peer.open
    ) {

        return;

    }


    /*
       Already connected.
    */

    if (
        hostConnection &&
        hostConnection.open
    ) {

        updateRemoteStatus(
            "🟢 Connected"
        );


        return;

    }


    /*
       Prevent duplicate simultaneous attempts.
    */

    if (
        remoteConnecting
    ) {

        return;

    }


    remoteConnecting =
        true;


    updateRemoteStatus(
        "🟡 Connecting..."
    );


    console.log(
        "📱 Connecting to host..."
    );


    let connection;


    try {

        connection =
            peer.connect(
                remoteRoom,
                {
                    reliable: true
                }
            );

    } catch (error) {

        console.error(
            "peer.connect error:",
            error
        );


        remoteConnecting =
            false;


        scheduleRemoteReconnect();

        return;

    }


    hostConnection =
        connection;


    /* =====================================================
       CONNECTION OPEN
    ===================================================== */

    connection.on(
        "open",
        function () {

            console.log(
                "🟢 Remote connected to host"
            );


            remoteConnecting =
                false;


            remoteReconnectAttempts =
                0;


            updateRemoteStatus(
                "🟢 Connected"
            );

        }
    );


    /* =====================================================
       RECEIVE HOST STATE
    ===================================================== */

    connection.on(
        "data",
        function (data) {

            handleHostState(
                data
            );

        }
    );


    /* =====================================================
       CONNECTION CLOSE
    ===================================================== */

    connection.on(
        "close",
        function () {

            console.log(
                "🔴 Host connection closed"
            );


            remoteConnecting =
                false;


            /*
               Only clear if this is
               still the active connection.
            */

            if (
                hostConnection ===
                connection
            ) {

                hostConnection =
                    null;

            }


            updateRemoteStatus(
                "🟡 Reconnecting..."
            );


            scheduleRemoteReconnect();

        }
    );


    /* =====================================================
       CONNECTION ERROR
    ===================================================== */

    connection.on(
        "error",
        function (error) {

            console.error(
                "Host connection error:",
                error
            );


            remoteConnecting =
                false;


            updateRemoteStatus(
                "🟡 Reconnecting..."
            );


            scheduleRemoteReconnect();

        }
    );

}


/* =========================================================
   SCHEDULE REMOTE RECONNECT
========================================================= */

function scheduleRemoteReconnect() {

    if (
        !isRemote
    ) {

        return;

    }


    /*
       Don't create multiple timers.
    */

    if (
        remoteReconnectTimer
    ) {

        return;

    }


    /*
       Exponential backoff.

       1 sec
       2 sec
       4 sec
       8 sec
       10 sec max
    */

    const delay =
        Math.min(
            RECONNECT_BASE_DELAY *
            Math.pow(
                2,
                remoteReconnectAttempts
            ),
            RECONNECT_MAX_DELAY
        );


    remoteReconnectAttempts =
        Math.min(
            remoteReconnectAttempts + 1,
            10
        );


    console.log(
        "🔄 Remote reconnect in:",
        delay,
        "ms"
    );


    remoteReconnectTimer =
        setTimeout(
            function () {

                remoteReconnectTimer =
                    null;


                reconnectRemoteNow();

            },
            delay
        );

}


/* =========================================================
   IMMEDIATE REMOTE RECONNECT
========================================================= */

function reconnectRemoteImmediately() {

    if (
        !isRemote
    ) {

        return;

    }


    /*
       Clear pending reconnect timer.
    */

    if (
        remoteReconnectTimer
    ) {

        clearTimeout(
            remoteReconnectTimer
        );


        remoteReconnectTimer =
            null;

    }


    remoteReconnectAttempts =
        0;


    reconnectRemoteNow();

}


/* =========================================================
   ACTUAL REMOTE RECONNECT
========================================================= */

function reconnectRemoteNow() {

    if (
        !isRemote
    ) {

        return;

    }


    /*
       If browser is offline,
       wait for "online".
    */

    if (
        navigator.onLine === false
    ) {

        updateRemoteStatus(
            "🔴 Offline"
        );


        return;

    }


    /*
       Existing healthy connection.
    */

    if (
        hostConnection &&
        hostConnection.open
    ) {

        updateRemoteStatus(
            "🟢 Connected"
        );


        return;

    }


    /*
       Peer doesn't exist.
    */

    if (
        !peer ||
        peer.destroyed
    ) {

        peer =
            null;


        hostConnection =
            null;


        startRemotePeer();

        return;

    }


    /*
       Peer exists but is disconnected.
    */

    if (
        !peer.open
    ) {

        updateRemoteStatus(
            "🟡 Reconnecting..."
        );


        try {

            if (
                typeof peer.reconnect ===
                "function"
            ) {

                peer.reconnect();

            }

        } catch (error) {

            console.error(
                "peer.reconnect error:",
                error
            );


            rebuildRemotePeer();

        }


        return;

    }


    /*
       Peer is open,
       so create host connection.
    */

    connectToHost();

}


/* =========================================================
   REBUILD REMOTE PEER
========================================================= */

function rebuildRemotePeer() {

    console.log(
        "♻️ Rebuilding remote Peer..."
    );


    remoteConnecting =
        false;


    hostConnection =
        null;


    if (
        peer
    ) {

        try {

            peer.destroy();

        } catch (error) {

            console.error(
                "Peer destroy error:",
                error
            );

        }

    }


    peer =
        null;


    peerStarting =
        false;


    updateRemoteStatus(
        "🟡 Reconnecting..."
    );


    scheduleRemoteReconnect();

}


/* =========================================================
   GENERATE QR
========================================================= */

function generateQRCode(
    url
) {

    const qr =
        document.getElementById(
            "qrcode"
        );


    if (!qr) {
        return;
    }


    qr.innerHTML =
        "";


    if (
        typeof QRCode !==
        "undefined"
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
        link ===
        "Preparing remote..."
    ) {

        return;

    }


    navigator.clipboard
        .writeText(
            link
        )
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

function sendState(
    connection
) {

    if (
        !connection ||
        !connection.open
    ) {

        return;

    }


    try {

        connection.send({

            type: "state",

            currentSong:
                currentSong,

            reservedSongs:
                [...reservedSongs],

            isPlaying:
                isPlaying

        });

    } catch (error) {

        console.error(
            "sendState error:",
            error
        );

    }

}


/* =========================================================
   BROADCAST STATE
========================================================= */

function broadcastState() {

    if (isRemote) {
        return;
    }


    remoteConnections.forEach(
        function (
            connection
        ) {

            sendState(
                connection
            );

        }
    );

}


/* =========================================================
   HANDLE REMOTE COMMAND
========================================================= */

function handleRemoteCommand(
    data
) {

    if (!data) {
        return;
    }


    switch (
        data.type
    ) {

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

function handleHostState(
    data
) {

    if (
        !data ||
        data.type !==
        "state"
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


    /*
       Keep status green after receiving state.
    */

    if (
        hostConnection &&
        hostConnection.open
    ) {

        updateRemoteStatus(
            "🟢 Connected"
        );

    }

}


/* =========================================================
   REMOTE COMMAND
========================================================= */

function remoteCommand(
    command
) {

    if (
        !hostConnection ||
        !hostConnection.open
    ) {

        /*
           Don't silently fail.
           Try reconnecting.
        */

        reconnectRemoteImmediately();

        return;

    }


    try {

        hostConnection.send({

            type:
                command

        });

    } catch (error) {

        console.error(
            "Remote command error:",
            error
        );


        scheduleRemoteReconnect();

    }

}


/* =========================================================
   REMOTE RESERVE
========================================================= */

function remoteReserve(
    index
) {

    if (
        !hostConnection ||
        !hostConnection.open
    ) {

        reconnectRemoteImmediately();

        return;

    }


    try {

        hostConnection.send({

            type:
                "reserve",

            index:
                index

        });

    } catch (error) {

        console.error(
            "Remote reserve error:",
            error
        );


        scheduleRemoteReconnect();

    }

}


/* =========================================================
   REMOTE REMOVE
========================================================= */

function remoteRemoveReserve(
    index
) {

    if (
        !hostConnection ||
        !hostConnection.open
    ) {

        reconnectRemoteImmediately();

        return;

    }


    try {

        hostConnection.send({

            type:
                "removeReserve",

            index:
                index

        });

    } catch (error) {

        console.error(
            "Remote remove reserve error:",
            error
        );


        scheduleRemoteReconnect();

    }

}


/* =========================================================
   LOAD SONG
========================================================= */

function loadSong(
    index
) {

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

        index =
            0;

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

        isPlaying =
            false;


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


    isPlaying =
        false;


    isChangingSong =
        false;


    broadcastState();

}


/* =========================================================
   YOUTUBE PLAYER READY
========================================================= */

function onYouTubePlayerReady(
    event
) {

    youtubePlayer =
        event.target;


    isPlayerReady =
        true;


    let index =
        currentSong;


    if (
        pendingSongIndex !==
        null
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

function onYouTubePlayerStateChange(
    event
) {

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
        typeof YT ===
            "undefined" ||
        typeof YT.Player ===
            "undefined"
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

                    autoplay:
                        0,

                    rel:
                        0,

                    playsinline:
                        1

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


    if (
        isChangingSong
    ) {

        return;

    }


    endHandled =
        false;


    /*
       RESERVED SONG FIRST
    */

    if (
        reservedSongs.length >
        0
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
    */

    let nextIndex =
        currentSong + 1;


    if (
        nextIndex >=
        songs.length
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

function reserveSong(
    index
) {

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
        reservedSongs.includes(
            index
        )
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

function removeReserve(
    index
) {

    reservedSongs =
        reservedSongs.filter(
            function (
                songIndex
            ) {

                return (
                    songIndex !==
                    index
                );

            }
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


    list.innerHTML =
        "";


    songs.forEach(
        function (
            song,
            index
        ) {

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
                !title.includes(
                    search
                ) &&
                !artist.includes(
                    search
                )
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
                index ===
                currentSong
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


    list.innerHTML =
        "";


    songs.forEach(
        function (
            song,
            index
        ) {

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
                !title.includes(
                    search
                ) &&
                !artist.includes(
                    search
                )
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
                index ===
                currentSong
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


    queue.innerHTML =
        "";


    if (
        reservedSongs.length ===
        0
    ) {

        queue.textContent =
            "No reserved songs";

        return;

    }


    reservedSongs.forEach(
        function (
            index,
            position
        ) {

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