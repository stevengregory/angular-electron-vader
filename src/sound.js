(() => {
  const sound = new Audio('./sounds/nooo.mp3');
  sound.oncanplay = () => {
    sound.play();
  };
})();