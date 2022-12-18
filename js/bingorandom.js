function initBoard() {
	$("#row1").hover(function () { $(".row1").addClass("hover"); }, function () { $(".row1").removeClass("hover"); });
	$("#row2").hover(function () { $(".row2").addClass("hover"); }, function () { $(".row2").removeClass("hover"); });
	$("#row3").hover(function () { $(".row3").addClass("hover"); }, function () { $(".row3").removeClass("hover"); });
	$("#row4").hover(function () { $(".row4").addClass("hover"); }, function () { $(".row4").removeClass("hover"); });
	$("#row5").hover(function () { $(".row5").addClass("hover"); }, function () { $(".row5").removeClass("hover"); });

	$("#col1").hover(function () { $(".col1").addClass("hover"); }, function () { $(".col1").removeClass("hover"); });
	$("#col2").hover(function () { $(".col2").addClass("hover"); }, function () { $(".col2").removeClass("hover"); });
	$("#col3").hover(function () { $(".col3").addClass("hover"); }, function () { $(".col3").removeClass("hover"); });
	$("#col4").hover(function () { $(".col4").addClass("hover"); }, function () { $(".col4").removeClass("hover"); });
	$("#col5").hover(function () { $(".col5").addClass("hover"); }, function () { $(".col5").removeClass("hover"); });

	$("#tlbr").hover(function () { $(".tlbr").addClass("hover"); }, function () { $(".tlbr").removeClass("hover"); });
	$("#bltr").hover(function () { $(".bltr").addClass("hover"); }, function () { $(".bltr").removeClass("hover"); });


	//-- Row win validation. Colors all 5 tiles in a win color if it finds 5 connected ones --//

	$("#resetCard").on('click', (function (event) {
		$(".greensquare").removeClass("greensquare")
		$(".winsquare").removeClass("winsquare")
	}))

	$(".popout").on('click', (function () {
		const lineChart = ['.row1', '.row2', '.row3', '.row4', '.row5', '.col1', '.col2', '.col3', '.col4', '.col5', '.tlbr', '.bltr']
		const line = '.' + $(this).attr("id");
		console.log(line);
		if ($(line).hasClass('redsquare')) {
			$(line).removeClass('redsquare')
			$(line).removrClass('greensquare')
			$(line).removeClass('winsquare')
		}
		else if ($(line).hasClass('greensquare') && $(line).hasClass('winsquare')) {
			$(line).removeClass('winsquare')
			$(line).removeClass('greensquare')
			$(line).addClass('redsquare')
		}
		else if ($(line).hasClass('greensquare')) {
			$(line).addClass('greensquare')
		}
		else if(!($(line).hasClass('greensquare')) && !($(line).hasClass('redsquare')) && !($(line).hasClass('winsquare'))){
			$(line).addClass('greensquare')
			$(line).addClass('winsquare')
		}
		lineChart.forEach(check => {
			const winCheck = check += "[class~='winsquare'][class~='greensquare']"
			if ($(winCheck).length === 4) {
				$(winCheck).removeClass('winsquare')
				$(winCheck).removeClass('greensquare')
				$(winCheck).addClass('redsquare')
			}
		})
		lineChart.forEach(check => {
			const query = check += "[class~='greensquare']"
			if ($(query).length === 5) {
				$(query).addClass('winsquare')
			}
		})

	}));

	$("#bingo tr td:not(.popout, .ignore)").on('click', (function () {
		const lineChart = ['.row1', '.row2', '.row3', '.row4', '.row5', '.col1', '.col2', '.col3', '.col4', '.col5', '.tlbr', '.bltr']

		if (!($(this).hasClass('winsquare')) && !($(this).hasClass('greensquare')) && !($(this).hasClass('redsquare'))) {
			$(this).toggleClass('greensquare')
		}
		else if ($(this).hasClass('winsquare')) {
			$(this).toggleClass('winsquare')
			$(this).toggleClass('greensquare')
			$(this).toggleClass('redsquare')
		}
		else if ($(this).hasClass('greensquare')) {
			$(this).toggleClass("greensquare");
			$(this).toggleClass("redsquare");
		}
		else if ($(this).hasClass('redsquare')) {
			$(this).toggleClass("redsquare");
		}
		lineChart.forEach(check => {
			const winCheck = check += "[class~='winsquare']"
			if ($(winCheck).length === 4) {
				$(winCheck).removeClass('winsquare')
			}
		})
		lineChart.forEach(check => {
			const query = check += "[class~='greensquare']"
			if ($(query).length === 5) {
				$(query).addClass('winsquare')
			}
		})
	}));
}

var bingo = function (bingoList, size, type) {
	var bingoSelected = _.shuffle(bingoListGeneric.slice(0, 15));
	switch (conferenceName) {
		case "VRChat":
			bingoSelected = _.shuffle(bingoSelected.concat(bingoListVRChat));
			break;
		case "Jackbox":
			bingoSelected = _.shuffle(bingoSelected.concat(bingoListJackbox));
			break;
		case "FNAF":
			bingoSelected = _.shuffle(bingoSelected.concat(bingoListFNAF).concat(bingoListHorror));
			break;
		case "Horror":
			bingoSelected = _.shuffle(bingoSelected.concat(bingoListHorror));
			break;
		default:
			bingoSelected = _.shuffle(bingoListGeneric);
			break;
	}

	var bingoComplete = bingoSelected.slice(0, 25);
	console.log("Final Selection = " + bingoComplete);

	$("#bingo tr td:not(.popout), #selected td").removeClass("blank redsquare greensquare winsquare");
	$("#bingo tr td:not(.popout), #selected td").addClass("blank");

	for (i = 0; i < 25; i++) {
		$('#slot' + (i + 1)).text(bingoComplete[i]);
	}

	bingoBoard = bingoList.slice(0);
	for (i = 0; i < 12; i++) {
		$('#slot' + (i + 1)).text(bingoComplete[i]);
	}
	for (i = 13; i < 25; i++) {
		$('#slot' + (i + 1)).text(bingoComplete[i - 1]);
	}

	return true;
};

// Setup
function reseedPage(mode) {
	var qSeed = "?seed=" + Math.ceil(999999 * Math.random());
	var qMode = (mode == "short" || mode == "long") ? "&mode=" + mode : "";
	window.location = qSeed + qMode;
	return false;
}

// Backwards Compatability 
var srl = { bingo: bingo };