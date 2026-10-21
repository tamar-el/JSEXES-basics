let family = { parents: {},children: [ {name: "Ali"}, {name: "Lea"}, {name: "Mona"} ] };
 console.log("third children:",family["children"][2].name)   
 
 let allNames="";
 for(f of family.children)
 {
     allNames+=f.name;
     allNames+=" ";
 }
console.log(allNames);