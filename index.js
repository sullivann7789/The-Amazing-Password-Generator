

var password = [1,2,3,4,5,6,7,8,9];
//make password user choice and then adapt functions to user input, use additems to pass as password length/string
var passlength = password.length;
function createint(max) {
    return Math.floor(Math.random() * max);
}
console.log(createint(1));
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

               for (var i = 9; i < countcharacter; i++) {
                passlength = password.push(i);
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


        initresponse();
        console.log(passlength);
 
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

                        function rep1NMC(nmcvalue) {
                            var numbers = ["1","2","3","4","5","6","7","8","9","0"];
                            var nmbrgenerate = Math.floor(Math.random() * numbers.length);
                            password[nmcvalue] = numbers[nmbrgenerate];
                            console.log(password);
                            };
                    
                    
                    
                        // assign function for each character possibility, and then assign each index a character based on integer outcome 0,1,2,3 

                        function randomassign(a) {
                            var dice = createint(1);
                            if (dice === 0) {
                                rep1NMC(a);
                            };
                        };
                        for (var i = 0; i < passlength; i++) {
                            randomassign(i);
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
            
                        function rep1SC(scvalue) {
                            var spcllttrs = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "[", "]", "{", "}", "|", ";", ":", "'", "/", "?", "<",">",".",","];
                            var spclgenerate = Math.floor(Math.random() * spcllttrs.length);
                            password[scvalue] = spcllttrs[spclgenerate];
                            console.log(password);
                            };
                    
                    
                    
                        // assign function for each character possibility, and then assign each index a character based on integer outcome 0,1,2,3 
                    
                        function randomassign(a) {
                            var dice = createint(1);
                            if (dice === 0) {
                                rep1SC(a);
                            };
                        };
                        for (var i = 0; i < passlength; i++) {
                            randomassign(i);
                        };
                    
                        function repeat () {
                            if (password[0] === 0) {
                                randomassign(password[0]);
                            }
                        }
                        console.log(password[createint(9)]);
                    
                        console.log(password);
                    }else{
                        function rep1NMC(nmcvalue) {
                            var numbers = ["1","2","3","4","5","6","7","8","9","0"];
                            var nmbrgenerate = Math.floor(Math.random() * numbers.length);
                            password[nmcvalue] = numbers[nmbrgenerate];
                            console.log(password);
                            };

                        function rep1SC(scvalue) {
                            var spcllttrs = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "[", "]", "{", "}", "|", ";", ":", "'", "/", "?", "<",">",".",","];
                            var spclgenerate = Math.floor(Math.random() * spcllttrs.length);
                            password[scvalue] = spcllttrs[spclgenerate];
                            console.log(password);
                            };
                    
                    
                    
                        // assign function for each character possibility, and then assign each index a character based on integer outcome 0,1,2,3 
                    
                        function randomassign(a) {
                            var dice = createint(2);
                            if (dice === 0) {
                                rep1SC(a);
                            }
                            else if (dice === 1) {
                                rep1NMC(a);
                            };
                        };
                        for (var i = 0; i < passlength; i++) {
                            randomassign(i);
                        };

                    }

                };
        }else{
            

            function rep1LC(lcvalue) {
                var lclttrs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
                var lcgenerate = Math.floor(Math.random() * lclttrs.length);
                password[lcvalue] = lclttrs[lcgenerate];
                console.log(password);
                };

            window.alert("Quite Alright Then! Onto the Next!");
            var spclchts = window.confirm("Would you like special characters in your password?");
            
            if (!spclchts) {
                var numchts = window.confirm("Would you like numbers in your password?");
                if (!numchts) {
                    function randomassign(a) {
                        var dice = createint(1);
                        if (dice === 0) {
                            rep1LC(a);
                        };
                        
                        for (var i = 0; i < passlength; i++) {
                            randomassign(i);
                        };
                
                        function repeat () {
                        if (password[0] === 0) {
                            randomassign(password[0]);
                        }
                        }
                    console.log(password[createint(passlength)]);
                
                    console.log(password);       
                    window.alert("Generating Password Now, click when ready...")

                    };
                }else{
                    window.alert("Generating Password Now, click when ready...")

        
                    function rep1NMC(nmcvalue) {
                        var numbers = ["1","2","3","4","5","6","7","8","9","0"];
                        var nmbrgenerate = Math.floor(Math.random() * numbers.length);
                        password[nmcvalue] = numbers[nmbrgenerate];
                        console.log(password);
                        };
        
        
        
                // assign function for each character possibility, and then assign each index a character based on integer outcome 0,1,2,3 
        
                function randomassign(a) {
                    var dice = createint(2);
                    if (dice === 1) {
                        rep1LC(a);
                    }
                    else if (dice === 0) {
                        rep1NMC(a);
                    };
                    };
                for (var i = 0; i < passlength; i++) {
                    randomassign(i);
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
                function rep1SC(scvalue) {
                    var spcllttrs = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "[", "]", "{", "}", "|", ";", ":", "'", "/", "?", "<",">",".",","];
                    var spclgenerate = Math.floor(Math.random() * spcllttrs.length);
                    password[scvalue] = spcllttrs[spclgenerate];
                    console.log(password);
                    };

                    function randomassign(a) {
                        var dice = createint(2);
                        if (dice === 0) {
                            rep1LC(a);
                        }
                        else if (dice === 1) {
                            rep1SC(a);
                        }
                    };
                for (var i = 0; i < passlength; i++) {
                    randomassign(i);
                };
            };
        };
    
    }else{
        function rep1UC(ucvalue) {
            var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
            var alphkey = Math.floor(Math.random() * uppercase.length);
            password[ucvalue] = uppercase[alphkey];
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
                        function randomassign(a) {
                            var dice = createint(1);
                            if (dice === 0) {
                                rep1UC(a);
                            };
                        };
                        for (var i = 0; i < passlength; i++) {
                            randomassign(i);
                        };
                    
                        function repeat () {
                            if (password[0] === 0) {
                                randomassign(password[0]);
                            }
                        }
                        console.log(password[createint(9)]);
                    
                        console.log(password);
                    }else{


                        function rep1NMC(nmcvalue) {
                            var numbers = ["1","2","3","4","5","6","7","8","9","0"];
                            var nmbrgenerate = Math.floor(Math.random() * numbers.length);
                            password[nmcvalue] = numbers[nmbrgenerate];
                            console.log(password);
                            };
                    
                    
                    
                        // assign function for each character possibility, and then assign each index a character based on integer outcome 0,1,2,3 
                    
                        function randomassign(a) {
                            var dice = createint(2);
                            if (dice === 0) {
                                rep1UC(a);
                            }
                            else if (dice === 1) {
                                rep1NMC(a);
                            };
                        };

                        for (var i = 0; i < passlength; i++) {
                            randomassign(i);
                        };
                        console.log(password[createint(9)]);
                    
                        console.log(password);
                    };
                }else{
                    window.alert("Great! Moving on to our final question!");
                    var numchts = window.confirm("Would you like numbers in your password?");
                    if (!numchts) {
            
                        function rep1SC(scvalue) {
                            var spcllttrs = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "[", "]", "{", "}", "|", ";", ":", "'", "/", "?", "<",">",".",","];
                            var spclgenerate = Math.floor(Math.random() * spcllttrs.length);
                            password[scvalue] = spcllttrs[spclgenerate];
                            console.log(password);
                            };
                    
                    
                    
                        // assign function for each character possibility, and then assign each index a character based on integer outcome 0,1,2,3 
                    
                        function randomassign(a) {
                            var dice = createint(2);
                            if (dice === 0) {
                                rep1UC(a);
                            } 
                            else if (dice === 1) {
                                rep1SC(a);
                            };
                            
                        };
                        for (var i = 0; i < passlength; i++) {
                            randomassign(i);
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
            

            function rep1LC(lcvalue) {
                var lclttrs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
                var lcgenerate = Math.floor(Math.random() * lclttrs.length);
                password[lcvalue] = lclttrs[lcgenerate];
                console.log(password);
                };

            window.alert("Quite Alright Then! Onto the Next!");
            var spclchts = window.confirm("Would you like special characters in your password?");
            
            if (!spclchts) {
                var numchts = window.confirm("Would you like numbers in your password?");
                if (!numchts) {
                    function randomassign(a) {
                        var dice = createint(2);
                        if (dice === 0) {
                            rep1UC(a);
                        } 
                        else if (dice === 1) {
                            rep1LC(a);
                        };
                    };
                    for (var i = 0; i < passlength; i++) {
                        randomassign(i);
                    };

                    
                    console.log(password[createint(passlength)]);
                
                    console.log(password);       
                    window.alert("Generating Password Now, click when ready...")

                }else{
                    window.alert("Generating Password Now, click when ready...")

        
                    function rep1NMC(nmcvalue) {
                        var numbers = ["1","2","3","4","5","6","7","8","9","0"];
                        var nmbrgenerate = Math.floor(Math.random() * numbers.length);
                        password[nmcvalue] = numbers[nmbrgenerate];
                        console.log(password);
                        };
        
        
        
                    // assign function for each character possibility, and then assign each index a character based on integer outcome 0,1,2,3 
        
                    function randomassign(a) {
                        var dice = createint(2);
                        if (dice === 0) {
                            rep1LC(a);
                        }
                        else if (dice === 1) {
                            rep1NMC(a);
                        };
                        };
                    for (var i = 0; i < passlength; i++) {
                            randomassign(i);
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

            function rep1UC(ucvalue) {
                var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
                var alphkey = Math.floor(Math.random() * uppercase.length);
                password[ucvalue] = uppercase[alphkey];
                console.log(password);
                };


            function rep1LC(lcvalue) {
                var lclttrs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
                var lcgenerate = Math.floor(Math.random() * lclttrs.length);
                password[lcvalue] = lclttrs[lcgenerate];
                console.log(password);
                };
                
            function rep1SC(scvalue) {
                var spcllttrs = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "=", "[", "]", "{", "}", "|", ";", ":", "'", "/", "?", "<",">",".",","];
                var spclgenerate = Math.floor(Math.random() * spcllttrs.length);
                password[scvalue] = spcllttrs[spclgenerate];
                console.log(password);
                };
                
            function rep1NMC(nmcvalue) {
                var numbers = ["1","2","3","4","5","6","7","8","9","0"];
                var nmbrgenerate = Math.floor(Math.random() * numbers.length);
                password[nmcvalue] = numbers[nmbrgenerate];
                console.log(password);
                };



                // assign function for each character possibility, and then assign each index a character based on integer outcome 0,1,2,3 

            function randomassign(a) {
                var dice = createint(4);
                if (dice === 0) {
                    rep1UC(a);
                } 
                else if (dice === 1) {
                    rep1LC(a);
                }
                else if (dice === 2) {
                    rep1SC(a);
                }
                else if (dice === 3) {
                    rep1NMC(a);
                };
                };
            for (var i = 0; i < passlength; i++) {
                    randomassign(i);
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







