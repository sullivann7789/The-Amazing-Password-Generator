

var password = [1,2,3,4,5,6,7,8,9];
//make password user choice and then adapt functions to user input, use additems to pass as password length/string

function createint(max) {
    return Math.floor(Math.random() * max);
}

function createpassword() {
    var prompt = window.confirm("Would You Like A New Password?");

    var countcharacter = window.prompt("How many characters would you like?");
    function initresponse () {    
        if (countcharacter == "8") {
            alert("Pick a number that is greater than 8");
            return; }
        else if (countcharacter == "9"){
           alert("Perfect, this is a manageable value");
        }
        else if (countcharacter > 9){
            alert("Perfect, this is a manageable value");
            function additemstopass() {
               var passadd = Number(countcharacter);
               var addvalue = passadd - password.length;
               var addarray = addvalue + password.length;
               for (var i = password.length; i < addarray; i++) {
                password.push(i);
               };              
            };
            additemstopass();
            console.log(password);
        }
        else {
            alert("please input a character 'Ex: 10': \n in numeric form above 8 \n and less than 128");
            return;
        };
    
        };
        var passadd = Number(countcharacter);
        var addvalue = passadd - password.length;
        var addarray = addvalue + password.length;
        function passthru () {
            for (var i = password.length; i < addarray; i++) {
         password.push(i);
        }; 
        };
 
    var upcsltrs = window.confirm("Would you like uppercase characters in your password?");
    if (!upcsltrs) {
  

        window.alert("No big deal! onto the next question!");

        var lwcsltrs = window.confirm("Would you like lowercase characters in your password?");
        if (!lwcsltrs) {
                window.alert("Quite Alright Then! Onto the Next!");
                var spclchts = window.confirm("Would you like special characters in your password?");
                if (!spclchts) {
                    window.alert("Great! Moving on to our final question!");
                    var numchts = window.confirm("Would you like numbers in your password?");
                    if (!numchts) {
                    window.alert(" W#$F%$@K!!!! What do you want then!!! ")
                    return;
                    }else{

                        function rep1NMC() {
                            var numbers = ["1","2","3","4","5","6","7","8","9","0"];
                            var nmbrgenerate = Math.floor(Math.random() * numbers.length);
                            password[createint(9)] = numbers[nmbrgenerate];
                            console.log(password);
                            };
                    
                    
                    
                        // assign function for each character possibility, and then assign each index a character based on integer outcome 0,1,2,3 
                    
                        function randomassign() {
                            (createint(1));
                            if (createint(1) == 0) {
                                rep1NMC();
                            };
                        };
                        for (var i = 0; i < 100; i++) {
                            randomassign(password[i]);
                        };
                    
                        function repeat () {
                            if (password[0] === 0) {
                                randomassign(password[0]);
                            }
                        }
                        console.log(password[createint(9)]);
                    
                        console.log(password);
                    };
                }else{
                    window.alert("Great! Moving on to our final question!");
                    var numchts = window.confirm("Would you like numbers in your password?");
                    if (!numchts) {
            
                        function rep1SC() {
                            var spcllttrs = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "[", "]", "{", "}", "|", ";", ":", "'", "/", "?", "<",">",".",","];
                            var spclgenerate = Math.floor(Math.random() * spcllttrs.length);
                            password[createint(9)] = spcllttrs[spclgenerate];
                            console.log(password);
                            };
                    
                    
                    
                        // assign function for each character possibility, and then assign each index a character based on integer outcome 0,1,2,3 
                    
                        function randomassign() {
                            (createint(1));
                            if (createint(1) == 0) {
                                rep1SC();
                            };
                        };
                        for (var i = 0; i < 100; i++) {
                            randomassign(password[i]);
                        };
                    
                        function repeat () {
                            if (password[0] === 0) {
                                randomassign(password[0]);
                            }
                        }
                        console.log(password[createint(9)]);
                    
                        console.log(password);
                    }else{
                        function rep1NMC() {
                            var numbers = ["1","2","3","4","5","6","7","8","9","0"];
                            var nmbrgenerate = Math.floor(Math.random() * numbers.length);
                            password[createint(9)] = numbers[nmbrgenerate];
                            console.log(password);
                            };

                        function rep1SC() {
                            var spcllttrs = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "[", "]", "{", "}", "|", ";", ":", "'", "/", "?", "<",">",".",","];
                            var spclgenerate = Math.floor(Math.random() * spcllttrs.length);
                            password[createint(9)] = spcllttrs[spclgenerate];
                            console.log(password);
                            };
                    
                    
                    
                        // assign function for each character possibility, and then assign each index a character based on integer outcome 0,1,2,3 
                    
                        function randomassign() {
                            (createint(2));
                            if (createint(2) == 0) {
                                rep1NMC();
                            }
                            else if (createint(2) == 1) {
                                rep1SC();
                            };
                        };
                        for (var i = 0; i < 100; i++) {
                            randomassign(password[i]);
                        };

                    }

                };
        }else{
            

            function rep1LC() {
                var lclttrs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
                var lcgenerate = Math.floor(Math.random() * lclttrs.length);
                password[createint(9)] = lclttrs[lcgenerate];
                console.log(password);
                };

            window.alert("Quite Alright Then! Onto the Next!");
            var spclchts = window.confirm("Would you like special characters in your password?");
            
            if (!spclchts) {
                var numchts = window.confirm("Would you like numbers in your password?");
                if (!numchts) { function randomassign() {
                        (createint(1));
                        if (createint(1) == 0) {
                            rep1LC();
                        }
                        
                        for (var i = 0; i < 100; i++) {
                            randomassign(password[i]);
                        };
                
                        function repeat () {
                        if (password[0] === 0) {
                            randomassign(password[0]);
                        }
                        }
                    console.log(password[createint(9)]);
                
                    console.log(password);       
                    window.alert("Generating Password Now, click when ready...")

                    };
                }else{
                    window.alert("Generating Password Now, click when ready...")

        
                function rep1NMC() {
                    var numbers = ["1","2","3","4","5","6","7","8","9","0"];
                    var nmbrgenerate = Math.floor(Math.random() * numbers.length);
                    password[createint(9)] = numbers[nmbrgenerate];
                    console.log(password);
                    };
        
        
        
                // assign function for each character possibility, and then assign each index a character based on integer outcome 0,1,2,3 
        
                function randomassign() {
                    (createint(2));
                    if (createint(2) == 0) {
                        rep1LC();
                    }
                    else if (createint(2) == 1) {
                        rep1NMC();
                    };
                };
                for (var i = 0; i < 100; i++) {
                    randomassign(password[i]);
                };
            
                function repeat () {
                    if (password[0] === 0) {
                        randomassign(password[0]);
                    }
                }
                console.log(password[createint(9)]);
            
                console.log(password);
            

            
                };
            }else{
                function rep1SC() {
                    var spcllttrs = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "[", "]", "{", "}", "|", ";", ":", "'", "/", "?", "<",">",".",","];
                    var spclgenerate = Math.floor(Math.random() * spcllttrs.length);
                    password[createint(9)] = spcllttrs[spclgenerate];
                    console.log(password);
                    };

                function randomassign() {
                    (createint(2));
                    if (createint(2) == 0) {
                        rep1LC();
                    }
                    else if (createint(2) == 1) {
                        rep1SC();
                    };
                };
                for (var i = 0; i < 100; i++) {
                    randomassign(password[i]);
                };
            }
        }
    
    }else{
        function rep1UC() {
            var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
            var alphkey = Math.floor(Math.random() * uppercase.length);
            password[createint(9)] = uppercase[alphkey];
            console.log(password);
            };

        var lwcsltrs = window.confirm("Would you like lowercase characters in your password?");

        if (!lwcsltrs) {

                window.alert("Quite Alright Then! Onto the Next!");
                var spclchts = window.confirm("Would you like special characters in your password?");

                if (!spclchts) {
                    window.alert("Great! Moving on to our final question!");
                    var numchts = window.confirm("Would you like numbers in your password?");
                    if (!numchts) {
                        function randomassign() {
                            (createint(1));
                            if (createint(1) == 0) {
                                rep1UC();
                            };
                        };
                        for (var i = 0; i < 100; i++) {
                            randomassign(password[i]);
                        };
                    
                        function repeat () {
                            if (password[0] === 0) {
                                randomassign(password[0]);
                            }
                        }
                        console.log(password[createint(9)]);
                    
                        console.log(password);
                    }else{


                        function rep1NMC() {
                            var numbers = ["1","2","3","4","5","6","7","8","9","0"];
                            var nmbrgenerate = Math.floor(Math.random() * numbers.length);
                            password[createint(9)] = numbers[nmbrgenerate];
                            console.log(password);
                            };
                    
                    
                    
                        // assign function for each character possibility, and then assign each index a character based on integer outcome 0,1,2,3 
                    
                        function randomassign() {
                            (createint(2));
                            if (createint(2) == 0) {
                                rep1UC();
                            }
                            else if (createint(2) == 1) {
                                rep1NMC();
                            };
                        };

                        for (var i = 0; i < 100; i++) {
                            randomassign(password[i]);
                        };
                        console.log(password[createint(9)]);
                    
                        console.log(password);
                    };
                }else{
                    window.alert("Great! Moving on to our final question!");
                    var numchts = window.confirm("Would you like numbers in your password?");
                    if (!numchts) {
            
                        function rep1SC() {
                            var spcllttrs = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "[", "]", "{", "}", "|", ";", ":", "'", "/", "?", "<",">",".",","];
                            var spclgenerate = Math.floor(Math.random() * spcllttrs.length);
                            password[createint(9)] = spcllttrs[spclgenerate];
                            console.log(password);
                            };
                    
                    
                    
                        // assign function for each character possibility, and then assign each index a character based on integer outcome 0,1,2,3 
                    
                        function randomassign() {
                            (createint(2));
                            if (createint(2) == 0) {
                                rep1UC();
                            }
                            (createint(2));
                            if (createint(2) == 1) {
                                rep1SC();
                            };
                        };
                        for (var i = 0; i < 100; i++) {
                            randomassign(password[i]);
                        };
                    
                        function repeat () {
                            if (password[0] === 0) {
                                randomassign(password[0]);
                            }
                        }
                        console.log(password[createint(9)]);
                    
                        console.log(password);
                    };
                };
        }else{
            

            function rep1LC() {
                var lclttrs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
                var lcgenerate = Math.floor(Math.random() * lclttrs.length);
                password[createint(9)] = lclttrs[lcgenerate];
                console.log(password);
                };

            window.alert("Quite Alright Then! Onto the Next!");
            var spclchts = window.confirm("Would you like special characters in your password?");
            
            if (!spclchts) {
                var numchts = window.confirm("Would you like numbers in your password?");
                if (!numchts) { function randomassign() {
                        (createint(2));
                        if (createint(2) == 0) {
                            rep1LC();
                        } else if (createint(2) == 1) {
                            rep1UC();
                        };
                    };
                    for (var i = 0; i < 100; i++) {
                        randomassign(password[i]);
                    };

                    
                    console.log(password[createint(9)]);
                
                    console.log(password);       
                    window.alert("Generating Password Now, click when ready...")

                }else{
                    window.alert("Generating Password Now, click when ready...")

        
                function rep1NMC() {
                    var numbers = ["1","2","3","4","5","6","7","8","9","0"];
                    var nmbrgenerate = Math.floor(Math.random() * numbers.length);
                    password[createint(9)] = numbers[nmbrgenerate];
                    console.log(password);
                    };
        
        
        
                    // assign function for each character possibility, and then assign each index a character based on integer outcome 0,1,2,3 
        
                function randomassign() {
                    (createint(2));
                    if (createint(2) == 0) {
                        rep1LC();
                    }
                    else if (createint(2) == 1) {
                        rep1NMC();
                    };
                };
                for (var i = 0; i < 30; i++) {
                    randomassign(password[i]);
                };
                
                    function repeat () {
                        if (password[0] === 0) {
                            randomassign(password[0]);
                        }
                    }
                    console.log(password[createint(9)]);
                
                    console.log(password);
            

            
                };
            }else{

            function rep1UC() {
                var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
                var alphkey = Math.floor(Math.random() * uppercase.length);
                password[createint(9)] = uppercase[alphkey];
                console.log(password);
                };


            function rep1LC() {
                var lclttrs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
                var lcgenerate = Math.floor(Math.random() * lclttrs.length);
                password[createint(9)] = lclttrs[lcgenerate];
                console.log(password);
                };
                
            function rep1SC() {
                var spcllttrs = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "[", "]", "{", "}", "|", ";", ":", "'", "/", "?", "<",">",".",","];
                var spclgenerate = Math.floor(Math.random() * spcllttrs.length);
                password[createint(9)] = spcllttrs[spclgenerate];
                console.log(password);
                };
                
            function rep1NMC() {
                var numbers = ["1","2","3","4","5","6","7","8","9","0"];
                var nmbrgenerate = Math.floor(Math.random() * numbers.length);
                password[createint(9)] = numbers[nmbrgenerate];
                console.log(password);
                };



                // assign function for each character possibility, and then assign each index a character based on integer outcome 0,1,2,3 

            function randomassign() {
                (createint(4));
                if (createint(4) == 0) {
                    rep1UC();
                } 
                else if (createint(4) == 1) {
                    rep1LC();
                }
                else if (createint(4) == 2) {
                    rep1SC();
                }
                else if (createint(4) == 3) {
                    rep1NMC();
                };
                };
                for (var i = 0; i < 100; i++) {
                    randomassign(password[i]);
                };

                function repeat () {
                    if (password[0] === 0) {
                        randomassign(password[0]);
                    }
                }
                console.log(password[createint(9)]);

                console.log(password);
                };
                };
            };
password.join();
};


createpassword();


window.alert("Your Password is! : \n" + password.join(""));
console.log(password.join());







