namespace Domain;

// We will refer to this as an entity. 
// Which is something that we will use to store things into
// our database.

// We will use an object relationship mapper (ORM)
// This provides us with a layer of abstraction away from
// our database. 
public class Activity
{
    public Guid Id { get; set; }
    public string Title { get; set; }
    public DateTime Date { get; set; }
    public string Description { get; set; }
    public string Category { get; set; }
    public string City { get; set; }
    public string Volume { get; set; }
}
