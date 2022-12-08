import { html } from "./lib.js";

export const showSearchBar = (ctx) => {
  ctx.render();
}

export const searchBarTemplate = (ctx) => html`
  <main>
    <h1>Search for a city</h1>
    <form @submit=${(e) => onSubmit(e, ctx)} action="">
      <div class="search">
        <input type="text" name="city" class="searchField" placeholder="Which city are you looking for?" />
        <button type="submit" class="searchButton">
          <img src="/svg/search-svgrepo-com.svg" alt="icon" srcset="" />
        </button>
      </div>
    </form>
  </main>
  `;

async function onSubmit(e, ctx) {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const searchResult = formData.get('city').trim();

  ctx.page.redirect(`/r/?search=${searchResult}`);
}
