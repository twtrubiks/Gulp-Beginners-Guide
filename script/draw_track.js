

//init
var mapObj = new GMaps({
	zoom:18,
	el: "#map",
	lat: 22.6134681,
	lng: 120.3041978
});

//pokemons
var pokemons = {
	pokemon1:{
		lat: 22.614189, 
		lng: 120.305586,  
		content:'2016/10/16 10:00',	  
		image:'pikachu.png',
		title:'pikachu'
	},
	pokemon2:{
		lat: 22.613889, 
		lng: 120.305586,  
		content:'2016/10/16 10:01',	  
		image:'pikachu.png',
		title:'pikachu'
	},
	pokemon3:{
		lat: 22.613789, 
		lng: 120.305286,  
		content:'2016/10/16 10:02',	  
		image:'pikachu.png',
		title:'pikachu'
	},
	pokemon4:{
		lat: 22.613789, 
		lng: 120.304886,  
		content:'2016/10/16 10:03',	  
		image:'pikachu.png',
		title:'pikachu'
	},
	pokemon5:{
		lat: 22.613589, 
		lng: 120.304586,   
		content:'2016/10/16 10:04',	  
		image:'pikachu.png',
		title:'pikachu'
	},
	pokemon6:{
		lat: 22.613589, 
		lng: 120.304086,   
		content:'2016/10/16 10:05',	  
		image:'pikachu.png',
		title:'pikachu'
	},
	pokemon7:{
		lat: 22.613489, 
		lng: 120.303886,   
		content:'2016/10/16 10:06',	  
		image:'pikachu.png',
		title:'pikachu'
	}

};



var timeout = 1;
for (var pokemon in pokemons) {	
	// 立即函式(IIFE) Immediately Invoked Function Expression
	(function(index,pokemon) {
        setTimeout(function() { 
			var img = pokemons[pokemon].image;
			var icon = {
			  url: img,
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
				 },
				animation: google.maps.Animation.DROP
			});		
		
		}, timeout * 500);
    })(timeout,pokemon);
	
	timeout++;
 }

 
 