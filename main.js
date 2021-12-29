var images= ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/bw5W5zSK/mother.jpg" , "https://wallpaperaccess.com/full/5188641.png" , "https://i.postimg.cc/5ymDKL83/bro.jpg"];
var names = ["Fmaily Book", "My Dad (Vishal Dhadve)", "My Mother (Vrushale/Neeta Dhadve", "Me (Devesh Dhadve)", " My Brother ( Devang Dhadve)"];
var i = 1;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array);
          i = 0;
          i++
}
         

    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updateImage = [images[i]];
    "My Dad (Vishal Dhadve)"
    "My Mother (Vrushale/Neeta Dhadve"
    "Me (Devesh Dhadve)"
    "My Brother ( Devang Dhadve)"
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names[i]];
    "My Dad (Vishal Dhadve)"
    "My Mother (Vrushale/Neeta Dhadve"
    "Me (Devesh Dhadve)"
    "My Brother ( Devang Dhadve)"
    document.getElementById("family_member_images").src = updateImage;
    document.getElementById("family_member_name").innerHTML= updatedName;