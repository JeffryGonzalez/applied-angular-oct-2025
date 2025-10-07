# Links

We want in our application a way for the user to get a list of helpful links to various Angular, HTML, Css resources.

Users will be able to submit new links.

## Todo

An API is being developed that will return a list of links that have been submitted.

They will look like this:

```http
GET https://api.some-fake-server.com/links
Accept: application/json
```

Response

```http
200 Ok
Content-Type: application/json

[
    {
        "id": "guid",
        "title": "Angular Documentation",
        "description": "The docs, yo",
        "link": "https://angular.dev",
        "added": "DATETIMEOFFSET",
        "addedBy": "user id of the person that submitted it"
    }
]
```
