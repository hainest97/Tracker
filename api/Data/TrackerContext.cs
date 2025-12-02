using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Entities;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{
    public class TrackerContext(DbContextOptions options) : DbContext(options)
    {
        public required DbSet<Advisor> Advisors { get; set; }
    
    }
}