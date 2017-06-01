import doSearch from "../actions/do-search.js";
import getVotes from "../actions/get_votes.js";
const initialState = {
    searchTerm: "",
    artistSearchResultsKP: [
        {
            artists: {
                href: "https://api.spotify.com/v1/search?query=katy+perry&type=artist&market=US&offset=0&limit=20",
                items: [
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/6jJ0s89eD6GaHleKKya26X"
                        },
                        followers: {
                            href: null,
                            total: 5846199
                        },
                        genres: [
                            "dance pop",
                            "pop",
                            "pop christmas",
                            "post-teen pop"
                        ],
                        href: "https://api.spotify.com/v1/artists/6jJ0s89eD6GaHleKKya26X",
                        id: "6jJ0s89eD6GaHleKKya26X",
                        images: [
                            {
                                height: 640,
                                url: "https://i.scdn.co/image/fcdc433e8ccf8d46d58ac70db322feb9b3328731",
                                width: 640
                            },
                            {
                                height: 320,
                                url: "https://i.scdn.co/image/9a2d7b0ce015dea90decae0141b219afe004af25",
                                width: 320
                            },
                            {
                                height: 160,
                                url: "https://i.scdn.co/image/473d2b4e0386e518e1a8326fa7092dd702c399da",
                                width: 160
                            }
                        ],
                        name: "Katy Perry",
                        popularity: 88,
                        type: "artist",
                        uri: "spotify:artist:6jJ0s89eD6GaHleKKya26X"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/5He6InD3axXIVS3SCQPFp6"
                        },
                        followers: {
                            href: null,
                            total: 174
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/5He6InD3axXIVS3SCQPFp6",
                        id: "5He6InD3axXIVS3SCQPFp6",
                        images: [
                            {
                                height: 640,
                                url: "https://i.scdn.co/image/09e96b2ff2de04ab7da58b71d8f93d2f7effbc47",
                                width: 640
                            },
                            {
                                height: 300,
                                url: "https://i.scdn.co/image/27c65a7ddc02beb173f1beb10b9aa025e618444d",
                                width: 300
                            },
                            {
                                height: 64,
                                url: "https://i.scdn.co/image/46b4cb2c1b4fb73e0792c938a053a733a52d793f",
                                width: 64
                            }
                        ],
                        name: "Perry Katy",
                        popularity: 0,
                        type: "artist",
                        uri: "spotify:artist:5He6InD3axXIVS3SCQPFp6"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/11ovzPcEQ3vcLtsFaTr8kM"
                        },
                        followers: {
                            href: null,
                            total: 34
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/11ovzPcEQ3vcLtsFaTr8kM",
                        id: "11ovzPcEQ3vcLtsFaTr8kM",
                        images: [
                            {
                                height: 640,
                                url: "https://i.scdn.co/image/14681dcc73c8a858706d56287ffd2cf526af7afa",
                                width: 640
                            },
                            {
                                height: 300,
                                url: "https://i.scdn.co/image/64485911800ca519e891f0b46570ba00caa56f12",
                                width: 300
                            },
                            {
                                height: 64,
                                url: "https://i.scdn.co/image/740323430f09f5a1753aa34d1fe1d87a00132c12",
                                width: 64
                            }
                        ],
                        name: "Cordozar Calvin Broadus, Lukasz Gottwald, Bonnie Mckee, Benny Blanco, Max Martin, Katy Perry, Martin Karl Sandberg, Brian Douglas Wilson, Mike E. Love",
                        popularity: 0,
                        type: "artist",
                        uri: "spotify:artist:11ovzPcEQ3vcLtsFaTr8kM"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/5w5kwkHlfcpNxOSBDYEuk5"
                        },
                        followers: {
                            href: null,
                            total: 29
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/5w5kwkHlfcpNxOSBDYEuk5",
                        id: "5w5kwkHlfcpNxOSBDYEuk5",
                        images: [
                            {
                                height: 640,
                                url: "https://i.scdn.co/image/2a86218e03a506be2e22bbb8725df9b933150702",
                                width: 640
                            },
                            {
                                height: 300,
                                url: "https://i.scdn.co/image/2e38157906c1cb72d0d85ab1930045f21ff8448c",
                                width: 300
                            },
                            {
                                height: 64,
                                url: "https://i.scdn.co/image/49c4153c10662f7201b770ee7005e5c98b524a91",
                                width: 64
                            }
                        ],
                        name: "Katy Perry Karaoke Band",
                        popularity: 0,
                        type: "artist",
                        uri: "spotify:artist:5w5kwkHlfcpNxOSBDYEuk5"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/57EpMiVlwVnv2kvGskCA1k"
                        },
                        followers: {
                            href: null,
                            total: 385
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/57EpMiVlwVnv2kvGskCA1k",
                        id: "57EpMiVlwVnv2kvGskCA1k",
                        images: [
                            {
                                height: 640,
                                url: "https://i.scdn.co/image/9694bc29d5f7090b6276c3dcb493e377eaebe910",
                                width: 640
                            },
                            {
                                height: 300,
                                url: "https://i.scdn.co/image/59bfcb3940387cdeca391f803c53c136ad64b8cd",
                                width: 300
                            },
                            {
                                height: 64,
                                url: "https://i.scdn.co/image/5709bde9657d67c83d4cb28e890a98138fe9822e",
                                width: 64
                            }
                        ],
                        name: "Tribute To Katy Perry",
                        popularity: 6,
                        type: "artist",
                        uri: "spotify:artist:57EpMiVlwVnv2kvGskCA1k"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/3bvKQjoxbJJjytqNVkAN98"
                        },
                        followers: {
                            href: null,
                            total: 75
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/3bvKQjoxbJJjytqNVkAN98",
                        id: "3bvKQjoxbJJjytqNVkAN98",
                        images: [
                            {
                                height: 640,
                                url: "https://i.scdn.co/image/09834ed40db28a6d3bfe652a48a10e861d8c668d",
                                width: 640
                            },
                            {
                                height: 300,
                                url: "https://i.scdn.co/image/5003596207155cf6b78031380f4f300c76846ffe",
                                width: 300
                            },
                            {
                                height: 64,
                                url: "https://i.scdn.co/image/09494c0d5683a989dd57dbbad829988e5d68249c",
                                width: 64
                            }
                        ],
                        name: "Katy Perry Tribute Team",
                        popularity: 4,
                        type: "artist",
                        uri: "spotify:artist:3bvKQjoxbJJjytqNVkAN98"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/2wqobWgvgDpmCH6A5f6EbR"
                        },
                        followers: {
                            href: null,
                            total: 26
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/2wqobWgvgDpmCH6A5f6EbR",
                        id: "2wqobWgvgDpmCH6A5f6EbR",
                        images: [
                            {
                                height: 640,
                                url: "https://i.scdn.co/image/1eb5a430a6d218810d2a997ece6eff841afa22af",
                                width: 640
                            },
                            {
                                height: 300,
                                url: "https://i.scdn.co/image/06a381c0fc2d1662b14553b7cacdc65c64d9b8ce",
                                width: 300
                            },
                            {
                                height: 64,
                                url: "https://i.scdn.co/image/66ded9bc653fe6b0ae039d5b3a6b53eeb6f91040",
                                width: 64
                            }
                        ],
                        name: "Katy Perry Tribute",
                        popularity: 5,
                        type: "artist",
                        uri: "spotify:artist:2wqobWgvgDpmCH6A5f6EbR"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/6jsDtDfNjHeIrNtx5sx4b1"
                        },
                        followers: {
                            href: null,
                            total: 122
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/6jsDtDfNjHeIrNtx5sx4b1",
                        id: "6jsDtDfNjHeIrNtx5sx4b1",
                        images: [],
                        name: "Made famous by Katy Perry",
                        popularity: 10,
                        type: "artist",
                        uri: "spotify:artist:6jsDtDfNjHeIrNtx5sx4b1"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/076jUf2hFwIMOhSXS626Op"
                        },
                        followers: {
                            href: null,
                            total: 62
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/076jUf2hFwIMOhSXS626Op",
                        id: "076jUf2hFwIMOhSXS626Op",
                        images: [
                            {
                                height: 640,
                                url: "https://i.scdn.co/image/ffbfe4d54c03b3806d690f4cb2f47ce62b7f99f3",
                                width: 640
                            },
                            {
                                height: 300,
                                url: "https://i.scdn.co/image/12c91c9ae471979e37e9ab0a70540763deee5b2b",
                                width: 300
                            },
                            {
                                height: 64,
                                url: "https://i.scdn.co/image/57541a8a9069abde413344c4f3902b92571bc15b",
                                width: 64
                            }
                        ],
                        name: "#1 Katy Perry Tribute Band",
                        popularity: 0,
                        type: "artist",
                        uri: "spotify:artist:076jUf2hFwIMOhSXS626Op"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/5b49WYJaBmap5HcqecZL6g"
                        },
                        followers: {
                            href: null,
                            total: 23
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/5b49WYJaBmap5HcqecZL6g",
                        id: "5b49WYJaBmap5HcqecZL6g",
                        images: [
                            {
                                height: 640,
                                url: "https://i.scdn.co/image/8076369e49ede13edec40f856cfeffed3f9a188e",
                                width: 640
                            },
                            {
                                height: 300,
                                url: "https://i.scdn.co/image/1e503d7bf6fc252412bdedddf356fd9f127c5dc5",
                                width: 300
                            },
                            {
                                height: 64,
                                url: "https://i.scdn.co/image/d701447a0143beb56f9e026057ddfe109205e038",
                                width: 64
                            }
                        ],
                        name: "Katy Perry Piano Tribute Performers",
                        popularity: 1,
                        type: "artist",
                        uri: "spotify:artist:5b49WYJaBmap5HcqecZL6g"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/7qXdTtH5LqGTiWEX65aZMX"
                        },
                        followers: {
                            href: null,
                            total: 17
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/7qXdTtH5LqGTiWEX65aZMX",
                        id: "7qXdTtH5LqGTiWEX65aZMX",
                        images: [],
                        name: "Made famous by Katy Perry feat Kanye West",
                        popularity: 8,
                        type: "artist",
                        uri: "spotify:artist:7qXdTtH5LqGTiWEX65aZMX"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/66baY8S7blE6glpQW35Wtf"
                        },
                        followers: {
                            href: null,
                            total: 51
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/66baY8S7blE6glpQW35Wtf",
                        id: "66baY8S7blE6glpQW35Wtf",
                        images: [],
                        name: "Made Famous By Katy Perry & Snoop Dogg",
                        popularity: 12,
                        type: "artist",
                        uri: "spotify:artist:66baY8S7blE6glpQW35Wtf"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/7f72CR2lTIY1ineMTjYqyO"
                        },
                        followers: {
                            href: null,
                            total: 59
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/7f72CR2lTIY1ineMTjYqyO",
                        id: "7f72CR2lTIY1ineMTjYqyO",
                        images: [
                            {
                                height: 640,
                                url: "https://i.scdn.co/image/970f34194c5a6f0e0880d19bffd9e2e13e386536",
                                width: 640
                            },
                            {
                                height: 300,
                                url: "https://i.scdn.co/image/030c047f8cdb54e266f6f89c5f8f88a63b554a82",
                                width: 300
                            },
                            {
                                height: 64,
                                url: "https://i.scdn.co/image/1393bbdf151b8c31a2fcaafb1c6fe0f3f986b270",
                                width: 64
                            }
                        ],
                        name: "The One That Got Away (In The Style of Katy Perry Tribute) [Karaoke]",
                        popularity: 0,
                        type: "artist",
                        uri: "spotify:artist:7f72CR2lTIY1ineMTjYqyO"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/7gsgTUgN9BOAOrMd5nZw4N"
                        },
                        followers: {
                            href: null,
                            total: 72
                        },
                        genres: ["fake"],
                        href: "https://api.spotify.com/v1/artists/7gsgTUgN9BOAOrMd5nZw4N",
                        id: "7gsgTUgN9BOAOrMd5nZw4N",
                        images: [],
                        name: "The One That Got Away (In The Style of Katy Perry",
                        popularity: 1,
                        type: "artist",
                        uri: "spotify:artist:7gsgTUgN9BOAOrMd5nZw4N"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/72S9ffNvi1wam83yQV05fH"
                        },
                        followers: {
                            href: null,
                            total: 28
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/72S9ffNvi1wam83yQV05fH",
                        id: "72S9ffNvi1wam83yQV05fH",
                        images: [
                            {
                                height: 640,
                                url: "https://i.scdn.co/image/e25028cca911d8270996ead8d2f6caee76b8ea4e",
                                width: 640
                            },
                            {
                                height: 300,
                                url: "https://i.scdn.co/image/2996c07859f41432cde8cf0d6b2536d5641a5537",
                                width: 300
                            },
                            {
                                height: 64,
                                url: "https://i.scdn.co/image/fd2e948ff0a26d22c8d54c3bc609798b9afaf544",
                                width: 64
                            }
                        ],
                        name: "Katy Perry Karaoke's Band",
                        popularity: 3,
                        type: "artist",
                        uri: "spotify:artist:72S9ffNvi1wam83yQV05fH"
                    }
                ],
                limit: 20,
                next: null,
                offset: 0,
                previous: null,
                total: 15
            }
        }
    ],
    artistSearchResultsTS: [
        {
            artists: {
                href: "https://api.spotify.com/v1/search?query=taylor+swift&type=artist&market=US&offset=0&limit=20",
                items: [
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02"
                        },
                        followers: {
                            href: null,
                            total: 5356435
                        },
                        genres: [
                            "dance pop",
                            "neo mellow",
                            "pop",
                            "pop christmas",
                            "post-teen pop",
                            "viral pop"
                        ],
                        href: "https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02",
                        id: "06HL4z0CvFAxyc27GXpf02",
                        images: [
                            {
                                height: 640,
                                url: "https://i.scdn.co/image/8e985a4c3aed3c6e269c27e9b8ad48ceaf4e09e3",
                                width: 640
                            },
                            {
                                height: 320,
                                url: "https://i.scdn.co/image/54969dd8c24693d05c8445c0de4ad74a719f1d65",
                                width: 320
                            },
                            {
                                height: 160,
                                url: "https://i.scdn.co/image/6d6707fe66906bda3d31648cc2228b87203e361f",
                                width: 160
                            }
                        ],
                        name: "Taylor Swift",
                        popularity: 81,
                        type: "artist",
                        uri: "spotify:artist:06HL4z0CvFAxyc27GXpf02"
                    }
                ],
                limit: 20,
                next: null,
                offset: 0,
                previous: null,
                total: 1
            }
        }
    ],
    artistSearchResultsU2: [
        {
            artists: {
                href: "https://api.spotify.com/v1/search?query=u2&type=artist&market=US&offset=0&limit=20",
                items: [
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/51Blml2LZPmy7TTiAg47vQ"
                        },
                        followers: {
                            href: null,
                            total: 1719496
                        },
                        genres: ["irish rock", "permanent wave", "rock"],
                        href: "https://api.spotify.com/v1/artists/51Blml2LZPmy7TTiAg47vQ",
                        id: "51Blml2LZPmy7TTiAg47vQ",
                        images: [
                            {
                                height: 1281,
                                url: "https://i.scdn.co/image/69d8edfbc20da323cfbab9f93d71d777a50f7594",
                                width: 1000
                            },
                            {
                                height: 820,
                                url: "https://i.scdn.co/image/300e10c6428b4a4c6649a8bfa86f12adace46951",
                                width: 640
                            },
                            {
                                height: 256,
                                url: "https://i.scdn.co/image/7a850120ca9dcddcf69af4cb3ea8227dd4a9e548",
                                width: 200
                            },
                            {
                                height: 82,
                                url: "https://i.scdn.co/image/b3bda5384dceb299fa51969049a7160b1a3144f5",
                                width: 64
                            }
                        ],
                        name: "U2",
                        popularity: 81,
                        type: "artist",
                        uri: "spotify:artist:51Blml2LZPmy7TTiAg47vQ"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/7HBMM56ypuZAntznbcQ1TG"
                        },
                        followers: {
                            href: null,
                            total: 805
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/7HBMM56ypuZAntznbcQ1TG",
                        id: "7HBMM56ypuZAntznbcQ1TG",
                        images: [],
                        name: "U2 With Bruce Springsteen",
                        popularity: 17,
                        type: "artist",
                        uri: "spotify:artist:7HBMM56ypuZAntznbcQ1TG"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/4CWC85PCLJ0yzPeJYXnQOG"
                        },
                        followers: {
                            href: null,
                            total: 363
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/4CWC85PCLJ0yzPeJYXnQOG",
                        id: "4CWC85PCLJ0yzPeJYXnQOG",
                        images: [],
                        name: "U2 Rocks",
                        popularity: 0,
                        type: "artist",
                        uri: "spotify:artist:4CWC85PCLJ0yzPeJYXnQOG"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/4GLvKAG2KD1H3r7UPclivc"
                        },
                        followers: {
                            href: null,
                            total: 138
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/4GLvKAG2KD1H3r7UPclivc",
                        id: "4GLvKAG2KD1H3r7UPclivc",
                        images: [],
                        name: "U2 With Mick Jagger",
                        popularity: 8,
                        type: "artist",
                        uri: "spotify:artist:4GLvKAG2KD1H3r7UPclivc"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/2Yj6wqsVIUDkoj2GYPanMM"
                        },
                        followers: {
                            href: null,
                            total: 358
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/2Yj6wqsVIUDkoj2GYPanMM",
                        id: "2Yj6wqsVIUDkoj2GYPanMM",
                        images: [],
                        name: "U2 With Mick Jagger, Fergie and will.i.am",
                        popularity: 13,
                        type: "artist",
                        uri: "spotify:artist:2Yj6wqsVIUDkoj2GYPanMM"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/3dhoDqkI6atVLE43nkx8VZ"
                        },
                        followers: {
                            href: null,
                            total: 681
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/3dhoDqkI6atVLE43nkx8VZ",
                        id: "3dhoDqkI6atVLE43nkx8VZ",
                        images: [],
                        name: "LMC vs U2",
                        popularity: 19,
                        type: "artist",
                        uri: "spotify:artist:3dhoDqkI6atVLE43nkx8VZ"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/0iucZUe2w5x8RRCAzZ1gXp"
                        },
                        followers: {
                            href: null,
                            total: 173
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/0iucZUe2w5x8RRCAzZ1gXp",
                        id: "0iucZUe2w5x8RRCAzZ1gXp",
                        images: [],
                        name: "U2 With The Black Eyed Peas",
                        popularity: 9,
                        type: "artist",
                        uri: "spotify:artist:0iucZUe2w5x8RRCAzZ1gXp"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/2N7QoTe9hOcnrxgcmid4cm"
                        },
                        followers: {
                            href: null,
                            total: 138
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/2N7QoTe9hOcnrxgcmid4cm",
                        id: "2N7QoTe9hOcnrxgcmid4cm",
                        images: [],
                        name: "U2 With Bruce Springsteen, Patti Smith and Roy Bittan",
                        popularity: 8,
                        type: "artist",
                        uri: "spotify:artist:2N7QoTe9hOcnrxgcmid4cm"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/7JgPUKQFABI9fZlYIuNJmY"
                        },
                        followers: {
                            href: null,
                            total: 35
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/7JgPUKQFABI9fZlYIuNJmY",
                        id: "7JgPUKQFABI9fZlYIuNJmY",
                        images: [],
                        name: "Karaoke - U2",
                        popularity: 1,
                        type: "artist",
                        uri: "spotify:artist:7JgPUKQFABI9fZlYIuNJmY"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/6tXjxdlnC9e3v4xJY15JSp"
                        },
                        followers: {
                            href: null,
                            total: 38
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/6tXjxdlnC9e3v4xJY15JSp",
                        id: "6tXjxdlnC9e3v4xJY15JSp",
                        images: [],
                        name: "Hollywood U2",
                        popularity: 9,
                        type: "artist",
                        uri: "spotify:artist:6tXjxdlnC9e3v4xJY15JSp"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/7ypJwUskH6rxpPPCDTdV5V"
                        },
                        followers: {
                            href: null,
                            total: 741
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/7ypJwUskH6rxpPPCDTdV5V",
                        id: "7ypJwUskH6rxpPPCDTdV5V",
                        images: [
                            {
                                height: 640,
                                url: "https://i.scdn.co/image/562fe3df545c7aa3e8367f3756db0e8708ccc46b",
                                width: 640
                            },
                            {
                                height: 300,
                                url: "https://i.scdn.co/image/7c98d9c994cd6ecb1e40b793f8aedf4db1056dbc",
                                width: 300
                            },
                            {
                                height: 64,
                                url: "https://i.scdn.co/image/a5a878359891213331231d4f5064ccd7b4be8a9e",
                                width: 64
                            }
                        ],
                        name: "U2 Tribute Band",
                        popularity: 15,
                        type: "artist",
                        uri: "spotify:artist:7ypJwUskH6rxpPPCDTdV5V"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/5V1upZJErBcgcOP9ZHd4Vy"
                        },
                        followers: {
                            href: null,
                            total: 102
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/5V1upZJErBcgcOP9ZHd4Vy",
                        id: "5V1upZJErBcgcOP9ZHd4Vy",
                        images: [],
                        name: "Made famous by U2",
                        popularity: 18,
                        type: "artist",
                        uri: "spotify:artist:5V1upZJErBcgcOP9ZHd4Vy"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/3CtDccxbY3gFwNHTjRM9aq"
                        },
                        followers: {
                            href: null,
                            total: 160
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/3CtDccxbY3gFwNHTjRM9aq",
                        id: "3CtDccxbY3gFwNHTjRM9aq",
                        images: [],
                        name: "Various Artists - U2 Tribute",
                        popularity: 15,
                        type: "artist",
                        uri: "spotify:artist:3CtDccxbY3gFwNHTjRM9aq"
                    }
                ],
                limit: 20,
                next: null,
                offset: 0,
                previous: null,
                total: 13
            }
        }
    ],
    artistSearchResultsEM: [
        {
            artists: {
                href: "https://api.spotify.com/v1/search?query=eminem&type=artist&market=US&offset=0&limit=20",
                items: [
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/7dGJo4pcD2V6oG8kP0tJRR"
                        },
                        followers: {
                            href: null,
                            total: 8499639
                        },
                        genres: [
                            "detroit hip hop",
                            "g funk",
                            "hip hop",
                            "pop rap",
                            "rap"
                        ],
                        href: "https://api.spotify.com/v1/artists/7dGJo4pcD2V6oG8kP0tJRR",
                        id: "7dGJo4pcD2V6oG8kP0tJRR",
                        images: [
                            {
                                height: 621,
                                url: "https://i.scdn.co/image/15c446495ae50039ba2bef43172c66240fe0605a",
                                width: 1000
                            },
                            {
                                height: 397,
                                url: "https://i.scdn.co/image/184c822d252ceb7561539063a904ef433ac43562",
                                width: 640
                            },
                            {
                                height: 124,
                                url: "https://i.scdn.co/image/0059ebe7ea62b9efde13eda6c6bbc605382b41e6",
                                width: 200
                            },
                            {
                                height: 40,
                                url: "https://i.scdn.co/image/683e358f53d8a3d5ae8ae76053811e836931c94a",
                                width: 64
                            }
                        ],
                        name: "Eminem",
                        popularity: 90,
                        type: "artist",
                        uri: "spotify:artist:7dGJo4pcD2V6oG8kP0tJRR"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/5lGxPtjzZVvTSwQPHYcKhX"
                        },
                        followers: {
                            href: null,
                            total: 284
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/5lGxPtjzZVvTSwQPHYcKhX",
                        id: "5lGxPtjzZVvTSwQPHYcKhX",
                        images: [],
                        name: "The Madd Rapper (Featuring Eminem)",
                        popularity: 16,
                        type: "artist",
                        uri: "spotify:artist:5lGxPtjzZVvTSwQPHYcKhX"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/7xnSWNjvQogp4IE5Wtw4YS"
                        },
                        followers: {
                            href: null,
                            total: 1861
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/7xnSWNjvQogp4IE5Wtw4YS",
                        id: "7xnSWNjvQogp4IE5Wtw4YS",
                        images: [],
                        name: "Bad Meets Evil (Eminem & Royce)",
                        popularity: 19,
                        type: "artist",
                        uri: "spotify:artist:7xnSWNjvQogp4IE5Wtw4YS"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/3S2QVJW2ql8w8rVQIa3x5G"
                        },
                        followers: {
                            href: null,
                            total: 98
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/3S2QVJW2ql8w8rVQIa3x5G",
                        id: "3S2QVJW2ql8w8rVQIa3x5G",
                        images: [],
                        name: "High and Mighty and Eminem",
                        popularity: 4,
                        type: "artist",
                        uri: "spotify:artist:3S2QVJW2ql8w8rVQIa3x5G"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/52Qhb96Tc4f0zMSiqqRKr7"
                        },
                        followers: {
                            href: null,
                            total: 52
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/52Qhb96Tc4f0zMSiqqRKr7",
                        id: "52Qhb96Tc4f0zMSiqqRKr7",
                        images: [],
                        name: "Mc Cavallo feat. Gli Eminem, I Nate Dogg",
                        popularity: 3,
                        type: "artist",
                        uri: "spotify:artist:52Qhb96Tc4f0zMSiqqRKr7"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/3INvGVvQJoD9RWQUc7ogl1"
                        },
                        followers: {
                            href: null,
                            total: 28
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/3INvGVvQJoD9RWQUc7ogl1",
                        id: "3INvGVvQJoD9RWQUc7ogl1",
                        images: [],
                        name: "Jason Porter, Duke, PROOF of Eminem D12, D-Roll, Crooked",
                        popularity: 0,
                        type: "artist",
                        uri: "spotify:artist:3INvGVvQJoD9RWQUc7ogl1"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/16SfgOBulDFXWORWr5d3qq"
                        },
                        followers: {
                            href: null,
                            total: 242
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/16SfgOBulDFXWORWr5d3qq",
                        id: "16SfgOBulDFXWORWr5d3qq",
                        images: [
                            {
                                height: 640,
                                url: "https://i.scdn.co/image/23a3e730256f4c7738202245fdabeefc71881959",
                                width: 640
                            },
                            {
                                height: 300,
                                url: "https://i.scdn.co/image/0e31827df0b223d43adaac1be41307f0d6e4524a",
                                width: 300
                            },
                            {
                                height: 64,
                                url: "https://i.scdn.co/image/73ab944282c400349be62a2b7d413c3a3bb11219",
                                width: 64
                            }
                        ],
                        name: "Emine'm",
                        popularity: 2,
                        type: "artist",
                        uri: "spotify:artist:16SfgOBulDFXWORWr5d3qq"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/7CiF1s8WdmvlfIF7aOs9Gj"
                        },
                        followers: {
                            href: null,
                            total: 35
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/7CiF1s8WdmvlfIF7aOs9Gj",
                        id: "7CiF1s8WdmvlfIF7aOs9Gj",
                        images: [],
                        name: "Bad Meets Evil Feat. Eminem & Royce Da 5'9\"",
                        popularity: 7,
                        type: "artist",
                        uri: "spotify:artist:7CiF1s8WdmvlfIF7aOs9Gj"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/1uN9wevihRCbv6AwFSla0B"
                        },
                        followers: {
                            href: null,
                            total: 198
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/1uN9wevihRCbv6AwFSla0B",
                        id: "1uN9wevihRCbv6AwFSla0B",
                        images: [],
                        name: "Various Artists - Eminem Tribute",
                        popularity: 20,
                        type: "artist",
                        uri: "spotify:artist:1uN9wevihRCbv6AwFSla0B"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/2mOgJyJzA4bxXT5DIMhCII"
                        },
                        followers: {
                            href: null,
                            total: 13
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/2mOgJyJzA4bxXT5DIMhCII",
                        id: "2mOgJyJzA4bxXT5DIMhCII",
                        images: [],
                        name: "Made famous by Eminem",
                        popularity: 1,
                        type: "artist",
                        uri: "spotify:artist:2mOgJyJzA4bxXT5DIMhCII"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/7Aw10uVpJqPO2VgY1ku7a9"
                        },
                        followers: {
                            href: null,
                            total: 46
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/7Aw10uVpJqPO2VgY1ku7a9",
                        id: "7Aw10uVpJqPO2VgY1ku7a9",
                        images: [
                            {
                                height: 640,
                                url: "https://i.scdn.co/image/c4c46fe10eab3313ff76828c8ac9ab748ff77384",
                                width: 640
                            },
                            {
                                height: 300,
                                url: "https://i.scdn.co/image/94b71dfcdf88307e9cb545c4f82d9dba9407f248",
                                width: 300
                            },
                            {
                                height: 64,
                                url: "https://i.scdn.co/image/2982ac90a743725fc6caeeac65e3f1942f490a7d",
                                width: 64
                            }
                        ],
                        name: "Tribute to Eminem",
                        popularity: 0,
                        type: "artist",
                        uri: "spotify:artist:7Aw10uVpJqPO2VgY1ku7a9"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/27f8D9MYt7sgQmQlZaOaL3"
                        },
                        followers: {
                            href: null,
                            total: 493
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/27f8D9MYt7sgQmQlZaOaL3",
                        id: "27f8D9MYt7sgQmQlZaOaL3",
                        images: [
                            {
                                height: 640,
                                url: "https://i.scdn.co/image/49335f6fc07cb55c3dd6411b5a9f25b62e63590b",
                                width: 640
                            },
                            {
                                height: 300,
                                url: "https://i.scdn.co/image/f626d310eb72523349b3ec305afd0d65b3e3ee09",
                                width: 300
                            },
                            {
                                height: 64,
                                url: "https://i.scdn.co/image/f4e2d0b992b4d00556b88424c814cebfc6a08dc2",
                                width: 64
                            }
                        ],
                        name: "Tribute to Eminem & Rihanna",
                        popularity: 7,
                        type: "artist",
                        uri: "spotify:artist:27f8D9MYt7sgQmQlZaOaL3"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/7my8D0poks4bc0bpYXNno9"
                        },
                        followers: {
                            href: null,
                            total: 178
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/7my8D0poks4bc0bpYXNno9",
                        id: "7my8D0poks4bc0bpYXNno9",
                        images: [],
                        name: "Made famous by TI feat. Eminem",
                        popularity: 1,
                        type: "artist",
                        uri: "spotify:artist:7my8D0poks4bc0bpYXNno9"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/1kmA3iIroiYXIQ3UY4sBhx"
                        },
                        followers: {
                            href: null,
                            total: 115
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/1kmA3iIroiYXIQ3UY4sBhx",
                        id: "1kmA3iIroiYXIQ3UY4sBhx",
                        images: [],
                        name: "Made Famous By Eminem & Rihanna",
                        popularity: 7,
                        type: "artist",
                        uri: "spotify:artist:1kmA3iIroiYXIQ3UY4sBhx"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/3ElRipFF8JTX7w7wvC0GJh"
                        },
                        followers: {
                            href: null,
                            total: 712
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/3ElRipFF8JTX7w7wvC0GJh",
                        id: "3ElRipFF8JTX7w7wvC0GJh",
                        images: [
                            {
                                height: 640,
                                url: "https://i.scdn.co/image/352d7925ea5c6a235190c4bc4ffaee257c5cf46f",
                                width: 640
                            },
                            {
                                height: 300,
                                url: "https://i.scdn.co/image/f88a4688544f531e0a67aed50b36413970d57202",
                                width: 300
                            },
                            {
                                height: 64,
                                url: "https://i.scdn.co/image/c7aa0bac5e4a63a91b80192759ee7812305f15a0",
                                width: 64
                            }
                        ],
                        name: "Eminem ft. - Dr. Dre Tribute Band",
                        popularity: 8,
                        type: "artist",
                        uri: "spotify:artist:3ElRipFF8JTX7w7wvC0GJh"
                    },
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/0mO14O4JX0YcZvRBp3BH1s"
                        },
                        followers: {
                            href: null,
                            total: 114
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/0mO14O4JX0YcZvRBp3BH1s",
                        id: "0mO14O4JX0YcZvRBp3BH1s",
                        images: [
                            {
                                height: 640,
                                url: "https://i.scdn.co/image/406e1bc0ca946cb46a676ae987ce7e1f073b9a0e",
                                width: 640
                            },
                            {
                                height: 300,
                                url: "https://i.scdn.co/image/256341be46c39660739b8ef04822e534b3e64173",
                                width: 300
                            },
                            {
                                height: 64,
                                url: "https://i.scdn.co/image/6dec9028029473b94dce9f38315c929e11becc76",
                                width: 64
                            }
                        ],
                        name: "Eminem feat Dr. Dre Karaoke Band",
                        popularity: 0,
                        type: "artist",
                        uri: "spotify:artist:0mO14O4JX0YcZvRBp3BH1s"
                    }
                ],
                limit: 20,
                next: null,
                offset: 0,
                previous: null,
                total: 16
            }
        }
    ],
    artistSearchResultsTB: [
        {
            artists: {
                href: "https://api.spotify.com/v1/search?query=tania+bowra&type=artist&market=US&offset=0&limit=20",
                items: [
                    {
                        external_urls: {
                            spotify: "https://open.spotify.com/artist/08td7MxkoHQkXnWAYD8d6Q"
                        },
                        followers: {
                            href: null,
                            total: 115
                        },
                        genres: [],
                        href: "https://api.spotify.com/v1/artists/08td7MxkoHQkXnWAYD8d6Q",
                        id: "08td7MxkoHQkXnWAYD8d6Q",
                        images: [
                            {
                                height: 640,
                                url: "https://i.scdn.co/image/a529b65b4bd322b16bee34672ce45278e890e176",
                                width: 640
                            },
                            {
                                height: 300,
                                url: "https://i.scdn.co/image/985cc10acdbbedb6a16d7c74f9e23553e2b28dbc",
                                width: 300
                            },
                            {
                                height: 64,
                                url: "https://i.scdn.co/image/37b46a2662c09502885d1804c1c865b199cc3d67",
                                width: 64
                            }
                        ],
                        name: "Tania Bowra",
                        popularity: 2,
                        type: "artist",
                        uri: "spotify:artist:08td7MxkoHQkXnWAYD8d6Q"
                    }
                ],
                limit: 20,
                next: null,
                offset: 0,
                previous: null,
                total: 1
            }
        }
    ],
    artistSearchResults: [],
    votes: []
};

export default function AppReducer(currentState, action) {
    if (currentState === undefined) {
        return initialState;
    }

    switch (action.type) {
        case "LOGGED_IN":
            var newState = {
                usertoken: action.usertoken
            };
            return Object.assign({}, currentState, newState);

        case "UPDATE_PATH_QUERY":
            //console.log("REDUCER: ", action.history);
            action.history.push(`/search-results?q=${action.searchTerm}`);
            return Object.assign({}, currentState, {
                searchTerm: action.searchTerm
            });

        case "RETURN_ARTISTS":
            return Object.assign({}, currentState, {
                artistSearchResults: action.artists
            });

        case "RETURN_VOTES":
            console.log(action.votes);
            var newState = {
                votes: action.votes
            };
            return Object.assign({}, currentState, newState);

            console.log("Unhandled State!");
            return currentState;
    }
}
