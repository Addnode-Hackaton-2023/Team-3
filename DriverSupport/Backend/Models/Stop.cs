using System;
using System.Collections.Generic;
using NetTopologySuite.Geometries;

namespace Backend.Models;

public partial class Stop
{
    public Guid Id { get; set; }

    public string Name { get; set; } = null!;

    public byte Type { get; set; }

    public string Address { get; set; } = null!;

    public string Contact { get; set; } = null!;

    public string Notes { get; set; } = null!;

    public byte Duration { get; set; }

    public Geometry Position { get; set; } = null!;

    public byte[]? Image { get; set; }

    public string? MovieUrl { get; set; }

    public virtual ICollection<DrivingStop> DrivingStops { get; set; } = new List<DrivingStop>();

    public virtual ICollection<RouteStop> RouteStops { get; set; } = new List<RouteStop>();
}
