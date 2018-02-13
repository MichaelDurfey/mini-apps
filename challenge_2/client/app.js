var submitButton = document.getElementById('submitButton');
var textArea = document.getElementById('textArea');

submitButton.addEventListener('click', event => {
  event.preventDefault();
  // console.log(event.path[1][0].value);
  let input = event.path[1][0].value;
  console.log(input, typeof input);
  $.post('/', input, function(err, data){
    if (err){
      console.log(err);
    }
    console.log('post success!!')
  })
})
