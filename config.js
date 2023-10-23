var config = {
    style: 'mapbox://styles/convidado/clo2gxps0000601qvc4r80src',
    accessToken: 'sk.eyJ1IjoiY29udmlkYWRvIiwiYSI6ImNsbzJpZW5tZzB4ZzEya3JzMHB1M2tkd3EifQ.t3vyTXOJb88VIKPnZJa5_g',
    showMarkers: false,
    markerColor: '#3FB1CE',
    projection: 'mercator',
    inset: true,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Sítios arqueológicos na rota do desmatamento ma Amazônia Legal',
    subtitle: '71% dos sítios arqueológicos estão em áreas florestais desmatadas',
    byline: 'By Lisiane Müller',
    footer: 'Source: IPhan, INPE and MAPBOX Template',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Sítios arqueológicos',
            image: '',
            description: 'Test Chapter 1',
            location: {
                center: [-59.19000, -5.93000],
                zoom: 4,
                pitch: 60.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Sitios em unidades de conservação com desmatamento',
            image: '',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-59.19000, -5.93000],
                zoom: 4,
                pitch: 60.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Third Title',
            image: '',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-59.19000, -5.93000],
                zoom: 4,
                pitch: 60.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Third Title',
            image: '',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-59.19000, -5.93000],
                zoom: 4,
                pitch: 60.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
