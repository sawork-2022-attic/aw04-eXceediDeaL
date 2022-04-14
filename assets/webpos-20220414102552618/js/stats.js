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
        "total": "88",
        "ok": "88",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9244",
        "ok": "9244",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2479",
        "ok": "2479",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "3514",
        "ok": "3514",
        "ko": "-"
    },
    "percentiles1": {
        "total": "493",
        "ok": "493",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2606",
        "ok": "2606",
        "ko": "-"
    },
    "percentiles3": {
        "total": "9070",
        "ok": "9070",
        "ko": "-"
    },
    "percentiles4": {
        "total": "9244",
        "ok": "9244",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 36,
    "percentage": 75
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 12,
    "percentage": 25
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "3.429",
        "ok": "3.429",
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
        "total": "8044",
        "ok": "8044",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "9244",
        "ok": "9244",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "8545",
        "ok": "8545",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "484",
        "ok": "484",
        "ko": "-"
    },
    "percentiles1": {
        "total": "8446",
        "ok": "8446",
        "ko": "-"
    },
    "percentiles2": {
        "total": "8871",
        "ok": "8871",
        "ko": "-"
    },
    "percentiles3": {
        "total": "9244",
        "ok": "9244",
        "ko": "-"
    },
    "percentiles4": {
        "total": "9244",
        "ok": "9244",
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
        "total": "0.857",
        "ok": "0.857",
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
        "total": "88",
        "ok": "88",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "793",
        "ok": "793",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "457",
        "ok": "457",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "178",
        "ok": "178",
        "ko": "-"
    },
    "percentiles1": {
        "total": "477",
        "ok": "477",
        "ko": "-"
    },
    "percentiles2": {
        "total": "586",
        "ok": "586",
        "ko": "-"
    },
    "percentiles3": {
        "total": "782",
        "ok": "782",
        "ko": "-"
    },
    "percentiles4": {
        "total": "793",
        "ok": "793",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 36,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.571",
        "ok": "2.571",
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
