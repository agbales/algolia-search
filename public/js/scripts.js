var client = algoliasearch("8NVJERMPU5", "986a4ac652f7701fc86db95ae11ae55c");
var index = client.initIndex('getstarted_actors');

index.setSettings({
  searchableAttributes: [
    'name'
  ],
  customRanking: ['desc(rating)'],
});

var search = instantsearch({
  appId: '8NVJERMPU5',
  apiKey: '986a4ac652f7701fc86db95ae11ae55c',
  indexName: 'getstarted_actors',
  urlSync: true
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-input'
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    hitsPerPage: 12,
    templates: {
      item: document.getElementById('hit-template').innerHTML,
      empty: "We didn't find any results for the search <em>\"{{query}}\"</em>"
    },
    cssClasses: {
      root: 'row',
      item: 'col-lg-3 col-md-4 col-sm-6'
    }
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination'
  })
);

search.start();
