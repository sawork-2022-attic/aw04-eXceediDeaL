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
        "total": "47",
        "ok": "47",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7732",
        "ok": "7732",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2217",
        "ok": "2217",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2861",
        "ok": "2861",
        "ko": "-"
    },
    "percentiles1": {
        "total": "686",
        "ok": "686",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2555",
        "ok": "2555",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7557",
        "ok": "7557",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7732",
        "ok": "7732",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 33,
    "percentage": 69
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 15,
    "percentage": 31
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.692",
        "ok": "3.692",
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
        "total": "6571",
        "ok": "6571",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7732",
        "ok": "7732",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "7144",
        "ok": "7144",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "400",
        "ok": "400",
        "ko": "-"
    },
    "percentiles1": {
        "total": "7129",
        "ok": "7129",
        "ko": "-"
    },
    "percentiles2": {
        "total": "7356",
        "ok": "7356",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7732",
        "ok": "7732",
        "ko": "-"
    },
    "percentiles4": {
        "total": "7732",
        "ok": "7732",
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
        "total": "0.923",
        "ok": "0.923",
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
        "total": "47",
        "ok": "47",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1216",
        "ok": "1216",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "575",
        "ok": "575",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "267",
        "ok": "267",
        "ko": "-"
    },
    "percentiles1": {
        "total": "593",
        "ok": "593",
        "ko": "-"
    },
    "percentiles2": {
        "total": "697",
        "ok": "697",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1213",
        "ok": "1213",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1215",
        "ok": "1215",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 33,
    "percentage": 92
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3,
    "percentage": 8
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.769",
        "ok": "2.769",
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
