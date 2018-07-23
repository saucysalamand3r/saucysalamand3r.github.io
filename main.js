var user = "visitor";
var systemName = document.getElementById("systemName");
var systemColor = "#ffffff";

welcome();
help();

// Determines whether key pressed is enter
$("#inputBox").on('keypress', function(evt){
    var cmd = $(this).val();
    if(evt.which == 13 && cmd){
        register(cmd);
    }
})

// Appends command to history, clears input box
function register(cmd){
    if(cmd){
        // dom variable contains color data for system name in registered commands
        var dom = '<div class="cmd"><span style="color: ' + systemColor + '">' + user + '@saucysalamand3r.github.io:~$ </span>' + cmd + '</div>';
        $(".registered").append(dom);
        process(cmd);
        $("#inputBox").val('');
        $('body').scrollTop($('body')[0].scrollHeight);
    }
}

//Parses and processes most recent command to determine output
function process(cmd){
    if (cmd == "clear"){
        clear();
    }
    if (cmd == "about"){
        about();
    }
    if (cmd.indexOf("theme") != -1){
        theme(cmd);
    }
    if (cmd == "help"){
        help();
    }
    if (cmd.indexOf("user") != -1){
        setUser(cmd);
    }
    if (cmd == "instagram"){
        window.location.href = 'https://www.instagram.com/saucysalamand3r';
    }
    if (cmd == "github"){
        window.location.href = 'https://www.github.com/saucysalamand3r';
    }
    if (cmd == "facebook"){
        window.location.href = 'https://www.facebook.com/saucysalamand3r';
    }
    if (cmd == "twitter"){
        window.location.href = 'https://www.twitter.com/saucysalamand3r';
    }
    if (cmd == "linkedin"){
        window.location.href = 'https://www.linkedin.com/in/saucysalamand3r';
    }
    if (cmd == "email"){
        window.location.href = 'mailto://saucysalamand3r@protonmail.com';
    }
    if (cmd == "snapchat" || cmd == "snapcode"){
        showSnapcode();
    }
}

// Clears terminal screen
function clear(){
    $(".registered").empty();
}

// Displays "about" information
function about(){
    $(".registered").append(
        "I'm Nate, an 18-year-old Computer Science major at Dalton State College. In school, I'm learning Java, which is a great language for learning more complex data structures and general best practices, as it is a very standard language. Outside of school, the language I'm most focused on is JavaScript. JavaScript is unique due to its modularity. Depending on the frameworks, libraries, and such that you use, JavaScript can be a single language capable of almost anything. I'm familiar with Angular 5, and now I'm moving onto React for frontend, Node and Express on backend, and I tend to tinker with Brain.JS to learn about neural nets and artificial intelligence. I'm also a big believer in encryption and blockchain, as I believe blockchain is the solution to many problems the world currently faces regarding monetized content, privacy, security, and freedom of speech. I'm also very much a fan of Linux, as I've been using Debian-based distributions of it as long as I can remember. Aside from technology, I play clarinet, trombone, and guitar. Music has been a huge part of my life from middle school onward, and has shaped me into the person I am. I was in marching band all four years of high school, and from that I've gained a powerful sense of comradery and teamwork. Music is a lot like software engineering in quite a few ways. Intricate, specialized parts of the music must interact with other parts perfectly, and at just the right time. This applies to all types of engineering. There's a creativity in engineering that is often overlooked, and I think being a musician has helped me to see that more clearly. Engineering fields, in my opinion, are better described as logic-based creativity than as applied mathematics."
    );
}

// Theme Selector
function theme(cmd){
    if (cmd.indexOf("light") != -1){
        $("*").css("color", "darkblue");
        $("*").css("background-color", "#dedede");
        systemColor = "darkred";
        document.getElementById("systemName").style.color = "darkred";
        clear();
    }
    if (cmd.indexOf("dark") != -1){
        $("*").css("color", "white");
        $("*").css("background-color", "#061218");
        systemColor = "00ff00";
        document.getElementById("systemName").style.color = "#00ff00";
        clear();
    }
    if (cmd.indexOf("white") != -1){
        $("*").css("color", "black");
        $("*").css("background-color", "white");
        systemColor = "black";
        clear();
    }
    if (cmd.indexOf("black") != -1){
        $("*").css("color", "white");
        $("*").css("background-color", "black");
        systemColor = "white";
        clear();
    }
    if (cmd.indexOf("monokai") != -1){
        $("*").css("color", "#A6E22E");
        $("*").css("background-color", "#272822");
        systemColor = "#F92672";
        document.getElementById("systemName").style.color = "#F92672";
        clear();
    }
}

// Displays list of commands
function help(){
    $(".registered").append("<div>Available Commands (all are lowercase):</div><div>help - displays this list of available commands</div><div>theme [white | light | dark | black] - changes the terminal color theme</div><div>clear - clears the terminal screen</div><div>about - displays information about Nate Wolfe</div><div>user [username] - changes username</div><div>instagram - opens instagram page for saucysalamand3r</div><div>github - opens github page for saucysalamand3r</div><div>twitter - opens twitter page for saucysalamand3r</div><div>linkedin - opens linkedin page for saucyssalamand3r</div><div>email - opens new email to saucysalamand3r</div><div>snapchat / snapcode - shows or hides snapcode to add saucysalamand3r</div>");
}

function setUser(cmd){
    user = cmd.slice(5);
    systemName.innerText = user + "@saucysalamand3r.github.io:~$ ";
}

// Shows snapcode for saucysalamand3r
function showSnapcode(){
    var snapcode = document.getElementById('snapcode');
    if(snapcode.style.visibility === 'hidden'){
        snapcode.style.visibility = 'visible';
    } else {
        snapcode.style.visibility = 'hidden';
    }
}

function welcome(){
    $(".registered").append("Welcome to saucysalamand3r's website! It functions as a basic CLI, simply use the commands listed below!");
}