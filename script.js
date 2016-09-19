var isbns = [9780756404741, 9780756407919, 9780140177398, 9780316769488, 9780062225672, 9780143130154, 9780307455925, 9781501143519 ];
var url = "https://www.googleapis.com/books/v1/volumes?q=isbn:";

var source = $("#book-template").html();
var template = Handlebars.compile(source);	

for(var i = 0; i < isbns.length; i++){
	var isbn = isbns[i];

	$.get(url + isbn, function(data){

		var title = data.items[0].volumeInfo.title;
		var imgLink = data.items[0].volumeInfo.imageLinks.thumbnail;

		var book = {title: title, img: imgLink};

   	var newHTML = template(book);
		$("body").append(newHTML); 
	})
}


$("body").on("click","h1", function(){
	$(this).closest("div").remove();
});


