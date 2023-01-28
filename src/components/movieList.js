import { v4 as uuidv4 } from "uuid";
//list of movies, date, image from website, genre, synopsis, and reviews
//ecport the array of the movie list

export const movieList = [
  {
    name: "Holes",
    date: "(2003)",
    id: uuidv4(),
    image:
      "https://www.imdb.com/title/tt0311289/mediaviewer/rm41654528/?ref_=tt_ov_i",
    genre: "Adventure | Comedy | Drama",
    synopsis:
      "A wrongfully convicted boy is sent to a brutal desert detention camp where he joins the job of digging holes for some mysterious reason.",
    reviews:
      '"In the true Disney spirit, Holes is for the young and old alike. Substantive, well told, and well executed. THere is something here to satisfy the entire family"',
  },
  {
    name: "Pirates of the Caribbean: The Curse of the Black Pearl",
    date: "(2003)",
    id: uuidv4(),
    image:
      "https://www.imdb.com/title/tt0325980/mediaviewer/rm2487103488/?ref_=tt_ov_i",
    genre: "Action | Adventure | Fantasy",
    synopsis:
      "Blacksmith Will Turner teams up with eccentric pirate Captain Jack Sparrow to save his love, the govenor's daughter, from Jack's former pirate allies, who are now undead.",
    reviews:
      '"Johnny, the kids and the pirates have a number-one hit on their hands. They raise the Jolly Roger and make other summer blockbusters walk the plank."',
  },
  {
    name: "Valley Uprising",
    date: "(2014)",
    id: uuidv4(),
    image:
      "https://www.imdb.com/title/tt3784160/mediaviewer/rm3001547008/?ref_=tt_ov_i",
    genre: "Documentary",
    synopsis:
      "In the shady campgrounds of Yosemitte valley, climbers carved out a counterculture lifestyle of dumpster-diving and wild parties that clashed with the conservative values of the National Park Servive.",
    reviews:
      '"Great documentary about the history of rock climbing the started in Yosemite Valley."',
  },
  {
    name: "Harry Potter and the Sorcerer's Stone",
    date: "(2001)",
    id: uuidv4(),
    image:
      "https://www.imdb.com/title/tt0241527/mediaviewer/rm2105413120/?ref_=tt_ov_i",
    genre: "Adventure | Family | Fantasy",
    synopsis:
      "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family, and the terrible evil that haunts the magical world.",
    reviews:
      '"Harry Potters first venture onto the screen is a solid blockbuster."',
  },
  {
    name: "Top Gun: Maverick",
    date: "(2022)",
    id: uuidv4(),
    image:
      "https://www.imdb.com/title/tt1745960/mediaviewer/rm3294367489/?ref_=tt_ov_i",
    genre: "Action | Drama",
    synopsis:
      "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUNs elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.",
    reviews:
      '"This is how you do a sequel. Top Gun: Maverick, is a surprisingly good time."',
  },
  {
    name: "Surfs Up",
    date: "(2007)",
    id: uuidv4(),
    image:
      "https://www.imdb.com/title/tt0423294/mediaviewer/rm2424474880/?ref_=tt_ov_i",
    genre: "Animation | Adventure | Comedy",
    synopsis:
      "A behind-the-scenes look at the annual Penguin worl Surfing Championship, and its newest participant, up-and-comer Cody Maverick.",
    reviews:
      '"Surfs Up is a surprisingly refreshing tale set in the bright sunny beaches with laid back dude attitude, which doesnt seem to try too hard to please, and comes up just about right."',
  },
];
