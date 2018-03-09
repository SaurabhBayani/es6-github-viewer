class GithubRepoExplorer {
  static save(data) {
    GithubRepoExplorer.repoCollection = data;
    return GithubRepoExplorer;
  }

  static render(data) {
    const renderedHTML = data.map(repo => {
      const desc = repo.description || 'N/A';

      return `<div class="repo-container">
        <strong><a href="${repo.html_url}" target="_blank">${repo.name}</a></strong>
        <p>${desc}</p>
        <div class="other-info">
          <strong>Stars: ${repo.stargazers_count}</strong>
          <strong>Watchers: ${repo.watchers_count}</strong>
          <strong>Forks: ${repo.forks_count}</strong>
          <strong>Issues: ${repo.open_issues_count}</strong>
        </div>
      </div>`;
    }).join('');

    document.querySelector(REPO_LIST_CONTAINER_ID).innerHTML = renderedHTML;
  }

  static filterByDesc(desc) {
    let filteredData = GithubRepoExplorer.repoCollection;

    if (desc) {
      filteredData = filteredData.filter(repo => {
        return (repo.description && repo.description.indexOf(desc) !== -1);
      });
    }

    if (filteredData.length) {
      GithubRepoExplorer.render(filteredData);
    }
  }
}

GithubRepoExplorer.repoCollection = [];
