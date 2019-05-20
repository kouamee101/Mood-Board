var angryPics=["http://fmcusa.org/davidkendall/files/2018/06/ANGRY-FACE.png", "https://res.cloudinary.com/teepublic/image/private/s--L4ygbLR_--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1505793262/production/designs/1913641_1.jpg", "https://cdn.xl.thumbs.canstockphoto.com/angry-face-drawings_csp49538638.jpg"];
var happyPics=["https://www.illustratoons.com/wp-content/uploads/2019/02/Enthusiastic-lion-meditating-in-happy-mood-12050.jpg", "http://starchop.altervista.org/wp-content/uploads/2015/01/Cute-Baby-Boy-HD-Wallpaper.jpg","http://keepcalling.net/wp-content/uploads/2018/08/Screen-Shot-2018-08-29-at-14.03.44.png"];
var tiredPics=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUMvN0Tlj26JQSkFxRt1AjNDCUp0cn1JbO3QN2lg1d1o0KGYMq-w", "https://i.pinimg.com/236x/e8/d8/62/e8d8621827d1cef807d501cb3cf9c1c7--mood-swings-current-mood.jpg", "https://image.shutterstock.com/image-photo/sad-mood-businessman-sitting-mournful-450w-1088065859.jpg"];
var hungryPics=["https://www.dostor.org/upload/photo/news/233/9/500x282o/533.jpg?q=2", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ZFR8FaESgtSb0aSnRwNEZSXvCCchqs-Alnyn1VOPugrnwo1w", "http://foodmoodandmore.com/wp-content/uploads/2018/01/hungry-1080x675.jpg"];
$('button').click(function(){
    var input = $('input').val();
    $(".images").html("");
    if(input === "happy"){
        happy();
    } else if(input === "angry"){
        angry();
    }else if(input==="tired"){
        tired();
    }else if(input==="hungry"){
      hungry();
    }
});
function happy(){
         changeBackground("https://content.thriveglobal.com/wp-content/uploads/2018/04/jeygnomosyni_1-min.jpg");
        changeTextColor("yellow");
         happyPics.forEach(function(image){
             displayImage(image);
         });
}
function tired(){
        changeBackground("https://www.sleepscore.com/wp-content/uploads/2018/03/feeling-tired-2560x1280.jpg");
        changeTextColor("gray");
        tiredPics.forEach(function(image){
             displayImage(image);
         });
}
function angry(){
        changeBackground("https://blogs.oxford.anglican.org/wp-content/uploads/2017/02/anger1-1024x576.jpg");
        changeTextColor("red");
        angryPics.forEach(function(image){
             displayImage(image);
         });
}
function hungry(){
        changeBackground("https://assets.parents.com/s3fs-public/styles/nfp_1080_portrait/public/hungry-child.jpg?s6wZccXb7b6.w4eFYtyCXQvuguCPhmsN");
        changeTextColor("green");
        hungryPics.forEach(function(image){
             displayImage(image);
         });
}
function changeBackground(backgroundImage){
    $('body').css('background-image', "url("+backgroundImage+")");
}

function changeTextColor(color){
    $('body').css('color', color);
}

function displayImage(image){
    $('.images').append('<img src ='+ image + '>');

}
