function beginning() {
    background(0);

    //mozart.play();

    greeting = createP("Choose your fate!");
    createElement("br");

    nameInput = createButton("mozart");
    //nameInput.changed(startStory);
    //nameInput.clicked(startStory)
    nameInput.mousePressed(startStory);
    bachButton = createButton("bach");
    //bachButton.changed(walkCloserToSun);
    //bachButton.clicked(walkCloserToSun);
    //bachButton.mousePressed(walkCloserToSun);
    bachButton.mousePressed(playBach);
}

function startStory() {
    greeting.hide();
    nameInput.hide();
    bachButton.hide();
    bach.stop();
    mozart.play();
    userName = createElement('h1', nameInput.value());
    title = createElement('h1','This is mozart?!?!')
    firstOption = createA("#","try to find bach..");
    createElement('br');
    secondOption = createA("#","quit");

    firstOption.mousePressed(toSun);
    secondOption.mousePressed(toHome);
}


function toSun() {
   walkToSun = true;
   userName.html(nameInput.value());

   title.html("Where is Bach?");
   firstOption.html('keep looking...');
   secondOption.html("or keep listening to mozart.. forever?");
   firstOption.mousePressed(walkCloserToSun);

}

function toHome() {
    background(h);
    firstOption.hide();
    secondOption.hide();
    //sunSlider.hide();

    bach.stop();
    if(!mozart.isPlaying()) {
      mozart.play();
    }
    
    //title.hide();
    //fill("black");
    //forever = createP('mozart forever!! (or.. reload to get back to bach..)');
    //forever.style("color","black");
    title.style("color","gray");
    title.html('mozart forever!! (reload to get Bach back)');
    title.position(100,100);
}

function walkCloserToSun() {

  // walkToSun = true;

   //nameInput.hide();
   //bachButton.hide();

   mozart.stop();

   walkToSun = false;
   walkCloser = true;

   userName.html(nameInput.value());

   title.html("Bach :)");
   firstOption.html('play again or mix');
   secondOption.html("mozart..");

   //modem.play();
   bach.play(); //?

   //mozart.play();

   sunSlider = createSlider(0, 255, 0);
   sunSlider.position(50, 600);
}

function playBach() {

  //nameInput.hide();
  bachButton.hide();

  background(h);

  mozart.stop();


  bach.play();
}
