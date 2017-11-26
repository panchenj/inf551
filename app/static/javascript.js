$(document).ready(function(){

     var jsonLink = "https://movie-526a6.firebaseio.com/movies.json";
     $.getJSON(jsonLink, function(data){
         var moviebox ="";
         var cast ="";
         var image="";
         var title ="";
         var director ="";
         var duration = "";
         var introduce = "";
         var rating ="";
         var ranking ="";
             $.each(data, function(jsonLink, movies){
                 image = '<a href="http://'+this.link+' " target = "_blank"><img src= " '+this.image+' "></a>';
                 title = '<div class="title">'+this.movie_name+' </div><br>';
                 rating = '<div class="rating"> Score: ' +this.score+' </div><br>';
                 ranking= '<div class="ranking">' +this.ranking.slice(0,-1)+' </div><br>';
                 cast = '<div class="cast"> Cast:'+this.cast1+', '+this.cast2+', '+this.cast3+'</div><br>';
                 director ='<div class="director"> Director: '+this.director+'</div><br>';
                 duration = '<div class="duration"> Duration: <span class="number"> '+this.duration+' </span></div><br>';
                 introduce = '<div class="introduce"> Synopsis: '+this.introduce+'</div>';
                 moviebox += '<div class="eachbox">' +image+title+cast+duration+rating+director+introduce+ '<div class="ranking">'+ranking+'</div></div>';
         });
                 $('#imagebox').append(moviebox);

     });


     $.getJSON(jsonLink, function(data){
          var indexbox ="";
          var cast ="";
          var image="";
          var title ="";
          var director ="";
          var rating ="";
             $.each(data.slice(0,6), function(jsonLink, movies){
                 image = '<a href="http://'+this.link+' " target = "_blank"><img src= " '+this.image+' "></a>';
                 title = '<p class="title">'+this.movie_name+' </p><br>';
                 rating = '<p class="rating"> Score: ' +this.score+' </p><br>';
                 cast = '<p class="cast"> Cast:'+this.cast1+', '+this.cast2+', '+this.cast3+'</p><br>';
                 director ='<p class="director"> Director: '+this.director+'</p><br>';
                 indexbox += '<div class="slideshow">' +image+title+cast+director+rating+ '</div>';
             });
                 $('.indexbox').append(indexbox);
                 $('.indexbox').owlCarousel({
                      nav: true,
                      dot: true,
                      navText: ['&#xab;','&#xbb'],
                      autoplay: true,
                      autoplayTimeout:2000,
                      loop: true,
                      responsive:{

                          0:{
                              items:1
                            },
                          600:{
                              items:2
                            },
                          1000:{
                              items:2
                            }
                       }
                    });
          });

    $('.moviebox').owlCarousel({
                      dot: true,
                      autoplay: true,
                      autoplayTimeout:3000,
                      loop: true,
                       responsive:{

                          0:{
                              items:1
                            }

                       }
                    });
});