(function (seedData) {
    seedData.initCountries = [{
        id: 1,
        name: "Denmark",
        threeLetterCode: "Den",
        twoLetterCode: "DK"
    },
    {
        id: 2,
        name: "Spain",
        threeLetterCode: "Esp",
        twoLetterCode: "ES"
    }];

    seedData.initClubs = [{
        id: 1,
        name: "FC København",
        homeground: "Parken",
        nationalChampionships: 11,
        nationalCups: 7,
        logo: "",
        uefaId: 52709,
        foundedYear: 1992,
        countryId: 1,
        city: "København"
    },
        {
            id: 2,
            name: "Odense Boldklub",
            homeground: "TRE-FOR Park",
            nationalChampionships: 3,
            nationalCups: 5,
            logo: "",
            uefaId: 81209,
            foundedYear: 1887,
            countryId: 1,
            city: "Odense"
        },
        {
            id: 3,
            name: "Real Madrid",
            homeground: "Santiago Bernabeu",
            nationalChampionships: 32,
            nationalCups: 19,
            logo: "",
            uefaId: 50051,
            foundedYear: 1902,
            countryId: 2,
            city: "Madrid"
        }];


})(module.exports);