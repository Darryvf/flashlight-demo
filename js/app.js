document.addEventListener("DOMContentLoaded", function() {
  let flashlight = document.getElementById('flashlight')
  flashlight.classList.add('off')


  function toggleLight(event){
    console.log("toggle class coming soon", event.target)

    if (flashlight.className.match(/off/)) {
      flashlight.classList.remove('off')
      flashlight.classList.add('on')
      console.log('turning on')
    }
    else {
      flashlight.classList.remove('on')
      flashlight.classList.add('off')
      console.log('turning off')
    }
  }

  flashlight.addEventListener("click", toggleLight)

})
