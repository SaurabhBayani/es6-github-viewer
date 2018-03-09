class SearchForm {
  static handleSearchByName() {
    let userName = document.querySelector(USER_NAME_SEARCH_FIELD).value;

    GithubRepoAPI.fetchByName(userName)
      .then(response => {
        if (response.status !== 200) {
          console.log('Something wrong with the API or data passed');
        }
        return response.json();
      })
      .then(repoData => {
        GithubRepoExplorer.save(repoData).render(repoData);
      })
      .catch(err => {
        console.log(err);
      });
  }

  static handleSearchByNameAndDesc(event) {
    if (event.keyCode == 13) {
      GithubRepoExplorer.filterByDesc(this.value);
    }
  }
}
