
const questionBox = document.querySelector('#submit');
const tf = document.getElementsByClassName('tf');
const map = document.getElementById('iframe');
const takeMeThereBtn = document.getElementById( 'take-me-there' )


questionBox.addEventListener("click", async (event) => {
  event.preventDefault();
  const question = document.querySelector('#question').value;
  if (question) {
    try {
      const res = await axios.put(`http://localhost:5005/${question}`, question);
      alert(res.data);
    } catch (err) {
      console.log( err );
      alert('Please enter a valid message to ask.')
    }
  }
});


for (let i = 0; i < tf.length; i++) {
  tf[i].addEventListener('click', async (event) => {
      const selectedOption = event.target.value;
      if ( selectedOption== 'false' )
      {
        alert('Try Again!')
      } else
      {
          alert('Correct!')
    }
  });
}

takeMeThereBtn.addEventListener('click', async (event) => {

  
  const zipcodeInput = document.getElementById('zipcode');
  const zipcode = zipcodeInput.value; 

  if (!zipcode || zipcode.length !== 5) {
    alert('Please enter a valid zipcode.');
    return;
  }

  try {
    const res = await axios.post( `http://localhost:5005/maps/${ zipcode }`, zipcode );
    if ( res )
    {
      alert( res.data )
      return;
    } 
  } catch (error) {
    console.error(error);
    alert( ` There is no lodge at this location, please try again near a Major city or enter a city instead.(less anonomous)` );
  }
});
