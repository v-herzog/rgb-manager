exports.list = [
    {
        name: "Mode 1",
        value: 1,
        colors: [true, true, true],
        outputs:
        [
            { name: "All", value: 0 },
            { name: "Fan 1", value: 1 },
            { name: "Fan 2", value: 2 },
            { name: "Fan 3", value: 3 },
            { name: "Strip 1", value: 4 }
        ]
    },
    {
        name: "Mode 2",
        value: 2,
        colors: [true, false, false],
        outputs: [
            { name: "All", value: 0 },
            { name: "Strip 1", value: 4 }
        ]
    },
    {
        name: "Mode 3",
        value: 3,
        colors: [false, false, false],
        outputs: [
            { name: "All", value: 0 }
        ]
    }
]