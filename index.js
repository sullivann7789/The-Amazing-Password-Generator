
var password = [1,2,3,4,5,6,7,8,9];

function createint(max) {
    return Math.floor(Math.random() * max);
}

function createpassword() {
    var prompt = window.confirm("Would You Like A New Password?");
if (!prompt) {
    return;
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
                        randomassign(password[1]);
                        randomassign(password[2]);
                        randomassign(password[3]);
                        randomassign(password[4]);
                        randomassign(password[5]);
                        randomassign(password[6]);
                        randomassign(password[7]);
                        randomassign(password[8]);
                        randomassign(password[0]);
                        randomassign(password[1]);
                        randomassign(password[2]);
                        randomassign(password[3]);
                        randomassign(password[4]);
                        randomassign(password[5]);
                        randomassign(password[6]);
                        randomassign(password[7]);
                        randomassign(password[8]);
                        randomassign(password[0]);
                        randomassign(password[1]);
                        randomassign(password[2]);
                        randomassign(password[3]);
                        randomassign(password[4]);
                        randomassign(password[5]);
                        randomassign(password[6]);
                        randomassign(password[7]);
                        randomassign(password[8]);
                        randomassign(password[0]);
                        randomassign(password[1]);
                        randomassign(password[2]);
                        randomassign(password[3]);
                        randomassign(password[4]);
                        randomassign(password[5]);
                        randomassign(password[6]);
                        randomassign(password[7]);
                        randomassign(password[8]);
                        randomassign(password[0]);
                    
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
                        randomassign(password[1]);
                        randomassign(password[2]);
                        randomassign(password[3]);
                        randomassign(password[4]);
                        randomassign(password[5]);
                        randomassign(password[6]);
                        randomassign(password[7]);
                        randomassign(password[8]);
                        randomassign(password[0]);
                        randomassign(password[1]);
                        randomassign(password[2]);
                        randomassign(password[3]);
                        randomassign(password[4]);
                        randomassign(password[5]);
                        randomassign(password[6]);
                        randomassign(password[7]);
                        randomassign(password[8]);
                        randomassign(password[0]);
                        randomassign(password[1]);
                        randomassign(password[2]);
                        randomassign(password[3]);
                        randomassign(password[4]);
                        randomassign(password[5]);
                        randomassign(password[6]);
                        randomassign(password[7]);
                        randomassign(password[8]);
                        randomassign(password[0]);
                        randomassign(password[1]);
                        randomassign(password[2]);
                        randomassign(password[3]);
                        randomassign(password[4]);
                        randomassign(password[5]);
                        randomassign(password[6]);
                        randomassign(password[7]);
                        randomassign(password[8]);
                        randomassign(password[0]);
                    
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
                        (createint(1));
                        if (createint(1) == 0) {
                            rep1LC();
                        }
                        
                    randomassign(password[1]);
                    randomassign(password[2]);
                    randomassign(password[3]);
                    randomassign(password[4]);
                    randomassign(password[5]);
                    randomassign(password[6]);
                    randomassign(password[7]);
                    randomassign(password[8]);
                    randomassign(password[0]);
                    randomassign(password[1]);
                    randomassign(password[2]);
                    randomassign(password[3]);
                    randomassign(password[4]);
                    randomassign(password[5]);
                    randomassign(password[6]);
                    randomassign(password[7]);
                    randomassign(password[8]);
                    randomassign(password[0]);
                    randomassign(password[1]);
                    randomassign(password[2]);
                    randomassign(password[3]);
                    randomassign(password[4]);
                    randomassign(password[5]);
                    randomassign(password[6]);
                    randomassign(password[7]);
                    randomassign(password[8]);
                    randomassign(password[0]);
                    randomassign(password[1]);
                    randomassign(password[2]);
                    randomassign(password[3]);
                    randomassign(password[4]);
                    randomassign(password[5]);
                    randomassign(password[6]);
                    randomassign(password[7]);
                    randomassign(password[8]);
                    randomassign(password[0]);
                
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
                randomassign(password[1]);
                randomassign(password[2]);
                randomassign(password[3]);
                randomassign(password[4]);
                randomassign(password[5]);
                randomassign(password[6]);
                randomassign(password[7]);
                randomassign(password[8]);
                randomassign(password[0]);
                randomassign(password[1]);
                randomassign(password[2]);
                randomassign(password[3]);
                randomassign(password[4]);
                randomassign(password[5]);
                randomassign(password[6]);
                randomassign(password[7]);
                randomassign(password[8]);
                randomassign(password[0]);
                randomassign(password[1]);
                randomassign(password[2]);
                randomassign(password[3]);
                randomassign(password[4]);
                randomassign(password[5]);
                randomassign(password[6]);
                randomassign(password[7]);
                randomassign(password[8]);
                randomassign(password[0]);
                randomassign(password[1]);
                randomassign(password[2]);
                randomassign(password[3]);
                randomassign(password[4]);
                randomassign(password[5]);
                randomassign(password[6]);
                randomassign(password[7]);
                randomassign(password[8]);
                randomassign(password[0]);
            
                function repeat () {
                    if (password[0] === 0) {
                        randomassign(password[0]);
                    }
                }
                console.log(password[createint(9)]);
            
                console.log(password);
            

            
                };
            }
        }
    
    }else{

        var lwcsltrs = window.confirm("Would you like lowercase characters in your password?");

        if (!lwcsltrs) {

            function rep1UC() {
                var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
                var alphkey = Math.floor(Math.random() * uppercase.length);
                password[createint(9)] = uppercase[alphkey];
                console.log(password);
                };

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
                        randomassign(password[1]);
                        randomassign(password[2]);
                        randomassign(password[3]);
                        randomassign(password[4]);
                        randomassign(password[5]);
                        randomassign(password[6]);
                        randomassign(password[7]);
                        randomassign(password[8]);
                        randomassign(password[0]);
                        randomassign(password[1]);
                        randomassign(password[2]);
                        randomassign(password[3]);
                        randomassign(password[4]);
                        randomassign(password[5]);
                        randomassign(password[6]);
                        randomassign(password[7]);
                        randomassign(password[8]);
                        randomassign(password[0]);
                        randomassign(password[1]);
                        randomassign(password[2]);
                        randomassign(password[3]);
                        randomassign(password[4]);
                        randomassign(password[5]);
                        randomassign(password[6]);
                        randomassign(password[7]);
                        randomassign(password[8]);
                        randomassign(password[0]);
                        randomassign(password[1]);
                        randomassign(password[2]);
                        randomassign(password[3]);
                        randomassign(password[4]);
                        randomassign(password[5]);
                        randomassign(password[6]);
                        randomassign(password[7]);
                        randomassign(password[8]);
                        randomassign(password[0]);
                    
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
                            if (createint(1) == 0) {
                                rep1UC();
                            }
                            else if (createint(2) == 1) {
                                rep1NMC();
                            };
                        };

                        randomassign(password[1]);
                        randomassign(password[2]);
                        randomassign(password[3]);
                        randomassign(password[4]);
                        randomassign(password[5]);
                        randomassign(password[6]);
                        randomassign(password[7]);
                        randomassign(password[8]);
                        randomassign(password[0]);
                        randomassign(password[1]);
                        randomassign(password[2]);
                        randomassign(password[3]);
                        randomassign(password[4]);
                        randomassign(password[5]);
                        randomassign(password[6]);
                        randomassign(password[7]);
                        randomassign(password[8]);
                        randomassign(password[0]);
                        randomassign(password[1]);
                        randomassign(password[2]);
                        randomassign(password[3]);
                        randomassign(password[4]);
                        randomassign(password[5]);
                        randomassign(password[6]);
                        randomassign(password[7]);
                        randomassign(password[8]);
                        randomassign(password[0]);
                        randomassign(password[1]);
                        randomassign(password[2]);
                        randomassign(password[3]);
                        randomassign(password[4]);
                        randomassign(password[5]);
                        randomassign(password[6]);
                        randomassign(password[7]);
                        randomassign(password[8]);
                        randomassign(password[0]);
                    
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
                            (createint(2));
                            if (createint(2) == 0) {
                                rep1UC();
                            }
                            (createint(2));
                            if (createint(2) == 1) {
                                rep1SC();
                            };
                        };
                        randomassign(password[1]);
                        randomassign(password[2]);
                        randomassign(password[3]);
                        randomassign(password[4]);
                        randomassign(password[5]);
                        randomassign(password[6]);
                        randomassign(password[7]);
                        randomassign(password[8]);
                        randomassign(password[0]);
                        randomassign(password[1]);
                        randomassign(password[2]);
                        randomassign(password[3]);
                        randomassign(password[4]);
                        randomassign(password[5]);
                        randomassign(password[6]);
                        randomassign(password[7]);
                        randomassign(password[8]);
                        randomassign(password[0]);
                        randomassign(password[1]);
                        randomassign(password[2]);
                        randomassign(password[3]);
                        randomassign(password[4]);
                        randomassign(password[5]);
                        randomassign(password[6]);
                        randomassign(password[7]);
                        randomassign(password[8]);
                        randomassign(password[0]);
                        randomassign(password[1]);
                        randomassign(password[2]);
                        randomassign(password[3]);
                        randomassign(password[4]);
                        randomassign(password[5]);
                        randomassign(password[6]);
                        randomassign(password[7]);
                        randomassign(password[8]);
                        randomassign(password[0]);
                    
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
                        (createint(1));
                        if (createint(1) == 0) {
                            rep1LC();
                        }
                        
                    randomassign(password[1]);
                    randomassign(password[2]);
                    randomassign(password[3]);
                    randomassign(password[4]);
                    randomassign(password[5]);
                    randomassign(password[6]);
                    randomassign(password[7]);
                    randomassign(password[8]);
                    randomassign(password[0]);
                    randomassign(password[1]);
                    randomassign(password[2]);
                    randomassign(password[3]);
                    randomassign(password[4]);
                    randomassign(password[5]);
                    randomassign(password[6]);
                    randomassign(password[7]);
                    randomassign(password[8]);
                    randomassign(password[0]);
                    randomassign(password[1]);
                    randomassign(password[2]);
                    randomassign(password[3]);
                    randomassign(password[4]);
                    randomassign(password[5]);
                    randomassign(password[6]);
                    randomassign(password[7]);
                    randomassign(password[8]);
                    randomassign(password[0]);
                    randomassign(password[1]);
                    randomassign(password[2]);
                    randomassign(password[3]);
                    randomassign(password[4]);
                    randomassign(password[5]);
                    randomassign(password[6]);
                    randomassign(password[7]);
                    randomassign(password[8]);
                    randomassign(password[0]);
                
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
                    randomassign(password[1]);
                    randomassign(password[2]);
                    randomassign(password[3]);
                    randomassign(password[4]);
                    randomassign(password[5]);
                    randomassign(password[6]);
                    randomassign(password[7]);
                    randomassign(password[8]);
                    randomassign(password[0]);
                    randomassign(password[1]);
                    randomassign(password[2]);
                    randomassign(password[3]);
                    randomassign(password[4]);
                    randomassign(password[5]);
                    randomassign(password[6]);
                    randomassign(password[7]);
                    randomassign(password[8]);
                    randomassign(password[0]);
                    randomassign(password[1]);
                    randomassign(password[2]);
                    randomassign(password[3]);
                    randomassign(password[4]);
                    randomassign(password[5]);
                    randomassign(password[6]);
                    randomassign(password[7]);
                    randomassign(password[8]);
                    randomassign(password[0]);
                    randomassign(password[1]);
                    randomassign(password[2]);
                    randomassign(password[3]);
                    randomassign(password[4]);
                    randomassign(password[5]);
                    randomassign(password[6]);
                    randomassign(password[7]);
                    randomassign(password[8]);
                    randomassign(password[0]);
                
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
        randomassign(password[1]);
        randomassign(password[2]);
        randomassign(password[3]);
        randomassign(password[4]);
        randomassign(password[5]);
        randomassign(password[6]);
        randomassign(password[7]);
        randomassign(password[8]);
        randomassign(password[0]);
        randomassign(password[1]);
        randomassign(password[2]);
        randomassign(password[3]);
        randomassign(password[4]);
        randomassign(password[5]);
        randomassign(password[6]);
        randomassign(password[7]);
        randomassign(password[8]);
        randomassign(password[0]);
        randomassign(password[1]);
        randomassign(password[2]);
        randomassign(password[3]);
        randomassign(password[4]);
        randomassign(password[5]);
        randomassign(password[6]);
        randomassign(password[7]);
        randomassign(password[8]);
        randomassign(password[0]);
        randomassign(password[1]);
        randomassign(password[2]);
        randomassign(password[3]);
        randomassign(password[4]);
        randomassign(password[5]);
        randomassign(password[6]);
        randomassign(password[7]);
        randomassign(password[8]);
        randomassign(password[0]);

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

};

createpassword();
console.log(password);





