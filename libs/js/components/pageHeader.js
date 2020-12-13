export const pageHeader = () => {
  return `<div id="dino-logo">
      <img src="images/worldasaurus.png" alt="dino logo" width="80px" height="80px" />
      <div>
        <h1 id="main-title">Worldasaurus</h1>
        <div id="search-box">
          <div style="vertical-align: top">
            <input
              id="country-search"
              spellcheck="false"
              class="form-control mr-sm-2"
              type="search"
              aria-label="Search"
            />
            <div id="search-suggestions"></div>
          </div>
        </div>
      </div>
    </div>`;
};
