(function() {
  'use strict';

  angular
    .module('WistiaApp')
    .constant('DEFAULT_STATE', '/upload')
    .constant('WISTIA_URL', 'https://upload.wistia.com/')
    .constant('WISTIA_API', 'https://api.wistia.com/v1')
    .constant('WISTIA_API_PASSWORD', '5f4ad4c906859770085fc09a0967971f28095f18beaf89b8fef9bfd1267d8969')
    .constant('WISTIA_PROJ_ID', '6m0qim6o9j');
})();