class Spark {
    static COLOR_LIGHT = [255, 255, 0];
    static COLOR_DARK = [160, 160, 0];
    static SIZE = 4;

    static SPREAD = 3;
    static JUMP = 5;
    static GRAVITY = 0.35
    static LIFE_DECREASE = 5;

    static MIN_LIFE = 100;
    static MAX_LIFE = 200;

    constructor(x, y) {
        this.pos = createVector(x, y);
        this.v = createVector(random(-1, 1) * Spark.SPREAD, random(-1, 1) * Spark.JUMP);
        this.a = createVector(0, Spark.GRAVITY);

        this.life = random(Spark.MIN_LIFE, Spark.MAX_LIFE);
    }

    update() {
        this.pos.add(this.v);
        this.v.add(this.a)

        this.life -= Spark.LIFE_DECREASE;
    }

    draw() {
        stroke(Spark.COLOR_DARK);
        strokeWeight(Spark.SIZE);

        point(this.pos);

        stroke(Spark.COLOR_LIGHT);
        strokeWeight(Spark.SIZE / 2);

        point(this.pos);
    }
}