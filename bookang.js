(function(){
var app = angular.module('library', [ ]);
app.controller('LibeController',function($scope){
$scope.books=booksArr;
$scope.newBook={};
var seq = 0;
var mt = moment().format('dddd MMMM Do YYYY');
document.getElementById("dt").innerHTML = mt.toString();

$scope.addBook=function(){
	
	if (currentInd > 0)
	{
		$scope.newBook.edit=true;
		$scope.newBook.fDelete=true;
		booksArr[currentInd] = $scope.newBook;
	}
	else	
	{
		$scope.newBook.edit=true;
		$scope.newBook.fDelete=true;
		booksArr.push($scope.newBook);
	
	}
	$scope.books=booksArr;
	$scope.newBook={};
	currentInd = 0;
};

$scope.deleteBooks=function(){
	booksArr=[];
	$scope.books=booksArr;
};

$scope.deleteMe=function(index){
	booksArr.splice(index , 1);
};
$scope.editMe=function(index){
    booksArr[index].edit=false;
	currentInd=index;
	$scope.newBook.bookName = booksArr[index].bookName;
	$scope.newBook.authorName = booksArr[index].authorName;
	$scope.newBook.score = booksArr[index].score;
};


});
var currentInd=0;

/*app.controller('PannelController',function(){
this.tab=1;

this.selectTab=function(setTab){
	this.tab=setTab;
};

this.isSelected=function(checkTab){
	return this.tab ===checkTab;
};

});



app.controller('BookController',function(){
this.addBook={};

this.addBook=function(libe){
	/*this.addBook=addBook;
	this.addBook.edit=true;
	this.addBook.fDelete=true;
	/*this.book.push(this.addBook);
	libe.push(this.addBook)
	/*books.push(this.addBook);
	this.addBook={};		
};
});
*/

var booksArr = [];
/*
var booksArr = [
{
	bookName:"product1",
	bookAuthor:"safddas",
	score:6,
	edit:true,
	save:false,
	fDelete:true,
},
{
	bookName:"product1",
	bookAuthor:"safddas",
	score:6,
	edit:true,
	save:false,
	fDelete:true,	
},
{
	bookName:"product1",
	bookAuthor:"safddas",
	score:6,
	edit:true,
	save:false,	
	fDelete:true,
}];*/
})();
