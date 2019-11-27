    function ucfirst(str) {
        if(typeof str !== "string" || !str) return '';

        return str[0].toUpperCase() + str.substring(1);
    }

    console.log(ucfirst("test"));
    console.log(ucfirst("Test"));
    console.log(ucfirst(" test"));
    console.log(ucfirst("test Test tst"));
    console.log(ucfirst(""));
    console.log(ucfirst(null));
    console.log(ucfirst({}));

    function capitalize(str){
        if(typeof str !== "string" || !str) return '';

        return str.toLowerCase().split(" ").map(function(item) {
            return ucfirst(item);
        }).join(" ");
    }

    console.log(capitalize("test"));
    console.log(capitalize("Test"));
    console.log(capitalize(" test"));
    console.log(capitalize("test Test tst"));
    console.log(capitalize(""));
    console.log(capitalize(null));
    console.log(capitalize({}));

    function leet(str){
        if(typeof str !== "string" || !str) return '';

        return str.toLowerCase().split(" ").map(function(item) {
            return ucfirst(item);
        }).join(" ");
    }

    console.log(leet("test"));
    console.log(leet("Test"));
    console.log(leet(" test"));
    console.log(leet("test Test tst"));
    console.log(leet(""));
    console.log(leet(null));
    console.log(leet({}));

    function CamelCase(str) {
        return str.toLowerCase().replace(/(?:(^.)|(\s+.))/g, function(match) {
            return match.charAt(match.length-1).toUpperCase();
        });
    }
    
    console.log(CamelCase("hello world"));