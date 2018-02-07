// 1a
function Rocket(name, life) {
    this.name = name;
    this.life = life;
}

Rocket.prototype.showName = function () {
    return this.name;
};

var rocket1 = new Rocket("SpaceRacer", 10);
var rocket2 = new Rocket("SpaceRacer", 10);
var rocket3 = new Rocket("SpaceRacer", 10);

rocket1.showName();
rocket2.showName();
rocket3.showName();

// 1b

rocket1.name = "KevinSpacey";
rocket1.showName();

// 1c

Rocket.prototype.speed = this.speed;

Rocket.prototype.fly = function() {
    this.speed+=1;
}

// 1d

function MortalRocket(name, life) {
    Rocket.call(this, name, life)
}

MortalRocket.prototype.damage = function () {
    this.life -= 1;
}

var rocket4 = new MortalRocket("SpaceRacer", 10);

rocket4.damage();

// Hérna fannst mér að það væri góð hugmynd að búa til nýja tegund af rocket sem inheritar frá hinu rocketinu, vegna þess að markmiðið var að gera nýja tegund af rocket sem fær property
// sem hin rocketin eiga ekki að hafa. Þá væri ég einfaldlega með tvær tegundir af rockets, og get constructað það rocket sem hentar hvenær sem er.
// Eina vandamálið við þetta er að það er ekki hægt að inherita properties sem ég bæti við með prototypes.
// Besta lausnin við þessu dæmi væri bara að setja þetta nýja property á rocket4 manually, en það er ekkert future proofing við þá aðferð og það er mjög inefficient.
// Þannig að sú lausn er ekki nógu góð.