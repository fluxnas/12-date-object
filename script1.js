// //	Exercise 1 : Find the timezones of :
// //	Anchorage (USA)
// //	Reykjavik (Iceland)
// //	Saint-Petersburg (Russia)
// // And display the date and time of these cities along with the time and date of Brussels.

// let now = new Date()
// console.log(now.toLocaleString())

// console.log(now.toLocaleString('fr-FR', { timeZone: 'US/Alaska' }))

// console.log(now.toLocaleString('fr-FR', { timeZone: 'GMT' }))

// console.log(now.toLocaleString('fr-FR', { timeZone: 'Europe/Moscow' }))
 	



// // Exercise 2 : Using timestamps, find how many days have passed since the date of your birth. 
// // Feeling old, yet?
// // Write a function to find how many days have passed since any point in time (after 1970).

// let birth = new Date('1991-08-14')
// let now = new Date()
// let jours = ( (now.getTime()) - (birth.getTime()) ) / (1000 * 60 * 60 * 24)

// console.log(parseInt(jours) + " days have passed between your birth and now")



// // Exercise 3
// // Using timestamps, find the exact time and date we will be in 80000 hours.
// // Write a function to display the time and date for any amount of hours given in the future. 
// // Create a number input for the hours and listen for keyup events, 
// // dynamically display the date in the number of hours given by the input.

// let now = new Date()
// let futureDate = getHours(80000 / (1 * 24 * 60 * 60 * 1000)

// console.log(futureDate)





// Exercise 4
// Using HTML, CSS (and javascript, of course) reproduce the following picture. 
// This should be centered both horizontaly and vertically in your page.



let time = 0
const now = new Date()
const day = document.querySelector(".date-left .day")
const date = document.querySelector(".date-left .date")
const month = document.querySelector(".date-left .month")
const year = document.querySelector(".date-left .year")
const hours = document.querySelector(".hours")
const min = document.querySelector(".date-right .min")
const sec = document.querySelector(".date-right .sec")



function refresh() {

const now = new Date()

// left
const tabDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
day.textContent = tabDay[now.getDay()]

date.textContent = now.getDate()

const tabMonth = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
month.textContent = tabMonth[now.getMonth()]

year.textContent = now.getFullYear()

//right
let nowhours = now.getHours() + " :"
hours.textContent = nowhours

let nowmin = now.getMinutes() + " :"
if (nowmin < 10) {
	min.textContent = "0" + nowmin
}
else {
	min.textContent = nowmin
}

let nowsec = now.getSeconds()
if (nowsec < 10) {
	sec.textContent = "0" + nowsec
}
else {
	sec.textContent = nowsec
}


time++

// console.log(now.toLocaleTimeString('en-US')) // 12h
// console.log(now.toLocaleTimeString('en-GB')) // 24h


}

setInterval(refresh, 1000)



hours.addEventListener("click", () => {
	hours.textContent = new Date().getHours('en-US', {hour12: false }) 
	console.log(new Date().getHours('en-US', {hour12: true }) )

})













