// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require("axios");

module.exports = function(api) {
  api.loadSource(async store => {
    const { data } = await axios.get(
      "https://api.chucknorris.io/jokes/search?query=knife"
    );

    const contentType = store.addContentType({
      typeName: "NorisJoke",
    });
    for (const item of data.result) {
      // You can transform data before adding it to GraphQL if needed
      let cleanPath = item.url.replace(/https:\/\/api.chucknorris.io/g, "");
      let newBody = item.value.replace(
        /Chuck Norris/g,
        "Chuck Norris The Great"
      );

      contentType.addNode({
        id: item.id,
        title: `Joke ${item.id}`,
        content: newBody,
        path: cleanPath,
        fields: {
          cat: item.category ? item.category : "",
          icon: item.icon_url,
        },
      });
    }
  });
};
