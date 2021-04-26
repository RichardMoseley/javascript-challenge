// YOUR CODE HERE!

var form = d3.select('#form')
var tbody = d3.select('#daBody')
var butn = d3.select('#filter-btn')
var input = d3.select('#datetime')

form.on("submit", runEnter);
butn.on('click', runEnter)

data.forEach(i => {
    var trow = tbody.append('tr')
    trow.append('td').text(i.datetime)
    trow.append('td').text(i.city)
    trow.append('td').text(i.state)
    trow.append('td').text(i.country)
    trow.append('td').text(i.shape)
    trow.append('td').text(i.durationMinutes)
    trow.append('td').text(i.comments)
})

// Create the function to run for both events
function runEnter() {
    d3.event.preventDefault();
    tbody.text('')
    var filtered = data.filter(i => {
        return i.datetime == input.property("value")
    })
    filtered.forEach(i => {
        var trow = tbody.append('tr')
        trow.append('td').text(i.datetime)
        trow.append('td').text(i.city)
        trow.append('td').text(i.state)
        trow.append('td').text(i.country)
        trow.append('td').text(i.shape)
        trow.append('td').text(i.durationMinutes)
        trow.append('td').text(i.comments)
    })
}



