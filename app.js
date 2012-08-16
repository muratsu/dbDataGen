var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	fs = require('fs');

var dbSchema = new Schema({
	itemName		: String,
	itemCategory	: String,
	itemCompleted	: { type: Boolean, default: false },
	itemDate		: { type: Date, default: Date.now }
});

function dbPopulator(fileName) {
	//this.fileName = fileName;

	try {
		var i = 0;
  		var data = fs.readFileSync(fileName, 'ascii');

  		// while(data[i] !== ] ) {
  		// }

  		this.data = data;
	}
	catch (err) {
  		console.error("There was an error opening the file:");
  		console.log(err);
	}
} 

dbPopulator.prototype = {
	print: function() {
		for (var i = this.data.length - 1; i >= 0; i--) {
			console.log(this.data[i]);
		};
		//console.log(this.data);
	}
}

// Create reader
var mydbPopulator = new dbPopulator("data/Country.txt");
mydbPopulator.print();


/*
// Connect to mongoose
mongoose.connect("mongodb://localhost/test");



TaskList.prototype = {
  showTasks: function(req, res) {
    task.find({itemCompleted: false}, function foundTasks(err, items) {
      res.render('index',{title: 'My ToDo List ', tasks: items})
    });
  },


  addTask: function(req,res) {
    var item = req.body.item;
    newTask = new task();
    newTask.itemName = item.name;
    newTask.itemCategory = item.category;
    newTask.save(function savedTask(err){
      if(err) {
        throw err;
      }
    });
    res.redirect('index');
  },


  completeTask: function(req,res) {
    var completedTasks = req.body;
    for(taskId in completedTasks) {
      if(completedTasks[taskId]=='true') {
        var conditions = { _id: taskId };
        var updates = { itemCompleted: completedTasks[taskId] };
        task.update(conditions, updates, function updatedTask(err) {
          if(err) {
            throw err;
          }
        });
      }
    }
    res.redirect('index');
  }
}

*/