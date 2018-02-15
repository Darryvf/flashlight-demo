document.addEventListener("DOMContentLoaded", function() {
  let flashlight = document.getElementById('flashlight')
  flashlight.classList.add('off')


  function toggleLight(event){
    console.log("toggle class coming soon", event.target)

    if (flashlight.classList.contains('off')) {
      flashlight.classList.replace('off', 'on')
      console.log('turning on')
    }
    else {
      flashlight.classList.replace('on', 'off')
      console.log('turning off')
    }
  }

  flashlight.addEventListener("click", toggleLight)

})
