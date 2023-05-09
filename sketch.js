const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var fundo;
var torre;
var canhao;
var angle;
var navio;

var bolas = [];

function preload() {
  fundo = loadImage("assets/background.gif");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  angle = 20;

  var options = {
    isStatic: true,
  };

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  torre = new Torre(150, 350, 160, 310);
  canhao = new Canhao(180, 120, 130, 100, angle);

  navio = new Navio(width,height -100,200,200,-100);
}

function draw() {
  background(fundo);

  rect(ground.position.x, ground.position.y, width * 2, 1);

  torre.show();
  canhao.show();

  Engine.update(engine);

  for (var i = 0; i < bolas.length; i++) {
    mostrarBolas(bolas[i], i);
  }

  navio.show()
  console.log(navio)
  Matter.Body.setVelocity(navio.body,{x:-0.9,y:0})
}

function mostrarBolas(ball, i) {
  ball.show();
  console.log(ball);
  if (ball.body.position.x >= width || ball.body.position.y >= height - 50) {
    World.remove(world, ball.body);
    //fatiar, cortar, excluir a bola q atirei
    bolas.splice(i, 1);
  }
}

function keyPressed() {
  // CODIGO ASCII
  // 32 = espaço

  if (keyCode === 32) {
    var bola = new Bola(canhao.x, canhao.y);
    bolas.push(bola);
  }
}

function keyReleased() {
  if (keyCode === 32) {
    bolas[bolas.length - 1].atirar();
  }
}
