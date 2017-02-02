angular
  .module('clementine')
  .directive('imageSelectorUser', imageSelectorUser);

function imageSelectorUser(){

  const reader = new FileReader();

  return {
    restrict: 'E',
    replace: true,
    template: '<div class="form-group"><label>Image</label><input base64="usersUpdate.user.base64" type="file" accept="image/*" ngf-select/></div>',
    link($scope, element){

      reader.onload = () => {

        console.log($scope);
        $scope.usersUpdate.user.image = reader.result;
      };

      element.on('change', (e)=> {
        const file = e.target.files[0];
        // console.log(file);
        reader.readAsDataURL(file);
      });
    }
  };
}
