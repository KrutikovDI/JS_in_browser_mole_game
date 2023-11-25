(() => {
  let playing = true,
  activeHole = 1;

  const stop = () => playing = false,
    getHole = index => document.getElementById(`hole${index}`),
    deactivateHole = index =>
      getHole( index ).className = 'hole',
    activateHole = index =>
      getHole( index ).className = 'hole hole_has-mole',
    next = () => setTimeout(() => {
      if ( !playing ) {
        return;
      }
      deactivateHole( activeHole );
      activeHole = Math.floor( 1 + Math.random() * 9 );
      activateHole( activeHole );

      countLost = document.getElementById("lost"),
      countDead = document.getElementById("dead");
      if (Number(countDead.textContent) == 10) {
        alert("Вы победили!")
        stop()
      }
      else if (Number(countLost.textContent) == 5) {
        alert("Вы проиграли!")
        stop()
      }

      next();
    }, 1200 );
  next();
})();