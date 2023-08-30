using NetTopologySuite.Geometries;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Backend.Models;

public partial class Driving
{
    public Guid Id { get; set; }

    public Guid? RouteId { get; set; }

    public Guid? VehicleId { get; set; }

    public DateTime? Date { get; set; }

    public int? Duration { get; set; }

    [NotMapped]
    public string RouteName
    {
        get
        {
            return Route?.Name;
        }
    }

    [NotMapped]
    public Esri.Polyline RoutePolyline
    {
        get
        {
            return Route?.Polyline;
        }
    }

    public virtual ICollection<DrivingStop> DrivingStops { get; set; } = new List<DrivingStop>();

    [JsonIgnore]
    public virtual Route? Route { get; set; }

    [JsonIgnore]
    public virtual Vehicle? Vehicle { get; set; }
}
