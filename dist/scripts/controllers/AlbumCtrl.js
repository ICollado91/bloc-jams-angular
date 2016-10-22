(function () {
    function AlbumCtrl() {
        this.apple = "apples bitch";
        this.albumData = albumPicasso;
    }
    
    angular
        .module('blocJams')
        .controller('AlbumCtrl', AlbumCtrl);
})();