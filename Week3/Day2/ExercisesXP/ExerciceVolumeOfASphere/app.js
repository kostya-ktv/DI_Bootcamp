let radiusInput = document.querySelector('#radius');
let volumeInput = document.querySelector('#volume');
let buttomSubmit = document.querySelector('#submit');

buttomSubmit.addEventListener('click', (e)=>{
    e.preventDefault();
    let p = document.createElement('p');
    alert(volume_sphere());
    radiusInput.value = ""
    volumeInput.value = ""
    
})

function volume_sphere(){
  let volume = volumeInput.value;
  let radius = radiusInput.value;
  radius = Math.abs(radius);
  console.log(radius);
  volume = (4/3) * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(4);
  return volume
 }