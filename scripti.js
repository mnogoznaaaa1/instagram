let post = document.getElementById("post1"); 
let postsBox = document.getElementById("allposts") 
 
let imgurls = [ 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg/250px-Cristiano_Ronaldo_playing_for_Al_Nassr_FC_against_Persepolis%2C_September_2023_%28cropped%29.jpg", 
    "https://ss.sport-express.ru/userfiles/materials/200/2009442/full.jpg", 
    "https://vesti.kz/userdata/news/2024/news_341446/crop_b/photo_210202.jpg", 
    "https://img.gazeta.ru/files3/832/17347832/86-pic_32ratio_1200x800-1200x800-22045.jpg" 
] 
for(let i = 0; i < 100; i++){ 
    newpost = post.cloneNode(true); 
    imgpost = newpost.getElementsByClassName("postImg")[0] 
    imgpost.setAttribute("src", imgurls[i%4]) 
 
    postsBox.appendChild(newpost); 
}