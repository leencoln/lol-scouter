var express = require('express');
var router = express.Router();

const { Kayn, REGIONS } = require('kayn');

const apiKey = "RGAPI-a3bacd41-288e-4985-b896-36409def3967";
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

router.post('/match-record', function(req, res, next) {
    let userName = req.body.userName;

    kayn.Summoner.by.name(userName)
        .region('kr')
        .callback(function(err, summoner) {
            if(summoner) {
                let accountID = summoner.accountId;

                kayn.Matchlist.by.accountID(accountID)
                    .then(playlog => {
                        let matchlist = playlog.matches;
                        let championMastery = {};

                        matchlist.forEach((match) => {
                            let championID = match.champion;

                            if(championMastery[championID]) {
                                championMastery[championID]++;
                            } else {
                                championMastery[championID] = 1;
                            }
                        })

                        res.send(championMastery);

                    })

            } else {
                res.send("Err");
            }
        })
})

router.post('/static-champs-list', function(req, res, next) {
    kayn.Static.Champion.list()
        .then(championsList => res.send(championsList.data));
})



module.exports = router;