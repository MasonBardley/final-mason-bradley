const movies = [
  { title: "Monty Python and the Holy Grail", year: 1975, genre: ["comedy", "fantasy"] },
  { title: "Othello", year: 1995, genre: ["drama", "romance"] },
  { title: "10 Things I Hate About You", year: 1999, genre: ["romance", "comedy"] },
  { title: "Fellowship of the Ring", year: 2001, genre: ["fantasy"] },
  { title: "The Green Knight", year: 2021, genre: ["fantasy"]},
  { title: "The Lion King", year: 1994, genre: ["drama", "comedy"]},
  { title: "The Princess Bride", year: 1987, genre: ["comedy", "romance", "fantasy"]},
  { title: "The Last Duel", year: 2021, genre: ["drama"]},
  { title: "Dungeons & Dragons: Honor Among Thieves", year: 2023, genre: ["fantasy", "comedy"]},
  { title: "Macbeth", year: 2015, genre: ["drama"]},
  { title: "Nosferatu", year: 2024, genre: ["drama", "fantasy"]},
  { title: "The Northman", year: 2022, genre: ["drama"]},
  { title: "The King", year: 2019, genre: ["drama"]},
  { title: "Silence", year: 2016, genre: ["drama"]},
  { title: "The Last Unicorn", year: 1982, genre: ["drama", "fantasy"]},
  { title: "Brave", year: 2012, genre: ["fantasy", "comedy", "drama"]},
  { title: "The Seventh Seal", year: 1957, genre: ["drama"]},
  { title: "Beauty and the Beast", year: 1991, genre: ["romance", "fantasy"]},
  { title: "Kingdom of Heaven", year: 2005, genre: ["drama"]},
  { title: "Seven Samurai", year: 1954, genre: ["drama"]},
  { title: "Outlaw King", year: 2018, genre: ["drama"]},
  { title: "The Tragedy of Macbeth", year: 2021, genre: ["drama"]},
  { title: "The Adventures of Robin Hood", year: 1938, genre: ["drama", "romance"]},
  { title: "Robin Hood", year: 1973, genre: ["comedy", "fantasy"]},
  { title: "The Passion of Joan of Arc", year: 1928, genre: ["drama"]},
  { title: "Romeo+Juliet", year: 1996, genre: ["romance", "drama"]},
  { title: "King Arthur: Legend of the Sword", year: 2017, genre: ["drama"]},
  { title: "Excalibur", year: 1981, genre: ["fantasy"]},
  { title: "The Man in the Iron Mask", year: 1939, genre: ["drama"]}
];



document.getElementById("pick").addEventListener("click", () => {
  const pickedList = document.getElementById("pickedList").value;
  const pickedGenres =
    Array.from(document.querySelectorAll(".genre:checked"))
         .map(g => g.value);
  const pickedYear = document.getElementById("pickedYear").value;
  let list;
    if (pickedList === "IMDB") list = IMDB;
    else list = movies;
  let filtered = list.filter(m => {
    if (pickedGenres.length === 0) return true;
    return pickedGenres.some(g => m.genre.includes(g));
  });
  filtered = filtered.filter(m => {
    if (pickedYear === "before1980") return m.year < 1980;
    if (pickedYear === "1980to2000") return m.year >= 1980 && m.year <= 2000;
    if (pickedYear === "after2000") return m.year > 2000;
    return true; 
  });
  const movie = filtered[Math.floor(Math.random() * filtered.length)];
  const result = document.getElementById("result");
  if (!movie) {
    result.innerHTML = "<p>No movies match your filters.</p>";
    return;
  }
  result.innerHTML = `
    <h2>${movie.title}</h2>
    <p>Genres: ${movie.genre.join(", ")}</p>
    <p>Year: ${movie.year}</p>
  `;
});

const IMDB = [
  { title: "The Shawshank Redemption", year: 1994, genre: ["drama"]},
  { title: "The Godfather", year: 1972, genre: ["drama"]},
  { title: "The Dark Knight", year: 2008, genre: ["drama"]},
  { title: "Schindler's List", year: 1993, genre: ["drama"]},
  { title: "12 Angry Men", year: 1957, genre: ["drama"]},
  { title: "The Return of the King", year: 2003, genre: ["fantasy", "drama"]},
  { title: "The Godfather Part II", year: 1974, genre: ["drama"]},
  { title: "The Fellowship of the Ring", year: 2001, genre: ["fantasy", "drama"]},
  { title: "Pulp Fiction", year: 1994, genre: ["drama"]},
  { title: "Inception", year: 2010, genre: ["drama", "fantasy"]},
  { title: "Forrest Gump", year: 1994, genre: ["drama", "comedy"]}, 
  { title: "Fight Club", year: 1999, genre: ["drama"]},
  { title: "The Good, the Bad, and the Ugly", year: 1966, genre: ["drama"]},
  { title: "The Two Towers", year: 2002, genre: ["fantasy", "drama"]},
  { title: "Interstellar", year: 2014, genre: ["fantasy", "drama"]},
  { title: "Goodfellas", year: 1990, genre: ["drama"]},
  { title: "The Matrix", year: 1999, genre: ["drama", "fantasy"]},
  { title: "The Empire Strikes Back", year: 1980, genre: ["drama", "fantasy"]},
  { title: "It's a Wonderful Life", year: 1946, genre: ["drama", "comedy", "romance"]},
  { title: "Se7en", year: 1995, genre: ["drama"]},
  { title: "Silence of the Lambs", year: 1991, genre: ["drama"]},
  { title: "The Green Mile", year: 1999, genre: ["drama"]},
  { title: "Terminator 2", year: 1991, genre: ["drama", "fantasy"]},
  { title: "City of God", year: 2002, genre: ["drama"]},
  { title: "Saving Private Ryan", year: 1998, genre: ["drama"]}
]



