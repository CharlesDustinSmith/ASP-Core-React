# For persistence DB migration
```sh
dotnet ef migrations add InitialCreate -s API -p Persistence
```
## Explanation for above console
> - InitialCreate is the name of the migration, Conventionally InitialCreate is normally the name for the first migration
> - -s is Start up project, which is our API 
> - -p the where your datacontext resides, which is our persistence project
>> - You may get the following error after running that command "Your startup project 'API' doesn't reference Microsoft.EntityFrameworkCore.Design. This package is required for the Entity Framework Core Tools to work. Ensure your startup project is correct, install the package, and try again." just add the following using nuget gallery 
> - To remove migration use **dotnet ef migrations remove**


# For creating a React application that uses typescript and npm
```sh
npx create-react-app client-app --use-npm --template typescript
```