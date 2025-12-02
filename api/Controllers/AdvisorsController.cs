using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Entities;
using API.Controllers;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    public class AdvisorsController(TrackerContext context) : BaseAPIController
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Advisor>>> GetAdvisors()
        {
            var users = await context.Advisors.ToListAsync();

            return Ok(users);
        }
    }
}