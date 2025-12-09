const movies = [
  { title: "Monty Python and the Holy Grail", year: 1975, genre: ["comedy", "fantasy"] },
  { title: "Othello", year: 1995, genre: ["drama", "romance"] },
  { title: "10 Things I Hate About You", year: 1999, genre: ["romance", "comedy"] },
  { title: "Fellowship of the Ring", year: 2001, genre: ["fantasy"] },
  { title: "The Green Knight", year: 2021, genre: ["fantasy"]},
  { title: "The Lion King", year: 1994, genre: ["drama", "comedy"]},
  { title: "The Princess Bride", year: 1987, genre: ["comedy", "romance", "fantasy"]}
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
  { title: "12 Angry Men", year: 1957, genre: ["drama"]}
]



