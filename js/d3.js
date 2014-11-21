(function() {
	'use strict'
	$(function(d, i) {
		d3.select(".container")
			.style("opacity", 0)
			.transition().delay(function(d, i) { return 999; })
				.style("opacity", 1)
				.transition().duration(1000)
				.style("background-color", "#89C9F4")

		setTimeout(function() {
			d3.selectAll("rect")
				.style("opacity", 0)
				.transition().duration(300)
					.style("opacity", 1)
					.style("stroke", "#c3f7ff")
					.delay(function(data, i) { return i * 60 })
					.attr("style", "stroke-width:5")
				.transition().duration(500)
					.style("stroke-width", "2")
					.style("stroke", "#6482B9");

			d3.selectAll("path")
				.style("opacity", 0)
				.transition().duration(200)
					.style("opacity", 1)
					.style("stroke", "#c3f7ff")
					.delay(function(data, i) { return i * 25 })
					.attr("style", "stroke-width:5")
				.transition().duration(500)
					.style("stroke-width", "2")
					.style("stroke", "#6482B9")

			d3.selectAll("text")
				.style("opacity", 0)
				.transition().duration(200)
					.style("opacity", 1)
					.delay(function(data, i) { return i * 60 })

			d3.select("#initializer")
				.transition().duration(2000)
					.style("padding-top", "15px")
					.style("opacity", 1)
					.style("color", "#008AE6")
				.transition().duration(2000)
					.style("opacity", 0)
					.style("padding-top", "0px")	

			d3.select("#title")
				.transition().duration(2000)
					.style("padding-top", "15px")
					.style("opacity", 1)
		}, 1000);
	});
})();