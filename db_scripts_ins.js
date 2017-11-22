var names = ["June Brown","Victor Hunter","Shannon Boyd","Colleen Vaughn","Morris Baldwin","Jeffery Banks","Vivian Bass","Bobby Lopez","Russell Luna","Taylor Beck","Jenna Price","Shelley Waters","Van Little","Kyle Mclaughlin","Blake Robinson","Tomas Cummings","Bridget Hardy","Gustavo Chapman","Jared Bryan","Kate Gray","Lynne Ryan","Lucy Byrd","Marguerite Bennett","Dennis Perez","Gregg Higgins","Krystal Johnston","Chris Berry","Kay Dunn","Paula Long","Winston Hodges","Aaron Edwards","Inez Holmes","Emma Burgess","Felicia Chambers","Johnnie Daniel","Harry Owens","Cindy Sparks","Lee Goodwin","Rudolph Vega","Tonya Campbell","Kristopher Osborne","Latoya Neal","Kara Williamson","Wallace Briggs","Felipe Rice","Sidney Harper","Wilma Kim","Janis Thompson","Andrew Myers","Lela Clarke","Timmy Marsh","Meredith Brock","Marshall Clark","Dale Nelson","Shaun Moore","Harold Olson","Alyssa Pierce","Belinda Keller","Marco Patterson","Percy King","Mandy Morris","Shawna Jacobs","Joanne Willis","Willie Black","Gerardo Duncan","Cedric Frank","Traci Carson","Emily Caldwell","Grady Houston","Eloise Richards","Kerry Soto","Elsie Gilbert","Camille Boone","Rodolfo Burns","Santiago Vargas","Kelly Weber","Gayle Norris","Luke Watson","Pat Pearson","Misty Cohen","Rochelle Murray","Sally Mendez","Kristi Lawrence","Geoffrey Hopkins","Maxine Simpson","Edna Mullins","Molly Jackson","Rex Bridges","Saul Newton","Johnny White","Herman Bates","Blanca Fitzgerald","Carlton Strickland","Nadine Floyd","Raquel Huff","Dewey Spencer","Carrie Leonard","Mercedes Montgomery","Pat Hansen","Ruby Patton"];
var IT = 30, HR = 50, Finance = 70, Sales = 100, i;
for (i=0;i < names.length; i++) {
    var dept = 'IT';
    if (i < HR && i > IT) dept = 'HR';
    else if (i < Finance && i > HR) dept = 'Finance';
    else if (i > IT) dept = 'Sales';
    db.getCollection('employee').insert({usrName: names[i], usrDept: dept, usrTitle: 'Senior Officer', authLevel: 3});
}