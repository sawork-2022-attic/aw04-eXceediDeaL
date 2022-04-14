var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "48",
        "ok": "48",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "101",
        "ok": "101",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5896",
        "ok": "5896",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2018",
        "ok": "2018",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2256",
        "ok": "2256",
        "ko": "-"
    },
    "percentiles1": {
        "total": "938",
        "ok": "938",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2643",
        "ok": "2643",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5895",
        "ok": "5895",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5896",
        "ok": "5896",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 23,
    "percentage": 48
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 8
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 21,
    "percentage": 44
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4",
        "ok": "4",
        "ko": "-"
    }
},
contents: {
"req_root-request-4b813": {
        type: "REQUEST",
        name: "root_request",
path: "root_request",
pathFormatted: "req_root-request-4b813",
stats: {
    "name": "root_request",
    "numberOfRequests": {
        "total": "12",
        "ok": "12",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "5794",
        "ok": "5794",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5896",
        "ok": "5896",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5861",
        "ok": "5861",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "47",
        "ok": "47",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5893",
        "ok": "5893",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5894",
        "ok": "5894",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5896",
        "ok": "5896",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5896",
        "ok": "5896",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 12,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    }
}
    },"req_add-request-92229": {
        type: "REQUEST",
        name: "add_request",
path: "add_request",
pathFormatted: "req_add-request-92229",
stats: {
    "name": "add_request",
    "numberOfRequests": {
        "total": "36",
        "ok": "36",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "101",
        "ok": "101",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1592",
        "ok": "1592",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "736",
        "ok": "736",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "468",
        "ok": "468",
        "ko": "-"
    },
    "percentiles1": {
        "total": "638",
        "ok": "638",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1170",
        "ok": "1170",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1494",
        "ok": "1494",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1558",
        "ok": "1558",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 23,
    "percentage": 64
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 11
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 9,
    "percentage": 25
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
