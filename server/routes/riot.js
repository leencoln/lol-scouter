var express = require('express');
var router = express.Router();

const { Kayn, REGIONS } = require('kayn');

const apiKey = "RGAPI-d213fd3b-a433-4469-8727-f455d3ead121";
const config = {
    region: REGIONS.KOREA,
    debugOptions: {
        isEnabled: true,
        showKey: false
    },
    requestOptions: {
        shouldRetry: true,
        numberOfRetriesBeforeAbort: 3,
        delayBeforeRetry: 1000,
        burst: false,
    },
    cacheOptions: {
        cache: null,
        timeToLives: {
            useDefault: false,
            byGroup: {},
            byMethod: {}
        }
    }
}

const kayn = Kayn(apiKey)(config);

router.post('/', function(req, res, next) {
    let userName = req.body.userName;
    
    kayn.Summoner.by.name(userName)
        .region('kr')
        .callback(function(err, summoner) {
            if(summoner) {
                let summonerID = summoner.id;

                kayn.LeaguePositions.by.summonerID(summonerID)
                    .then(userInfo => res.send(userInfo[0]));
            } else {
                res.send("Err");
            }
        })
});

module.exports = router;