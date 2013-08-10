(function (window) {
    "use strict";

    window.addEventListener("load", onloaded);

    function onloaded() {
        window.removeEventListener("load", onloaded);


        //============================================
        // Underscore(Lo-Dash)のテストコード
        //============================================

        // Collections
        testCollections();
    }



    // Arrays -----------------
    function testCollections() {
        var numbers = [1,2,3,4,5];
        var persons = [
            {
                name        : "jonny",
                age         : 24,
                birth_month : 8,
                gender      : 0 // 0 : male, 1, female
            },
            {
                name        : "paul",
                age         : 52,
                birth_month : 7,
                gender      : 1
            },
            {
                name        : "under score",
                age         : 32,
                birth_month : 8,
                gender      : 0
            }
        ];

        // _.each ---------
        _.each(numbers, function (number) {
            console.log("number : " + number);
        });

        _.each(persons, function (person) {
            console.log("person name : " + person.name);
        });

        // _.find --------

        // 一番最初に条件が真の値(偶数)を返す
        var even = _.find(numbers, function (number) {
            return number % 2 === 0;
        });
        console.log("even : " + even);


        // _.filter -------

        // 一番最初に条件が真の値(偶数)の配列を返す
        var evens = _.filter(numbers, function (number) {
            return number % 2 === 0;
        });
        console.log("evens : " + evens);

        // _.where
        // 条件が真になる(性別が男の)オブジェクトの配列を返す
        var males = _.where(persons, {gender : 0});
        console.log(JSON.stringify(males));


        // _.findWhere(list, properties)
        // 条件が真になる(性別が男の)最初のオブジェクトを返す
        var male = _.findWhere(persons, {gender : 0});
        console.log(JSON.stringify(male));

        // _.contains(list, value)
        // 配列の中に一つでも第2引数に渡した値と同じものがあるかどうか
        var isContain1 = _.contains(numbers, 1);
        var isContain2 = _.contains(numbers, 100);
		console.log("isContain1 : " + isContain1);
		console.log("isContain2 : " + isContain2);

        // _.pluck(list, propertyName)
        // オブジェクトの配列から特定のプロパティの配列を返す
        var names = _.pluck(persons, "name");
        console.log("names : " + names);

        // _.max(list, [iterator], [context])
        // 配列のなかから値が一番大きい物を返す
        var oldestPerson = _.max(persons, function (person) {
            return person.age;
        });
        console.log(JSON.stringify(oldestPerson));

        // _.min(list, [iterator], [context])
        // 配列のなかから値が一番小さい物を返す
        var youngestPerson = _.min(persons, function (person) {
            return person.age;
        });
        console.log(JSON.stringify(youngestPerson));

        // _.sortBy(list, iterator, [context])
        // 配列内の値の小さい順にソートをする
        var orderByYoung = _.sortBy(persons, function (person) {
            return person.age;
        });
        console.log(JSON.stringify(orderByYoung));

    };

})(window);