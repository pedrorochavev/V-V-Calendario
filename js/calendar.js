
	function leapYear(year) 
	{
		if (year % 4 == 0)
			return true;
		return false;
	}
	
	function getDays(month, year) 
	{
		var ar = new Array(12);
		ar[0] = 31;								// January
		ar[1] = (leapYear(year)) ? 29 : 28;		// February
		ar[2] = 31;								// March
		ar[3] = 30;								// April
		ar[4] = 31;								// May
		ar[5] = 30;								// June
		ar[6] = 31;								// July
		ar[7] = 31;								// August
		ar[8] = 30;								// September
		ar[9] = 31;								// October
		ar[10] = 30;							// November
		ar[11] = 31;							// December
	
		return ar[month];
	}
	
	function getMonthName(month) {
		var ar = new Array(12);
		ar[0] = "January";
		ar[1] = "February";
		ar[2] = "March";
		ar[3] = "April";
		ar[4] = "May";
		ar[5] = "June";
		ar[6] = "July";
		ar[7] = "August";
		ar[8] = "September";
		ar[9] = "October";
		ar[10] = "November";
		ar[11] = "December";
	
		return ar[month]
	}
	
	function drawCal(firstDay, lastDate, date, monthName, year, month) {

		var text = "";
		text += '<table cellspacing="4">';
		text += '<th colspan=7>';
		text += '<h2>';
		text += monthName;
		text += '</h2>';
		text += '</th>';
	
		
		var openCol = '<td class="day">';
		var closeCol = '</td>';
	
		
		text += '<tr class="diasDaSemana">';
			text += '<td>M</td>';
			text += '<td>T</td>';
			text += '<td>W</td>';
			text += '<td>T</td>';
			text += '<td>F</td>';
			text += '<td class="fds">S</td>';
			text += '<td class="fds">S</td>';
		text += '</tr>';
	
		var digit = 1;
		var curCell = 2;
	
		for (var row = 1; row <= Math.ceil((lastDate + firstDay - 1) / 7); ++row) {
			text += '<tr>';
			for (var col = 1; col <= 7; ++col) {
				if (digit > lastDate)
					break;
				if (curCell < firstDay) {
					text += '<td></td>';
					curCell++;
				} else {
					if (digit+"-"+month == date) { //hoje
						text += '<td class="day today">';
						text += digit;
						text += '</td>';
					} else
						text += '<td>' + digit + '</td>';
					digit++;
				}
			}
			text += '</tr>';
		}
		text += '</table>';
	
		return text;
	}
	
	function setCal(elem, year, month) {
		month = month - 1;
		var now = new Date();
		var monthName = getMonthName(month)
		var date = now.getDate()+"-"+now.getMonth();
		now = null;
	
		var firstDayInstance = new Date(year, month, 1);
		var firstDay = firstDayInstance.getDay();
		firstDayInstance = null;
	
		var days = getDays(month, year);
		var html = drawCal(firstDay + 1, days, date, monthName, year, month);
		
		$(elem).html(html);
	}
	