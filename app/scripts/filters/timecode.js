(function() {
    function timecode() {
        return function(seconds) {
            var seconds = Number.parseFloat(seconds);
            var output = buzz.toTimer(seconds);
            
            // 600 seconds is 10 minutes
            output = (seconds >= 600) ? output : output.replace(/^./, "");
            
            return output;
        };
    }
 
    angular
        .module('blocJams')
        .filter('timecode', timecode);
})();