using NetTopologySuite.Geometries;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Backend.Models;

public partial class Route
{
    public Guid Id { get; set; }

    public string Name { get; set; } = null!;

    public Guid? VehicleId { get; set; }

    [JsonIgnore]
    public Geometry Line { get; set; } = null!;

    [NotMapped]
    public Esri.Polyline Polyline { 
        get 
        {
            if (Line is LineString line)
            {
                return new Esri.Polyline()
                {
                    Paths = new List<double[][]>() { line.Coordinates.Select(c => new double[] { c.X, c.Y }).ToArray() }
                };
            }
            return null;
        } 
    }

    [JsonIgnore]
    public virtual ICollection<Driving> Drivings { get; set; } = new List<Driving>();

    public virtual ICollection<RouteStop> RouteStops { get; set; } = new List<RouteStop>();

    public virtual Vehicle? Vehicle { get; set; }
}
