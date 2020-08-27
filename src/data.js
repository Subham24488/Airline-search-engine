import room1 from "./images/details-1.jpg";
import room2 from "./images/details-2.jpg";
import room3 from "./images/details-3.jpg";
import room4 from "./images/details-4.jpg";
import img1 from "./images/room-1.jpg";
import img2 from "./images/room-2.jpg";
import img3 from "./images/room-3.jpg";
import img4 from "./images/room-4.jpg";
import img5 from "./images/room-5.jpg";
import img6 from "./images/room-6.jpg";
import img7 from "./images/room-7.jpg";
import img8 from "./images/room-8.jpg";
import img9 from "./images/room-9.jpg";
import img10 from "./images/room-10.jpg";
import img11 from "./images/room-11.jpg";
import img12 from "./images/room-12.jpg";

export default [
  {
    sys: {
      id: "1",
    },
    fields: {
      name: "A-201",
      price: 100,
      origin: "PUN",
      destination: "DEL",
      date: "2020-12-01",
      departure: "10.00AM",
      arrival: "12.00AM",
      featured: true,

      images: [
        {
          fields: {
            file: {
              url: img1,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "2",
    },
    fields: {
      name: "A-202",
      price: 300,

      origin: "DEL",
      destination: "PUN",
      date: "2020-12-02",
      departure: "11.00AM",
      arrival: "05.00AM",
      featured: false,

      images: [
        {
          fields: {
            file: {
              url: img2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "3",
    },
    fields: {
      name: "A-203",
      price: 300,

      origin: "PUN",
      destination: "KOL",
      date: "2020-12-03",
      departure: "02.00AM",
      arrival: "05.00AM",
      featured: false,

      images: [
        {
          fields: {
            file: {
              url: img3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "4",
    },
    fields: {
      name: "A-204",
      price: 800,

      origin: "Kol",
      destination: "PUN",
      date: "2020-12-04",
      departure: "06.00AM",
      arrival: "08.00AM",
      featured: true,

      images: [
        {
          fields: {
            file: {
              url: img4,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "5",
    },
    fields: {
      name: "A-205",
      price: 900,

      origin: "PUN",
      destination: "HYD",
      date: "2020-12-05",
      departure: "11.00AM",
      arrival: "05.00AM",
      featured: false,

      images: [
        {
          fields: {
            file: {
              url: img5,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "6",
    },
    fields: {
      name: "A-206",
      price: 1000,
      origin: "HYD",
      destination: "PUN",
      date: "2020-12-06",
      departure: "12.00AM",
      arrival: "05.00PM",
      featured: false,

      images: [
        {
          fields: {
            file: {
              url: img6,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },

  {
    sys: {
      id: "7",
    },
    fields: {
      name: "A-207",
      price: 550,

      origin: "PUN",
      destination: "PAT",
      date: "2020-12-07",
      departure: "11.00AM",
      arrival: "05.00AM",
      featured: false,

      images: [
        {
          fields: {
            file: {
              url: img12,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "8",
    },
    fields: {
      name: "A-208",
      price: 680,

      origin: "PAT",
      destination: "PUN",
      date: "2020-12-08",
      departure: "1.00AM",
      arrival: "08.00AM",
      featured: true,

      images: [
        {
          fields: {
            file: {
              url: room1,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "9",
    },
    fields: {
      name: "A-209",
      price: 100,
      origin: "MUM",
      destination: "DEL",
      date: "2020-12-09",
      departure: "10.00AM",
      arrival: "12.00AM",
      featured: false,

      images: [
        {
          fields: {
            file: {
              url: img1,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "10",
    },
    fields: {
      name: "A-210",
      price: 300,

      origin: "DEL",
      destination: "MUM",
      date: "2020-12-10",
      departure: "11.00AM",
      arrival: "05.00AM",
      featured: false,

      images: [
        {
          fields: {
            file: {
              url: img2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "11",
    },
    fields: {
      name: "A-211",
      price: 300,

      origin: "MUM",
      destination: "KOL",
      date: "2020-12-11",
      departure: "02.00AM",
      arrival: "05.00AM",
      featured: false,

      images: [
        {
          fields: {
            file: {
              url: img3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "12",
    },
    fields: {
      name: "A-212",
      price: 800,

      origin: "Kol",
      destination: "MUM",
      date: "2020-12-12",
      departure: "06.00AM",
      arrival: "08.00AM",
      featured: true,

      images: [
        {
          fields: {
            file: {
              url: img4,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "13",
    },
    fields: {
      name: "A-213",
      price: 900,

      origin: "MUM",
      destination: "HYD",
      date: "2020-12-13",
      departure: "11.00AM",
      arrival: "05.00AM",
      featured: false,

      images: [
        {
          fields: {
            file: {
              url: img5,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "14",
    },
    fields: {
      name: "A-214",
      price: 1000,
      origin: "HYD",
      destination: "MUM",
      date: "2020-12-14",
      departure: "12.00AM",
      arrival: "05.00PM",
      featured: true,

      images: [
        {
          fields: {
            file: {
              url: img6,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },

  {
    sys: {
      id: "15",
    },
    fields: {
      name: "A-215",
      price: 550,

      origin: "MUM",
      destination: "PAT",
      date: "2020-12-15",
      departure: "11.00AM",
      arrival: "05.00AM",
      featured: false,

      images: [
        {
          fields: {
            file: {
              url: img12,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "16",
    },
    fields: {
      name: "A-216",
      price: 680,

      origin: "PAT",
      destination: "MUM",
      date: "2020-12-16",
      departure: "1.00AM",
      arrival: "08.00AM",
      featured: true,

      images: [
        {
          fields: {
            file: {
              url: room1,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "1",
    },
    fields: {
      name: "A-217",
      price: 700,
      origin: "PUN",
      destination: "DEL",
      date: "2020-12-17",
      departure: "10.00AM",
      arrival: "12.00AM",
      featured: true,

      images: [
        {
          fields: {
            file: {
              url: img1,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "18",
    },
    fields: {
      name: "A-218",
      price: 300,
      origin: "PUN",
      destination: "HYD",
      date: "2020-12-18",
      departure: "10.00AM",
      arrival: "12.00AM",
      featured: true,

      images: [
        {
          fields: {
            file: {
              url: img1,
            },
          },
        },
        {
          fields: {
            file: {
              url: room2,
            },
          },
        },
        {
          fields: {
            file: {
              url: room3,
            },
          },
        },
        {
          fields: {
            file: {
              url: room4,
            },
          },
        },
      ],
    },
  },
];
