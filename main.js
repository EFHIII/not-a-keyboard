var tap = new Howl({
  src: ['assets/click.mp3'],
  sprite: {
    start:[0,1],
    loop:[0,10000,true]
  }

});

var moosh = new Howl({
  src: ['assets/mooshed.mp3'],
  sprite: {
    start:[1550,1700],
    loop:[8000,18000,true]
  }
});

let moo=false;
let t=false;

function withIntro(audio){
  let a={a:audio.play('start')};
  audio.on('end',v=>a.a=audio.play('loop'),a.a);
  console.log(a);
  return a;
}

function stopThing(audio,inst){
  audio.on('fade',a=>audio.stop(inst.a),inst.a);
  audio.fade(1,0,300,inst.a);
}

let btn = document.getElementById('idk');
let btn2 = document.getElementById('click');

btn.addEventListener('click', a => {
  if(!t){
    t = withIntro(tap);
    return;
  }
  stopThing(tap,t);
  t=false;
});
btn2.addEventListener('click', a => {
  if(!moo){
    moo = withIntro(moosh);
    return;
  }
  stopThing(moosh,moo);
  moo=false;
});
