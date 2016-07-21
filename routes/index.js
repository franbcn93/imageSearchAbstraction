'use strict';

module.exports = function(app,db){
    
    var array = [ ];

    
    app.get('/api/latest/imagesearch', function(req,res){
        
        var collection = db.collection('imagequeries');
        
        var cursor = collection.find().limit(10).sort({_id: -1});
        
        cursor.forEach(function(doc){
            
            
            var lastQuery = {
                
                "term" : doc.term,
                "time" : doc.time
                
            }
            
            
            array.push(lastQuery);
            
            if(array.length === 10){
                
                res.send(array);
                
            }
            
        });
    
        
        
    });
    
    
}