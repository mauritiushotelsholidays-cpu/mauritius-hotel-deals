const hotels = [
  // =========================
  // 5 STAR HOTELS
  // =========================

  {
    id: 1,
    name: "Trou aux Biches Beachcomber Golf Resort & Spa",
    stars: 5,
    location: "Trou aux Biches, Mauritius",
    category: "5 Star",
    description:
      "A luxurious beachfront resort located on the beautiful north-west coast of Mauritius, offering spacious accommodation, tropical gardens, restaurants and a relaxing holiday atmosphere.",
    highlights: ["Beachfront", "Spa", "Swimming Pools", "Restaurants"],
    image: "",
    price: "Price on request",
  },

  {
    id: 2,
    name: "Sofitel Mauritius L'Impérial Resort & Spa",
    stars: 5,
    location: "Flic en Flac, Mauritius",
    category: "5 Star",
    description:
      "A luxury beachfront resort on the west coast of Mauritius, offering elegant accommodation, tropical surroundings, dining experiences and a relaxing spa.",
    highlights: ["Beachfront", "Spa", "Restaurants", "Swimming Pool"],
    image: "",
    price: "Price on request",
  },

  {
    id: 3,
    name: "LUX* Le Morne",
    stars: 5,
    location: "Le Morne, Mauritius",
    category: "5 Star",
    description:
      "A luxury resort located at the foot of the iconic Le Morne Brabant, surrounded by beautiful beaches, dramatic scenery and the Indian Ocean.",
    highlights: ["Beachfront", "Le Morne", "Spa", "Water Sports"],
    image: "",
    price: "Price on request",
  },

  {
    id: 4,
    name: "Constance Le Chaland IKO Mauritius",
    stars: 5,
    location: "Blue Bay, Mauritius",
    category: "5 Star",
    description:
      "A stylish luxury resort located near the south-east coast of Mauritius, offering contemporary accommodation, beach access and a peaceful tropical setting.",
    highlights: ["Luxury", "Beach", "Spa", "Restaurants"],
    image: "",
    price: "Price on request",
  },

  {
    id: 5,
    name: "The Westin Turtle Bay Resort & Spa",
    stars: 5,
    location: "Turtle Bay, Mauritius",
    category: "5 Star",
    description:
      "A luxury resort located in the Turtle Bay area, offering spacious rooms, beautiful coastal surroundings, wellness facilities and several dining options.",
    highlights: ["Beachfront", "Spa", "Wellness", "Restaurants"],
    image: "",
    price: "Price on request",
  },

  {
    id: 6,
    name: "The Residence Mauritius",
    stars: 5,
    location: "Belle Mare, Mauritius",
    category: "5 Star",
    description:
      "An elegant beachfront hotel on the east coast of Mauritius, combining classic style, tropical gardens, comfortable accommodation and personalised service.",
    highlights: ["Beachfront", "Spa", "Swimming Pool", "Restaurants"],
    image: "",
    price: "Price on request",
  },

  {
    id: 7,
    name: "Sofitel SO Mauritius",
    stars: 5,
    location: "Bel Ombre, Mauritius",
    category: "5 Star",
    description:
      "A luxury resort in the south of Mauritius offering stylish villas, tropical surroundings, beach access and a relaxing holiday experience.",
    highlights: ["Luxury Villas", "Beach", "Spa", "Restaurants"],
    image: "",
    price: "Price on request",
  },

  {
    id: 8,
    name: "Sugar Beach Mauritius",
    stars: 5,
    location: "Flic en Flac, Mauritius",
    category: "5 Star",
    description:
      "A luxury beachfront resort offering beautiful tropical gardens, comfortable accommodation, restaurants and direct access to the beach.",
    highlights: ["Beachfront", "Swimming Pools", "Spa", "Restaurants"],
    image: "",
    price: "Price on request",
  },

  {
    id: 9,
    name: "Shanti Maurice Resort & Spa",
    stars: 5,
    location: "Bel Ombre, Mauritius",
    category: "5 Star",
    description:
      "A peaceful luxury resort in the south of Mauritius, offering spacious accommodation, beautiful natural surroundings and a relaxing spa experience.",
    highlights: ["Luxury", "Spa", "Beach", "Wellness"],
    image: "",
    price: "Price on request",
  },

  {
    id: 10,
    name: "Hilton Mauritius Resort & Spa",
    stars: 5,
    location: "Flic en Flac, Mauritius",
    category: "5 Star",
    description:
      "A luxury beachfront resort on the west coast of Mauritius, offering comfortable accommodation, ocean views, restaurants and leisure facilities.",
    highlights: ["Beachfront", "Spa", "Swimming Pool", "Restaurants"],
    image: "",
    price: "Price on request",
  },

  // =========================
  // 4 STAR HOTELS
  // =========================

  {
    id: 11,
    name: "SeaSense Boutique Hotel & Spa",
    stars: 4,
    location: "Palmar, Mauritius",
    category: "4 Star",
    description:
      "A boutique beachfront hotel on the east coast of Mauritius offering a peaceful atmosphere, comfortable rooms and relaxing ocean views.",
    highlights: ["Adults Friendly", "Beachfront", "Spa", "Swimming Pool"],
    image: "",
    price: "Price on request",
  },

  {
    id: 12,
    name: "Quatre Cocos",
    stars: 4,
    location: "Mauritius",
    category: "4 Star",
    description:
      "A comfortable Mauritian hotel option offering a relaxing holiday atmosphere and convenient access to the island's attractions.",
    highlights: ["Comfortable Rooms", "Holiday", "Mauritius"],
    image: "",
    price: "Price on request",
  },

  {
    id: 13,
    name: "Veranda Pointe aux Biches",
    stars: 4,
    location: "Pointe aux Piments, Mauritius",
    category: "4 Star",
    description:
      "A relaxed beachfront hotel with a Mauritian atmosphere, offering comfortable accommodation, restaurants and access to the beautiful north-west coast.",
    highlights: ["Beach", "Restaurants", "Swimming Pool", "Mauritian Style"],
    image: "",
    price: "Price on request",
  },

  {
    id: 14,
    name: "The Ravenala Attitude",
    stars: 4,
    location: "Balaclava, Mauritius",
    category: "4 Star",
    description:
      "A large resort surrounded by tropical gardens and located near Turtle Bay, offering spacious suites, restaurants and activities.",
    highlights: ["Family Friendly", "Swimming Pools", "Restaurants", "Spa"],
    image: "",
    price: "Price on request",
  },

  {
    id: 15,
    name: "The Address Boutique Hotel",
    stars: 4,
    location: "Port Chambly, Mauritius",
    category: "4 Star",
    description:
      "A stylish boutique hotel located in the Port Chambly area, offering a peaceful setting, comfortable rooms and a unique village-style atmosphere.",
    highlights: ["Boutique Hotel", "Swimming Pool", "Restaurants", "Spa"],
    image: "",
    price: "Price on request",
  },

  {
    id: 16,
    name: "Lagoon Attitude",
    stars: 4,
    location: "Anse la Raie, Mauritius",
    category: "4 Star",
    description:
      "A relaxing hotel facing the beautiful northern lagoon, offering a peaceful atmosphere, comfortable accommodation and water activities.",
    highlights: ["Adults Friendly", "Lagoon", "Spa", "Water Activities"],
    image: "",
    price: "Price on request",
  },

  {
    id: 17,
    name: "Solana Beach Mauritius",
    stars: 4,
    location: "Belle Mare, Mauritius",
    category: "4 Star",
    description:
      "A beachfront hotel on the east coast offering beautiful ocean views, comfortable rooms and a relaxing tropical holiday experience.",
    highlights: ["Beachfront", "Ocean Views", "Swimming Pool", "Spa"],
    image: "",
    price: "Price on request",
  },

  {
    id: 18,
    name: "Radisson Blu Poste Lafayette Resort & Spa",
    stars: 4,
    location: "Poste Lafayette, Mauritius",
    category: "4 Star",
    description:
      "A stylish beachfront resort on the east coast of Mauritius offering modern accommodation, beautiful lagoon views and relaxing facilities.",
    highlights: ["Beachfront", "Spa", "Swimming Pool", "Restaurants"],
    image: "",
    price: "Price on request",
  },

  {
    id: 19,
    name: "Lafayette",
    stars: 4,
    location: "Poste Lafayette, Mauritius",
    category: "4 Star",
    description:
      "A relaxing coastal hotel located on the east coast of Mauritius, offering comfortable accommodation and beautiful views of the surrounding lagoon.",
    highlights: ["Beach", "Lagoon", "Swimming Pool", "Relaxation"],
    image: "",
    price: "Price on request",
  },

  {
    id: 20,
    name: "Pearle Beach Resort & Spa",
    stars: 4,
    location: "Flic en Flac, Mauritius",
    category: "4 Star",
    description:
      "A beachfront resort on the popular west coast of Mauritius, offering comfortable accommodation, leisure facilities and easy access to Flic en Flac beach.",
    highlights: ["Beachfront", "Spa", "Swimming Pool", "Restaurants"],
    image: "",
    price: "Price on request",
  },
];

export default hotels;
