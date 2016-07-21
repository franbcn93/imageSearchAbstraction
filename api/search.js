'use strict';

module.exports = function(app, db){
    
    console.log("using api!");
    
    var request = require('request');
    
    app.get("/api/imagesearch/:query(*)", function(req,res){
        
        var q = req.params.query;
        
        //console.log(q);
        //res.send(q);
        
        var url = 'https://www.googleapis.com/customsearch/v1' + '?key=' + process.env.CSE_API_Key + '&cx=' + process.env.CSE_ID + '&searchType=image' + '&q=' + q;
    
        console.log(url);
    
        var requestObject = {
        
            uri: url,
            method: 'GET',
            timeout: 10000
            
        };
        
        request(requestObject, function(error, response, body){
            
            
            if(error){
                
                throw(error);
                
            } else {
            
                var array = [ ];
            
                var result = JSON.parse(body); 
                var imageList = result.items;
                //res.send(imageList);
                
                console.log(imageList.length);
                
                for(var i = 0; i< imageList.length; i++){
                    
                    var image = {
                        
                        "url": imageList[i].link,
                        "snippet": imageList[i].snippet,
                        "thumbnail": imageList[i].image.thumbnailLink,
                        "context": imageList[i].displayLink
                        
                    }
                    
                    array.push(image);
                    
                    
                    
                } //for loop
                
                console.log(array);
                res.send(array);
                
            } //if, else
            
        
        }); //request     
        
        
    }); // app.get
    
    
};//module.exports