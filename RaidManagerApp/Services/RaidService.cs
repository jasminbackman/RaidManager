using Microsoft.EntityFrameworkCore;
using RaidManager.Database;
using RaidManager.Database.Entities;

namespace RaidManager.App.Services
{
    public interface IRaidService
    {
        Task<List<Raid>> Get();
    }

    public class RaidService: IRaidService
    {
        private readonly RaidManagerContext _context;

        public RaidService(RaidManagerContext context)
        {
            _context = context;
        }

        public async Task<List<Raid>> Get()
        {
            return await _context.Raids.ToListAsync();
        }
    }
}
