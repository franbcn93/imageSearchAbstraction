'use strict';

module.exports = function(app,db){
    
    var path = process.cwd();
    
    app.get('/', function(req,res){
        
        res.sendFile(path + '/public/index.html');
        
    });



    app.get('/api/latest/imagesearch', function(req,res){
        
        var array = [ ];
        
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