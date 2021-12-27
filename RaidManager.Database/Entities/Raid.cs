namespace RaidManager.Database.Entities
{
    public class Raid
    {
        public Raid()
        {
            Logs = new HashSet<Log>();
        }

        public int Id { get; set; }
        public string? Name { get; set; }
        public DateTime Date { get; set; }
        public string? LogTitle { get; set; }

        public virtual ICollection<Log> Logs { get; set; }
    }
}
