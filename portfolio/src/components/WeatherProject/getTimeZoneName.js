const API_KEY_GOOGLE = 'AIzaSyDSuqL3XSii69WIQ9faPgUVwKwip1Vdb5o'

export const  getTimeZoneName = (lat, long) => {
    const x = (fetch(`https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${long}&timestamp=1374868635&sensor=false`))
    x.then(data => data.json())
    .then(d => {
        console.log('asd')
        console.log(d)
    }).catch(err => {
        console.error(err)
        });
}



