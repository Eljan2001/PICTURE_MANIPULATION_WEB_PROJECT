body = document.getElementById("body");
form = document.getElementById("opacity");
img = document.createElement("img");
img.id = "img";
img.src = "https://static.wikia.nocookie.net/heroes-and-villians/images/8/83/Winnie_the_Pooh.png/revision/latest?cb=20191229203055";
img.style="width:400px;height:350px;position:absolute;top:30%;left:35%;";

opac = document.createElement("input");
opac.defaultValue=1;
opac.id="opac";
opac.type="range";
opac.max="1.0";
opac.min="0.1";
opac.step="0.1";
opac.onkeydown = function(evt) {
  if (evt.key=="ArrowLeft" || evt.key=="ArrowRight"){
    opac.disabled = true;
  }
  if (evt.key!="ArrowLeft" || evt.key!="ArrowRight")
  {
    opac.disabled = false;
  }
};
label = document.createElement("label");
label.for = "opac";
opac.value=1;
label.innerHTML = `← The opacity of picture is ${opac.value}`;

opac.addEventListener("change", (e)=>{
    e.preventDefault();
    label.innerHTML = `← The opacity of picture was set to ${opac.value}`;
    img.style.opacity = `${opac.value}`;
    img.style.transform = `translateX(-1)`;
});


form.style="border:solid black 2px;width:fit-content;";
form.style.backgroundColor = "white";
form.addEventListener("click", (e)=>{
  e.preventDefault();
  form.style.borderColor = "red";
  move_form.style.borderColor = "black";
})

form.append(opac);
form.append(label);

move_form = document.getElementById("movement");
move_form.style="border:solid black 2px;width:fit-content;";
move_form.style.backgroundColor = "white";
move_form.addEventListener("click", (e)=>{
  e.preventDefault();
  form.style.borderColor = "black";
  move_form.style.borderColor = "red";
})

mover_w = document.createElement("button");
mover_w.style="position: relative;left:18.5%;";
mover_w.type="submit";
mover_w.innerHTML = "<h1 style='color:white;'>↑</h1>";

mover_s = document.createElement("button");
mover_s.type="submit";
mover_s.innerHTML = "<h1 style='color:white;'>↓</h1>";

mover_a = document.createElement("button");
mover_a.type="submit";
mover_a.innerHTML = "<h1 style='color:white;'>←</h1>";

mover_d = document.createElement("button");
mover_d.type="submit";
mover_d.innerHTML = "<h1 style='color:white;'>→</h1>";

hr = 0;
vr = 0;

UP_BORDER = -300;
RIGHT_BORDER = 500;
DOWN_BORDER = 300;
LFT_BORDER = -100;


mover_w.addEventListener("click", (e)=>{
    e.preventDefault();
    mover_w.style.backgroundColor = 'gray';
    setTimeout(() => {
      mover_w.style.backgroundColor = 'black';
    }, 100);
    if (vr>UP_BORDER/2 && vr<DOWN_BORDER/2){
      img.src="https://clipart.world/wp-content/uploads/2020/08/lovely-winnie-the-pooh-png-transparent.png";
      bckimg.src="https://i.pinimg.com/originals/1b/61/d0/1b61d0dd4f564377def21019ec340d46.jpg";
    }
    if (vr>UP_BORDER)
    {
      vr-=50;
      img.style.transform = `translateX(${hr}px) translateY(${vr}px)`;
    }
    
});
mover_a.addEventListener("click", (e)=>{
  e.preventDefault();
  mover_a.style.backgroundColor = 'gray';
  setTimeout(() => {
    mover_a.style.backgroundColor = 'black';
  }, 100);
  if (hr>LFT_BORDER)
  {
    hr-=100;
    img.style.transform = `translateX(${hr}px) translateY(${vr}px)`;  
  }
});
mover_s.addEventListener("click", (e)=>{
  e.preventDefault();
  mover_s.style.backgroundColor = 'gray';
  setTimeout(() => {
    mover_s.style.backgroundColor = 'black';
  }, 100);
  if (vr<DOWN_BORDER/2 && vr>UP_BORDER/2)
  {
    bckimg.src = "https://static.vecteezy.com/system/resources/previews/000/550/499/original/cartoon-forest-hill-landscape-vector-nature-background-illustration.jpg";
    img.src = "https://static.wikia.nocookie.net/heroes-and-villians/images/8/83/Winnie_the_Pooh.png/revision/latest?cb=20191229203055";
  }
  if (vr<DOWN_BORDER)
  {
    vr+=50;
    img.style.transform = `translateX(${hr}px) translateY(${vr}px)`;  
  }
});
mover_d.addEventListener("click", (e)=>{
  e.preventDefault();
  mover_d.style.backgroundColor = 'gray';
  setTimeout(() => {
    mover_d.style.backgroundColor = 'black';
  }, 100);
  if (hr<RIGHT_BORDER)
  {
    hr+=100;
    img.style.transform = `translateX(${hr}px) translateY(${vr}px)`;
  }
});

move_form.append(mover_w);
move_form.append(document.createElement("br"));
move_form.append(mover_a);
move_form.append(mover_s);
move_form.append(mover_d);

body.onkeydown = function(evt) {
  if (evt.key=="ArrowUp")
  {
    mover_w.style.backgroundColor = 'gray';
    setTimeout(() => {
      mover_w.style.backgroundColor = 'black';
    }, 100);
    if (vr>UP_BORDER/2 && vr<DOWN_BORDER/2){
      img.src="https://clipart.world/wp-content/uploads/2020/08/lovely-winnie-the-pooh-png-transparent.png";
      bckimg.src="https://i.pinimg.com/originals/1b/61/d0/1b61d0dd4f564377def21019ec340d46.jpg";
    }
    if (vr>UP_BORDER)
    {
      vr-=50;
      img.style.transform = `translateX(${hr}px) translateY(${vr}px)`;
    }
  }
  if (evt.key=="ArrowDown")
  {
    mover_s.style.backgroundColor = 'gray';
    setTimeout(() => {
      mover_s.style.backgroundColor = 'black';
    }, 100);
    if (vr<DOWN_BORDER/2 && vr>UP_BORDER/2)
    {
      bckimg.src = "https://static.vecteezy.com/system/resources/previews/000/550/499/original/cartoon-forest-hill-landscape-vector-nature-background-illustration.jpg";
      img.src = "https://static.wikia.nocookie.net/heroes-and-villians/images/8/83/Winnie_the_Pooh.png/revision/latest?cb=20191229203055";
    }
    if (vr<DOWN_BORDER)
    {
      vr+=50;
      img.style.transform = `translateX(${hr}px) translateY(${vr}px)`;  
    }
  }
  if (evt.key=="ArrowRight")
  {
    mover_d.style.backgroundColor = 'gray';
    setTimeout(() => {
      mover_d.style.backgroundColor = 'black';
    }, 100);
    if (hr<RIGHT_BORDER)
    {
      hr+=100;
      img.style.transform = `translateX(${hr}px) translateY(${vr}px)`;
    }
  }
  if (evt.key=="ArrowLeft")
  {
    mover_a.style.backgroundColor = 'gray';
    setTimeout(() => {
      mover_a.style.backgroundColor = 'black';
      mover_a.style.hover.backgroundColor = 'gray';
    }, 100);
    if (hr>LFT_BORDER)
    {
      hr-=100;
      img.style.transform = `translateX(${hr}px) translateY(${vr}px)`;  
    }
  }
};



box = document.createElement("div");
bckimg = document.createElement("img");
bckimg.src = "https://static.vecteezy.com/system/resources/previews/000/550/499/original/cartoon-forest-hill-landscape-vector-nature-background-illustration.jpg";
bckimg.style="width:950px;height:945px;";
box.style="position:absolute;height:945px;width:950px;border:solid black 5px;top:0%;left:31%;";
box.append(bckimg);
body.append(box);
body.append(img);
