# Patient Registration App

### Welcome to Patient Registration application!
This application is made for doing simple manipulations with patient database. App has several options -> you can:
  * add new patient
  * see list of all patients
  * delete patient from list
  * filter patients by doctor name

Application is built by using C#, Entity framework, Web API's for Backend part. And Angular, HTML, CSS is used for web page building.
Working with Angular first time for this project. 

### How to Install and Run project

To run this project you will need Visual Studio 2022, Visual Studio Code and database server to be installed on you machine.

Follow these steps:

1. Open PatientRegistrationApp.sln with you Visual Studio 2022.
    Packages that should be installed :
        * Microsoft.EntityFrameworkCore  
        * Microsoft.EntityFrameworkCore.SqlServer (if you work with SQL Server)  
        * Microsoft.EntityFrameworkCore.Tools  
        * Microsoft.EntityFrameworkCore.Design  
2. To open patient-registration-app with Visual Studio Code you should have node.js and npm installed, then:
    * open Visual Studio Code
    * open terminal and enter npm install -g @angular/cli
    * open patient-registration-app folder
3. Open you database and connect
4. Start project in Visual Studio Code (by pressing green arrow)
5. Start project in Visual Studio Code by entering ng serve in terminal and ctrl + click on localhost link

### How to Use project

After Patient Registration web page is running you have 3 options on the navigation bar. Click on one of them. Then click on blur button that shows up after clicking on navigation bar option. 

When click on "Add new patient" option and clicking on blue button you will see the pop-up window where you can enter needed information and save new patient to database.  

When choose "View all patients list" and then click on blue  button you will see list of all patient that are registered in database now. 
 
When click on "Search patients by doctor" option and then on blue button you will see search field and list of all patient. After entering doctor's name in seerch field you will see all patients that this doctor is treating.

### Enjoy testing my project and have a good day!
