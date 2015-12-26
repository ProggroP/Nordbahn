/**
 * Get the departures of a given station
 * Queries: https://datnet-nbe.etc-consult.de/datnet-nbe/xml?bhf=ATM
 * and: https://datnet-nbe.etc-consult.de/datnet-nbe/xml?bhf=?
 * formats xml to string and returns
 */

var UI = require('ui');
var ajax = require('ajax');
var departures = 3;
var result = 'Abf | Ziel | Vsp\n';
var stations = ['AH','ATM','AA'];

var card = new UI.Card({
  title: 'NRDBHN',
  body: 'Lade Abfahrten ...',
  scrollable: true
});

card.show();
card.style('small');

stations.forEach(function(station) {
  ajax({ url: 'https://datnet-nbe.etc-consult.de/datnet-nbe/xml?bhf=' + station, type: 'text' },
    function(data) {
      result = result + data.match(/<name>(.*?)<\/name>/)[1] + '\n';
      
      var filtered = data.match(/<abfahrt[\s\S]*?<\/abfahrt>/gm);
      var num = departures;
      
      if (filtered.length < departures) num = filtered.length;
      
      for (var i = 0; i < num; i++) {
        result = result + filtered[i].match(/<zeit>(.*?)<\/zeit>/)[1] + ' ';
        result = result + filtered[i].match(/<ziel.+>(.*?)<\/ziel>/)[1] + ' ';
        result = result + filtered[i].match(/<prognosemin>(.*?)<\/prognosemin>/)[1] + '\n';
      }
      
      card.body(result);
    }
  );
});