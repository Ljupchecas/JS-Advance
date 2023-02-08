function Academy(name, students, subjects, start, end, numberOfClasses=10){
  this.name = name;
  this.students = students;
  this.subjects = subjects;
  this.start = start;
  this.end = end;
  this.numberOfClasses = numberOfClasses;
  this.printStudents = function() { // ova ne mi go cita vo konzola
    console.log(this.students);
  };
  this.printSubjects = function() { // i ova ne mi go cita vo konzola
    console.log(this.subjects);
  };
}

function Subject(title, numberOfClasses = 10, isElective, academy, students){
  this.title = title;
  this.numberOfClasses = numberOfClasses;
  this.isElective = isElective;
  this.academy = academy;
  this.students = students;
  this.overrideClasses = function(num){ // ovaa funkcija nesto ne mi ja cita if - ot ne raboti, i pomali od 3 mi raboti
    if(num >= 3){
      this.numberOfClasses = num;
    } else {
      console.log('Number of classes cannot be less than 3');
    }
  }
}
    
function Student(firstName, lastName, age, completedSubjects = [], academy=null, currentSubject=null,){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = completedSubjects;
    this.academy = academy;
    this.currentSubject = currentSubject;
    this.startAcademy = function(academy){
      this.academy = academy;
      academy.students.push(this); // vrska nemam zosto e voa vaka na google go najdov
    }
    this.startSubject = function(subject){
      if (!this.academy) {
        console.error('Student must be enrolled in an academy before starting a subject');
        return;
      }
      if (!this.academy.subjects.includes(subject)) {
        console.error('Subject is not available in the academy');
        return;
      }
      if (this.currentSubject) {
        this.completedSubjects.push(this.currentSubject);
        this.currentSubject.students = this.currentSubject.students.filter(s => s !== this);
      }
      this.currentSubject = subject;
      subject.students.push(this);
    }
}
  


let student1 = new Academy('Student1', ['Student2', 'Student3'],['JS', 'JS Advance'], '01.12.22', '31.1.23', 2);
console.log(student1);

let student2 = new Subject('Full stack', 2, 'neznam', 'SEDC', ['Student4','Student5']);
console.log(student2);

let student3 = new Student('Ljupche', 'Joldashev', 17, ['HTML', 'CSS', 'JS-Basic'], 'Programing', 'JS-Advance');
console.log(student3);

