---
title: "Lists & Recommendations"
description: "Use my recommendation generator or look at some lists!"
type: page
---

Trying to find a movie to watch? 

<h1>The Movie Recommender</h1>

<h2>Lists</h2>
<select id= "pickedList">
  <option value= "movies">Thematic</option>
  <option value= "IMDB">IMDB Top</option>
</select>

<h2>Genre</h2>
<label><input type="checkbox" class="genre" value="romance"> Romance</label>
<label><input type="checkbox" class="genre" value="comedy"> Comedy</label>
<label><input type="checkbox" class="genre" value="drama"> Drama</label>
<label><input type="checkbox" class="genre" value="fantasy"> Fantasy</label>

<h2>Year</h2>
<select id="pickedYear">
  <option value="all">Any year</option>
  <option value="before1980">Before 1980</option>
  <option value="1980to2000">1980–2000</option>
  <option value="after2000">After 2000</option>
</select>

<br>

---

<br>
<button id="pick">Get Recommendation</button>

<div id="result"></div>

<script src="/movies.js"></script>




