import * as PIXI from "pixi.js"
import * as dat from 'dat.gui'

const load = (app: PIXI.Application) => {
    return new Promise<void>((resolve) => {
        app.loader.add('assets/hello-world.png').load(() => {
            resolve();
        });
    });
};

const main = async () => {
    // Actual app
    let app = new PIXI.Application();
    // Display application properly
    document.body.style.margin = '0';
    app.renderer.view.style.position = 'absolute';
    app.renderer.view.style.display = 'block';
    // View size = windows
    app.renderer.resize(window.innerWidth, window.innerHeight);


    // set up gui
    const gui = new dat.GUI()


    // Load assets
    await load(app);
    let sprite = new PIXI.Sprite( );    //Q why does this need to stay to keep the background black ?
    

    app.stage.addChild(sprite);
    let draw = new PIXI.Graphics();
    
    for(let z=0; z<1000; z+=100){
        for (let i = 50; i < 2000; i+= 100) {
            console.log ("Block statement execution no." + i);
            draw.beginFill(0x0000FF, 1)
            draw.lineStyle(2, 0x0000FF, 1)  //use and array to make the circles a diffrent color
            draw.drawCircle(i,z, 50)
            draw.lineStyle(2, 0xff0000, 1)
            draw.drawRect(i-50,z+50,50,50)
            draw.drawCircle(i,z,20)
            draw.drawCircle(i,z,10)
        }
    }
    app.stage.addChild(draw);               //Q where is stage set ?

    // Handle window resizing
    window.addEventListener('resize', (_e) => {
        app.renderer.resize(window.innerWidth, window.innerHeight);
        sprite.x = window.innerWidth / 2 - sprite.width / 2;
        sprite.y = window.innerHeight / 2 - sprite.height / 2;
    });
    document.body.appendChild(app.view);
    document.body.appendChild(gui.domElement);
};


main();


//npm install espbuild 
//enum
//model 