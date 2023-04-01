"use strict"

function compareArrays(arr1, arr2) {
    if (arr1.length === arr2.length) {
        return arr1.every((element, i) => element === arr2[i]);
    }
    return false;
}

function getUsersNamesInAgeRange(people, gender) {
    if ((gender !== "мужской" && gender !== "женский") || (people === [])) {
        return 0;
    } else {
        return people.filter(people => people.gender === gender)
        .map(people => people.age)
        .reduce((peopleAge, item, index, arr) => {
            peopleAge += item;
            if (index === arr.length - 1) {
                return peopleAge / arr.length
            }
            return peopleAge;
        }, 0)
    } 
}
