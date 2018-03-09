const GITHUB_REPO_API_ENDPOINT = 'https://api.github.com/users/';

class GithubRepoAPI {
  static fetchByName(userName) {
    return fetch(GITHUB_REPO_API_ENDPOINT + `${userName}/repos`);
  }
}
