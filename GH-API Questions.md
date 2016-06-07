**How does the API handle authentication?**

**Do I need to authenticate?**

You don’t need to authenticate, but if you don’t you are limited to 60 requests/hour, compared to 5,000 requests per hour for authenticated requests.

You’ll also get more data fields  returned, specifically:


**What can I do with an unauthenticated request?**
An unauthenticated request will give you less info about the user.  The fields returned will be:
login. id, avatar_url, gravatar_id, url, htm_url, followers_url, following_url, gists_url, starred_url, subscriptions_url, organizations_url, repos_url, events_url, received_events_url,  type, site_admin, name, company, blog, location, email, hireable, bio, public-repos, public-gists, followers, following, created-at, updated-at

**How can I authenticate my request?**
There are three ways that you can authenticate your request.

The first way is called Basic Authentication
curl -u "username" https://api.github.com

The second one is OAuth2 Token (sent in a header)
 curl -H "Authorization: token OAUTH-TOKEN" https://api.github.com

The third one is OAuth2 Token (sent as a parameter)
curl https://api.github.com/?access_token=OAUTH-TOKEN

**How do I ask the API for the profile info for a specific user?**
To ask the  API for profile info for a single specific user, type:   GET /users/:username
To ask for profile info for an authenticated user, which will give you more fields, type:
GET /user

**How do I ask the API for the repository listing for a specific user?**
**How do I ask the API for the recent, public activity for a specific user?**

**Is there a limit to the number of requests I can make?**
unauthenticated:  60 requests/hour,  5,000 requests per hour for authenticated requests.
**Is  there a way of extending that limit?What happens when I hit the limit?**
If you exceed your  limit for authentication requests, you will receive a notification informing you that you have been temporarily blocked.  If you want to extend your limit, and you’re using Basic Authentication or OAuth, you can probably fix the problem by caching API responses and using conditional requests.

**What if there is a LOT of data returned**
**How can I ask for more (or less) data from a request?**
**How do I know that there is more data available?**

**What are the endpoints for fetching the profile data for a user?**
**the organizations a user belongs to?**
**the repos a user has created ?**
**a filtered list of repos?**
**a sorted list of repos?**
**public events for a user?**

Do endpoints have to do with GET requests????  The only section I can find that discusses endpoints talks about Root Endpoints and endpoint categories.

Perhaps HTTP verbs??


**When fetching public events for a user, how many results will be returned by default?**
By default, 30 page items will be returned.

**What limitations exist on fetching more results ?**
 If you need more you can specify with the ?page parameter or set a custom page size with the ?per-page parameter.
Example: curl 'https://api.github.com/user/repos?page=2&per_page=100'

**What is the basic structure of the results ? What fields are included in each result?**
The basic structure of the results is like an object.  The “keys” (fields) for single user results are:
login. id, avatar_url, gravatar_id, url, htm_url, followers_url, following_url, gists_url, starred_url, subscriptions_url, organizations_url, repos_url, events_url, received_events_url,  type, site_admin, name, company, blog, location, email, hireable, bio, public-repos, public-gists, followers, following, created-at, updated-at

**What are the data types for each field?**
The data type for these fields is  primarily strings (many url’s), although site_admin and hireable return booleans, and public_repos, public_gists, followers and following return numbers.
