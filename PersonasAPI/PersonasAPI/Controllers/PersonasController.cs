using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using PersonasAPI.Models;
using System.Web.Http.Cors;

namespace PersonasAPI.Controllers
{
    [EnableCors(origins: "*",headers: "*",methods: "*")]
    public class PersonasController : ApiController
    {
        private personasdbEntities db = new personasdbEntities();

        // GET: api/Personas
        public IQueryable<Persona> GetPersonas()
        {
            return db.Personas;
        }


        // POST: api/Personas
        [ResponseType(typeof(Persona))]
        public IHttpActionResult PostPersona(Persona persona)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Personas.Add(persona);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (PersonaExists(persona.IdPersoona))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = persona.IdPersoona }, persona);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PersonaExists(string id)
        {
            return db.Personas.Count(e => e.IdPersoona == id) > 0;
        }
    }
}