"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: 
   Date:   

	
*/

/* Sets the date displayed in the event table*/ 
var thisDay = new Date("August 30, 2018");

/*Variable contains a date object that is 14 days after the date stored in the thisDay variable */ 
var endDate = new Date(thisDay.getTime() + 14*24*60*60*1000);

/* Variable contains HTML code of the event table*/ 
var tableHTML = "<table id='eventTable'><caption>Upcoming Events</caption><tr><th>Date</th><th>Event</th><th>Price</th></tr>";



/* For loop to create the table*/
for (var i = 0; i < eventDates.length; i++) {

   /* Variables storing the dates to use */ 
   var eventDate = new Date(eventDates[i]);
   var eventDay = eventDate.toDateString();
   var eventTime = eventDate.toLocaleTimeString();

   // Checks if thisDay is less than or equal to EventDate
   if (thisDay <= eventDate && eventDate <= endDate) {
   
      tableHTML += "<tr><td>" + eventDay + " @ " + eventTime +"</td><td>" + eventDescriptions[i] + "</td><td>" + eventPrices[i] +"</td></tr>";

   }

}

tableHTML += "</table>"

console.log(tableHTML);

document.getElementById("eventList").innerHTML = tableHTML;






