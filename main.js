const list = {
  "create a task": "In Progress",
  "make a bed": "Done",
  "write a post": "To Do",
};


function changeStatus(taskName, statusTask) {
  list[taskName] = statusTask
};

function addTask(taskName) {
  list[taskName] = "In Progress";
};

function deleteTask(taskName) {
  delete list[taskName];
};

function showList() {
  let resTodo = `Todo:\n`;
  let resProg = "In Progress:\n";
  let resDone = "Done:\n";
  for (let k in list) {
    if (list[k] == "In Progress") {
      resProg += k + "\n";
    }
    if (list[k] == "To Do") {
      resTodo += k + "\n";
    }
    if (list[k] == "Done") {
      resDone += k + "\n";
    }
  }
  console.log(resTodo + resProg +  resDone);
}


changeStatus("write a post", "Done");

addTask('have a walk');
deleteTask('have a walk')

showList();