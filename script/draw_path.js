

//init
var mapObj = new GMaps({
	zoom:15,
	el: "#map",
	lat: 22.6134681,
	lng: 120.3041978
});

//pokemons
var pokemons = {
	pokemon1:{
		lat: 22.604189, 
		lng: 120.310286,  
		content:'<img class="circle_img" src="pikachu.png" alt="pikachu" style="border: 3px solid #FF3333">',	  
		image:'pikachu.png',
		title:'pikachu'
	},
	pokemon2:{
		lat: 22.618137, 
		lng: 120.302434, 
		content:'<img class="circle_img" src="snorlax.png" alt="snorlax" style="border: 3px solid #003C9D">',	  
		image:'snorlax.png',
		title:'snorlax'
	},
	pokemon3:{
		lat: 22.624310, 
		lng: 120.299419, 
		content:'<img class="circle_img" src="charizard.png" alt="charizard" style="border: 3px solid #D28EFF">',	  
		image:'charizard.png',
		title:'charizard'
	},
};


//circle
var circle_map={
	circle1:{
		lat: 22.615137,  
		lng: 120.305386, 
		radius:150,	//m
		color:"#FF3333",
	},
	circle2:{
		lat: 22.615537,
		lng: 120.302434, 
		radius:100,	//m   
		color:"#003C9D",
	},
	circle3:{
		lat: 22.614310, 
		lng: 120.297419, 
		radius:250,	//m
		color:"#D28EFF",
	},
	
};


//path
var paths={
	path1:{
		circle_lat:circle_map["circle1"].lat,
		circle_lng:circle_map["circle1"].lng,
		pokemon_lat:pokemons["pokemon1"].lat, 
		pokemon_lng:pokemons["pokemon1"].lng,  
		color:circle_map["circle1"].color,
	},
	path2:{
		circle_lat:circle_map["circle2"].lat,
		circle_lng:circle_map["circle2"].lng,
		pokemon_lat:pokemons["pokemon2"].lat, 
		pokemon_lng:pokemons["pokemon2"].lng,  
		color:circle_map["circle2"].color,
	},
	path3:{
		circle_lat:circle_map["circle3"].lat,
		circle_lng:circle_map["circle3"].lng,
		pokemon_lat:pokemons["pokemon3"].lat, 
		pokemon_lng:pokemons["pokemon3"].lng,  
		color:circle_map["circle3"].color,
	},
	
}

	
				
for (var pokemon in pokemons) {	
	var img = pokemons[pokemon].image;
	var icon = {
	  url: img,
	  //anchor: new google.maps.Point(40, 45),
	  scaledSize: new google.maps.Size(80, 80) 
	};

	// Create marker
	mapObj.addMarker({
		lat: pokemons[pokemon].lat,
		lng: pokemons[pokemon].lng,
		title: pokemons[pokemon].title,
		icon:icon,
		infoWindow: {
			content: pokemons[pokemon].content,
		},
		click: function(e) {
			console.log("you click:"+pokemons[pokemon].title);
		 }
	});	
}
 
 
//circle
for (var circle in circle_map) {
	mapObj.drawCircle({
	  strokeColor: circle_map[circle].color,
	  strokeOpacity: 0.8, 
	  strokeWeight: 4,
	  fillColor: circle_map[circle].color, 
	  fillOpacity: 0.35,	  
	  lat: circle_map[circle].lat,
	  lng: circle_map[circle].lng,
	  radius: circle_map[circle].radius,
	});
	}

 
//path
for (var path in paths) {
	var polyline = [
		[ paths[path].circle_lat, paths[path].circle_lng ],
		[ paths[path].pokemon_lat, paths[path].pokemon_lng ],
	];
	mapObj.drawPolyline({
	  path: polyline,
	  strokeColor: paths[path].color,
	  strokeOpacity: 1.0,
	  strokeWeight: 3.5,
	});
}
	