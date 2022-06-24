function printTeacher(firstName, lastName) {
    return firstName[0] + "." + lastName;
}
;
//The class should be described through an interface
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var stud1 = new StudentClass('belayneh', 'Getachew');
console.log(stud1.displayName());
