"use strict";

const locationPage = {
    templateUrl: `app/location/location.html`,

    controller: ["Api", function(Api) {
        const vm = this;
        // sendInfo is passing location criteria from the HTML which goes into criteria 
        vm.sendInfo = function(criteria) {
            Api.setlocationCriteria(criteria)
        }

    }]
};



angular
.module("App")
.component("locationPage", locationPage);