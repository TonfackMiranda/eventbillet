

 const event = [
     {
         id: "1",
         category: "concert",
         name: "Jazz Night with Diana Krall",
         organizer: "Music Master Productions",
         date: "05/05/2024",
         location: "Grand Theatre",
         shortDescription: "Join us for a mesmerizing evening of jazz classics performed by the legendary Diana Krall.",
         listingImage: "",
         availableTickets: "300",
         price: "750"
     },
     {
         id: "2",
         category: "spectacle-enfant",
         name: "Magic Circus: The Enchanted Forest",
         organizer: "Big Top Entertainment",
         date: "10/06/2024",
         location: "Wonderland Arena",
         shortDescription: "Let your children's imagination run wild in this magical circus adventure through the Enchanted Forest.",
         listingImage: "",
         availableTickets: "200",
         price: "300"
     },
     {
         id: "3",
         category: "conference",
         name: "Tech Summit 2024",
         organizer: "Innovation Hub",
         date: "20/07/2024",
         location: "Convention Center",
         shortDescription: "Dive into the latest trends and innovations shaping the future of technology at Tech Summit 2024.",
         listingImage: "",
         availableTickets: "500",
         price: "1000"
     },
     {
         id: "4",
         category: "cinema",
         name: "Premiere Screening: \"Galactic Odyssey\"",
         organizer: "Starlight Studios",
         date: "15/08/2024",
         location: "Star Cinemas",
         shortDescription: "Be the first to experience the epic space adventure \"Galactic Odyssey\" at our exclusive premiere screening.",
         listingImage: "",
         availableTickets: "400",
         price: "200"
     },
     {
         id: "5",
         category: "activite-en-lair",
         name: "Skydiving Experience: Leap of Faith",
         organizer: "Adrenaline Adventures",
         date: "25/09/2024",
         location: "Skydive Zone",
         shortDescription: "Take the plunge and feel the rush of adrenaline with our thrilling skydiving experience.",
         listingImage: "",
         availableTickets: "20",
         price: "1500"
     },
     {
         id: "6",
         category: "sport",
         name: "International Tennis Championship",
         organizer: "Tennis Federation",
         date: "12/10/2024",
         location: "Stadium Court",
         shortDescription: "Witness the world's top tennis players compete for glory in the prestigious International Tennis Championship.",
         listingImage: "",
         availableTickets: "1000",
         price: "600"
     },
     {
         id: "7",
         category: "concert",
         name: "Symphony Under the Stars",
         organizer: "City Philharmonic Orchestra",
         date: "08/11/2024",
         location: "Central Park Amphitheater",
         shortDescription: "Immerse yourself in the enchanting melodies of classical music with Symphony Under the Stars.",
         listingImage: "",
         availableTickets: "800",
         price: "400"
     },
     {
         id: "8",
         category: "spectacle-enfant",
         name: "Puppet Show: The Magical Kingdom",
         organizer: "Kids' Entertainment Co.",
         date: "03/12/2024",
         location: "Puppet Palace",
         shortDescription: "Embark on a magical journey through The Magical Kingdom with our delightful puppet show.",
         listingImage: "",
         availableTickets: "150",
         price: "250"
     },
     {
         id: "9",
         category: "conference",
         name: "GreenTech Summit 2024",
         organizer: "Sustainability Alliance",
         date: "18/01/2025",
         location: "Eco Convention Center",
         shortDescription: "Explore innovative solutions for a sustainable future at the GreenTech Summit 2024.",
         listingImage: "",
         availableTickets: "600",
         price: "800"
     },
     {
         id: "10",
         category: "cinema",
         name: "Retro Movie Night: 80s Classics Marathon",
         organizer: "Nostalgia Cinema Club",
         date: "22/02/2025",
         location: "Retro Theater",
         shortDescription: "Relive the nostalgia with a marathon screening of beloved 80s classics at Retro Movie Night.",
         listingImage: "",
         availableTickets: "250",
         price: "100"
     }
]

 export const getEventsByCategory= (category)  => {
    return event.filter((e) => e.category === category)
 }

 export const getEventsByCategoryAndId= (category, id)  => {
     return event.filter((e) => e.category === category && e.id === id)
 }