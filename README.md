# Tracker App
## Tim Haines

This app is in essence intended to help advisors keep track of their students to help them most efficiently support them. It will allow them to see overall demographic or other statistical information about the student, but they can also assign notes to the student in the form of interventions, as they assign them during their advising sessions. The user of this app will be a advisor. The entities I will use are users (advisors), students, and interventions. The user will be able to sign up, login, view/add/edit students, and view/add/edit interventions to the student.

This project currently uses Angular and Tailwindcss

### How to run
#### Client
1. Make sure you have [Node](https://nodejs.org/en/download) installed on your machine. Verify by running `node -v` and `npm -v` in your terminal.
2. Install Angular `npm install -g @angular/cli`
3. In the terminal, navigate to the "client" folder, directly beneath the project's root folder `cd ./client`
4. Run `npm i` to install project dependencies.
5. Run `ng serve` to run the Angular application on default host.
#### Server
1. Install [.NET](https://dotnet.microsoft.com/en-us/download) onto your machine. Verify by running `dotnet --version` in your terminal.
2. Inside the "api" folder, add two files: `appsettings.json` and `appsettings.Development.json`
3. Open the `appsettings.Development.json` file. Copy the following code into the file.
```  
{
  "ConnectionStrings": {
    "DefaultConnection":"YOUR_CONNECTION_STRING"
  }
} 
```

4. `YOUR_CONNECTION_STRING` should be replaced with the connection string to your data source. If your are using MySQL, use this format `server=localhost;database=tracker;user=root;password=YOURPASSWORD`
4. To verify that you will open the server in development mode, open `launchSettings.json` in the "Properties" folder. Make sure in your "profiles", each instance has an "environmentVariables" attribute where the "ASPNETCORE_ENVIRONMENT" is set to "Development"
5. In the terminal, navigate to the "api" folder using the command `cd ./api`
6. Run `dotnet run` to start the server application

