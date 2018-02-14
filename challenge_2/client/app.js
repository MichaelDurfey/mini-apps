var submitButton = document.getElementById('submitButton');
var textArea = document.getElementById('textArea');

class GetCSV {
  constructor(text){
    this.currentText = [];
    this.columns = [];
  }

  post(data){
    let that = this;
    $.ajax({
      type: "POST",
      url: '/',
      data: data,
      success: function (success){
        that.currentText = success;
        that.convertData();
      },
      contentType: 'application/json',
    })
  }

  convertData(current){
    current = current || JSON.parse(this.currentText);
    //iterate through each object and extract values and contruct table
      //make table row
      console.log(current);
      let headers = current.keys.slice(0, -1)
      let values = current.values.split(',');

      let people = [];
      for (let i = 0; i< values.length; i += 6){
        people.push(values.slice(i, i+6))
      }

      let headerRow = document.createElement('tr');
      headers.forEach( item => {
        let header = document.createElement('th');
        header.innerHTML = item;
        headerRow.appendChild(header);
      })
      document.getElementById('table').appendChild(headerRow)

      people.forEach( item => {
        let tr = document.createElement('tr');
        item.forEach( arr => {
          let td = document.createElement('td');
          td.innerHTML = arr;
          tr.appendChild(td)
        })
        document.getElementById('table').appendChild(tr);
      })
  } //END CONVERT DATA

} /// END CLASS

let currentCSV = new GetCSV();

submitButton.addEventListener('click', event => {
  event.preventDefault();
  let data = {
    input: event.path[1][0].value.replace(/[;]/, '')
  };
  data = JSON.stringify(data);
  currentCSV.post(data);
})
