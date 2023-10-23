var config = {
    style: 'mapbox://styles/convidado/clk7s4tsl02tu01p71yt9hnjt',
    accessToken: 'pk.eyJ1IjoiY29udmlkYWRvIiwiYSI6ImNqZ2wzYWVuMDE2cm8zM284cm4wZ25uc2wifQ.d8Y_NpxazV3JB68v7qmGtg',
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
            onChapterEnter: [
                {
                    layer: 'Satellite imagery',
                    opacity: 1
                },
                {
                    layer: 'Road network tunnels',
                    opacity: 1
                },
                {
                    layer: 'Road network surface',
                    opacity: 1
                },
                {
                    layer: 'Road network bridges',
                    opacity: 1
                },
                {
                    layer: 'Administrative boundaries',
                    opacity: 1
                },
                {
                    layer: 'Road network',
                    opacity: 1
                },
                {
                    layer: 'Natural features',
                    opacity: 1
                },
                {
                    layer: 'Point of interest labels',
                    opacity: 1
                },
                {
                    layer: 'Place labels',
                    opacity: 1
                },
                {
                    layer: 'states-legal-amazon',
                    opacity: 1
                },
                {
                    layer: 'sitios_areas_florestais',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Satellite imagery',
                    opacity: 1
                },
                {
                    layer: 'Road network tunnels',
                    opacity: 1
                },
                {
                    layer: 'Road network surface',
                    opacity: 1
                },
                {
                    layer: 'Road network bridges',
                    opacity: 1
                },
                {
                    layer: 'Administrative boundaries',
                    opacity: 1
                },
                {
                    layer: 'Road network',
                    opacity: 1
                },
                {
                    layer: 'Natural features',
                    opacity: 1
                },
                {
                    layer: 'Point of interest labels',
                    opacity: 1
                },
                {
                    layer: 'Place labels',
                    opacity: 1
                },
                {
                    layer: 'states-legal-amazon',
                    opacity: 1
                },
                {
                    layer: 'sitios_areas_florestais',
                    opacity:1
                }
            ]
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
