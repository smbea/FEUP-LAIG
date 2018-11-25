/**
 * MyVehicleHelixLeg
 * @constructor
 */
class MyVehicleHelixLeg extends CGFobject
{
	constructor(scene)
	{
	        super(scene);
                this.initElements();
                
                this.metalAppearance = new CGFappearance(this.scene);
		this.metalAppearance.setAmbient(0.5,0.5,0.5,1);
		this.metalAppearance.loadTexture("../scenes/images/metal.jpg");
	};

	initElements(){
        this.cil = new MyCylinder2(this.scene, 1, 1, 1, 60, 60);
        this.helix = new MyVehicleHelix(this.scene);
        this.top = new MyCircle(this.scene,40);
        this.sphere = new MySphere(this.scene,1,60,60);

	}

	display(){
        this.scene.pushMatrix();
        this.scene.scale(0.2,0.1,0.2);
        this.scene.rotate(-Math.PI/2,1,0,0);
        this.metalAppearance.apply();
        this.cil.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0.1,0);
        this.scene.scale(0.2,1,0.2);
        this.scene.rotate(-Math.PI/2,1,0,0);
        this.metalAppearance.apply();
        this.top.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.2,0.1,0);
        this.helix.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.2,0.1,0);
        this.scene.rotate(-Math.PI,0,1,0);
        this.helix.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.translate(0,0.15,0);
        this.scene.scale(0.05,0.05,0.05);
        this.sphere.display();
        this.scene.popMatrix();


	};

	updateTextCoords(length_s, length_t){
	};

};
