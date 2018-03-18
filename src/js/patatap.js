import paper from 'paper';
import { Howl, Howler } from 'howler';

export default function Patatap() {

  const keyData = {
    q: {
      sound: new Howl({
        src: require('../sounds/bubbles.mp3')
      }),
      color: '#1abc9c'
    },
    w: {
      sound: new Howl({
        src: require('../sounds/clay.mp3')
      }),
      color: '#2ecc71'
    },
    e: {
      sound: new Howl({
        src: require('../sounds/confetti.mp3')
      }),
      color: '#3498db'
    },
    r: {
      sound: new Howl({
        src: require('../sounds/corona.mp3')
      }),
      color: '#9b59b6'
    },
    t: {
      sound: new Howl({
        src: require('../sounds/dotted-spiral.mp3')
      }),
      color: '#34495e'
    },
    y: {
      sound: new Howl({
        src: require('../sounds/flash-1.mp3')
      }),
      color: '#16a085'
    },
    u: {
      sound: new Howl({
        src: require('../sounds/flash-2.mp3')
      }),
      color: '#27ae60'
    },
    i: {
      sound: new Howl({
        src: require('../sounds/flash-3.mp3')
      }),
      color: '#2980b9'
    },
    o: {
      sound: new Howl({
        src: require('../sounds/glimmer.mp3')
      }),
      color: '#8e44ad'
    },
    p: {
      sound: new Howl({
        src: require('../sounds/moon.mp3')
      }),
      color: '#2c3e50'
    },
    a: {
      sound: new Howl({
        src: require('../sounds/pinwheel.mp3')
      }),
      color: '#f1c40f'
    },
    s: {
      sound: new Howl({
        src: require('../sounds/piston-1.mp3')
      }),
      color: '#e67e22'
    },
    d: {
      sound: new Howl({
        src: require('../sounds/piston-2.mp3')
      }),
      color: '#e74c3c'
    },
    f: {
      sound: new Howl({
        src: require('../sounds/prism-1.mp3')
      }),
      color: '#95a5a6'
    },
    g: {
      sound: new Howl({
        src: require('../sounds/prism-2.mp3')
      }),
      color: '#f39c12'
    },
    h: {
      sound: new Howl({
        src: require('../sounds/prism-3.mp3')
      }),
      color: '#d35400'
    },
    j: {
      sound: new Howl({
        src: require('../sounds/splits.mp3')
      }),
      color: '#1abc9c'
    },
    k: {
      sound: new Howl({
        src: require('../sounds/squiggle.mp3')
      }),
      color: '#2ecc71'
    },
    l: {
      sound: new Howl({
        src: require('../sounds/strike.mp3')
      }),
      color: '#3498db'
    },
    z: {
      sound: new Howl({
        src: require('../sounds/suspension.mp3')
      }),
      color: '#9b59b6'
    },
    x: {
      sound: new Howl({
        src: require('../sounds/timer.mp3')
      }),
      color: '#34495e'
    },
    c: {
      sound: new Howl({
        src: require('../sounds/ufo.mp3')
      }),
      color: '#16a085'
    },
    v: {
      sound: new Howl({
        src: require('../sounds/veil.mp3')
      }),
      color: '#27ae60'
    },
    b: {
      sound: new Howl({
        src: require('../sounds/wipe.mp3')
      }),
      color: '#2980b9'
    },
    n: {
      sound: new Howl({
        src: require('../sounds/zig-zag.mp3')
      }),
      color: '#8e44ad'
    },
    m: {
      sound: new Howl({
        src: require('../sounds/moon.mp3')
      }),
      color: '#2c3e50'
    }
  };

  const canvas = document.getElementById('myCanvas'),
        circles = [];

  return {
    init() {
      paper.setup(canvas);

      paper.view.onKeyDown = function(event) {
        const maxPoint = new paper.Point(paper.view.size.width, paper.view.size.height);
        const randomPoint = paper.Point.random();
        const point = maxPoint.multiply(randomPoint);
        const newCircle = new paper.Path.Circle(point, 200);
        if (keyData[event.key]) {
          newCircle.fillColor = keyData[event.key].color;
          keyData[event.key].sound.load();
          keyData[event.key].sound.play();
        } else {
          newCircle.fillColor = "yellow";
          keyData['d'].sound.load();
          keyData['d'].sound.play();
        }
        circles.push(newCircle);
      }

      paper.view.onFrame = function() {
        for(var i = 0; i < circles.length; i++) {
          circles[i].fillColor.hue += 1;
          circles[i].scale(.9);
          if (circles[i].area < 1) {
            circles[i].remove();
            circles.splice(i, 1);
            i--;
          }
        }
      }
    },

    play(key) {
      keyData[key].sound.load();
      keyData[key].sound.play();
    }
  }
  
}
