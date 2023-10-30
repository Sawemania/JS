//Give the array below 
const ARTICLES = [
  { title: "A message to our customers", upvotes: 12, date: "2020-01-24" },
  { title: "Alphabet earnings", upvotes: 22, date: "2019-11-23" },
  { title: "Artificial Mountains", upvotes: 2, date: "2019-11-22" },
  { title: "Scaling to 100k Users", upvotes: 72, date: "2019-01-21" },
  { title: "the Emu War", upvotes: 24, date: "2019-10-21" },
  { title: "What's SAP", upvotes: 1, date: "2019-11-21" },
  {
    title: "Simple text editor has 15k monthly users",
    upvotes: 7,
    date: "2010-12-31",
  },
];

//Q: sort without mutating based on

//a) upvotes (ascending order)
//b) date (desc/backwards-- latest date first)

const sortedByUpvotes = [...ARTICLES].sort((a, b) => a.upvotes - b.upvotes);

const sortedByDate = [...ARTICLES].sort((a, b) => new Date(b.date) - new Date(a.date));

console.log("Sorted by Upvotes (ascending):");
console.log(sortedByUpvotes);

console.log("Sorted by Date (descending):");
console.log(sortedByDate);
