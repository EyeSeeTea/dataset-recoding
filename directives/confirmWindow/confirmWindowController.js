Dhis2Api.directive('confirmationWindow', function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/confirmWindow/confirmWindowView.html',
    transclude: true,
    scope: {
      key: "@",
      title: "@",
      message: "@",
      onConfirm: "&"
    }
  };
});