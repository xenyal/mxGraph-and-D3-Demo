'use strict';

//initializes graph drawer with data from json file
function documentInit(container) {
	var chart_data;
	var titleArray = [];
	var requestData = $.getJSON("https://api.myjson.com/bins/nkhd");

	requestData.done(function(json) {
		chart_data = json;
		console.log(chart_data);

		var i = 0
		for (i = 0; i < chart_data.length; i++) {
			$.each(chart_data[i], function(key, value) {
				titleArray.push(key)
				//debugger;
				/*JSON.parse(key);
				console.log("ChartData: " + chart_data[i].key + ", titleArray: " + key);*/
			});
		}
		//console.log(titleArray + ", wtf:  " + titleArray[0]);

		/*for (i = 0; i < chart_data.length; i++) {
							debugger;
			$.each(chart_data[i], function(i, val) {

				console.log(titleArray[i]);
			});
		}*/

		main(container, titleArray);
	});
}

function main(container, titleArray)
{
	console.log(container);
	// Checks if the browser is supported
	if (!mxClient.isBrowserSupported())
	{
		// Displays an error message if the browser is not supported.
		mxUtils.error('Browser is not supported!', 200, false);
	}
	else
	{
		// Disables the built-in context menu
		mxEvent.disableContextMenu(container);
			
		// Creates the graph inside the given container
		var graph = new mxGraph(container);

		// Enables rubberband selection
		new mxRubberband(graph);
				
		// Gets the default parent for inserting new cells. This
		// is normally the first child of the root (ie. layer 0).
		var parent = graph.getDefaultParent();
								
		// Adds cells to the model in a single step
		/*graph.getModel().beginUpdate();*/
		try
		{
			var v1 = graph.insertVertex(parent, "_IWID_9999", titleArray[0], 31, 240, 100, 30),
				v2 = graph.insertVertex(parent, "_IWID_2349", titleArray[1], 160, 320, 100, 30),
				v3 = graph.insertVertex(parent, "_IWID_3452", titleArray[2], 160, 160, 100, 30),
				v4 = graph.insertVertex(parent, "_IWID_4561", titleArray[3], 320, 320, 100, 30),
				v5 = graph.insertVertex(parent, "_IWID_5670", titleArray[4], 320, 160, 100, 30),
				v6 = graph.insertVertex(parent, "_IWID_6780", titleArray[5], 448, 240, 100, 30),
				v7 = graph.insertVertex(parent, "_IWID_3456", titleArray[6], 580, 240, 100, 30),
				v8 = graph.insertVertex(parent, "_IWID_3498", titleArray[7], 709, 240, 100, 30),
				v9 = graph.insertVertex(parent, "_IWID_1643", titleArray[8], 830, 240, 100, 30),
				v10 = graph.insertVertex(parent, "_IWID_5731", titleArray[9], 960, 240, 100, 30),
				v11 = graph.insertVertex(parent, "_IWID_0942", titleArray[10], 1080, 240, 100, 30),
				v12 = graph.insertVertex(parent, "_IWID_2875", titleArray[11], 1200, 240, 100, 30),
				v13 = graph.insertVertex(parent, "_IWID_9397", titleArray[12], 1325, 240, 100, 30),
				v14 = graph.insertVertex(parent, "_IWID_1118", titleArray[13], 1460, 240, 100, 30);

			var c1 = graph.insertEdge(parent, null, '', v1, v2),
				c2 = graph.insertEdge(parent, null, '', v1, v3),
				c3 = graph.insertEdge(parent, null, '', v2, v4),
				c4 = graph.insertEdge(parent, null, '', v3, v5),
				c5 = graph.insertEdge(parent, null, '', v4, v6),
				c6 = graph.insertEdge(parent, null, '', v5, v6),
				c7 = graph.insertEdge(parent, null, '', v6, v7),
				c8 = graph.insertEdge(parent, null, '', v7, v8),
				c9 = graph.insertEdge(parent, null, '', v8, v9),
				c10 = graph.insertEdge(parent, null, '', v9, v10),
				c11 = graph.insertEdge(parent, null, '', v10, v11),
				c12 = graph.insertEdge(parent, null, '', v11, v12),
				c13 = graph.insertEdge(parent, null, '', v12, v13),
				c14 = graph.insertEdge(parent, null, '', v13, v14);
		}
		catch(err) 
		{
			console.log("main error: " + err.message);
		}
		finally
		{
			// Updates the display
			graph.getModel().endUpdate();
			
			//Testing selecting individual node by variable name
			var selectedObj = graph.view.getState(v1).shape.node;
			var selectedObj2 = graph.view.getState(v7).shape.node;

				//Two tests to see if svg elements can have events to display data
					$(selectedObj).mouseover(function() {
					$("#graphContainer").append("<div class='graphFloater'>" +
						"<img src='assets/chart.jpg' alt='chart' height='100%' width='100%'>" + 
						"</div>")
					var targetX = this.firstElementChild.x.baseVal.valueInSpecifiedUnits;
					var targetY = this.firstElementChild.y.baseVal.valueInSpecifiedUnits
						graphModule.allignFloater(targetX, targetY);
						console.log("This node's coordinates: " + this.firstElementChild.x.baseVal.valueInSpecifiedUnits + ", " + this.firstElementChild.y.baseVal.valueInSpecifiedUnits);
				});

					$(selectedObj2).mouseover(function() {
					$("#graphContainer").append("<div class='graphFloater'>" +
						"<img src='assets/excel.jpg' alt='chart' height='450px' width='650px'>" +
						"</div>")
					var targetX = this.firstElementChild.x.baseVal.valueInSpecifiedUnits;
					var targetY = this.firstElementChild.y.baseVal.valueInSpecifiedUnits;
						graphModule.allignFloater(targetX, targetY);
						console.log("This node's coordinates: " + this.firstElementChild.x.baseVal.valueInSpecifiedUnits + ", " + this.firstElementChild.y.baseVal.valueInSpecifiedUnits);
				});

					$(selectedObj).mouseout(function() {
					$(".graphFloater").remove();
				});
					$(selectedObj2).mouseout(function() {
					$(".graphFloater").remove();
				});
		}
	}
};

//initializes graph onmouseover listeners
var graphModule = {
	allignFloater: function(targetX, targetY) {
		$(".graphFloater").css({"left": targetX + 80, "top": targetY - 40})
		var wat = $(".graphFloater").css("left");
		console.log("CSS Left Counter: " + wat);
	}
};

//this does nothing	
function isInteger(x) {
	return(x^0) === x;
}