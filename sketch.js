const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particle = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function preload()
{
	
}

function setup() 
{
	createCanvas(380, 600);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(200,600,1700,10);

	for (var j = 40; j <= width; j = j + 50)
	{
		plinkos.push(new Plinkos(j, 75));
	}

	for (var j = 15; j <= width - 10; j = j + 50)
	{
		plinkos.push(new Plinkos(j, 125));
	}

	for (var j = 40; j <= width - 10; j = j + 50)
	{
		plinkos.push(new Plinkos(j, 175));
	}

	for (var j = 15; j <= width - 10; j = j + 50)
	{
		plinkos.push(new Plinkos(j, 225));
	}

	for (var j = 40; j <= width - 10; j = j + 50)
	{
		plinkos.push(new Plinkos(j, 275));
	}

	for (var k = 40; k <= width; k = k + 60)
	{
		divisions.push(new Divisions(k, height-divisionHeight/2+50, 10, divisionHeight));
	}

	Engine.run(engine);
}


function draw()
{
	rectMode(CENTER);
	background(0);

	Engine.update(engine);

	if(frameCount % 30 == 0)
	{
		particle.push(new particles(random(100,280),7,7))
	}
	
	for (var j = 0; j < plinkos.length; j++)
	{
		plinkos[j].display();
	}

	for (var k = 0; k < divisions.length; k++)
	{
		divisions[k].display();
	}

	for (var i = 0; i < particle.length; i++)
	{
		particle[i].display();
	}

	ground.display();

}



