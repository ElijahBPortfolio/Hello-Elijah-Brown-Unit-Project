let birdPictures = ["https://www.sciencenews.org/wp-content/uploads/2021/08/082521_cw_hummingbird_feat-1030x580.jpg", "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/221917761/1800", "https://static.scientificamerican.com/sciam/cache/file/7A715AD8-449D-4B5A-ABA2C5D92D9B5A21_source.png"];

let userPicture;

for (let birds of birdPictures) {
    $(".gallery").append("<a href=https://abcbirds.org/program/scorecard/endangered-birds target=blank>" + "<img src=" + birds + ">");
}

$(".add").click(function() {
    userPicture=$(".picture-url").val();
    birdPictures.push(userPicture);
    $(".gallery").append("<img src=" + userPicture + ">");
});