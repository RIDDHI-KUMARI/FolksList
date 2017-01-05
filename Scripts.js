function FolksController($scope){
$scope.folks=[
   {first name:"Riddhi", last name: "Lal", mobile no:"1234567" ,address:"Mumbai"},
   {first name:"Alia", last name: "Kapoor", mobile no:"3788809" ,address:"New York"},
   {first name:"Kareena", last name: "Sahay", mobile no:"9499390" ,address:"Toronto"},
   {first name:"Varun", last name: "Sharma", mobile no:"1234567" ,address:"Ontario"}
         ];
}
$scope.Submit=function(){
	$scope.folks.push({first name:$scope.newPerson.first name, last name:$scope.newPerson.last name, mobile no:$scope.newPerson.mobile no,address:$scope.newPerson.address});
	}
$scope.ShowForm=function(){
	$scope.formVisibility=true;
	}
$scope.Submit = function() {

    $scope.folks.push({
       first name: $scope.newPerson.first name,
        last name: $scope.newPerson.last name,
        mobile no: $scope.newPerson.mobile no,
        address: $scope.newPerson.address
    });
    $scope.formVisibility = false;

}

