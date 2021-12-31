//variaveis
var pessoa_correndo, pessoa;

var chao, rua, parede, parede1;

function preload(){
//cria a animação da pessoa
pessoa_correndo = loadAnimation("Runner-1.png", "Runner-2.png");
//imagem do chão
chao = loadImage("path.png");
}

function setup(){
createCanvas(400,400);

//cria sprite chão
rua = createSprite(200,200,200,400);
rua.addImage("solo", chao);
rua.velocityY= 20;

//cria paredes invisiveis
parede = createSprite(80,1,20,800);
parede.visible = false;

parede1 = createSprite(325,1,20,800);
parede1.visible = false;

//cria sprite da pessoa
pessoa = createSprite(200,350,20,20);
pessoa.addAnimation("correndo", pessoa_correndo);
pessoa.scale = 0.05;

}

function draw() {
background(0);

//faz a rua ficar infinita
if (rua.y>400){
  rua.y = rua.width /2;
}

//pessoa colide com as paredes invisiveis
pessoa.collide(parede);
pessoa.collide(parede1);

drawSprites();

}