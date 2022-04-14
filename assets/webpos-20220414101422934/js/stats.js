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
        "total": "78",
        "ok": "78",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "10727",
        "ok": "10727",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2798",
        "ok": "2798",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "4201",
        "ok": "4201",
        "ko": "-"
    },
    "percentiles1": {
        "total": "395",
        "ok": "395",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2989",
        "ok": "2989",
        "ko": "-"
    },
    "percentiles3": {
        "total": "10497",
        "ok": "10497",
        "ko": "-"
    },
    "percentiles4": {
        "total": "10727",
        "ok": "10727",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 35,
    "percentage": 73
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 2
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
        "total": "3.2",
        "ok": "3.2",
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
        "total": "9541",
        "ok": "9541",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "10727",
        "ok": "10727",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "10058",
        "ok": "10058",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "443",
        "ok": "443",
        "ko": "-"
    },
    "percentiles1": {
        "total": "9981",
        "ok": "9981",
        "ko": "-"
    },
    "percentiles2": {
        "total": "10334",
        "ok": "10334",
        "ko": "-"
    },
    "percentiles3": {
        "total": "10726",
        "ok": "10726",
        "ko": "-"
    },
    "percentiles4": {
        "total": "10727",
        "ok": "10727",
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
        "total": "0.8",
        "ok": "0.8",
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
        "total": "78",
        "ok": "78",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "805",
        "ok": "805",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "378",
        "ok": "378",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "206",
        "ok": "206",
        "ko": "-"
    },
    "percentiles1": {
        "total": "299",
        "ok": "299",
        "ko": "-"
    },
    "percentiles2": {
        "total": "585",
        "ok": "585",
        "ko": "-"
    },
    "percentiles3": {
        "total": "718",
        "ok": "718",
        "ko": "-"
    },
    "percentiles4": {
        "total": "785",
        "ok": "785",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 35,
    "percentage": 97
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 3
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
        "total": "2.4",
        "ok": "2.4",
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
