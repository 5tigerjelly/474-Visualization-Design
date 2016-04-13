$(function() {
	d3.csv('antibiotics_data.csv', function(error, data){
		console.log(data);

		function unpack(rows, key){
			return rows.map(function(row) { return row[key];});
		}

		//bar graph
		var data3 = [];
		$.each(data, function(object){
			var listof = data[object];
			var data4 = [{
				x: [listof['Bacteria ']],
				y: [listof['Penicilin']],
				type: 'bar',
				name: listof['Bacteria ']
			}];

			data3.push(data4[0]);
		});

		//scatterplot
		var data5 = [];
		$.each(data, function(object){
			var listof = data[object];
			var data6 = [{
				x: [listof['Streptomycin']],
				y: [listof['Penicilin']],
				type: 'scatter',
				mode: 'markers',
				marker: { size: 12},
				name: listof['Bacteria ']
			}];

			data5.push(data6[0]);
		});

		//scatterplot
		var data7 = [];
		$.each(data, function(object){
			var listof = data[object];
			var data8 = [{
				x: [listof['Gram Staining ']],
				y: [listof['Neomycin']],
				type: 'bar',
				name: listof['Bacteria ']
			}];

			data7.push(data8[0]);
		});
		var layout = {barmode: 'group'};

		Plotly.plot('myDiv', data3, layout);
		Plotly.plot('myDiv2', data5);
		Plotly.plot('myDiv3', data7);
	});
});
