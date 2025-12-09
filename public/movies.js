const movies = [
  { title: "Monty Python and the Holy Grail", year: 1975, genre: ["comedy"] },
  { title: "Othello", year: 1995, genre: ["drama"] },
  { title: "10 Things I Hate About You", year: 1999, genre: ["romance"] },
  { title: "Fellowship of the Ring", year: 2001, genre: ["fantasy"] }
];

document.getElementById("pick").addEventListener("click", () => {
  const pickedGenres =
    Array.from(document.querySelectorAll(".genre:checked"))
         .map(g => g.value);
  const pickedYear = document.getElementById("pickedYear").value;

  let filtered = movies.filter(m => {
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

