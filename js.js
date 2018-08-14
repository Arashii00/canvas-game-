

var myPlayer;
var myBackground;
var myScore;	

function startGame() {
    myPlayer = new component(100, 100, "images/monkey.png", 100, 500, "image");
	myBackground = new component(800, 600, "images/sky.png", 0, 0, "image");
	myScore = new component("30px", "Consolas", "black", 280, 40, "text");
    myGameArea.start();
}

var myGameArea={   
    canvas : document.createElement("canvas"),
	start:function(){
	this.canvas.width = 800;
    this.canvas.height = 600;
	this.context = this.canvas.getContext("2d");
    this.canvas.style = "position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; margin: auto; border:1px solid black";
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
         this.interval = setInterval(updateGameArea, 20);
        },
	
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        if (type == "image") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }
}

function updateGameArea() {
    myGameArea.clear();
	myBackground.newPos(); 
    myBackground.update();
    myPlayer.newPos();
    myPlayer.update();
}


